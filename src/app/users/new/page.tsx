import { Button, TextField, Typography } from "@mui/material";
// import { Button } from "@/app/components";
import { DBClient } from "@/app/services";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export default function NewUser() {
  async function newUser(data: FormData) {
    "use server";
    console.log(data);
    const db = DBClient.getInstance().prisma;

    const createUser = createUserSchema.parse({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
    const user = await db.user.create({
      data: createUser,
    });

    if (user) {
      revalidatePath("/");
      redirect("/");
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col items-center gap-[15px] w-1/3">
        <form
          autoComplete="off"
          className="flex flex-col items-center gap-[15px] w-full"
          action={newUser}
        >
          <Typography variant="h3">Вход</Typography>
          <TextField name="name" id="name" fullWidth required label="Имя" />
          <TextField name="email" id="email" fullWidth required label="Логин" />
          <TextField
            name="password"
            id="password"
            fullWidth
            required
            type="password"
            label="Пароль"
          />
          {/* <Button>Войти на портал</Button> */}
          <Button type="submit">Войти</Button>
        </form>
        <Typography variant="body2">Еще не зарегистированы?</Typography>
      </div>
    </div>
  );
}
