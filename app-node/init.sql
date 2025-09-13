-- init.sql
CREATE DATABASE IF NOT EXISTS alumnos_db;
USE alumnos_db;

CREATE TABLE IF NOT EXISTS alumnos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50)
);

INSERT INTO alumnos (nombre) VALUES 
('Josefina'),
('Rosana'),
('Agustín'),
('Male');
