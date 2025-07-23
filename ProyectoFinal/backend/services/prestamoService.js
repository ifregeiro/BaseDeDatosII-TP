const Prestamo = require('../models/Prestamo');

exports.createPrestamo = async (data) => await new Prestamo(data).save();
exports.getPrestamoById = async (id) => await Prestamo.findById(id);
exports.updatePrestamo = async (id, update) => await Prestamo.findByIdAndUpdate(id, update, { new: true });
