/*
  Warnings:

  - The primary key for the `noter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `noter_id` on the `noter` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `eval_user_id` ON `evaluation`;

-- DropIndex
DROP INDEX `item_skill_id` ON `item`;

-- DropIndex
DROP INDEX `noter_eval_id` ON `noter`;

-- DropIndex
DROP INDEX `noter_item_id` ON `noter`;

-- AlterTable
ALTER TABLE `noter` DROP PRIMARY KEY,
    DROP COLUMN `noter_id`,
    ADD PRIMARY KEY (`noter_eval_id`, `noter_item_id`);

-- AddForeignKey
ALTER TABLE `Evaluation` ADD FOREIGN KEY (`eval_user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Noter` ADD FOREIGN KEY (`noter_eval_id`) REFERENCES `Evaluation`(`eval_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Noter` ADD FOREIGN KEY (`noter_item_id`) REFERENCES `Item`(`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`item_skill_id`) REFERENCES `Skill`(`skill_id`) ON DELETE CASCADE ON UPDATE CASCADE;
