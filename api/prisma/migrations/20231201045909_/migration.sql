-- CreateTable
CREATE TABLE `CoinText` (
    `id` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `found` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CoinText` ADD CONSTRAINT `CoinText_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
