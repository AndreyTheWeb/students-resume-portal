"use client";
import { Button } from "@/app/components";
import { Typography } from "@mui/material";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div>
      <Typography variant="h1">Не удалось загрузить страницу</Typography>
      <Button>Вернуться</Button>
    </div>
  );
}
