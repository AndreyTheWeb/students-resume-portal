import type { Metadata } from "next";
import "./globals.css";
import { Colors } from "./theme/colors";
import { Provider } from "@/components/provider";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

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
        <Provider>
          <div
            className={`flex min-h-screen flex-col items-center justify-between  p-4 bg-[${Colors.background}]`}
          >
            <div className="w-[1240px] h-full flex flex-col items-center justify-between">
              <Header />
              {children}
            </div>
          </div>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
