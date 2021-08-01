-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(191) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `user_first_name` VARCHAR(191) NOT NULL,
    `user_last_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User.user_email_unique`(`user_email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Evaluation` (
    `eval_id` INTEGER NOT NULL AUTO_INCREMENT,
    `eval_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `eval_user_id` INTEGER NOT NULL,

    PRIMARY KEY (`eval_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Noter` (
    `noter_eval_id` INTEGER NOT NULL,
    `noter_item_id` INTEGER NOT NULL,
    `noter_value` INTEGER NOT NULL,

    PRIMARY KEY (`noter_eval_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Item` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_title` VARCHAR(191) NOT NULL,
    `item_skill_id` INTEGER NOT NULL,

    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `skill_id` INTEGER NOT NULL AUTO_INCREMENT,
    `skill_title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Evaluation` ADD FOREIGN KEY (`eval_user_id`) REFERENCES `User`(`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Noter` ADD FOREIGN KEY (`noter_eval_id`) REFERENCES `Evaluation`(`eval_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Noter` ADD FOREIGN KEY (`noter_item_id`) REFERENCES `Item`(`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`item_skill_id`) REFERENCES `Skill`(`skill_id`) ON DELETE CASCADE ON UPDATE CASCADE;
