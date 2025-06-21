CREATE DATABASE IF NOT EXISTS prueba_plan;
USE prueba_plan;

-- Eliminar la tabla si ya existe
DROP TABLE IF EXISTS productos;

-- Crear tabla sin índices al principio
CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  categoria VARCHAR(50),
  precio DECIMAL(10, 2)
);

DELIMITER //

CREATE PROCEDURE insertar_productos()
BEGIN
  DECLARE i INT DEFAULT 1;
  WHILE i <= 100000 DO
    INSERT INTO productos (nombre, categoria, precio)
    VALUES (
      CONCAT('Producto ', i),
      ELT(FLOOR(1 + (RAND() * 5)), 'Electrónica', 'Ropa', 'Hogar', 'Juguetes', 'Libros'),
      ROUND(50 + (RAND() * 950), 2)
    );
    SET i = i + 1;
  END WHILE;
END;
//

DELIMITER ;

CALL insertar_productos();

EXPLAIN SELECT * FROM productos WHERE nombre = 'Producto 50000';

CREATE INDEX idx_nombre ON productos(nombre);

EXPLAIN SELECT * FROM productos WHERE nombre = 'Producto 50000';
