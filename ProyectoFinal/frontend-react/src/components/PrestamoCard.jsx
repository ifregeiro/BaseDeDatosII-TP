export default function PrestamoCard({ prestamo, onDevolver }) {
  return (
    <div className="libro-card">
      <h3>{prestamo.libro?.titulo || "Libro desconocido"}</h3>
      <p>👤 Usuario: {prestamo.usuario}</p>
      <p>📅 Prestado: {new Date(prestamo.fechaPrestamo).toLocaleDateString()}</p>
      <p>📅 Devolución: {prestamo.devuelto ? new Date(prestamo.fechaDevolucion).toLocaleDateString() : "Pendiente"}</p>
      {!prestamo.devuelto && (
        <button onClick={() => onDevolver(prestamo._id)}>Marcar como devuelto</button>
      )}
    </div>
  );
}