"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/search-bar";
import { Trash2 } from "lucide-react";
import { deleteResume } from "./actions";
import { useRouter } from "next/navigation";
import { $Enums } from "@prisma/client";

type ResumeBodyProps = {
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
  user: {
    id: number;
    email: string;
    name: string;
    password: string;
    role: $Enums.Role;
  } | null;
};

export const ResumeBody = ({ resumes, user }: ResumeBodyProps) => {
  const router = useRouter();
  const isAdmin = user && user.role === $Enums.Role.ADMIN;

  return (
    <div>
      <CardHeader>
        <CardTitle>Студенческие таланты</CardTitle>
        <CardDescription>
          Откройте мир креатива и достижений молодых специалистов через наше
          портфолио студентов. Инновации, таланты и потенциал – все здесь!
        </CardDescription>
      </CardHeader>

      <SearchBar />

      <div className="flex flex-col gap-10 ">
        {resumes.map((resume) => (
          <Card key={resume.id}>
            <CardHeader>
              <div className="flex justify-between ">
                <CardTitle className="hover:underline">
                  <Link href={`${resume.id}/resume`}>{resume.name}</Link>
                </CardTitle>
                {isAdmin && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      deleteResume(resume.id);
                      router.refresh();
                    }}
                  >
                    <Trash2 />
                  </Button>
                )}
              </div>
              <CardDescription>{resume.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{resume.text}</p>
            </CardContent>
            <CardFooter>
              <a
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href={resume.links}
              >
                {resume.links}
              </a>
            </CardFooter>

            <CardFooter>
              <div className="flex gap-2">
                {resume.tags!.map((tag, index) => (
                  <span
                    key={index}
                    className=" border bg-blue-500 text-slate-50 inline-flex h-8 items-center text-sm px-2 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
