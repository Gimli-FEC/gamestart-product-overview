DROP DATABASE IF EXISTS fec_Module_1;
CREATE DATABASE fec_Module_1;
USE fec_Module_1;


CREATE TABLE products (
  id INT AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  publisher VARCHAR(50) NOT NULL,
  content_rating INT NOT NULL REFERENCES esrbRatings(id),
  userRating DECIMAL(2,1),
  priceNew DECIMAL(5,2),
  priceUsed DECIMAL(5,2),
  currentStockNew INT NOT NULL,
  currentStockUsed INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE esrbRatings (
  id INT AUTO_INCREMENT,
  name VARCHAR(50),
  url VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE images (
  id INT AUTO_INCREMENT,
  product_id INT NOT NULL REFERENCES product(id),
  url VARCHAR(100),
  PRIMARY KEY (id)
);