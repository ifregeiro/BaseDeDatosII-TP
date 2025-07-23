const express = require('express');
const router = express.Router();
const controller = require('../controllers/reporteController');

router.get('/populares', controller.reportePopulares);

module.exports = router;
