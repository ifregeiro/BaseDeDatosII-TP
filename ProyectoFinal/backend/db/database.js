const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/BibliotecaGrupo19');
    console.log('✅ Conexión a MongoDB exitosa');
  } catch (err) {
    console.error('❌ Error MongoDB', err);
    process.exit(1);
  }
};

module.exports = connectDB;
