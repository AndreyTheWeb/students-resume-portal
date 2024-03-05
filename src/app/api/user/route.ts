import { DBClient } from "@/app/services";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  name: z.string().min(1, "Поле Имя обязательное").max(100),
  email: z
    .string()
    .min(1, "Заполните поле email")
    .email("Неверный формат email"),
  password: z
    .string()
    .min(1, "Заполните поле password")
    .min(8, "Password должен быть не менее 8 символов"),
  confirmPassword: z.string().min(1, "Заполните поле password"),
  role: z.enum(["ADMIN", "USER"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password, role } = userSchema.parse(body);

    //check exist email
    const db = DBClient.getInstance().prisma;
    const existingUserByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Пользователь уже существует" },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "Пользователь успешно создан" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: `Ошибка ${error}` }, { status: 500 });
  }
}
