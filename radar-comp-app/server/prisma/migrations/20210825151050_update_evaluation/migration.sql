-- DropIndex
DROP INDEX `eval_user_id` ON `evaluation`;

-- DropIndex
DROP INDEX `item_skill_id` ON `item`;

-- DropIndex
DROP INDEX `noter_item_id` ON `noter`;

-- AddForeignKey
ALTER TABLE `Evaluation` ADD FOREIGN KEY (`eval_user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Noter` ADD FOREIGN KEY (`noter_eval_id`) REFERENCES `Evaluation`(`eval_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Noter` ADD FOREIGN KEY (`noter_item_id`) REFERENCES `Item`(`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`item_skill_id`) REFERENCES `Skill`(`skill_id`) ON DELETE CASCADE ON UPDATE CASCADE;
