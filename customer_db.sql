-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2023 at 02:32 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `customer_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customermaster`
--

CREATE TABLE `customermaster` (
  `Id` int(11) NOT NULL,
  `Full_Name` varchar(130) NOT NULL,
  `Email` varchar(130) NOT NULL,
  `Phone` bigint(20) NOT NULL,
  `Address` text NOT NULL,
  `Status` varchar(50) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customermaster`
--

INSERT INTO `customermaster` (`Id`, `Full_Name`, `Email`, `Phone`, `Address`, `Status`) VALUES
(1, 'shweta singhh', 'singhshweta5697@gmail.com', 9833649924, 'Mumbai', 'Active'),
(2, 'john', 'john@gmail.com', 9833649924, 'Mumbai', 'Active'),
(3, 'shweta singh1', 'singhshweta56972gmail.com', 9833649923, 'mumbai', 'Inactive'),
(4, 'john2', 'john2@gmail.com', 9833994422, 'john2@gmail.com', 'Active'),
(5, 'dasd', 'asda@gmail.com', 9844994422, 'mumbai', 'Inactive'),
(6, 'qwerty', 'qwerty@gmail.com', 9004422845, 'Thane', 'Inactive');

-- --------------------------------------------------------

--
-- Table structure for table `usermaster`
--

CREATE TABLE `usermaster` (
  `Id` int(11) NOT NULL,
  `User_Name` varchar(130) NOT NULL,
  `Password` varchar(130) NOT NULL,
  `User_Type` varchar(50) NOT NULL COMMENT 'Superadmin, Admin, User',
  `Status` varchar(50) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usermaster`
--

INSERT INTO `usermaster` (`Id`, `User_Name`, `Password`, `User_Type`, `Status`) VALUES
(1, 'superadmin', 'Superadmin@123', 'Superadmin', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customermaster`
--
ALTER TABLE `customermaster`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `usermaster`
--
ALTER TABLE `usermaster`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customermaster`
--
ALTER TABLE `customermaster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usermaster`
--
ALTER TABLE `usermaster`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
