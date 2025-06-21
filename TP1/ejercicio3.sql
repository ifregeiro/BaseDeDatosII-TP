CREATE DATABASE IF NOT EXISTS Banco;
USE Banco;

DROP TABLE IF EXISTS cuentas;
CREATE TABLE cuentas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    saldo DECIMAL(10,2)
);

INSERT INTO cuentas (nombre, saldo) VALUES ('Usuario1', 1000.00);

-- Sesión A
SET TRANSACTION ISOLATION LEVEL READ COMMITTED; -- SERIALIZABLE
START TRANSACTION;

-- Usuario A lee el saldo actual
SELECT saldo FROM cuentas WHERE id = 1;

-- ✋ Esperar unos segundos para que la Sesión B haga su operación
-- Luego continuar en esta misma sesión A (más abajo)

-- Sesión B
-- Establecer el mismo nivel de aislamiento que en A
SET TRANSACTION ISOLATION LEVEL READ COMMITTED; -- SERIALIZABLE
START TRANSACTION;

-- Usuario B descuenta $100
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;

-- Confirmar la operación
COMMIT;

-- Volver a la Sesión A
-- Usuario A intenta también descontar $100
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;

-- Confirmar cambios
COMMIT;

