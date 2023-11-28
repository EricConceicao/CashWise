-- DropForeignKey
ALTER TABLE `usericons` DROP FOREIGN KEY `UserIcons_iconId_fkey`;

-- AddForeignKey
ALTER TABLE `UserIcons` ADD CONSTRAINT `UserIcons_iconId_fkey` FOREIGN KEY (`iconId`) REFERENCES `Icon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
