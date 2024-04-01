import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("picture") as unknown as File;
  const additional = data.get("text");
  console.log(additional);

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path1 = `${path.join(process.cwd(), "/public/images")}/${file.name}`;

  await writeFile(path1, buffer);
  console.log(`open ${path1} to see the uploaded file`);

  return NextResponse.json({ success: true });
}
