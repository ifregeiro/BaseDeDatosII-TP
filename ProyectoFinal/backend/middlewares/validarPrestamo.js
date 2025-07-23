module.exports = (req, res, next) => {
  const { idLibro, fechaPrestamo, fechaDevolucion } = req.body;

  if (!idLibro || !fechaPrestamo || !fechaDevolucion) {
    return res.status(400).json({ error: 'Faltan datos del préstamo' });
  }

  next();
};
