/*
  Warnings:

  - Made the column `data` on table `gasto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `gasto` MODIFY `data` VARCHAR(191) NOT NULL;
