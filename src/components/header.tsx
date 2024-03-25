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
    <header
      className={`flex flex-row item-center items-center border-b border-[${Colors.subtext}] pb-2 w-full justify-between sticky top-0 `}
    >
      <Image src="/logo_min.svg" alt="logo" width={25} height={25} priority />
      <div>
        <Link className={buttonVariants({ variant: "link" })} href={"/main"}>
          Главная
        </Link>
        <Link className={buttonVariants({ variant: "link" })} href={"/create"}>
          Cоздать порфолио
        </Link>
        {/* <Button variant="link">Hello world</Button>
        <Button variant="link">Hello world</Button>
        <Button variant="link">Hello world</Button> */}
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
  );
};
