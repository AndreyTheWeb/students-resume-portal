import { DBClient } from "@/app/services";

export default async function Home() {
  const db = DBClient.getInstance().prisma;
  const users = await db.user.findMany();

  return <main className={`w-full`}>123</main>;
}
