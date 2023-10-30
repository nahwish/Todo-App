CREATE DATABASE todoapp;

CREATE TABLE todos(
  id varchar(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress BOOLEAN,
  description VARCHAR(255),
  category VARCHAR(30),
  date VARCHAR(300)
);

CREATE TABLE users(
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

