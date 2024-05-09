import { DBClient } from "@/app/services";

export default async function Home() {
  const db = DBClient.getInstance().prisma;
  const users = await db.user.findMany();

  return (
    <main className={`w-full`}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Добро пожаловать на портал для портфолио студентов
      </h1>
      <h3 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
        Создано студентом, для студентов
      </h3>
    </main>
  );
}
