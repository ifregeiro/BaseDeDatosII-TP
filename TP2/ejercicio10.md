
# Trabajo Práctico 2 - Base de Datos II  
## MongoDB - Ejercicio 10: Seguridad y Backups

---

### Consigna

Mostrar los pasos para:
- Crear un usuario con permisos de lectura y escritura.
- Realizar un backup de una base de datos.
- Restaurar el backup en caso de pérdida de datos.

---

### Parte 1: Crear un usuario con permisos de lectura y escritura

---

#### Código

```js
use mi_base

db.createUser({
  user: "usuario_rw",
  pwd: "contrasena123",
  roles: [
    { role: "readWrite", db: "mi_base" }
  ]
})
```

---

#### Resultado esperado

El sistema devuelve un mensaje como:
```json
{ "ok" : 1 }
```
Esto indica que el usuario fue creado exitosamente y ya puede conectarse con permisos de lectura y escritura sobre `mi_base`.

---

### Parte 2: Backup de una base de datos

---

#### Pasos

1. Abrimos una terminal (CMD, bash, etc.).
2. Usamos el comando `mongodump` con los parámetros necesarios.

---

#### Comando

```bash
mongodump --db mi_base --out /ruta/a/backup/
```

---

#### Resultado esperado

Se genera una carpeta `/ruta/a/backup/mi_base` con archivos BSON y JSON que contienen la estructura y los datos de la base.

---

### Parte 3: Restauración del backup

---

#### Pasos

1. Simulamos la pérdida de datos.
2. Ejecutamos `mongorestore` para recuperar los datos.

---

#### Código

```js
use mi_base
db.ventas.drop()
```

```bash
mongorestore --db mi_base /ruta/a/backup/mi_base
```

---

#### Resultado esperado

La colección borrada vuelve a estar presente con todos sus datos tal como estaban al momento del backup.
