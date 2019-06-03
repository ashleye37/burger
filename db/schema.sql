-- Creating database where burger table will live. --

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL auto_increment,
  name varchar(300) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY(id)
);
