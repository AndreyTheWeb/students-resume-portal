-- AlterTable
ALTER TABLE "ResumeBody" ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
