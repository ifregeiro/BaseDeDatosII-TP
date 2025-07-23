import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Libros from "./pages/Libros";
import Prestamos from "./pages/Prestamos";
import Reportes from "./pages/Reportes";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Libros />} />
        <Route path="/prestamos" element={<Prestamos />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  );
}

export default App;