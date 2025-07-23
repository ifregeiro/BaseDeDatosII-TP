const express = require('express');
const router = express.Router();

const controller = require('../controllers/libroController');
const validarLibro = require('../middlewares/validarLibro');
const validarID = require('../middlewares/validarID');

router.post('/', validarLibro, controller.agregarLibro);
router.get('/buscar', controller.buscarLibros);
router.delete('/:id', validarID, controller.eliminarLibro);

module.exports = router;
