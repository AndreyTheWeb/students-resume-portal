import { CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { Overview } from "./overview";

export default async function Main() {
  return (
    <div className={"relative w-full"}>
      <CardHeader>
        <CardTitle>Статистика</CardTitle>
        <CardDescription>Здесь собрана основная статистика</CardDescription>
      </CardHeader>

      <Overview />
    </div>
  );
}
