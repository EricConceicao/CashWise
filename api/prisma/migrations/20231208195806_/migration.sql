/*
  Warnings:

  - You are about to drop the column `valor_beneficio` on the `simulacaobeneficio` table. All the data in the column will be lost.
  - Made the column `userId` on table `conta` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `ganho` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `gasto` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `conta` DROP FOREIGN KEY `Conta_userId_fkey`;

-- DropForeignKey
ALTER TABLE `ganho` DROP FOREIGN KEY `Ganho_userId_fkey`;

-- DropForeignKey
ALTER TABLE `gasto` DROP FOREIGN KEY `Gasto_userId_fkey`;

-- AlterTable
ALTER TABLE `conta` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `ganho` MODIFY `descricao` VARCHAR(255) NULL,
    MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gasto` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `simulacaobeneficio` DROP COLUMN `valor_beneficio`,
    ADD COLUMN `valor_aposentadoria` DECIMAL(10, 2) NULL,
    ADD COLUMN `valor_auxilio_doenca` DECIMAL(10, 2) NULL;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ganho` ADD CONSTRAINT `Ganho_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conta` ADD CONSTRAINT `Conta_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
