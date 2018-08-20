DROP DATABASE IF EXISTS bloknot;

CREATE DATABASE bloknot;

USE bloknot;

CREATE TABLE notes (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

-- add a created at property to track 10 notes/day

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
