import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NotAccessLabel } from "@/components/not-access-label";

export default async function Main() {
  const session = await getServerSession(authOptions);

  return (
    <div className={"relative w-full"}>
      {!session?.user && <NotAccessLabel />}
      MAIN PAGE {session?.user?.name}
    </div>
  );
}
