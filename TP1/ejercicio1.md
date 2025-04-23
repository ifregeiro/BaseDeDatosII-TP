# Trabajo Práctico 1 - Base de Datos II  
## Ejercicio 1: Reglas de Integridad

### Planteo

En una base de datos de una universidad, si se intenta eliminar un estudiante que tiene cursos inscritos, se puede generar una violación a la integridad referencial. Este ejercicio demuestra esa situación y analiza alternativas de solución.

---

### 1. Prueba sin ON DELETE CASCADE

Se crean las tablas `Estudiantes` y `Matriculas` con una clave foránea sin acción definida en la eliminación:

```sql
CREATE TABLE Estudiantes (
    id_estudiante INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Matriculas (
    id_matricula INT PRIMARY KEY,
    id_estudiante INT,
    id_curso INT,
    FOREIGN KEY (id_estudiante) REFERENCES Estudiantes(id_estudiante)
);
```

Se insertan registros válidos y se intenta eliminar un estudiante:

```sql
INSERT INTO Estudiantes (id_estudiante, nombre) VALUES (1, 'Juan Pérez');
INSERT INTO Matriculas (id_matricula, id_estudiante, id_curso) VALUES (100, 1, 101);
DELETE FROM Estudiantes WHERE id_estudiante = 1;
```

El intento de eliminación genera un error de integridad:

![Error de integridad referencial](img/error_integridad_referencial.png)

---

### 2. Prueba con ON DELETE CASCADE

Se elimina la tabla `Matriculas` y se vuelve a crear con la opción `ON DELETE CASCADE`:

```sql
DROP TABLE Matriculas;

CREATE TABLE Matriculas (
    id_matricula INT PRIMARY KEY,
    id_estudiante INT,
    id_curso INT,
    FOREIGN KEY (id_estudiante) REFERENCES Estudiantes(id_estudiante) ON DELETE CASCADE
);
```

Se repite el proceso de inserción y eliminación:

```sql
INSERT INTO Matriculas (id_matricula, id_estudiante, id_curso) VALUES (100, 1, 101);
DELETE FROM Estudiantes WHERE id_estudiante = 1;
```

Esta vez, la operación se realiza correctamente, eliminando tanto al estudiante como a sus matrículas asociadas:

![Eliminación exitosa con CASCADE](img/delete_con_cascade.png)

---

### Conclusión

El uso de claves foráneas con `ON DELETE RESTRICT` protege contra eliminaciones no deseadas, mientras que `ON DELETE CASCADE` permite limpiar registros relacionados automáticamente. La elección depende del comportamiento esperado en el sistema.
