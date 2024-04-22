import Image from "next/image";
import { Colors } from "../app/theme/colors";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button, buttonVariants } from "./ui";
import { UserAccountNav } from "./user-account-nav";
import { Copyright, MessageSquare } from "lucide-react";

export const Footer = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-screen border-t border-[${Colors.subtext}] mt-5 pt-2 flex items-center justify-center bg-slate-50 bot-0 z-50">
      <footer
        className={`w-[1240px] flex flex-row item-center items-center justify-between bg-slate-50  pb-2`}
      >
        <Image src="/logo_min.svg" alt="logo" width={25} height={25} priority />
        <div className="flex gap-2 items-center">
          <MessageSquare />
          <a
            className={buttonVariants({ variant: "link" })}
            href={"https://t.me/Gospel2k"}
          >
            Telegram
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <MessageSquare />
          <a
            className={buttonVariants({ variant: "link" })}
            href={"https://vk.com/andrrry385"}
          >
            ВКонтакте
          </a>
        </div>
        <div className="flex gap-2">
          <Copyright />
          <p>Федосеев Андрей, 2024</p>
        </div>
      </footer>
    </div>
  );
};
