"use client";
import { SessionProvider } from "next-auth/react";

export const Provider = ({ children }: React.PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};
