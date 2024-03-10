import Link from "next/link";
import Image from "next/image";
import { Colors } from "../app/theme/colors";
import { Button, buttonVariants, UserAccountNav } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header
      className={`flex flex-row item-center items-center border-b border-[${Colors.subtext}] pb-2 w-full justify-between sticky top-0 `}
    >
      <Image src="/logo_min.svg" alt="logo" width={25} height={25} priority />
      <div>
        <Button variant="link">Hello world</Button>
        <Button variant="link">Hello world</Button>
        <Button variant="link">Hello world</Button>
        <Button variant="link">Hello world</Button>
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
