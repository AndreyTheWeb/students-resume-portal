type resumeType = {
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

export const buildSummary = (data: resumeType) => {
  const statuses = new Set(data.resumes.map((resume) => resume.status));

  return [
    { name: "Общее количество", total: data.resumes.length },
    ...Array.from(statuses).map((status) => ({
      name: status,
      total: data.resumes.filter((resume) => resume.status === status).length,
    })),
  ];
};

export const buildTags = (data: resumeType) => {
  const tags = new Set(
    data.resumes.flatMap(
      (resume) => resume.tags?.map((tag) => tag.trim()) || []
    )
  );
  console.log("tags", tags);
  return [
    ...Array.from(tags).map((tag) => ({
      name: tag,
      total: data.resumes.filter((resume) => resume.tags?.includes(tag)).length,
    })),
  ];
};
