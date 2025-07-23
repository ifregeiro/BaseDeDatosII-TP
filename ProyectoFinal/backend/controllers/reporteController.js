const Prestamo = require('../models/Prestamo');

exports.reportePopulares = async (req, res) => {
  try {
    const populares = await Prestamo.aggregate([
      { $group: { _id: '$libroId', total: { $sum: 1 } } },
      { $sort: { total: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: 'libros',
          localField: '_id',
          foreignField: '_id',
          as: 'libro'
        }
      },
      { $unwind: '$libro' },
      {
        $project: {
          titulo: '$libro.titulo',
          autor: '$libro.autor',
          totalPrestamos: '$total'
        }
      }
    ]);
    res.json(populares);
  } catch {
    res.status(500).json({ error: 'Error reporte populares' });
  }
};
