/*
  Warnings:

  - Added the required column `fonte` to the `Ganho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ganho` ADD COLUMN `fonte` VARCHAR(50) NOT NULL;
