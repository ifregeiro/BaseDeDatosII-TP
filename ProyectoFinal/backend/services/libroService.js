const Libro = require('../models/Libro');

exports.createLibro = async (data) => await new Libro(data).save();

exports.searchLibros = async (criterio) => {
  const regex = new RegExp(criterio, 'i');
  return await Libro.find({
    $or: [{ titulo: regex }, { autor: regex }, { genero: regex }]
  });
};

exports.getLibroByISBN = async (isbn) => await Libro.findOne({ isbn });
exports.getLibroById = async (id) => await Libro.findById(id);
exports.updateLibro = async (id, update) => await Libro.findByIdAndUpdate(id, update, { new: true });
exports.deleteLibro = async (id) => await Libro.findByIdAndDelete(id);

