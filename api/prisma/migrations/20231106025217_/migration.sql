/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `session` MODIFY `token` VARCHAR(200) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Session_token_key` ON `Session`(`token`);
