const libroService = require('../services/libroService');

exports.agregarLibro = async (req, res) => {
  try {
    const libro = await libroService.createLibro(req.body);
    res.status(201).json(libro);
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar libro' });
  }
};

exports.buscarLibros = async (req, res) => {
  try {
    const libros = await libroService.searchLibros(req.query.criterio || '');
    res.json(libros);
  } catch {
    res.status(500).json({ error: 'Error al buscar libros' });
  }
};

exports.eliminarLibro = async (req, res) => {
  try {
    await libroService.deleteLibro(req.params.id);
    res.status(200).json({ mensaje: 'Libro eliminado' });
  } catch {
    res.status(500).json({ error: 'Error al eliminar libro' });
  }
};
