import { useState } from "react";

export default function LibroForm({ onAgregar }) {
  const [form, setForm] = useState({ titulo: "", autor: "", isbn: "", genero: "", anioPublicacion: "", copias: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar({ ...form, anioPublicacion: parseInt(form.anioPublicacion), copias: parseInt(form.copias), disponibles: parseInt(form.copias) });
    setForm({ titulo: "", autor: "", isbn: "", genero: "", anioPublicacion: "", copias: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="libro-form">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          value={form[key]}
          onChange={handleChange}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          required
        />
      ))}
      <button type="submit">Agregar Libro</button>
    </form>
  );
}