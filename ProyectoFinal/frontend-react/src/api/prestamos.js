import { API_URL } from "../config";

export const obtenerPrestamos = async () => {
  const res = await fetch(`${API_URL}/prestamos`);
  return await res.json();
};

export const registrarPrestamo = async (isbn, usuario) => {
  await fetch(`${API_URL}/prestamos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isbn, usuario }),
  });
};

export const devolverPrestamo = async (id) => {
  await fetch(`${API_URL}/prestamos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
};