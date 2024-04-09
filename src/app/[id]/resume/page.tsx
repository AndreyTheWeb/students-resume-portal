import { DBClient } from "@/app/services";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { ResumeCard } from "./resume-card";

export default async function StudentResume() {
  const session = await getServerSession(authOptions);
  const db = DBClient.getInstance().prisma;

  const resumePost = await db.resumePost.findMany();
  const resumeBody = await db.resumeBody.findMany();
  const resumes = resumePost.map((resume) => ({
    ...resumeBody.find((body) => body.postId === resume.id),
    ...resume,
  }));

  return (
    <div className={"relative w-full"}>
      <ResumeCard resumes={resumes} />
    </div>
  );
}
