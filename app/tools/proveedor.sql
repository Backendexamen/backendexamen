-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 29-05-2024 a las 14:23:53
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proveedor`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_eliminarproveedor` (IN `p_id` INT(10))   BEGIN
DELETE FROM proveedor 
WHERE id = p_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_insertarproveedor` (IN `p_nombre` VARCHAR(100), IN `p_contacto` VARCHAR(100), IN `p_empresa` VARCHAR(100))   BEGIN
INSERT INTO proveedor (nombre, contacto, empresa)
VALUES (p_nombre, p_contacto, p_empresa);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_modoficarproveedor` (IN `p_id` INT(10), IN `p_nombre` VARCHAR(100), IN `p_contacto` VARCHAR(100), IN `p_empresa` VARCHAR(100))   BEGIN
UPDATE proveedor
SET nombre=p_nombre, contacto=p_contacto, empresa=p_empresa
WHERE id=p_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mostrarproveedor` (IN `p_id` INT(10))   BEGIN
SELECT * 
FROM proveedor
WHERE id =p_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_mostrarproveedores` ()   BEGIN
SELECT * FROM proveedor;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `contacto` varchar(100) NOT NULL,
  `empresa` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
