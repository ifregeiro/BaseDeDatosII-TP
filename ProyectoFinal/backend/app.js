const express = require('express');
const cors = require('cors');
const connectDB = require('./db/database');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('Biblioteca Digital API'));

app.use('/api/libros', require('./routes/libroRoutes'));
app.use('/api/prestamos', require('./routes/prestamoRoutes'));
app.use('/api/reportes', require('./routes/reporteRoutes'));

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const logger = require('./middlewares/logger');
app.use(logger);

