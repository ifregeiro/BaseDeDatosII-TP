export default function ReporteCard({ libro }) {
  return (
    <div className="libro-card">
      <h3>{libro.titulo}</h3>
      <p>👤 Autor: {libro.autor}</p>
      <p>📘 Género: {libro.genero}</p>
      <p>🔁 Veces prestado: {libro.prestamos}</p>
    </div>
  );
}