/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : mytest

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2014-06-28 17:05:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order_master
-- ----------------------------
DROP TABLE IF EXISTS `order_master`;
CREATE TABLE `order_master` (
  `master_index` int(11) NOT NULL AUTO_INCREMENT,
  `m_index` int(11) NOT NULL,
  `master_time` datetime NOT NULL,
  `master_remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`master_index`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_master
-- ----------------------------
INSERT INTO `order_master` VALUES ('1', '1', '2014-06-22 22:55:54', 'none');
INSERT INTO `order_master` VALUES ('2', '1', '2014-06-23 22:56:19', 'none');
INSERT INTO `order_master` VALUES ('3', '3', '2014-06-25 22:56:39', 'night');
INSERT INTO `order_master` VALUES ('4', '4', '2014-06-25 22:56:54', 'morning');
INSERT INTO `order_master` VALUES ('5', '2', '2014-06-26 22:57:09', 'none');
