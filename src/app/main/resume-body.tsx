"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";

type ResumeBodyProps = {
  resumes: Array<{
    id: number;
    status: string;
    name: string;
    links?: string;
    postId?: number;
    text?: string;
    picture?: string;
  }>;
};

export const ResumeBody = ({ resumes }: ResumeBodyProps) => {
  console.log(123);

  return (
    <div>
      <CardHeader>
        <CardTitle>Студенческие таланты</CardTitle>
        <CardDescription>
          Откройте мир креатива и достижений молодых специалистов через наше
          портфолио студентов. Инновации, таланты и потенциал – все здесь!
        </CardDescription>
      </CardHeader>

      <div className="flex flex-col gap-10 ">
        {resumes.map((resume) => (
          <Card key={resume.id}>
            <CardHeader>
              <CardTitle>{resume.name}</CardTitle>
              <CardDescription>{resume.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{resume.text}</p>
            </CardContent>
            <CardFooter>
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href={resume.links}
              >
                {resume.links}
              </a>
            </CardFooter>
            {/* <Image
              src={resume.picture	}
              alt="logo"
              width={25}
              height={25}
              priority
            /> */}
          </Card>
        ))}
      </div>
    </div>
  );
};
