"use client";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { useParams } from "next/navigation";
import Image from "next/image";

type ResumeCardProps = {
  resumes: Array<{
    id: number;
    status: string;
    name: string;
    links?: string;
    tags?: Array<string>;
    postId?: number;
    text?: string;
    picture?: string;
  }>;
};

export const ResumeCard = ({ resumes }: ResumeCardProps) => {
  const { id } = useParams();

  const resume = resumes.find((resume) => resume.id === Number(id));

  return (
    <div>
      <CardHeader className="flex flew-col gap-5">
        <div className="flex justify-between">
          <div>
            <CardTitle>{resume?.name}</CardTitle>
            <CardDescription>{resume?.status}</CardDescription>
          </div>

          {Boolean(resume.picture?.length) && (
            <Image
              src={`/${resume.picture.replace(/.*\/public\//, "")}`}
              alt="logo"
              width={250}
              height={300}
            />
          )}
        </div>
        <p className="whitespace-pre-line">{resume?.text}</p>
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={resume?.links}
        >
          {resume?.links}
        </a>
      </CardHeader>
    </div>
  );
};
