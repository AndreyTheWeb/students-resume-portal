import type { Metadata } from "next";
import "./globals.css";
import { Colors } from "./theme/colors";

export const metadata: Metadata = {
  title: "Resume portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div
          className={`flex min-h-screen flex-col items-center justify-between  p-4 bg-[${Colors.background}]`}
        >
          <div className="w-[1240px] h-full flex flex-col items-center justify-between">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
