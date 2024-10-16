/*
  Warnings:

  - Added the required column `imageURL` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageURL" TEXT NOT NULL,
ADD COLUMN     "subscription" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "name" SET NOT NULL;
