import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Libros</Link>
      <Link to="/prestamos">Préstamos</Link>
      <Link to="/reportes">Reportes</Link>
    </nav>
  );
}