const libroService = require('../services/libroService');
const prestamoService = require('../services/prestamoService');

exports.prestarLibro = async (req, res) => {
  const { isbn, usuario } = req.body;
  try {
    const libro = await libroService.getLibroByISBN(isbn);
    if (!libro || libro.disponibles <= 0)
      return res.status(400).json({ error: 'No hay copias disponibles' });

    libro.disponibles--;
    await libro.save();

    const prestamo = await prestamoService.createPrestamo({
      libroId: libro._id,
      usuario,
      fechaPrestamo: new Date(),
      devuelto: false
    });

    res.status(201).json(prestamo);
  } catch {
    res.status(500).json({ error: 'Error al prestar libro' });
  }
};

exports.devolverLibro = async (req, res) => {
  try {
    const prestamo = await prestamoService.getPrestamoById(req.params.prestamoId);
    if (!prestamo || prestamo.devuelto)
      return res.status(404).json({ error: 'Préstamo no válido' });

    prestamo.devuelto = true;
    prestamo.fechaDevolucion = new Date();
    await prestamo.save();

    const libro = await libroService.getLibroById(prestamo.libroId);
    libro.disponibles++;
    await libro.save();

    res.json({ mensaje: 'Libro devuelto' });
  } catch {
    res.status(500).json({ error: 'Error al devolver libro' });
  }
};


exports.crearPrestamo = async (req, res) => {
  try {
    const prestamo = await prestamoService.createPrestamo(req.body);
    res.status(201).json(prestamo);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear préstamo' });
  }
};
