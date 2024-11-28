/*
  Warnings:

  - You are about to drop the column `isActive` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `taskDescription` on the `task` table. All the data in the column will be lost.
  - Added the required column `task` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "isActive",
DROP COLUMN "taskDescription",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "task" TEXT NOT NULL;
