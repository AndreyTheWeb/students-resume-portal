type resumeType = {
  resumes: Array<{
    id: number;
    status: string;
    name: string;
    links?: string;
    tags?: Array<string>;
    faculty?: string;
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
  const tagCounts = data.resumes.reduce((acc, resume) => {
    (resume.tags || []).forEach((tag) => {
      const trimmedTag = tag.trim();
      if (trimmedTag) {
        acc.set(trimmedTag, (acc.get(trimmedTag) || 0) + 1);
      }
    });
    return acc;
  }, new Map());

  const tagsArray = Array.from(tagCounts, ([name, total]) => ({ name, total }));

  return tagsArray;
};

export const buildFaculties = (data: resumeType) => {
  const faculties = new Set(
    data.resumes
      .filter((resume) => resume.faculty?.length)
      .map((resume) => resume.faculty)
  );

  return [
    ...Array.from(faculties).map((faculty) => ({
      name: faculty,
      total: data.resumes.filter((resume) => resume.faculty === faculty).length,
    })),
  ];
};
