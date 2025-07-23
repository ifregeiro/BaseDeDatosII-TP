import { useEffect, useState } from "react";
import { buscarLibros, agregarLibro } from "../api/libros";
import LibroCard from "../components/LibroCard";
import LibroForm from "../components/LibroForm";

export default function Libros() {
  const [libros, setLibros] = useState([]);
  const [criterio, setCriterio] = useState("");

  const cargarLibros = async () => {
    const data = await buscarLibros(criterio);
    setLibros(data);
  };

  useEffect(() => { cargarLibros(); }, []);

  return (
    <div className="contenedor">
      <h1>📚 Gestión de Libros 📚</h1>
      <div className="buscador">
        <input placeholder="Buscar..." value={criterio} onChange={(e) => setCriterio(e.target.value)} />
        <button onClick={cargarLibros}>Buscar</button>
      </div>
      <div className="lista-libros">
        {libros.map((libro) => <LibroCard key={libro._id} libro={libro} />)}
      </div>
      <h2>Agregar nuevo libro</h2>
      <LibroForm onAgregar={async (libro) => { await agregarLibro(libro); cargarLibros(); }} />
    </div>
  );
}