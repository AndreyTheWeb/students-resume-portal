import { CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { Overview } from "./overview";
import { DBClient } from "../services";

export default async function Main() {
  const db = DBClient.getInstance().prisma;
  const resumePost = await db.resumePost.findMany();
  const resumeBody = await db.resumeBody.findMany();
  const resumes = resumePost.map((resume) => ({
    ...resumeBody.find((body) => body.postId === resume.id),
    ...resume,
  }));

  return (
    <div className={"relative w-full"}>
      <CardHeader>
        <CardTitle>Статистика</CardTitle>
        <CardDescription>Здесь собрана основная статистика</CardDescription>
      </CardHeader>

      <Overview resumes={resumes} />
    </div>
  );
}
