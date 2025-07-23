const connectDB = require('./database');
const Libro = require('../models/Libro');
const Prestamo = require('../models/Prestamo');

const seed = async () => {
  await connectDB();
  await Libro.deleteMany();
  await Prestamo.deleteMany();

  const libro1 = await Libro.create({
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    isbn: "978-0307389732",
    genero: "Realismo mágico",
    anioPublicacion: 1967,
    copias: 5,
    disponibles: 4
  });

  const libro2 = await Libro.create({
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    isbn: "978-0156012195",
    genero: "Ficción",
    anioPublicacion: 1943,
    copias: 3,
    disponibles: 3
  });

  console.log("✅ Datos cargados correctamente");
  process.exit();
};

seed();
