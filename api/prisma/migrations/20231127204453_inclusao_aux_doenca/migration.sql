/*
  Warnings:

  - You are about to drop the column `valor_beneficio` on the `simulacaobeneficio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `simulacaobeneficio` DROP COLUMN `valor_beneficio`,
    ADD COLUMN `valor_aposentadoria` DECIMAL(10, 2) NULL,
    ADD COLUMN `valor_auxilio_doenca` DECIMAL(10, 2) NULL;
