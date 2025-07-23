const mongoose = require('mongoose');

const PrestamoSchema = new mongoose.Schema({
  libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro' },
  usuario: String,
  fechaPrestamo: Date,
  fechaDevolucion: Date,
  devuelto: Boolean
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);
