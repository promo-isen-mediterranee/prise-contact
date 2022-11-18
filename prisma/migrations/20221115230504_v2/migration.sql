/*
  Warnings:

  - You are about to alter the column `created_at` on the `Salon` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Salon` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT(NOW());
