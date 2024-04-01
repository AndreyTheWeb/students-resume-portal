import { DBClient } from "@/app/services";
import { authOptions } from "@/lib/auth";
import { writeFile } from "fs/promises";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import path from "path";
import * as z from "zod";

const PostSchema = z.object({
  status: z.string().min(1, "Обязательное поле").max(100),
  text: z.string().min(1, "Обязательное поле"),
  links: z.string().min(1, "Обязательное поле"),
  picture: z.any(),
});

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file: File | null = data.get("picture") as unknown as File;
    const status = data.get("status");
    const text = data.get("text");
    const links = data.get("links");
    // const body = await req.json();
    const body = { status, text, links };
    const session = await getServerSession(authOptions);
    const parsedBody = PostSchema.parse(body);

    const db = DBClient.getInstance().prisma;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path1 = `${path.join(process.cwd(), "/public/images")}/${file.name}`;

    await writeFile(path1, buffer);
    console.log(`open ${path1} to see the uploaded file`);

    const resumeBody = {
      create: {
        text: parsedBody.text,
        links: parsedBody.links,
        picture: path1,
      },
    };

    const newPost = await db.resumePost.create({
      data: {
        status: parsedBody.status,
        name: session?.user?.name || "",
        bodyText: resumeBody,
      },
    });

    return NextResponse.json(
      { newPost, message: "Запись успешно создана" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Ошибка ${error}` }, { status: 500 });
  }
}
