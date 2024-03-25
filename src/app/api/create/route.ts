import { DBClient } from "@/app/services";
import { NextResponse } from "next/server";
import * as z from "zod";

const PostSchema = z.object({
  status: z.string().min(1, "Обязательное поле").max(100),
  text: z.string().min(1, "Обязательное поле"),
  links: z.string().min(1, "Обязательное поле"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { status, text, links } = PostSchema.parse(body);

    const db = DBClient.getInstance().prisma;

    const resumeBody = {
      create: {
        text,
        links,
      },
    };

    const newPost = await db.resumePost.create({
      data: {
        status,
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
