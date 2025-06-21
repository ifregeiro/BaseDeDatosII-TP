CREATE TABLE Clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  telefono VARCHAR(20)
);

CREATE TABLE Clientes_Auditoria (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  accion VARCHAR(10),
  nombre_old VARCHAR(100),
  email_old VARCHAR(100),
  telefono_old VARCHAR(20),
  nombre_new VARCHAR(100),
  email_new VARCHAR(100),
  telefono_new VARCHAR(20),
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE TRIGGER trg_Clientes_Insert
AFTER INSERT ON Clientes
FOR EACH ROW
BEGIN
  INSERT INTO Clientes_Auditoria (cliente_id, accion, nombre_new, email_new, telefono_new)
  VALUES (NEW.id, 'INSERT', NEW.nombre, NEW.email, NEW.telefono);
END;
//

DELIMITER ;

-- Trigger para actualizaciones
DELIMITER //

CREATE TRIGGER trg_Clientes_Update
AFTER UPDATE ON Clientes
FOR EACH ROW
BEGIN
  INSERT INTO Clientes_Auditoria (
    cliente_id, accion, 
    nombre_old, email_old, telefono_old,
    nombre_new, email_new, telefono_new
  )
  VALUES (
    NEW.id, 'UPDATE', 
    OLD.nombre, OLD.email, OLD.telefono, 
    NEW.nombre, NEW.email, NEW.telefono
  );
END;
//

DELIMITER ;


-- Trigger para eliminaciones
DELIMITER //

CREATE TRIGGER trg_Clientes_Delete
AFTER DELETE ON Clientes
FOR EACH ROW
BEGIN
  INSERT INTO Clientes_Auditoria (cliente_id, accion, nombre_old, email_old, telefono_old)
  VALUES (OLD.id, 'DELETE', OLD.nombre, OLD.email, OLD.telefono);
END;
//

DELIMITER ;

-- Prueba de inserción
INSERT INTO Clientes (nombre, email, telefono) VALUES ('Juan Pérez', 'juan@mail.com', '123456789');

UPDATE Clientes SET telefono = '987654321' WHERE nombre = 'Juan Pérez';

DELETE FROM Clientes WHERE nombre = 'Juan Pérez';

SELECT * FROM Clientes_Auditoria;
