import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { Colors } from "./theme/colors";
import { Provider } from "@/components/provider";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Resume portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ru">
        <body>
          <Provider>
            <div
              className={`flex min-h-screen flex-col items-center justify-between  px-4 py-0 bg-[${Colors.background}]`}
            >
              <div className="w-[1240px] min-h-screen flex flex-col items-center justify-between">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </Provider>
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}
