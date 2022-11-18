-- CreateTable
CREATE TABLE `Salon` (
    `id` INTEGER NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `formations` VARCHAR(191) NOT NULL,
    `code_postal` VARCHAR(191) NOT NULL,
    `origine` VARCHAR(191) NOT NULL,
    `origine_type` VARCHAR(191) NOT NULL,
    `telephone` INTEGER NOT NULL,
    `created_at` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
