const express = require('express');
const router = express.Router();
const controller = require('../controllers/prestamoController');

router.post('/prestar', controller.prestarLibro);
router.put('/devolver/:prestamoId', controller.devolverLibro);

const validarPrestamo = require('../middlewares/validarPrestamo');

router.post('/', validarPrestamo, controller.crearPrestamo);

module.exports = router;
