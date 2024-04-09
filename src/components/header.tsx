import Link from "next/link";
import Image from "next/image";
import { Colors } from "../app/theme/colors";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { buttonVariants } from "./ui";
import { UserAccountNav } from "./user-account-nav";

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-screen border-b border-[${Colors.subtext}] py-2 flex items-center justify-center bg-slate-50 sticky top-0 z-50">
      <header
        className={`w-[1240px] flex flex-row item-center items-center justify-between bg-slate-50`}
      >
        <Image src="/logo_min.svg" alt="logo" width={25} height={25} priority />
        <div>
          <Link className={buttonVariants({ variant: "link" })} href={"/main"}>
            Главная
          </Link>
          <Link
            className={buttonVariants({ variant: "link" })}
            href={"/create"}
          >
            Cоздать порфолио
          </Link>
        </div>
        <div>
          {session?.user ? (
            <UserAccountNav />
          ) : (
            <Link
              className={buttonVariants({ variant: "link" })}
              href={"/sign-in"}
            >
              Логин
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};
