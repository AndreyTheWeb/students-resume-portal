-- CreateTable
CREATE TABLE "ResumeBody" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "links" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "ResumeBody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumePost" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "ResumePost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResumeBody" ADD CONSTRAINT "ResumeBody_postId_fkey" FOREIGN KEY ("postId") REFERENCES "ResumePost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
