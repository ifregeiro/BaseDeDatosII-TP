import { API_URL } from "../config";

export const buscarLibros = async (criterio = "") => {
  const res = await fetch(`${API_URL}/libros/buscar?criterio=${criterio}`);
  return await res.json();
};

export const agregarLibro = async (libro) => {
  await fetch(`${API_URL}/libros`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(libro),
  });
};