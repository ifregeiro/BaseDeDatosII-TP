# Trabajo Práctico 1 - Base de Datos II  
## Ejercicio 2: Implementación de Restricciones

### Objetivo

Crear una tabla `Matriculas` que tenga una clave foránea hacia la tabla `Estudiantes`, luego insertar datos válidos y, finalmente, insertar un dato que viole la integridad referencial para observar el comportamiento del motor de base de datos.

---

### 1. Creación de las tablas

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

---

### 2. Inserción de datos válidos

```sql
INSERT INTO Estudiantes (id_estudiante, nombre)
VALUES (1, 'Juan Pérez');

INSERT INTO Matriculas (id_matricula, id_estudiante, id_curso)
VALUES (100, 1, 101);
```

Estas operaciones se realizan correctamente, ya que el estudiante con `id_estudiante = 1` existe.

---

### 3. Inserción de datos inválidos (violación de clave foránea)

```sql
INSERT INTO Matriculas (id_matricula, id_estudiante, id_curso)
VALUES (101, 999, 102);
```

El estudiante con `id_estudiante = 999` no existe, por lo tanto se genera un error de integridad referencial. A continuación se muestra la captura del error:

![Error de clave foránea](img/error_foreign_key_matriculas.png)

---

### Conclusión

El sistema de base de datos impide la inserción de registros en `Matriculas` que hagan referencia a claves que no existen en `Estudiantes`, garantizando así la integridad referencial del modelo.

