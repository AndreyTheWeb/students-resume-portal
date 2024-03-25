import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NewForm } from "./form";
import { NotAccessLabel } from "@/components/not-access-label";

export default async function Main() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className={"relative w-full"}>
        <NotAccessLabel />
      </div>
    );
  }

  return <NewForm />;
}
