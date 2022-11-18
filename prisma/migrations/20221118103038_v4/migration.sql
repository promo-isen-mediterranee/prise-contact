/*
  Warnings:

  - The primary key for the `Salon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Salon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.
  - You are about to alter the column `created_at` on the `Salon` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `Salon` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT(CURRENT_TIMESTAMP(3)),
    ADD PRIMARY KEY (`id`);
