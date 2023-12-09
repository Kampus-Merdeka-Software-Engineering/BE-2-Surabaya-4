-- CreateTable
CREATE TABLE `users` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `id` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(200) NULL,
    `phone` VARCHAR(20) NULL,
    `id_destinastion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(100) NULL,
    `place_of_birth` VARCHAR(255) NULL,
    `date_of_birth` VARCHAR(255) NULL,
    `country` VARCHAR(100) NOT NULL,
    `postal_code` VARCHAR(10) NOT NULL,
    `contact_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `destination` (
    `name_hotel` VARCHAR(191) NOT NULL,
    `hotel_addres` VARCHAR(100) NOT NULL,
    `guide_name` VARCHAR(100) NOT NULL,
    `price` VARCHAR(100) NOT NULL,
    `vehicle_name` VARCHAR(100) NOT NULL,
    `destination_price` VARCHAR(100) NOT NULL,
    `police_number` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`name_hotel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_id_destinastion_fkey` FOREIGN KEY (`id_destinastion`) REFERENCES `destination`(`name_hotel`) ON DELETE RESTRICT ON UPDATE CASCADE;
