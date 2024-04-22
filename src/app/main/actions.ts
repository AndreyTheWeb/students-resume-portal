"use server";

import { DBClient } from "../services";

export const getResumes = async (query: string) => {
  const db = DBClient.getInstance().prisma;

  try {
    const resumePost = db.resumePost;
    // const resumeBody = await db.resumeBody.findMany();
    const resumes = await resumePost.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          // {
          //   phone: {
          //     contains: query,
          //     mode: "insensitive",
          //   },
          // },
        ],
      },
    });
    return resumes;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
