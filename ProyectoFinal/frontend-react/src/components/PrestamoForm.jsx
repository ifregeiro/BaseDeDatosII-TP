import { useState } from "react";

export default function PrestamoForm({ onPrestar }) {
  const [isbn, setIsbn] = useState("");
  const [usuario, setUsuario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onPrestar(isbn, usuario);
    setIsbn("");
    setUsuario("");
  };

  return (
    <form onSubmit={handleSubmit} className="libro-form">
      <input value={isbn} onChange={(e) => setIsbn(e.target.value)} placeholder="ISBN del libro" required />
      <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Nombre del usuario" required />
      <button type="submit">Registrar Préstamo</button>
    </form>
  );
}