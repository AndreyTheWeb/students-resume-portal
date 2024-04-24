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

export const deleteResume = async (id: number) => {
  const db = DBClient.getInstance().prisma;

  try {
    const relatedResumeBodies = await db.resumeBody.findMany({
      where: {
        postId: id,
      },
    });

    await Promise.all(
      relatedResumeBodies.map(async (resumeBody) => {
        await db.resumeBody.delete({
          where: {
            id: resumeBody.id,
          },
        });
      })
    );

    const deletedResume = await db.resumePost.delete({
      where: {
        id,
      },
    });

    return deletedResume;
  } catch (error) {
    console.error("Error while deleting resume:", error);
    throw error;
  }
};
