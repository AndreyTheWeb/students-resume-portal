import { DBClient } from "@/app/services";
import { Header } from "../components/header";
import { Colors } from "./theme/colors";

export default async function Home() {
  const db = DBClient.getInstance().prisma;
  const users = await db.user.findMany();

  return (
    <main className={`w-full`}>
      <Header />
      {users.map((user) => user.email)}
    </main>
  );
}
