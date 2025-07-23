module.exports = (req, res, next) => {
  const { titulo, autor, isbn, genero, anioPublicacion, copias, disponibles } = req.body;

  if (!titulo || !autor || !isbn || !genero || !anioPublicacion || copias == null || disponibles == null) {
    return res.status(400).json({ error: 'Faltan campos obligatorios del libro' });
  }

  next();
};
