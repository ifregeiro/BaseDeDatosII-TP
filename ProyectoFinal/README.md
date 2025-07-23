## Base de Datos II - Proyecto Final

---

### Generalidades

* Título: Mini proyecto con MongoDB - JavaScript.
* Proyecto seleccionado: Sistema de Biblioteca Digital (1).
* Entorno de ejecución: Node.js
* Web Framework: Express
* Lenguaje: JavaScript.
* Base de datos: MongoDB.
* Frontend: React.js

---

### Descripción:

* Se trata de un proyecto enfocado en el diseño de una base de datos en MongoDB y en la construcción de una API RESTful para su uso.
* El backend ofrece servicios de alta, consulta y modificación de libros y préstamos, junto a un reporte estadístico.
* Se proporciona una app web realizada en React.js para facilitar el acceso visual y rápido al sistema.
* La base de datos empleada se llama:
  `mongodb://localhost:27017/BibliotecaGrupo19`

---

### Instalación y ejecución:

* Requisitos: Tener instalado MongoDB y Node.js
* Ejecución:

  1. Ubicarse en la carpeta principal del proyecto.
  2. Ejecutar:

```bash
npm install
npm run start
```

3. La terminal indicará:

```
[1] Frontend activo en http://localhost:3000
[0] Conexión a MongoDB exitosa
[0] Servidor backend en http://localhost:3001
```


### Arquitectura General del Backend

```
                                             ↑                                              
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│             │    │             │    │             │    │             │    │             │
│  modelos     │◄─▶│  servicios   │◄─▶│ controladores │◄───▶ rutas API    │◄───▶   app.js     │◄─── localhost:3001
│             │    │             │    │             │    │             │    │             │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

### Estructura de Archivos Backend

```
proyecto/
├── backend/
│   ├── db/                     # Conexión y config de MongoDB.
│   ├── controllers/            # Lógica de control req/res.
│   ├── models/                 # Esquemas de libros y préstamos.
│   ├── routes/                 # Rutas de la API REST.
│   ├── services/               # Lógica de negocio.
│   ├── app.js                  # App principal Express.
│   └── package.json            # Dependencias del backend.
```

---

### Servicios API implementados

```
- GET  /libros                      Listar libros
- POST /libros                     Agregar nuevo libro
- GET  /libros/buscar              Buscar libros por título, autor o género

- GET  /prestamos                  Listar todos los préstamos
- POST /prestamos                 Registrar préstamo
- PUT  /prestamos/:id             Marcar como devuelto

- GET  /reportes/populares        Top 5 libros más prestados
```

---

### Vista Web React

```
- Vista de libros disponibles, búsqueda y alta
- Vista de préstamos activos y devueltos, con registro
- Vista de reportes: top 5 libros más prestados
```

---

### Estructura de carpetas del Frontend

```
frontend-react/
├── src/
│   ├── api/                    # Funciones fetch hacia backend
│   ├── components/             # Navbar, tarjetas, formularios
│   ├── pages/                  # Libros, Préstamos, Reportes
│   ├── styles/                 # Estilos CSS
│   ├── App.jsx
│   ├── index.js
│   └── config.js            # URL del backend
```

---

### GRUPO 11

---

### Integrantes

* Fregeiro Ignacio Agustín
* Sola Lucía

