"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui";

export const UserAccountNav = () => (
  <Button
    variant="link"
    onClick={() =>
      signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/sign-in`,
      })
    }
  >
    Выйти
  </Button>
);
