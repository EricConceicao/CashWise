/*
  Warnings:

  - You are about to drop the `conta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `periodo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `periodo` DROP FOREIGN KEY `Periodo_contaId_fkey`;

-- DropTable
DROP TABLE `conta`;

-- DropTable
DROP TABLE `periodo`;

-- CreateTable
CREATE TABLE `atualizacao_monetaria` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `mes_ano` VARCHAR(7) NOT NULL,
    `indice` DECIMAL(10, 6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SimulacaoBeneficio` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `genero` ENUM('m', 'f') NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `salario_atualizado_id` INTEGER NULL,
    `idade` INTEGER NULL,
    `tempo_contribuicao_mes` INTEGER NULL,
    `idade_aposentadoria` INTEGER NULL,
    `mes_aposentadoria` INTEGER NULL,
    `anoAposentadoria` INTEGER NULL,
    `tempo_contribuicao_pendente` INTEGER NULL,
    `simulacao_beneficio_id` INTEGER NULL,
    `valor_beneficio` DECIMAL(10, 2) NULL,

    UNIQUE INDEX `SimulacaoBeneficio_salario_atualizado_id_key`(`salario_atualizado_id`),
    UNIQUE INDEX `SimulacaoBeneficio_simulacao_beneficio_id_key`(`simulacao_beneficio_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `simulacao_periodo_trabalho` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `mes` INTEGER NOT NULL,
    `ano` INTEGER NOT NULL,
    `salario` DECIMAL(10, 2) NOT NULL,
    `mes_ano` VARCHAR(7) NOT NULL,
    `simulacao_beneficio_id` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalarioAtualizado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mes_ano` DATETIME(3) NOT NULL,
    `salario_atualizado` DOUBLE NOT NULL,
    `simulacao_beneficio_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SimulacaoBeneficio` ADD CONSTRAINT `SimulacaoBeneficio_salario_atualizado_id_fkey` FOREIGN KEY (`salario_atualizado_id`) REFERENCES `SalarioAtualizado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `simulacao_periodo_trabalho` ADD CONSTRAINT `simulacao_periodo_trabalho_simulacao_beneficio_id_fkey` FOREIGN KEY (`simulacao_beneficio_id`) REFERENCES `SimulacaoBeneficio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
