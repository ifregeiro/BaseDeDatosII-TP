import { API_URL } from "../config";

export const obtenerReportes = async () => {
  const res = await fetch(`${API_URL}/reportes/populares`);
  return await res.json();
};