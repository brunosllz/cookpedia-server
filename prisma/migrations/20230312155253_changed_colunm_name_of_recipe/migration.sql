/*
  Warnings:

  - You are about to drop the column `title` on the `recipes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,user_id]` on the table `recipes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `recipes_title_user_id_key` ON `recipes`;

-- AlterTable
ALTER TABLE `recipes` DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `recipes_name_user_id_key` ON `recipes`(`name`, `user_id`);
