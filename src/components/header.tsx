"use client";
import Link from "next/link";
import Image from "next/image";
import { Colors } from "../app/theme/colors";
import { Button, buttonVariants } from "@/components";

export const Header = () => (
  <header
    className={`flex flex-row item-center items-center border-b border-[${Colors.subtext}] pb-2 w-full justify-between sticky top-0 `}
  >
    <Image src="/logo_min.svg" alt="logo" width={25} height={25} priority />
    <div>
      <Button variant="ghost">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
    </div>
    <div>
      <Link className={buttonVariants({ variant: "ghost" })} href={"/sign-in"}>
        Логин
      </Link>
    </div>
  </header>
);
