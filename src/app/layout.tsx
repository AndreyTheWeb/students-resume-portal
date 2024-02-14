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
      <body
        className={`flex min-h-screen flex-col items-center justify-between p-8 bg-[${Colors.background}]`}
      >
        <div className="w-[1240px] h-full">{children}</div>
      </body>
    </html>
  );
}

// // app/layout.js
// export default function RootLayout(props) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeRegistry options={{ key: "mui" }}>{props.children}</ThemeRegistry>
//       </body>
//     </html>
//   );
// }
