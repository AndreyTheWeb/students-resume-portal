import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Main() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className={"relative w-full"}>
      {!session?.user && (
        <>
          <div
            className={
              "absolute w-full text-slate-400 text-sm font-medium ring-offset-background p-8 blur-lg bg-slate-100 h-2"
            }
          >
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </div>
          <div
            className={`inline-flex items-center justify-center relative w-full text-sm font-medium ring-offset-background p-8`}
          >
            Пожалуйста, войдите или зарегистрируйтесь
          </div>
        </>
      )}
      MAIN PAGE {session?.user?.name}
    </div>
  );
}
