export default function LibroCard({ libro }) {
  return (
    <div className="libro-card">
      <h2>{libro.titulo}</h2>
      <p>👤 {libro.autor}</p>
      <p>📘 {libro.genero}</p>
      <p>📅 {libro.anioPublicacion}</p>
      <p>📦 {libro.disponibles} disponibles</p>
    </div>
  );
}