# Trabajo Práctico 1 - Base de Datos II  
## Ejercicio 1: Reglas de Integridad

### 📚 Planteo del problema
Dado un modelo de base de datos universitario, si un estudiante tiene cursos inscritos (registrados en una tabla `Matriculas`), su eliminación directa podría generar una **violación a la integridad referencial**.

---

### 🧱 Ejemplo de tablas involucradas

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

### ⚠️ Posible violación

Si se ejecuta:

```sql
DELETE FROM Estudiantes WHERE id_estudiante = 1;
```

y existen registros en `Matriculas` con `id_estudiante = 1`, se producirá un **error de integridad referencial**, ya que se estaría dejando una clave foránea apuntando a un registro inexistente.

---

### 🛡️ Mecanismos para evitar esta violación

1. **ON DELETE RESTRICT** *(opción por defecto)*  
   Impide borrar al estudiante si existen matrículas asociadas.

2. **ON DELETE CASCADE**  
   Elimina automáticamente las filas de `Matriculas` vinculadas al estudiante eliminado.

3. **ON DELETE SET NULL**  
   Asigna `NULL` a la columna `id_estudiante` en `Matriculas` cuando se elimina el estudiante.