"use client";
import Link from "next/link";
import Image from "next/image";
import { Colors } from "./theme/colors";
import { Login } from "@mui/icons-material";
import { Button, buttonVariants } from "@/components";

export const Header = () => (
  <header
    className={`flex flex-row item-center items-center border-b border-[${Colors.subtext}] pb-2 w-full justify-between sticky top-0 `}
  >
    <Image src="/logo_min.svg" alt="logo" width={25} height={25} priority />
    {/* <div className="relative">
      <Image
        src="/logo_ellipse.svg"
        alt="logo"
        width={80}
        height={50}
        priority
        className="animate-[spin_20s_linear_infinite]"
      />
      <Image
        src="/logo_min.svg"
        alt="logo"
        width={30}
        height={25}
        priority
        className="absolute top-5 left-7"
      />
    </div> */}
    <div>
      <Button variant="ghost">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
    </div>
    <div>
      <Link
        className={buttonVariants({ variant: "ghost" })}
        href={"/users/new"}
      >
        Логин
      </Link>
    </div>
  </header>
);

// startIcon={<Login />}
