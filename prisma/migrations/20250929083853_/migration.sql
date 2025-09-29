/*
  Warnings:

  - You are about to drop the column `url` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "url",
ADD COLUMN     "live_url" TEXT,
ALTER COLUMN "thumbnail" DROP NOT NULL,
ALTER COLUMN "github" DROP NOT NULL;
