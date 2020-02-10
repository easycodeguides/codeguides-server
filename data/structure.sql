-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `changes`;
CREATE TABLE `changes` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `id_file` int(11) NOT NULL,
    `id_commit` int(11) NOT NULL,
    `path` varchar(2555) NOT NULL,
    `content` mediumtext NOT NULL,
    PRIMARY KEY (`id`),
    KEY `id_file` (`id_file`),
    KEY `id_commit` (`id_commit`),
    CONSTRAINT `changes_ibfk_1` FOREIGN KEY (`id_file`) REFERENCES `files` (`id`),
    CONSTRAINT `changes_ibfk_2` FOREIGN KEY (`id_commit`) REFERENCES `commits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `content` text NOT NULL,
    `id_tutorial` int(11) NOT NULL,
    `id_commit` int(11) NOT NULL,
    `file` varchar(60) NOT NULL,
    `start_line` int(11) NOT NULL,
    `end_line` int(11) NOT NULL,
    `id_user` int(11) NOT NULL,
    `comment_date` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `id_tutorial` (`id_tutorial`),
    KEY `id_user` (`id_user`),
    KEY `id_commit` (`id_commit`),
    CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_tutorial`) REFERENCES `tutorials` (`id`),
    CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
    CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`id_commit`) REFERENCES `commits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `commits`;
CREATE TABLE `commits` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `message` varchar(2555) COLLATE utf8mb4_unicode_ci NOT NULL,
    `id_repository` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `id_repository` (`id_repository`),
    CONSTRAINT `commits_ibfk_2` FOREIGN KEY (`id_repository`) REFERENCES `repositories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `filename` varchar(255) NOT NULL,
    `created_in_commit` int(11) NOT NULL,
    `last_changed_in_commit` int(11) NOT NULL,
    `deleted_in_commit` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    KEY `id_commit` (`created_in_commit`),
    KEY `last_changed_in_commit` (`last_changed_in_commit`),
    CONSTRAINT `files_ibfk_2` FOREIGN KEY (`created_in_commit`) REFERENCES `commits` (`id`),
    CONSTRAINT `files_ibfk_3` FOREIGN KEY (`last_changed_in_commit`) REFERENCES `commits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `repositories`;
CREATE TABLE `repositories` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `location` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
    `remote_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `tutorials`;
CREATE TABLE `tutorials` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
    `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
    `subtype` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
    `id_repository` int(11) NOT NULL,
    `id_user` int(11) NOT NULL,
    `level` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
    `created` datetime NOT NULL,
    `updated` datetime NOT NULL,
    PRIMARY KEY (`id`),
    KEY `id_user` (`id_user`),
    KEY `id_repository` (`id_repository`),
    CONSTRAINT `tutorials_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
    CONSTRAINT `tutorials_ibfk_2` FOREIGN KEY (`id_repository`) REFERENCES `repositories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
    `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
    `pwd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `register_date` datetime NOT NULL,
    `role` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2020-02-09 09:58:42
