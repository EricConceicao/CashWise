/*
  Warnings:

  - You are about to drop the column `snome` on the `user` table. All the data in the column will be lost.
  - Added the required column `sname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `snome`,
    ADD COLUMN `sname` VARCHAR(255) NOT NULL,
    MODIFY `photo` TEXT NULL;
