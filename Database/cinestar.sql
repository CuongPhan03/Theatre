-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: cinestar
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doan`
--

DROP TABLE IF EXISTS `doan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doan` (
  `ten` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `gia` decimal(10,0) DEFAULT NULL,
  `id_doan` int DEFAULT NULL,
  `diem_cong` decimal(10,0) DEFAULT NULL,
  KEY `doan_ibfk_1` (`id_doan`),
  CONSTRAINT `doan_ibfk_1` FOREIGN KEY (`id_doan`) REFERENCES `sanpham` (`id_sanpham`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doan`
--

LOCK TABLES `doan` WRITE;
/*!40000 ALTER TABLE `doan` DISABLE KEYS */;
INSERT INTO `doan` VALUES ('Bỏng ngô',35000,100,70),('Coca cola',20000,101,50),('Sprite',20000,102,50),('Lays khoai tây',15000,103,30);
/*!40000 ALTER TABLE `doan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ghe`
--

DROP TABLE IF EXISTS `ghe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ghe` (
  `ma_rap_phim` varchar(20) NOT NULL,
  `ma_so_phong` int NOT NULL,
  `ma_so_ghe` varchar(5) NOT NULL,
  `loai_ghe` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `tinh_trang_ghe` tinyint(1) DEFAULT NULL,
  `gia` decimal(10,0) DEFAULT NULL,
  `diem_cong` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`ma_rap_phim`,`ma_so_phong`,`ma_so_ghe`),
  CONSTRAINT `ghe_ibfk_1` FOREIGN KEY (`ma_rap_phim`, `ma_so_phong`) REFERENCES `phongchieu` (`ma_rap_phim`, `ma_so_phong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ghe`
--

LOCK TABLES `ghe` WRITE;
/*!40000 ALTER TABLE `ghe` DISABLE KEYS */;
INSERT INTO `ghe` VALUES ('BD',201,'A01','Thường',0,45000,80),('BD',201,'A02','Thường',0,45000,80),('BD',201,'A03','Thường',0,45000,80),('BD',201,'A04','Thường',0,45000,80),('BD',201,'A05','Thường',0,45000,80),('BD',201,'B01','Thường',0,45000,80),('BD',201,'B02','Thường',0,45000,80),('BD',201,'B03','Thường',0,45000,80),('BD',201,'B04','Thường',0,45000,80),('BD',201,'B05','Thường',0,45000,80),('BD',201,'C01','Thường',0,45000,80),('BD',201,'C02','Thường',0,45000,80),('BD',201,'C03','Thường',0,45000,80),('BD',201,'C04','Thường',0,45000,80),('BD',201,'C05','Thường',0,45000,80),('BD',201,'D01','Thường',0,45000,80),('BD',201,'D02','Thường',0,45000,80),('BD',201,'D03','Thường',0,45000,80),('BD',201,'D04','Thường',0,45000,80),('BD',201,'D05','Thường',0,45000,80),('BD',201,'E01','VIP',0,60000,100),('BD',201,'E02','VIP',0,60000,100),('BD',201,'E03','VIP',0,60000,100),('BD',201,'E04','VIP',0,60000,100),('BD',201,'E05','VIP',0,60000,100),('BD',202,'A01','Thường',0,45000,80),('BD',202,'A02','Thường',0,45000,80),('BD',202,'A03','Thường',0,45000,80),('BD',202,'A04','Thường',0,45000,80),('BD',202,'A05','Thường',0,45000,80),('BD',202,'B01','Thường',0,45000,80),('BD',202,'B02','Thường',0,45000,80),('BD',202,'B03','Thường',0,45000,80),('BD',202,'B04','Thường',0,45000,80),('BD',202,'B05','Thường',0,45000,80),('BD',202,'C01','Thường',0,45000,80),('BD',202,'C02','Thường',0,45000,80),('BD',202,'C03','Thường',0,45000,80),('BD',202,'C04','Thường',1,45000,80),('BD',202,'C05','Thường',0,45000,80),('BD',202,'D01','Thường',0,45000,80),('BD',202,'D02','Thường',0,45000,80),('BD',202,'D03','Thường',0,45000,80),('BD',202,'D04','Thường',1,45000,80),('BD',202,'D05','Thường',0,45000,80),('BD',202,'E01','VIP',0,60000,100),('BD',202,'E02','VIP',0,60000,100),('BD',202,'E03','VIP',0,60000,100),('BD',202,'E04','VIP',0,60000,100),('BD',202,'E05','VIP',1,60000,100),('DL',201,'A01','Thường',0,45000,80),('DL',201,'A02','Thường',0,45000,80),('DL',201,'A03','Thường',0,45000,80),('DL',201,'A04','Thường',0,45000,80),('DL',201,'A05','Thường',0,45000,80),('DL',201,'B01','Thường',0,45000,80),('DL',201,'B02','Thường',0,45000,80),('DL',201,'B03','Thường',0,45000,80),('DL',201,'B04','Thường',0,45000,80),('DL',201,'B05','Thường',0,45000,80),('DL',201,'C01','Thường',0,45000,80),('DL',201,'C02','Thường',0,45000,80),('DL',201,'C03','Thường',0,45000,80),('DL',201,'C04','Thường',0,45000,80),('DL',201,'C05','Thường',0,45000,80),('DL',201,'D01','Thường',0,45000,80),('DL',201,'D02','Thường',0,45000,80),('DL',201,'D03','Thường',0,45000,80),('DL',201,'D04','Thường',0,45000,80),('DL',201,'D05','Thường',0,45000,80),('DL',201,'E01','VIP',0,60000,100),('DL',201,'E02','VIP',0,60000,100),('DL',201,'E03','VIP',0,60000,100),('DL',201,'E04','VIP',0,60000,100),('DL',201,'E05','VIP',0,60000,100),('DL',202,'A01','Thường',0,45000,80),('DL',202,'A02','Thường',0,45000,80),('DL',202,'A03','Thường',0,45000,80),('DL',202,'A04','Thường',0,45000,80),('DL',202,'A05','Thường',0,45000,80),('DL',202,'B01','Thường',0,45000,80),('DL',202,'B02','Thường',0,45000,80),('DL',202,'B03','Thường',0,45000,80),('DL',202,'B04','Thường',0,45000,80),('DL',202,'B05','Thường',0,45000,80),('DL',202,'C01','Thường',0,45000,80),('DL',202,'C02','Thường',0,45000,80),('DL',202,'C03','Thường',0,45000,80),('DL',202,'C04','Thường',0,45000,80),('DL',202,'C05','Thường',0,45000,80),('DL',202,'D01','Thường',0,45000,80),('DL',202,'D02','Thường',0,45000,80),('DL',202,'D03','Thường',0,45000,80),('DL',202,'D04','Thường',0,45000,80),('DL',202,'D05','Thường',0,45000,80),('DL',202,'E01','VIP',0,60000,100),('DL',202,'E02','VIP',0,60000,100),('DL',202,'E03','VIP',0,60000,100),('DL',202,'E04','VIP',0,60000,100),('DL',202,'E05','VIP',0,60000,100),('HCM',201,'A01','Thường',0,45000,80),('HCM',201,'A02','Thường',0,45000,80),('HCM',201,'A03','Thường',0,45000,80),('HCM',201,'A04','Thường',0,45000,80),('HCM',201,'A05','Thường',0,45000,80),('HCM',201,'B01','Thường',0,45000,80),('HCM',201,'B02','Thường',0,45000,80),('HCM',201,'B03','Thường',0,45000,80),('HCM',201,'B04','Thường',0,45000,80),('HCM',201,'B05','Thường',0,45000,80),('HCM',201,'C01','Thường',0,45000,80),('HCM',201,'C02','Thường',0,45000,80),('HCM',201,'C03','Thường',0,45000,80),('HCM',201,'C04','Thường',0,45000,80),('HCM',201,'C05','Thường',0,45000,80),('HCM',201,'D01','Thường',0,45000,80),('HCM',201,'D02','Thường',0,45000,80),('HCM',201,'D03','Thường',0,45000,80),('HCM',201,'D04','Thường',0,45000,80),('HCM',201,'D05','Thường',0,45000,80),('HCM',201,'E01','VIP',0,60000,100),('HCM',201,'E02','VIP',0,60000,100),('HCM',201,'E03','VIP',0,60000,100),('HCM',201,'E04','VIP',0,60000,100),('HCM',201,'E05','VIP',0,60000,100),('HCM',202,'A01','Thường',0,45000,80),('HCM',202,'A02','Thường',0,45000,80),('HCM',202,'A03','Thường',0,45000,80),('HCM',202,'A04','Thường',0,45000,80),('HCM',202,'A05','Thường',0,45000,80),('HCM',202,'B01','Thường',0,45000,80),('HCM',202,'B02','Thường',0,45000,80),('HCM',202,'B03','Thường',0,45000,80),('HCM',202,'B04','Thường',0,45000,80),('HCM',202,'B05','Thường',0,45000,80),('HCM',202,'C01','Thường',0,45000,80),('HCM',202,'C02','Thường',0,45000,80),('HCM',202,'C03','Thường',0,45000,80),('HCM',202,'C04','Thường',0,45000,80),('HCM',202,'C05','Thường',0,45000,80),('HCM',202,'D01','Thường',0,45000,80),('HCM',202,'D02','Thường',0,45000,80),('HCM',202,'D03','Thường',0,45000,80),('HCM',202,'D04','Thường',0,45000,80),('HCM',202,'D05','Thường',0,45000,80),('HCM',202,'E01','VIP',0,60000,100),('HCM',202,'E02','VIP',0,60000,100),('HCM',202,'E03','VIP',0,60000,100),('HCM',202,'E04','VIP',0,60000,100),('HCM',202,'E05','VIP',0,60000,100),('HCM',203,'A01','Thường',0,45000,80),('HCM',203,'A02','Thường',0,45000,80),('HCM',203,'A03','Thường',0,45000,80),('HCM',203,'A04','Thường',0,45000,80),('HCM',203,'A05','Thường',0,45000,80),('HCM',203,'B01','Thường',0,45000,80),('HCM',203,'B02','Thường',0,45000,80),('HCM',203,'B03','Thường',0,45000,80),('HCM',203,'B04','Thường',0,45000,80),('HCM',203,'B05','Thường',0,45000,80),('HCM',203,'C01','Thường',0,45000,80),('HCM',203,'C02','Thường',0,45000,80),('HCM',203,'C03','Thường',0,45000,80),('HCM',203,'C04','Thường',0,45000,80),('HCM',203,'C05','Thường',0,45000,80),('HCM',203,'D01','Thường',0,45000,80),('HCM',203,'D02','Thường',0,45000,80),('HCM',203,'D03','Thường',0,45000,80),('HCM',203,'D04','Thường',0,45000,80),('HCM',203,'D05','Thường',0,45000,80),('HCM',203,'E01','VIP',0,60000,100),('HCM',203,'E02','VIP',0,60000,100),('HCM',203,'E03','VIP',0,60000,100),('HCM',203,'E04','VIP',0,60000,100),('HCM',203,'E05','VIP',0,60000,100),('TG',201,'A01','Thường',0,45000,80),('TG',201,'A02','Thường',0,45000,80),('TG',201,'A03','Thường',0,45000,80),('TG',201,'A04','Thường',0,45000,80),('TG',201,'A05','Thường',0,45000,80),('TG',201,'B01','Thường',0,45000,80),('TG',201,'B02','Thường',0,45000,80),('TG',201,'B03','Thường',0,45000,80),('TG',201,'B04','Thường',0,45000,80),('TG',201,'B05','Thường',0,45000,80),('TG',201,'C01','Thường',0,45000,80),('TG',201,'C02','Thường',0,45000,80),('TG',201,'C03','Thường',0,45000,80),('TG',201,'C04','Thường',0,45000,80),('TG',201,'C05','Thường',0,45000,80),('TG',201,'D01','Thường',0,45000,80),('TG',201,'D02','Thường',0,45000,80),('TG',201,'D03','Thường',0,45000,80),('TG',201,'D04','Thường',0,45000,80),('TG',201,'D05','Thường',0,45000,80),('TG',201,'E01','VIP',0,60000,100),('TG',201,'E02','VIP',0,60000,100),('TG',201,'E03','VIP',0,60000,100),('TG',201,'E04','VIP',0,60000,100),('TG',201,'E05','VIP',0,60000,100),('TG',202,'A01','Thường',0,45000,80),('TG',202,'A02','Thường',0,45000,80),('TG',202,'A03','Thường',0,45000,80),('TG',202,'A04','Thường',0,45000,80),('TG',202,'A05','Thường',0,45000,80),('TG',202,'B01','Thường',0,45000,80),('TG',202,'B02','Thường',0,45000,80),('TG',202,'B03','Thường',0,45000,80),('TG',202,'B04','Thường',0,45000,80),('TG',202,'B05','Thường',0,45000,80),('TG',202,'C01','Thường',0,45000,80),('TG',202,'C02','Thường',0,45000,80),('TG',202,'C03','Thường',0,45000,80),('TG',202,'C04','Thường',0,45000,80),('TG',202,'C05','Thường',0,45000,80),('TG',202,'D01','Thường',0,45000,80),('TG',202,'D02','Thường',0,45000,80),('TG',202,'D03','Thường',0,45000,80),('TG',202,'D04','Thường',0,45000,80),('TG',202,'D05','Thường',0,45000,80),('TG',202,'E01','VIP',0,60000,100),('TG',202,'E02','VIP',0,60000,100),('TG',202,'E03','VIP',0,60000,100),('TG',202,'E04','VIP',0,60000,100),('TG',202,'E05','VIP',0,60000,100),('TTH',201,'A01','Thường',0,45000,80),('TTH',201,'A02','Thường',0,45000,80),('TTH',201,'A03','Thường',0,45000,80),('TTH',201,'A04','Thường',0,45000,80),('TTH',201,'A05','Thường',0,45000,80),('TTH',201,'B01','Thường',0,45000,80),('TTH',201,'B02','Thường',0,45000,80),('TTH',201,'B03','Thường',0,45000,80),('TTH',201,'B04','Thường',0,45000,80),('TTH',201,'B05','Thường',0,45000,80),('TTH',201,'C01','Thường',0,45000,80),('TTH',201,'C02','Thường',0,45000,80),('TTH',201,'C03','Thường',0,45000,80),('TTH',201,'C04','Thường',0,45000,80),('TTH',201,'C05','Thường',0,45000,80),('TTH',201,'D01','Thường',0,45000,80),('TTH',201,'D02','Thường',0,45000,80),('TTH',201,'D03','Thường',0,45000,80),('TTH',201,'D04','Thường',0,45000,80),('TTH',201,'D05','Thường',0,45000,80),('TTH',201,'E01','VIP',0,60000,100),('TTH',201,'E02','VIP',0,60000,100),('TTH',201,'E03','VIP',0,60000,100),('TTH',201,'E04','VIP',0,60000,100),('TTH',201,'E05','VIP',0,60000,100),('TTH',202,'A01','Thường',0,45000,80),('TTH',202,'A02','Thường',0,45000,80),('TTH',202,'A03','Thường',0,45000,80),('TTH',202,'A04','Thường',0,45000,80),('TTH',202,'A05','Thường',0,45000,80),('TTH',202,'B01','Thường',0,45000,80),('TTH',202,'B02','Thường',0,45000,80),('TTH',202,'B03','Thường',0,45000,80),('TTH',202,'B04','Thường',0,45000,80),('TTH',202,'B05','Thường',0,45000,80),('TTH',202,'C01','Thường',0,45000,80),('TTH',202,'C02','Thường',0,45000,80),('TTH',202,'C03','Thường',0,45000,80),('TTH',202,'C04','Thường',0,45000,80),('TTH',202,'C05','Thường',0,45000,80),('TTH',202,'D01','Thường',0,45000,80),('TTH',202,'D02','Thường',0,45000,80),('TTH',202,'D03','Thường',0,45000,80),('TTH',202,'D04','Thường',0,45000,80),('TTH',202,'D05','Thường',0,45000,80),('TTH',202,'E01','VIP',0,60000,100),('TTH',202,'E02','VIP',0,60000,100),('TTH',202,'E03','VIP',0,60000,100),('TTH',202,'E04','VIP',0,60000,100),('TTH',202,'E05','VIP',0,60000,100);
/*!40000 ALTER TABLE `ghe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon` (
  `ma_hoa_don` int NOT NULL AUTO_INCREMENT,
  `thoi_gian_giao_dich` time DEFAULT NULL,
  `ngay_giao_dich` date DEFAULT NULL,
  `tong_gia` decimal(10,0) DEFAULT NULL,
  `ma_khach_hang` int DEFAULT NULL,
  `ma_dot_km` varchar(20) DEFAULT NULL,
  `trang_thai` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rap_xuat` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`ma_hoa_don`),
  KEY `ma_khach_hang` (`ma_khach_hang`),
  KEY `ma_dot_km` (`ma_dot_km`),
  KEY `hoadon_ibfk_1` (`rap_xuat`),
  CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`rap_xuat`) REFERENCES `rapphim` (`ma_rap_phim`),
  CONSTRAINT `hoadon_ibfk_2` FOREIGN KEY (`ma_khach_hang`) REFERENCES `khachhang` (`ma_khach_hang`),
  CONSTRAINT `hoadon_ibfk_3` FOREIGN KEY (`ma_dot_km`) REFERENCES `khuyenmai` (`ma_dot_km`)
) ENGINE=InnoDB AUTO_INCREMENT=10181 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
INSERT INTO `hoadon` VALUES (10005,'07:30:00','2021-01-05',75000,100,NULL,'Đã thanh toán','BD'),(10006,'07:30:00','2021-01-06',45000,101,NULL,'Đã thanh toán','BD'),(10007,'07:30:00','2021-01-07',45000,102,NULL,'Đã thanh toán','BD'),(10012,'07:30:00','2021-01-06',45000,103,NULL,'Đã thanh toán','HCM'),(10013,'07:30:00','2021-01-07',60000,104,NULL,'Đã thanh toán','HCM'),(10014,'07:30:00','2021-01-08',55000,105,NULL,'Đã thanh toán','HCM'),(10015,'07:30:00','2021-01-07',72000,106,NULL,'Đã thanh toán','DL'),(10016,'07:30:00','2021-01-08',65000,107,NULL,'Đã thanh toán','DL'),(10017,'07:30:00','2021-01-09',75000,108,NULL,'Đã thanh toán','DL'),(10018,'07:30:00','2021-01-08',45000,109,NULL,'Đã thanh toán','TTH'),(10019,'07:30:00','2021-01-09',45000,110,NULL,'Đã thanh toán','TTH'),(10020,'07:30:00','2021-01-10',45000,111,NULL,'Đã thanh toán','TTH'),(10021,'07:30:00','2021-01-09',85000,112,NULL,'Đã thanh toán','TG'),(10022,'07:30:00','2021-01-10',84000,113,NULL,'Đã thanh toán','TG'),(10023,'07:30:00','2021-01-11',75000,114,NULL,'Đã thanh toán','TG'),(10024,'07:30:00','2021-05-10',55000,100,NULL,'Đã thanh toán','BD'),(10025,'07:30:00','2021-05-11',55000,101,NULL,'Đã thanh toán','BD'),(10026,'07:30:00','2021-05-12',120000,102,NULL,'Đã thanh toán','BD'),(10027,'07:30:00','2021-05-13',105000,103,NULL,'Đã thanh toán','HCM'),(10028,'07:30:00','2021-05-14',60000,104,NULL,'Đã thanh toán','HCM'),(10029,'07:30:00','2021-05-15',70000,105,NULL,'Đã thanh toán','HCM'),(10032,'07:30:00','2021-05-14',90000,106,NULL,'Đã thanh toán','DL'),(10033,'07:30:00','2021-05-15',57000,107,NULL,'Đã thanh toán','DL'),(10034,'07:30:00','2021-05-16',55000,108,NULL,'Đã thanh toán','DL'),(10035,'07:30:00','2021-05-16',55000,109,NULL,'Đã thanh toán','TTH'),(10036,'07:30:00','2021-05-17',45000,110,NULL,'Đã thanh toán','TTH'),(10037,'07:30:00','2021-05-18',70000,111,NULL,'Đã thanh toán','TTH'),(10038,'07:30:00','2021-05-18',55000,112,NULL,'Đã thanh toán','TG'),(10039,'07:30:00','2021-05-19',45000,113,NULL,'Đã thanh toán','TG'),(10040,'07:30:00','2021-05-20',45000,114,NULL,'Đã thanh toán','TG'),(10041,'07:30:00','2021-09-10',45000,100,NULL,'Đã thanh toán','BD'),(10042,'07:30:00','2021-09-11',75000,101,NULL,'Đã thanh toán','BD'),(10043,'07:30:00','2021-09-12',60000,102,NULL,'Đã thanh toán','BD'),(10044,'07:30:00','2021-09-13',69000,103,NULL,'Đã thanh toán','HCM'),(10045,'07:30:00','2021-09-14',45000,104,NULL,'Đã thanh toán','HCM'),(10046,'07:30:00','2021-09-15',105000,105,NULL,'Đã thanh toán','HCM'),(10047,'07:30:00','2021-09-14',75000,106,NULL,'Đã thanh toán','DL'),(10048,'07:30:00','2021-09-15',70000,107,NULL,'Đã thanh toán','DL'),(10049,'07:30:00','2021-09-16',70000,108,NULL,'Đã thanh toán','DL'),(10050,'07:30:00','2021-09-15',57000,109,NULL,'Đã thanh toán','TTH'),(10051,'07:30:00','2021-09-16',105000,110,NULL,'Đã thanh toán','TTH'),(10052,'07:30:00','2021-09-17',90000,111,NULL,'Đã thanh toán','TTH'),(10053,'07:30:00','2021-09-16',45000,112,NULL,'Đã thanh toán','TG'),(10054,'07:30:00','2021-09-17',55000,113,NULL,'Đã thanh toán','TG'),(10055,'07:30:00','2021-09-18',80000,114,NULL,'Đã thanh toán','TG'),(10056,'07:30:00','2022-01-05',45000,100,NULL,'Đã thanh toán','BD'),(10057,'07:30:00','2022-01-06',45000,101,NULL,'Đã thanh toán','BD'),(10058,'07:30:00','2022-01-07',45000,102,NULL,'Đã thanh toán','BD'),(10059,'07:30:00','2022-01-06',60000,103,NULL,'Đã thanh toán','HCM'),(10060,'07:30:00','2022-01-07',75000,104,NULL,'Đã thanh toán','HCM'),(10061,'07:30:00','2022-01-08',72000,105,NULL,'Đã thanh toán','HCM'),(10062,'07:30:00','2022-01-08',45000,106,NULL,'Đã thanh toán','DL'),(10063,'07:30:00','2022-01-09',45000,107,NULL,'Đã thanh toán','DL'),(10064,'07:30:00','2022-01-10',55000,108,NULL,'Đã thanh toán','DL'),(10065,'07:30:00','2022-01-10',55000,109,NULL,'Đã thanh toán','TTH'),(10066,'07:30:00','2022-01-11',45000,110,NULL,'Đã thanh toán','TTH'),(10067,'07:30:00','2022-01-12',60000,111,NULL,'Đã thanh toán','TTH'),(10068,'07:30:00','2022-01-12',45000,112,NULL,'Đã thanh toán','TG'),(10069,'07:30:00','2022-01-13',60000,113,NULL,'Đã thanh toán','TG'),(10070,'07:30:00','2022-01-14',200000,114,NULL,'Đã thanh toán','TG'),(10167,'16:36:23','2023-12-13',110000,101,'12T12','Đã thanh toán','BD'),(10179,'23:42:39','2023-12-14',28000,107,'TCK_2023_1','Đã thanh toán','BD'),(10180,'21:57:34','2024-04-17',84000,101,'12T12','Đã thanh toán','BD');
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon_baogom_sanpham`
--

DROP TABLE IF EXISTS `hoadon_baogom_sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon_baogom_sanpham` (
  `ma_hoa_don` int NOT NULL,
  `id_san_pham` int NOT NULL,
  `so_luong` int DEFAULT NULL,
  PRIMARY KEY (`ma_hoa_don`,`id_san_pham`),
  KEY `hoadon_baogom_sanpham_ibfk_2` (`id_san_pham`),
  CONSTRAINT `hoadon_baogom_sanpham_ibfk_1` FOREIGN KEY (`ma_hoa_don`) REFERENCES `hoadon` (`ma_hoa_don`),
  CONSTRAINT `hoadon_baogom_sanpham_ibfk_2` FOREIGN KEY (`id_san_pham`) REFERENCES `sanpham` (`id_sanpham`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon_baogom_sanpham`
--

LOCK TABLES `hoadon_baogom_sanpham` WRITE;
/*!40000 ALTER TABLE `hoadon_baogom_sanpham` DISABLE KEYS */;
INSERT INTO `hoadon_baogom_sanpham` VALUES (10005,100,1),(10005,10000,1),(10006,10001,1),(10007,10002,1),(10012,10003,1),(10013,101,1),(10013,10004,1),(10014,102,1),(10014,10005,1),(10015,104,1),(10015,10006,1),(10016,103,2),(10016,10007,1),(10017,100,1),(10017,10008,1),(10018,10009,1),(10019,10010,1),(10020,10011,1),(10021,100,1),(10021,103,1),(10021,10012,1),(10022,104,2),(10022,10013,1),(10023,101,1),(10023,10014,1),(10024,102,1),(10024,10015,1),(10025,103,3),(10025,10016,1),(10026,100,2),(10026,10017,1),(10027,100,1),(10027,101,1),(10027,10018,1),(10028,10019,1),(10029,103,1),(10029,10020,1),(10032,100,1),(10032,101,1),(10032,10021,1),(10033,104,1),(10033,10022,1),(10034,103,1),(10034,10023,1),(10035,10024,1),(10036,10025,1),(10037,102,1),(10037,10026,1),(10038,102,1),(10038,10027,1),(10039,10028,1),(10040,10029,1),(10041,10030,1),(10042,100,1),(10042,10031,1),(10043,101,1),(10043,10032,1),(10044,104,2),(10044,10033,1),(10045,10034,1),(10046,101,3),(10046,10035,1),(10047,100,1),(10047,10036,1),(10048,101,1),(10048,102,1),(10048,10037,1),(10049,103,1),(10049,10038,1),(10050,104,1),(10050,10039,1),(10051,100,2),(10051,10040,1),(10052,100,1),(10052,101,1),(10052,10041,1),(10053,10042,1),(10054,102,1),(10054,10043,1),(10055,103,2),(10055,10044,1),(10056,10045,1),(10057,10046,1),(10058,10047,1),(10059,101,1),(10059,10048,1),(10167,100,1),(10167,10120,1),(10167,10121,1),(10167,10122,1),(10179,10124,1),(10180,100,1),(10180,10125,1),(10180,10126,1);
/*!40000 ALTER TABLE `hoadon_baogom_sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `ma_khach_hang` int NOT NULL AUTO_INCREMENT,
  `ten` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sdt` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nam_sinh` date DEFAULT NULL,
  `diem_tich_luy` int DEFAULT '0',
  PRIMARY KEY (`ma_khach_hang`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (100,'Trần Thị Như Ý','0912221333','nhuy@gmail.com','2002-01-04',0),(101,'Nguyễn Mạnh','0912221000','nm@gmail.com','2003-01-04',580),(102,'Nguyễn Thị Mai','0924444567','ntm@gmail.com','2004-05-09',150),(103,'Lname Fname','0111111111','hackerlord@gmail.com','2003-04-04',200),(104,'Fname Lname','0111111112','hackerdump@gmail.com','2003-05-05',300),(105,'Huỳnh Thị Minh','0111111113','htminh@yahoo.com','2001-02-13',400),(106,'Trần Nguyên Đán','0111111114','tndan@hotmail.com','1999-02-13',380),(107,'Trần Thị Minh Thư','0111111115','ttmt@hcmut.edu.vn','2000-12-01',80),(108,'Lorem Ipsum','0221111226','lipsum@yahoo.com','2001-11-02',250),(109,'Smart Printer','0122334348','spss@gmail.com','2003-11-02',340),(110,'David Nguyễn','0988223444','annguyen@hmail.com','2004-07-09',380),(111,'Cristiano Ronaldo','0777777777','cristRo@gmail.com','1990-10-22',300),(112,'Nguyễn Thị Thu Hiền','0877878889','hiennguyen@hotmail.com','2001-11-11',260),(113,'Văn Thị Kim Tiến','0792839829','tienvan@gmail.com','2003-10-10',330),(114,'Nguyễn Thị Tường Vy','0289438498','vynguyen@gmail.com','2003-10-12',700),(115,'Bùi Hoài Thắng','0289479823','bht@gmail.com','1982-07-09',0);
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khuyenmai`
--

DROP TABLE IF EXISTS `khuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khuyenmai` (
  `ma_dot_km` varchar(20) NOT NULL,
  `ten_dot` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ngay_bat_dau` date DEFAULT NULL,
  `ngay_ket_thuc` date DEFAULT NULL,
  `phan_tram_duoc_giam` decimal(2,2) DEFAULT NULL,
  `tien_duoc_giam` int DEFAULT NULL,
  `so_luot_su_dung` int DEFAULT NULL,
  PRIMARY KEY (`ma_dot_km`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khuyenmai`
--

LOCK TABLES `khuyenmai` WRITE;
/*!40000 ALTER TABLE `khuyenmai` DISABLE KEYS */;
INSERT INTO `khuyenmai` VALUES ('12T12','Sale sập rạp','2023-12-11','2024-12-14',0.40,0,18),('20T10','Phụ nữ Việt Nam','2023-10-19','2024-10-21',0.00,20000,0),('30T4','30 tháng Tư','2023-04-28','2024-05-02',0.30,0,10),('TCK_2023_1','Thi cuối kỳ 231','2023-12-10','2024-12-20',0.30,15000,49),('TDL2024','Tết dương lịch 2024','2023-12-30','2024-01-02',0.20,10000,40);
/*!40000 ALTER TABLE `khuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `ma_nhan_vien` int NOT NULL AUTO_INCREMENT,
  `cccd` char(12) DEFAULT NULL,
  `ten` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `gioi_tinh` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nam_sinh` date DEFAULT NULL,
  `luong` decimal(10,0) DEFAULT NULL,
  `sdt` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rap_phu_trach` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `loai_nhan_vien` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `trang_thai` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ma_nhan_vien`),
  KEY `rap_phu_trach` (`rap_phu_trach`),
  CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`rap_phu_trach`) REFERENCES `rapphim` (`ma_rap_phim`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (122,'31203003601','Nguyễn Đức An','Nam','2003-12-22',10000000,'0123456688','HCM','Nhà quản lý',1),(124,'31203003603','Trần Lê Xuân Ánh','Khác','2002-02-01',5000000,'0123456550','TG','Nhà quản lý',1),(125,'31203003604','Đỗ Việt Vân Khanh','Nữ','2002-01-01',4000000,'0123456551','BD','Nhân viên điều phối',1),(126,'31203003605','Nguyễn Đức Anh','Nam','1999-12-22',10000000,'0123456566','BD','Nhà quản lý',1),(127,'31203003606','Nguyễn Việt Anh Nam','Nam','2002-01-07',7000000,'0123456567','BD','Nhân viên kỹ thuật',1),(128,'31203003607','Trần Lê Xuân','Nữ','2002-02-01',8000000,'0123456568','BD','Nhân viên quầy',1),(129,'31203003608','Đỗ Hải My','Nữ','2002-01-01',6000000,'0123456569','DL','Nhân viên điều phối',1),(130,'31203003609','Trương Thuận Hưng','Nam','1999-12-20',10000000,'0123456570','DL','Nhà quản lý',1),(131,'31203003610','Lê Đình Huy','Nam','2002-01-16',7000000,'0123456571','DL','Nhân viên kỹ thuật',1),(132,'31203003611','Trần Lê Xuân','Nữ','2002-02-01',8000000,'0123456572','DL','Nhân viên quầy',1),(133,'31203003612','Địch Lệ Nhiệt Ba','Nữ','2002-01-01',6000000,'0123456573','TTH','Nhân viên điều phối',1),(134,'31203003613','Lê Thị Bảo Thu','Nữ','1999-12-20',10000000,'0123456574','TTH','Nhà quản lý',1),(135,'31203003614','Trần Minh Hiếu','Nam','2002-01-16',7000000,'0123456575','TTH','Nhân viên kỹ thuật',1),(136,'31203003615','Trần Hồng Tài','Nữ','2002-02-01',8000000,'0123456576','TTH','Nhân viên quầy',1),(137,'31203003616','Nguyễn Thị Thu Hảo','Nữ','2002-02-01',1000000,'0123456577','TG','Nhân viên kỹ thuật',1),(138,'31203003617','Lê Minh Trung','Nam','1990-05-17',100000000,'0123456574',NULL,'Nhà quản lý',1),(148,'31203003617','Nguyen Van A','Nam','2003-02-14',12341,'0943055850','DL','Nhân viên điều phối',1),(149,'31203003617','Cương Phan Thế','Nam','1980-02-14',1000000,'0943055850','HCM','Nhân viên điều phối',1);
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien_bangcap`
--

DROP TABLE IF EXISTS `nhanvien_bangcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien_bangcap` (
  `ma_nhan_vien` int NOT NULL,
  `bang_cap` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ma_nhan_vien`,`bang_cap`),
  CONSTRAINT `nhanvien_bangcap_ibfk_1` FOREIGN KEY (`ma_nhan_vien`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien_bangcap`
--

LOCK TABLES `nhanvien_bangcap` WRITE;
/*!40000 ALTER TABLE `nhanvien_bangcap` DISABLE KEYS */;
INSERT INTO `nhanvien_bangcap` VALUES (122,'Bằng Đại học'),(124,'Bằng Tốt nghiệp THPT'),(125,'Bằng Tốt nghiệp THPT'),(126,'Bằng Thạc sĩ'),(127,'Bằng Đại học'),(128,'Bằng Tốt nghiệp THPT'),(129,'Bằng Tốt nghiệp THPT'),(130,'Bằng Đại học'),(131,'Bằng Đại học'),(132,'Bằng Tốt nghiệp THPT'),(133,'Bằng Tốt nghiệp THPT'),(134,'Bằng Thạc sĩ'),(135,'Bằng Đại học'),(136,'Bằng Tốt nghiệp THPT'),(138,'Bằng Thạc sĩ'),(148,'Bằng Đại học');
/*!40000 ALTER TABLE `nhanvien_bangcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien_diachi`
--

DROP TABLE IF EXISTS `nhanvien_diachi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien_diachi` (
  `ma_nhan_vien` int NOT NULL,
  `dia_chi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ma_nhan_vien`,`dia_chi`),
  CONSTRAINT `nhanvien_diachi_ibfk_1` FOREIGN KEY (`ma_nhan_vien`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien_diachi`
--

LOCK TABLES `nhanvien_diachi` WRITE;
/*!40000 ALTER TABLE `nhanvien_diachi` DISABLE KEYS */;
INSERT INTO `nhanvien_diachi` VALUES (122,'15 Điện Biên Phủ, thành phố Hồ Chí Minh'),(124,'17 Điện Biên Phủ, thành phố Hồ Chí Minh'),(125,'HCM'),(126,'HCM'),(127,'17 Đỗ Duy Khương, thành phố Dĩ An'),(128,'18 Đỗ Duy Khương, thành phố Dĩ An'),(129,'14 Bế Văn Đàn, thành phố Đà Lạt'),(130,'16 Bế Văn Đàn, thành phố Đà Lạt'),(131,'17 Bế Văn Đàn, thành phố Đà Lạt'),(132,'18 Bế Văn Đàn, thành phố Đà Lạt'),(133,'14 Nguyễn Du, thành phố Huế'),(134,'HCM'),(135,'17 Nguyễn Du, thành phố Huế'),(136,'18 Nguyễn Du, thành phố Huế'),(138,'18 Hoàng Mai, thành phố Hà Nội'),(148,'Ký túc xá khu A ĐHQG, Khu phố 6, Phường Linh Trung, Thủ Đức');
/*!40000 ALTER TABLE `nhanvien_diachi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien_thoigianlamviec`
--

DROP TABLE IF EXISTS `nhanvien_thoigianlamviec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien_thoigianlamviec` (
  `ma_nhan_vien` int NOT NULL,
  `thu_trong_tuan` varchar(20) NOT NULL,
  `tg_bat_dau` time NOT NULL,
  `tg_ket_thuc` time NOT NULL,
  PRIMARY KEY (`ma_nhan_vien`,`thu_trong_tuan`,`tg_bat_dau`,`tg_ket_thuc`),
  CONSTRAINT `nhanvien_thoigianlamviec_ibfk_1` FOREIGN KEY (`ma_nhan_vien`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien_thoigianlamviec`
--

LOCK TABLES `nhanvien_thoigianlamviec` WRITE;
/*!40000 ALTER TABLE `nhanvien_thoigianlamviec` DISABLE KEYS */;
INSERT INTO `nhanvien_thoigianlamviec` VALUES (122,'FU','08:00:00','23:00:00'),(124,'T5','08:00:00','11:00:00'),(125,'T2','08:00:00','11:00:00'),(126,'FU','09:50:00','14:51:00'),(127,'T4','08:00:00','11:00:00'),(128,'T5','08:00:00','11:00:00'),(129,'T2','08:00:00','11:00:00'),(130,'FU','08:00:00','23:00:00'),(131,'T4','08:00:00','11:00:00'),(132,'T5','08:00:00','11:00:00'),(133,'T2','08:00:00','11:00:00'),(134,'FU','07:00:00','16:00:00'),(135,'T4','08:00:00','11:00:00'),(136,'T5','08:00:00','11:00:00'),(138,'FU','08:00:00','23:00:00'),(148,'3-5-7','06:56:00','17:56:00');
/*!40000 ALTER TABLE `nhanvien_thoigianlamviec` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanviendieuphoi`
--

DROP TABLE IF EXISTS `nhanviendieuphoi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanviendieuphoi` (
  `ma_nhan_vien` int NOT NULL,
  PRIMARY KEY (`ma_nhan_vien`),
  CONSTRAINT `nhanviendieuphoi_ibfk_1` FOREIGN KEY (`ma_nhan_vien`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanviendieuphoi`
--

LOCK TABLES `nhanviendieuphoi` WRITE;
/*!40000 ALTER TABLE `nhanviendieuphoi` DISABLE KEYS */;
INSERT INTO `nhanviendieuphoi` VALUES (125),(129),(133),(148);
/*!40000 ALTER TABLE `nhanviendieuphoi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvienkythuat`
--

DROP TABLE IF EXISTS `nhanvienkythuat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvienkythuat` (
  `ma_nhan_vien` int NOT NULL,
  PRIMARY KEY (`ma_nhan_vien`),
  CONSTRAINT `nhanvienkythuat_ibfk_1` FOREIGN KEY (`ma_nhan_vien`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvienkythuat`
--

LOCK TABLES `nhanvienkythuat` WRITE;
/*!40000 ALTER TABLE `nhanvienkythuat` DISABLE KEYS */;
INSERT INTO `nhanvienkythuat` VALUES (127),(131),(135);
/*!40000 ALTER TABLE `nhanvienkythuat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvienquay`
--

DROP TABLE IF EXISTS `nhanvienquay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvienquay` (
  `ma_nhan_vien` int NOT NULL,
  PRIMARY KEY (`ma_nhan_vien`),
  CONSTRAINT `nhanvienquay_ibfk_1` FOREIGN KEY (`ma_nhan_vien`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvienquay`
--

LOCK TABLES `nhanvienquay` WRITE;
/*!40000 ALTER TABLE `nhanvienquay` DISABLE KEYS */;
INSERT INTO `nhanvienquay` VALUES (124),(128),(132),(136),(137),(149);
/*!40000 ALTER TABLE `nhanvienquay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhaquanly`
--

DROP TABLE IF EXISTS `nhaquanly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhaquanly` (
  `ma_quan_ly` int NOT NULL,
  `vai_tro` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`ma_quan_ly`),
  CONSTRAINT `nhaquanly_ibfk_1` FOREIGN KEY (`ma_quan_ly`) REFERENCES `nhanvien` (`ma_nhan_vien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhaquanly`
--

LOCK TABLES `nhaquanly` WRITE;
/*!40000 ALTER TABLE `nhaquanly` DISABLE KEYS */;
INSERT INTO `nhaquanly` VALUES (122,'Quản lý rạp'),(124,'Quản lý rạp'),(126,'Quản lý rạp'),(130,'Quản lý rạp'),(134,'Quản lý rạp'),(138,'Tổng quản lý');
/*!40000 ALTER TABLE `nhaquanly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phim`
--

DROP TABLE IF EXISTS `phim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phim` (
  `ma_phim` varchar(20) NOT NULL,
  `ten` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `thoi_luong` varchar(20) DEFAULT NULL,
  `nha_san_xuat` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `quoc_gia` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mo_ta` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `ngay_khoi_chieu` date DEFAULT NULL,
  PRIMARY KEY (`ma_phim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phim`
--

LOCK TABLES `phim` WRITE;
/*!40000 ALTER TABLE `phim` DISABLE KEYS */;
INSERT INTO `phim` VALUES ('BDMV_2023','Biệt đội Marvels 2D','1 giờ 40 phút','Marvel Studios','Hoa Kỳ','Nội dung phim kể về nhóm 3 nhân vật Carol Danvers (hay còn được biết đến với biệt danh Captain Marvel); Kamala Khan (hay Ms. Marvel) và Monica Rambeau. Đây sẽ là phần tiếp theo của bộ phim chuyển thể từ truyện tranh Marvel Comics. Được sản xuất bởi Marvel Studios và được phân phối bởi Walt Disney Studios Motion Pictures, phim sẽ là hậu truyện của Đại uý Marvel (2019) và phim truyền hình Ms. Marvel (2022), và là phần phim thứ 33 của Vũ trụ Điện ảnh Marvel.','2023-01-05'),('BG_2021','Bố già','2 giờ 08 phút','TT.Town & HKFilm','Việt Nam','Câu chuyện về Ba Sang - con thứ hai trong 4 anh em ồn ào: Giàu, Sang, Phú, Quý. Ba Sang là một người ga lăng, “quá” tốt bụng và luôn hy sinh vì người khác dù họ có muốn hay không. Quân - Ba Sang’s son là một Youtuber trẻ hiện đại.','2021-01-05'),('BNN_2022','Bẫy ngọt ngào','1 giờ 30 phút','Đinh Hà Uyên Thư','Việt Nam','Bẫy ngọt ngào có nội dung xoay quanh cuộc sống hôn nhân dù giàu sang nhưng đầy nước mắt của Camy (Bảo Anh) với Đăng Minh (Quốc Trường). ','2022-01-05'),('CĐ_2023','Chiếm đoạt','1 giờ 37 phút','KBS','Việt Nam','Kể về người vợ của một gia đình thượng lưu thuê cô bảo mẫu “trong mơ” để chăm sóc con trai mình. Nhưng cô không ngờ rằng, phía sau sự trong sáng, tinh khiết kia, cô bảo mẫu luôn che giấu âm mưu nhằm phá hoại hạnh phúc gia đình và khiến cuộc sống của cô thay đổi mãi mãi.','2023-01-05'),('CN_2022','Chú Nguyền','1 giờ 51 phút','Kevin Ko','Đài Loan','Sáu năm trước, Lý Nhược Nam bị nguyền rủa vì phạm phải điều cấm kị trong tôn giáo. Giờ đây, cô phải bảo vệ con gái trước hậu quả của những hành động mình gây ra.','2022-01-05'),('DHDMH_2023','Đường hầm đến mùa hạ - Lối thoát của biệt ly','1 giờ 24 phút','CLAP','Nhật Bản','Dựa trên cuốn tiểu thuyết đạt giải thưởng. Bộ phim chuyển thể giành giải thưởng Paul Grimault tại Liên hoan phim hoạt hình quốc tế Annecy 2023. Một đường hầm bí ẩn tên Urashima có thể thực hiện bất kỳ điều ước nào...nhưng bạn sẽ phải đánh đổi bằng thời gian. Cậu học sinh trung học Kaoru, bị ám ảnh bởi quá khứ, cùng với Anzu, một cô gái luôn đấu tranh để đạt được ước mơ của mình bước vào đường hầm. Nhưng thứ họ phải đánh đổi là quá lớn. Đây là một câu chuyện mùa hè khó quên về nỗi nhớ, thời gian và tình yêu của tuổi trẻ.','2023-05-10'),('ĐHHĐM_2023','Đêm hẹn hò đẫm máu','2 giờ 02 phút','KBS','Hàn Quốc','Một chuyến đi chơi lãng mạn bỗng biến thành cơn ác mộng khi cặp đôi bị săn lùng ở trên núi bởi một kẻ tâm thần đeo mặt nạ và họ buộc phải đối mặt với một sự thật đau lòng.','2023-05-10'),('DVVH_2022','The Gray Man: Đặc vụ vô hình','2 giờ 2 phút','Netflix','Hoa Kỳ','The Grey Man là một bộ phim hành động kinh dị của Mỹ năm 2022 do Anthony và Joe Russo đạo diễn, từ kịch bản mà sau này đồng viết với Christopher Markus và Stephen McFeely, dựa trên tiểu thuyết cùng tên năm 2009 của Mark Greaney.','2022-05-10'),('GDBH_2022','Gấu đỏ biến hình','1 giờ 40 phút','Pixar Studios','Canada','Chuyện gì sẽ xảy ra khi một cô bé 13 tuổi biến thành gấu trúc đỏ mỗi khi phấn khích? Cuộc sống của nhóc chắc chắn chẳng thể yên bình rồi!','2022-05-10'),('GGLCV_2021','Gái già lắm chiêu V','1 giờ 55 phút','Bảo Nhân','Việt Nam','Những cuộc đời vương giả là phim điện ảnh chính kịch của Việt Nam năm 2021 do Namcito và Bảo Nhân đồng đạo diễn. Tác phẩm xoay quanh câu chuyện của 3 chị em Lý Lệ Hà, Lý Lệ Hồng và Lý Linh. Dòng họ Lý ở trong Bạch Trà viên xa hoa lộng lẫy, với đầy cổ vật có giá trị “gấp mấy lần siêu xe”.','2021-01-05'),('GPD_2021','Góa phụ đen','2 giờ 13 phút','Marvel Studios','Hoa Kỳ','Góa Phụ Đen lấy bối cảnh ngay sau sự kiện Captain America: Civil War, lần này nữ điệp viên phải đối diện với những câu hỏi đầy bí ẩn trong nguồn gốc.','2021-05-10'),('LM48_2021','Lật mặt: 48h','2 giờ 5 phút','Lý Hải Production','Việt Nam','Phải chạy trốn khỏi băng nhóm tội phạm sau một giao dịch nhầm lẫn, tay võ sĩ đã giải nghệ có 2 ngày để giải quyết ân oán với tên trùm.','2021-05-10'),('NNTVN_2021','Người nhện: Trở về nhà','2 giờ 13 phút','Marvel Studios','Hoa Kỳ','Được chuyển thể từ truyện tranh cùng tên của Marvel, Người Nhện: Trở Về Nhà là bộ phim điện ảnh thứ 7 có sự góp mặt của nhân vật mang tính văn hóa đại chúng này. Với kinh phí 175 triệu USD, đây là một trong những bộ phim siêu anh hùng hoành tráng nhất 2017. Người Nhện lúc này mới chỉ là một cậu bé 15 tuổi đang cắp sách tới trường. Nhưng Peter Parker phải đối diện với những khó khăn từ học tập, chuyện tình cảm và cả trọng trách lớn lao của một siêu anh hùng.','2021-09-10'),('NVCC_2023','Người vợ cuối cùng','2 giờ 12 phút','Victor Vũ','Việt Nam','Người Vợ Cuối Cùng sẽ lấy bối cảnh gia đình quan lại thời nhà Nguyễn đầu thế kỉ 19 để kể về câu chuyện thân phận đau khổ của người phụ nữ dưới xã hội thời bấy giờ.','2023-09-10'),('OL_2023','Oán linh','1 giờ 35 phút','Clover Films','Singapore','Nữ họa sĩ trẻ Wang Si Ling trong thời kì mang thai đã chuyển đến ngôi nhà mơ ước của mình sau khi giành được giải thưởng huyền thoại. Thế nhưng cô liên tục gặp phải những sự việc kỳ lạ và bất thường đe dọa đến cô và con cô.','2022-09-10'),('OPFR_2022','One Piece Film: Red','1 giờ 55 phút','Toei Animation','Nhật Bản','One Piece Film: Red là bộ phim hoạt hình anime của Nhật Bản thuộc thể loại kỳ ảo, hành động-phiêu lưu được sản xuất bởi Toei Animation. Đây là phần phim thứ mười lăm trong loạt phim điện ảnh của One Piece, dựa trên bộ truyện manga nổi tiếng cùng tên của tác giả Eiichiro Oda. Phim được công bố lần đầu tiên vào ngày 21 tháng 11, 2021 để kỷ niệm sự ra mắt của tập phim thứ 1000 của bộ anime One Piece và sau khi tập phim này được phát sóng, đoạn quảng cáo và áp phích chính thức của phim cũng chính thức được công bố. Phim dự kiến sẽ phát hành vào ngày 6 tháng 8 năm 2022. Bộ phim được giới thiệu sẽ là hành trình xoay quanh một nhân vật nữ mới cùng với Shanks \"Tóc Đỏ\"','2022-09-10'),('RTM_2021','Rừng thế mạng','1 giờ 50 phút','Galaxy Studios','Việt Nam','Rừng thế mạng (đạo diễn Hữu Tấn) là tác phẩm trong nước đầu tiên ra mắt sau nhiều tháng rạp đóng băng vì dịch. Phim lấy bối cảnh chính ở Tà Năng - Phan Dũng, xoay quanh câu chuyện Kiên (Thanh Trực) và nhóm bạn. ','2021-09-10'),('TNK_2019','Tenki no Ko','1 giờ 54 phút','CoMix Wave Films','Nhật Bản','Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.','2023-12-12'),('TTN_2023','Titanic (Anniversary)','1 giờ 47 phút','James Cameroon','Hoa Kỳ','Chuyện tình của nàng tiểu thư Rose và anh chàng họa sĩ nghèo Jack trên chuyến tàu Titanic định mệnh đã trở thành huyền thoại trong lòng biết bao thế hệ.','2023-09-10'),('YLVN_2023','Yêu lại vợ ngầu','1 giờ 59 phút','Woollim Films','Hàn Quốc','Cặp vợ chồng trẻ No Jung Yeol (Kang Ha-neul) và Hong Na Ra (Jung So-min) từ cuộc sống hôn nhân màu hồng dần “hiện nguyên hình” trở thành cái gai trong mắt đối phương với vô vàn thói hư, tật xấu. Không thể đi đến tiếng nói chung, Jung Yeol và Na Ra quyết định ra toà ly dị. Tuy nhiên, họ phải chờ 30 ngày cho đến khi mọi thủ tục chính thức được hoàn tất. Trong khoảng thời gian này, một vụ tai nạn xảy ra khiến cả hai mất đi ký ức và không nhớ người kia là ai. 30 ngày chờ đợi để được “đường ai nấy đi” nhưng nhiều tình huống trớ trêu khiến cả hai bắt đầu nảy sinh tình cảm trở lại. Liệu khi nhớ ra mọi thứ, họ vẫn sẽ ký tên vào tờ giấy ly hôn?','2023-12-12');
/*!40000 ALTER TABLE `phim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phim_thuoc_theloai`
--

DROP TABLE IF EXISTS `phim_thuoc_theloai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phim_thuoc_theloai` (
  `ma_phim` varchar(20) NOT NULL,
  `ten_the_loai` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ma_phim`,`ten_the_loai`),
  KEY `ten_the_loai` (`ten_the_loai`),
  CONSTRAINT `phim_thuoc_theloai_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `phim` (`ma_phim`),
  CONSTRAINT `phim_thuoc_theloai_ibfk_2` FOREIGN KEY (`ten_the_loai`) REFERENCES `theloai` (`ten_the_loai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phim_thuoc_theloai`
--

LOCK TABLES `phim_thuoc_theloai` WRITE;
/*!40000 ALTER TABLE `phim_thuoc_theloai` DISABLE KEYS */;
INSERT INTO `phim_thuoc_theloai` VALUES ('BG_2021','Hài hước'),('GDBH_2022','Hài hước'),('GGLCV_2021','Hài hước'),('YLVN_2023','Hài hước'),('BDMV_2023','Hành động'),('DVVH_2022','Hành động'),('GPD_2021','Hành động'),('LM48_2021','Hành động'),('NNTVN_2021','Hành động'),('OPFR_2022','Hành động'),('RTM_2021','Hành động'),('DHDMH_2023','Hoạt hình'),('OPFR_2022','Hoạt hình'),('TNK_2019','Hoạt hình'),('CN_2022','Kinh dị'),('ĐHHĐM_2023','Kinh dị'),('OL_2023','Kinh dị'),('RTM_2021','Kinh dị'),('BG_2021','Tình cảm'),('BNN_2022','Tình cảm'),('CĐ_2023','Tình cảm'),('DHDMH_2023','Tình cảm'),('NVCC_2023','Tình cảm'),('TNK_2019','Tình cảm'),('TTN_2023','Tình cảm'),('BDMV_2023','Viễn tưởng'),('GPD_2021','Viễn tưởng'),('NNTVN_2021','Viễn tưởng'),('OPFR_2022','Viễn tưởng');
/*!40000 ALTER TABLE `phim_thuoc_theloai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phongchieu`
--

DROP TABLE IF EXISTS `phongchieu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phongchieu` (
  `ma_rap_phim` varchar(20) NOT NULL,
  `ma_so_phong` int NOT NULL,
  `tong_so_ghe` int DEFAULT NULL,
  PRIMARY KEY (`ma_rap_phim`,`ma_so_phong`),
  CONSTRAINT `phongchieu_ibfk_1` FOREIGN KEY (`ma_rap_phim`) REFERENCES `rapphim` (`ma_rap_phim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phongchieu`
--

LOCK TABLES `phongchieu` WRITE;
/*!40000 ALTER TABLE `phongchieu` DISABLE KEYS */;
INSERT INTO `phongchieu` VALUES ('BD',201,25),('BD',202,25),('DL',201,25),('DL',202,25),('HCM',201,25),('HCM',202,25),('HCM',203,25),('TG',201,25),('TG',202,25),('TTH',201,25),('TTH',202,25);
/*!40000 ALTER TABLE `phongchieu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rapphim`
--

DROP TABLE IF EXISTS `rapphim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rapphim` (
  `ma_rap_phim` varchar(20) NOT NULL,
  `ten_rap` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dia_chi` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `hotline` varchar(10) DEFAULT NULL,
  `so_luong_phong` int DEFAULT NULL,
  `ma_nv_quan_ly` int DEFAULT NULL,
  `thoi_gian_mo` time DEFAULT NULL,
  `thoi_gian_dong` time DEFAULT NULL,
  PRIMARY KEY (`ma_rap_phim`),
  KEY `ma_nv_quan_ly` (`ma_nv_quan_ly`),
  CONSTRAINT `rapphim_ibfk_1` FOREIGN KEY (`ma_nv_quan_ly`) REFERENCES `nhaquanly` (`ma_quan_ly`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rapphim`
--

LOCK TABLES `rapphim` WRITE;
/*!40000 ALTER TABLE `rapphim` DISABLE KEYS */;
INSERT INTO `rapphim` VALUES ('BD','Bình Dương','Nhà văn hóa sinh viên, Đại học Quốc gia HCM, P.Đông Hòa, Dĩ An, Bình Dương','0230037883',3,126,'08:00:00','24:00:00'),('DL','Đà Lạt','Quảng trường Lâm Viên, P10, TP.Đà Lạt, Lâm Đồng','0263969969',2,130,'08:00:00','24:00:00'),('HCM','Hồ Chí Minh','271 Nguyễn Trãi, P.Nguyễn Cư Trinh, Q. 1, TP.HCM','0230038881',2,122,'08:00:00','24:00:00'),('TG','Tiền Giang','52 Đinh Bộ Lĩnh, Phường 3, Thành phố Mỹ Tho, Tiền Giang','0230038885',2,124,'08:00:00','24:00:00'),('TTH','Huế','25 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Thừa Thiên Huế','0234730081',2,134,'08:00:00','24:00:00');
/*!40000 ALTER TABLE `rapphim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `id_sanpham` int NOT NULL AUTO_INCREMENT,
  `loai_san_pham` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_sanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=10127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES (100,'Đồ ăn'),(101,'Đồ ăn'),(102,'Đồ ăn'),(103,'Đồ ăn'),(104,'Đồ ăn'),(105,'Đồ ăn'),(106,'Đồ ăn'),(10000,'Vé phim'),(10001,'Vé phim'),(10002,'Vé phim'),(10003,'Vé phim'),(10004,'Vé phim'),(10005,'Vé phim'),(10006,'Vé phim'),(10007,'Vé phim'),(10008,'Vé phim'),(10009,'Vé phim'),(10010,'Vé phim'),(10011,'Vé phim'),(10012,'Vé phim'),(10013,'Vé phim'),(10014,'Vé phim'),(10015,'Vé phim'),(10016,'Vé phim'),(10017,'Vé phim'),(10018,'Vé phim'),(10019,'Vé phim'),(10020,'Vé phim'),(10021,'Vé phim'),(10022,'Vé phim'),(10023,'Vé phim'),(10024,'Vé phim'),(10025,'Vé phim'),(10026,'Vé phim'),(10027,'Vé phim'),(10028,'Vé phim'),(10029,'Vé phim'),(10030,'Vé phim'),(10031,'Vé phim'),(10032,'Vé phim'),(10033,'Vé phim'),(10034,'Vé phim'),(10035,'Vé phim'),(10036,'Vé phim'),(10037,'Vé phim'),(10038,'Vé phim'),(10039,'Vé phim'),(10040,'Vé phim'),(10041,'Vé phim'),(10042,'Vé phim'),(10043,'Vé phim'),(10044,'Vé phim'),(10045,'Vé phim'),(10046,'Vé phim'),(10047,'Vé phim'),(10048,'Vé phim'),(10049,'Vé phim'),(10050,'Vé phim'),(10051,'Vé phim'),(10052,'Vé phim'),(10053,'Vé phim'),(10054,'Vé phim'),(10055,'Vé phim'),(10056,'Vé phim'),(10057,'Vé phim'),(10058,'Vé phim'),(10059,'Vé phim'),(10120,'Vé phim'),(10121,'Vé phim'),(10122,'Vé phim'),(10123,'Vé phim'),(10124,'Vé phim'),(10125,'Vé phim'),(10126,'Vé phim');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suatchieu`
--

DROP TABLE IF EXISTS `suatchieu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suatchieu` (
  `ma_rap_phim` varchar(20) NOT NULL,
  `ma_so_phong` int NOT NULL,
  `ngay_gio_chieu` datetime NOT NULL,
  `ma_phim` varchar(20) DEFAULT NULL,
  `ghe_da_dat` int DEFAULT NULL,
  PRIMARY KEY (`ma_rap_phim`,`ma_so_phong`,`ngay_gio_chieu`),
  KEY `ma_phim` (`ma_phim`),
  CONSTRAINT `suatchieu_ibfk_1` FOREIGN KEY (`ma_rap_phim`, `ma_so_phong`) REFERENCES `phongchieu` (`ma_rap_phim`, `ma_so_phong`),
  CONSTRAINT `suatchieu_ibfk_2` FOREIGN KEY (`ma_phim`) REFERENCES `phim` (`ma_phim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suatchieu`
--

LOCK TABLES `suatchieu` WRITE;
/*!40000 ALTER TABLE `suatchieu` DISABLE KEYS */;
INSERT INTO `suatchieu` VALUES ('BD',201,'2021-01-05 08:30:00','BG_2021',1),('BD',201,'2021-01-06 17:00:00','GGLCV_2021',0),('BD',201,'2021-01-07 08:30:00','BG_2021',1),('BD',201,'2021-05-10 08:30:00','GPD_2021',1),('BD',201,'2021-05-11 08:30:00','GPD_2021',0),('BD',201,'2021-05-12 08:30:00','GPD_2021',1),('BD',201,'2021-09-10 08:30:00','NNTVN_2021',0),('BD',201,'2021-09-11 08:30:00','NNTVN_2021',0),('BD',201,'2021-09-12 08:30:00','NNTVN_2021',0),('BD',201,'2024-12-15 09:30:00','DHDMH_2023',0),('BD',201,'2024-12-16 14:50:00','DHDMH_2023',1),('BD',201,'2024-12-17 11:00:00','DHDMH_2023',0),('BD',202,'2021-01-05 17:00:00','BG_2021',0),('BD',202,'2021-01-06 08:30:00','GGLCV_2021',1),('BD',202,'2021-01-07 17:00:00','GGLCV_2021',0),('BD',202,'2021-05-10 17:30:00','LM48_2021',0),('BD',202,'2021-05-11 17:30:00','LM48_2021',1),('BD',202,'2021-05-12 17:30:00','LM48_2021',0),('BD',202,'2021-09-10 17:30:00','RTM_2021',1),('BD',202,'2021-09-11 17:30:00','RTM_2021',1),('BD',202,'2021-09-12 17:30:00','RTM_2021',1),('BD',202,'2023-12-15 10:15:00','DHDMH_2023',1),('BD',202,'2023-12-15 15:25:00','DHDMH_2023',0),('BD',202,'2024-12-10 10:00:00','DHDMH_2023',10),('BD',202,'2024-12-17 08:50:00','DHDMH_2023',1),('DL',201,'2021-01-07 08:30:00','BG_2021',1),('DL',201,'2021-01-08 08:30:00','BG_2021',1),('DL',201,'2021-01-09 08:30:00','BG_2021',0),('DL',201,'2021-05-14 08:30:00','GPD_2021',1),('DL',201,'2021-05-15 08:30:00','GPD_2021',1),('DL',201,'2021-05-16 08:30:00','GPD_2021',0),('DL',201,'2021-09-14 08:30:00','NNTVN_2021',1),('DL',201,'2021-09-15 08:30:00','NNTVN_2021',1),('DL',201,'2021-09-16 08:30:00','NNTVN_2021',0),('DL',201,'2024-12-15 08:40:00','DHDMH_2023',1),('DL',202,'2021-01-07 17:30:00','GGLCV_2021',0),('DL',202,'2021-01-08 17:30:00','GGLCV_2021',0),('DL',202,'2021-01-09 17:30:00','GGLCV_2021',1),('DL',202,'2021-05-14 17:30:00','LM48_2021',0),('DL',202,'2021-05-15 17:30:00','LM48_2021',0),('DL',202,'2021-05-16 17:30:00','LM48_2021',1),('DL',202,'2021-09-14 17:30:00','RTM_2021',0),('DL',202,'2021-09-15 17:30:00','RTM_2021',0),('DL',202,'2021-09-16 17:30:00','RTM_2021',1),('DL',202,'2024-12-16 20:30:00','DHDMH_2023',0),('HCM',201,'2021-01-06 08:30:00','BG_2021',1),('HCM',201,'2021-05-13 08:30:00','GPD_2021',1),('HCM',201,'2021-05-14 08:30:00','GPD_2021',1),('HCM',201,'2021-05-15 08:30:00','GPD_2021',1),('HCM',201,'2021-09-13 08:30:00','NNTVN_2021',1),('HCM',201,'2024-12-15 19:00:00','DHDMH_2023',1),('HCM',202,'2021-01-06 17:30:00','GGLCV_2021',0),('HCM',202,'2021-01-07 17:30:00','BG_2021',1),('HCM',202,'2021-01-08 08:30:00','GGLCV_2021',0),('HCM',202,'2021-05-13 17:30:00','LM48_2021',0),('HCM',202,'2021-05-14 17:30:00','LM48_2021',0),('HCM',202,'2021-05-15 17:30:00','LM48_2021',0),('HCM',202,'2021-09-13 17:30:00','RTM_2021',0),('HCM',202,'2021-09-14 08:30:00','NNTVN_2021',1),('HCM',202,'2021-09-15 17:30:00','RTM_2021',0),('HCM',202,'2024-12-13 09:10:00','DHDMH_2023',20),('HCM',202,'2024-12-15 16:20:00','DHDMH_2023',0),('HCM',203,'2021-01-07 08:30:00','GGLCV_2021',0),('HCM',203,'2021-01-08 17:30:00','BG_2021',1),('HCM',203,'2021-09-14 17:30:00','RTM_2021',0),('HCM',203,'2021-09-15 08:30:00','NNTVN_2021',1),('TG',201,'2021-01-09 08:30:00','BG_2021',1),('TG',201,'2021-01-10 08:30:00','BG_2021',0),('TG',201,'2021-01-11 08:30:00','BG_2021',1),('TG',201,'2021-05-18 08:30:00','GPD_2021',1),('TG',201,'2021-05-19 08:30:00','GPD_2021',1),('TG',201,'2021-05-20 08:30:00','GPD_2021',0),('TG',201,'2021-09-16 08:30:00','NNTVN_2021',1),('TG',201,'2021-09-17 08:30:00','NNTVN_2021',1),('TG',201,'2021-09-18 08:30:00','NNTVN_2021',1),('TG',201,'2024-12-11 12:30:00','DHDMH_2023',20),('TG',202,'2021-01-09 17:30:00','GGLCV_2021',0),('TG',202,'2021-01-10 17:30:00','GGLCV_2021',1),('TG',202,'2021-01-11 17:30:00','GGLCV_2021',0),('TG',202,'2021-05-18 17:30:00','LM48_2021',0),('TG',202,'2021-05-19 17:30:00','LM48_2021',0),('TG',202,'2021-05-20 17:30:00','LM48_2021',1),('TG',202,'2021-09-16 17:30:00','RTM_2021',0),('TG',202,'2021-09-17 17:30:00','RTM_2021',0),('TG',202,'2021-09-18 17:30:00','RTM_2021',0),('TG',202,'2024-12-14 18:00:00','DHDMH_2023',1),('TTH',201,'2021-01-08 08:30:00','BG_2021',1),('TTH',201,'2021-01-09 08:30:00','BG_2021',0),('TTH',201,'2021-01-10 08:30:00','BG_2021',0),('TTH',201,'2021-05-16 08:30:00','GPD_2021',1),('TTH',201,'2021-05-17 08:30:00','GPD_2021',0),('TTH',201,'2021-05-18 08:30:00','GPD_2021',0),('TTH',201,'2021-09-15 08:30:00','NNTVN_2021',1),('TTH',201,'2021-09-16 08:30:00','NNTVN_2021',0),('TTH',201,'2021-09-17 08:30:00','NNTVN_2021',0),('TTH',201,'2024-12-16 07:45:00','DHDMH_2023',0),('TTH',202,'2021-01-08 17:30:00','GGLCV_2021',0),('TTH',202,'2021-01-09 17:30:00','GGLCV_2021',1),('TTH',202,'2021-01-10 17:30:00','GGLCV_2021',1),('TTH',202,'2021-05-16 17:30:00','LM48_2021',0),('TTH',202,'2021-05-17 17:30:00','LM48_2021',1),('TTH',202,'2021-05-18 17:30:00','LM48_2021',1),('TTH',202,'2021-09-15 17:30:00','RTM_2021',0),('TTH',202,'2021-09-16 17:30:00','RTM_2021',1),('TTH',202,'2021-09-17 17:30:00','RTM_2021',1),('TTH',202,'2024-12-16 17:00:00','DHDMH_2023',0);
/*!40000 ALTER TABLE `suatchieu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theloai`
--

DROP TABLE IF EXISTS `theloai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theloai` (
  `ten_the_loai` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ten_the_loai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theloai`
--

LOCK TABLES `theloai` WRITE;
/*!40000 ALTER TABLE `theloai` DISABLE KEYS */;
INSERT INTO `theloai` VALUES ('Hài hước'),('Hành động'),('Hoạt hình'),('Kinh dị'),('Tình cảm'),('Viễn tưởng');
/*!40000 ALTER TABLE `theloai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vephim`
--

DROP TABLE IF EXISTS `vephim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vephim` (
  `ma_ve_phim` int NOT NULL,
  `ma_rap_phim` varchar(20) NOT NULL,
  `ma_so_phong` int NOT NULL,
  `ma_so_ghe` varchar(5) NOT NULL,
  `ngay_gio_chieu` datetime DEFAULT NULL,
  PRIMARY KEY (`ma_ve_phim`,`ma_rap_phim`,`ma_so_phong`,`ma_so_ghe`),
  KEY `ma_rap_phim` (`ma_rap_phim`,`ma_so_phong`,`ngay_gio_chieu`),
  KEY `ma_rap_phim_2` (`ma_rap_phim`,`ma_so_phong`,`ma_so_ghe`),
  CONSTRAINT `vephim_ibfk_1` FOREIGN KEY (`ma_ve_phim`) REFERENCES `sanpham` (`id_sanpham`),
  CONSTRAINT `vephim_ibfk_2` FOREIGN KEY (`ma_rap_phim`, `ma_so_phong`, `ngay_gio_chieu`) REFERENCES `suatchieu` (`ma_rap_phim`, `ma_so_phong`, `ngay_gio_chieu`),
  CONSTRAINT `vephim_ibfk_3` FOREIGN KEY (`ma_rap_phim`, `ma_so_phong`, `ma_so_ghe`) REFERENCES `ghe` (`ma_rap_phim`, `ma_so_phong`, `ma_so_ghe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vephim`
--

LOCK TABLES `vephim` WRITE;
/*!40000 ALTER TABLE `vephim` DISABLE KEYS */;
INSERT INTO `vephim` VALUES (10000,'BD',201,'A01','2021-01-05 08:30:00'),(10002,'BD',201,'C01','2021-01-07 08:30:00'),(10015,'BD',201,'C01','2021-05-10 08:30:00'),(10017,'BD',201,'E05','2021-05-12 08:30:00'),(10045,'BD',202,'A01',NULL),(10046,'BD',202,'A05',NULL),(10047,'BD',202,'B04',NULL),(10001,'BD',202,'B01','2021-01-06 08:30:00'),(10016,'BD',202,'D05','2021-05-11 17:30:00'),(10030,'BD',202,'A01','2021-09-10 17:30:00'),(10031,'BD',202,'A03','2021-09-11 17:30:00'),(10032,'BD',202,'A04','2021-09-12 17:30:00'),(10123,'BD',202,'D04','2023-12-15 10:15:00'),(10124,'BD',202,'D04','2023-12-15 10:15:00'),(10120,'BD',202,'D03','2023-12-15 15:25:00'),(10121,'BD',202,'D04','2023-12-15 15:25:00'),(10122,'BD',202,'E05','2023-12-15 15:25:00'),(10125,'BD',202,'C04','2024-12-10 10:00:00'),(10126,'BD',202,'E05','2024-12-10 10:00:00'),(10051,'DL',201,'B01',NULL),(10052,'DL',201,'B03',NULL),(10006,'DL',201,'E01','2021-01-07 08:30:00'),(10007,'DL',201,'D04','2021-01-08 08:30:00'),(10021,'DL',201,'A04','2021-05-14 08:30:00'),(10022,'DL',201,'B01','2021-05-15 08:30:00'),(10036,'DL',201,'A03','2021-09-14 08:30:00'),(10037,'DL',201,'E03','2021-09-15 08:30:00'),(10053,'DL',202,'C05',NULL),(10008,'DL',202,'B03','2021-01-09 17:30:00'),(10023,'DL',202,'C03','2021-05-16 17:30:00'),(10038,'DL',202,'B04','2021-05-16 17:30:00'),(10048,'HCM',201,'A01',NULL),(10003,'HCM',201,'A02','2021-01-06 08:30:00'),(10018,'HCM',201,'E01','2021-05-13 08:30:00'),(10019,'HCM',201,'E02','2021-05-14 08:30:00'),(10020,'HCM',201,'E03','2021-05-15 08:30:00'),(10033,'HCM',201,'A03','2021-09-13 08:30:00'),(10049,'HCM',202,'B01',NULL),(10004,'HCM',202,'B03','2021-01-07 17:30:00'),(10034,'HCM',202,'B01','2021-09-14 08:30:00'),(10050,'HCM',203,'E03',NULL),(10005,'HCM',203,'D02','2021-01-08 17:30:00'),(10035,'HCM',203,'E01','2021-09-15 08:30:00'),(10057,'TG',201,'B04',NULL),(10058,'TG',201,'B05',NULL),(10059,'TG',201,'C05',NULL),(10012,'TG',201,'A04','2021-01-09 08:30:00'),(10014,'TG',201,'E01','2021-01-11 08:30:00'),(10027,'TG',201,'A02','2021-05-18 08:30:00'),(10028,'TG',201,'B02','2021-05-19 08:30:00'),(10042,'TG',201,'A01','2021-09-16 08:30:00'),(10043,'TG',201,'A03','2021-09-17 08:30:00'),(10044,'TG',201,'E05','2021-09-18 08:30:00'),(10013,'TG',202,'E04','2021-01-10 17:30:00'),(10029,'TG',202,'C02','2021-05-20 17:30:00'),(10054,'TTH',201,'A01',NULL),(10055,'TTH',201,'A02',NULL),(10009,'TTH',201,'B05','2021-01-08 08:30:00'),(10024,'TTH',201,'A05','2021-05-16 08:30:00'),(10039,'TTH',201,'A01','2021-09-15 08:30:00'),(10056,'TTH',202,'E01',NULL),(10010,'TTH',202,'C04','2021-01-09 17:30:00'),(10011,'TTH',202,'C05','2021-01-10 17:30:00'),(10025,'TTH',202,'D04','2021-05-17 17:30:00'),(10026,'TTH',202,'E03','2021-05-18 17:30:00'),(10040,'TTH',202,'A02','2021-09-16 17:30:00'),(10041,'TTH',202,'B02','2021-09-17 17:30:00');
/*!40000 ALTER TABLE `vephim` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 22:04:10
