import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NotAccessLabel } from "@/components/not-access-label";
import { DBClient } from "../services";

export default async function Main() {
  const session = await getServerSession(authOptions);
  const db = DBClient.getInstance().prisma;

  const posts = db.resumePost;

  return (
    <div className={"relative w-full"}>
      {!session?.user && <NotAccessLabel />}
      MAIN PAGE {session?.user?.name}
    </div>
  );
}
