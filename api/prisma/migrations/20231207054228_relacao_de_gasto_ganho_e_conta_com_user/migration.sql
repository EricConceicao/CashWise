-- AlterTable
ALTER TABLE `conta` ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `ganho` ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `gasto` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ganho` ADD CONSTRAINT `Ganho_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conta` ADD CONSTRAINT `Conta_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
