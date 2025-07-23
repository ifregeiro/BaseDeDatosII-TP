const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  isbn: String,
  genero: String,
  anioPublicacion: Number,
  copias: Number,
  disponibles: Number
});

module.exports = mongoose.model('Libro', LibroSchema);
