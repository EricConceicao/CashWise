-- CreateTable
CREATE TABLE `Conta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `diaVencimento` INTEGER NOT NULL,
    `recorrencia` ENUM('MENSAL', 'POR_PERIODO') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Periodo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inicio` VARCHAR(7) NOT NULL,
    `fim` VARCHAR(7) NOT NULL,
    `contaId` INTEGER NOT NULL,

    UNIQUE INDEX `Periodo_contaId_key`(`contaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Periodo` ADD CONSTRAINT `Periodo_contaId_fkey` FOREIGN KEY (`contaId`) REFERENCES `Conta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
