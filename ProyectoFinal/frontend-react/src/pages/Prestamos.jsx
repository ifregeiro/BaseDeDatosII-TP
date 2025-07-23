import { useEffect, useState } from "react";
import { obtenerPrestamos, registrarPrestamo, devolverPrestamo } from "../api/prestamos";
import PrestamoCard from "../components/PrestamoCard";
import PrestamoForm from "../components/PrestamoForm";

export default function Prestamos() {
  const [prestamos, setPrestamos] = useState([]);

  const cargar = async () => {
    const data = await obtenerPrestamos();
    setPrestamos(data);
  };

  useEffect(() => { cargar(); }, []);

  return (
    <div className="contenedor">
      <h1>📥 Préstamos</h1>
      <PrestamoForm onPrestar={async (isbn, usuario) => {
        await registrarPrestamo(isbn, usuario);
        cargar();
      }} />
      <div className="lista-libros">
        {prestamos.map(p => (
          <PrestamoCard key={p._id} prestamo={p} onDevolver={async (id) => {
            await devolverPrestamo(id);
            cargar();
          }} />
        ))}
      </div>
    </div>
  );
}