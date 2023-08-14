/*
  Warnings:

  - You are about to alter the column `name` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `cardText` on the `Projects` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(105)`.
  - You are about to alter the column `name` on the `Skills` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE "Projects" ALTER COLUMN "name" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "cardText" SET DATA TYPE VARCHAR(105);

-- AlterTable
ALTER TABLE "Skills" ALTER COLUMN "name" SET DATA TYPE VARCHAR(15);
