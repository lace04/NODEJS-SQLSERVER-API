-- MYSQL
CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) DEFAULT NULL,
    salary INT(9) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- SQLSERVER

CREATE TABLE employees (
    id INT NOT NULL IDENTITY(1,1),
    name VARCHAR(100) NULL,
    salary INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employees VALUES 
(1, "Joe", 1000),
(2, "Caro", 1000),
(3, "Smith", 1000),
(4, "Juan", 1000)