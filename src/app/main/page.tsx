import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NotAccessLabel } from "@/components/not-access-label";
import { DBClient } from "../services";
import { ResumeBody } from "./resume-body";
import { getResumes } from "./actions";

export default async function Main({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const session = await getServerSession(authOptions);
  const db = DBClient.getInstance().prisma;

  const user = await db.user.findUnique({
    where: { email: session?.user?.user.email || "" },
  });

  // const resumePost = await db.resumePost.findMany();
  const resumeBody = await db.resumeBody.findMany();

  const resumePost = await getResumes(searchParams.query || "");

  const resumes = resumePost.map((resume) => ({
    ...resumeBody.find((body) => body.postId === resume.id),
    ...resume,
  }));

  return (
    <div className={"relative w-full"}>
      {!session?.user && <NotAccessLabel />}
      {/* MAIN PAGE {session?.user?.name} */}
      <ResumeBody resumes={resumes} user={user} />
    </div>
  );
}
