import { useEffect, useState } from "react";
import { obtenerReportes } from "../api/reportes";
import ReporteCard from "../components/ReporteCard";

export default function Reportes() {
  const [populares, setPopulares] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerReportes();
      setPopulares(data);
    };
    cargar();
  }, []);

  return (
    <div className="contenedor">
      <h1>📊 Libros más prestados 📊</h1>
      <div className="lista-libros">
        {populares.map((libro, i) => <ReporteCard key={i} libro={libro} />)}
      </div>
    </div>
  );
}