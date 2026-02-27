import { useState } from "react";
import "./App.css";
import { librosData } from "./data/books";
import Header from "./components/Header";
import Filtros from "./components/Filtros";
import LibroCard from "./components/LibroCard";
import SidebarAlquileres from "./components/SidebarAlquileres";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [alquileres, setAlquileres] = useState([]);

  const alquilar = (libro) => {
    if (!alquileres.find((l) => l.id === libro.id)) {
      setAlquileres([...alquileres, libro]);
    }
  };

  const extender = (id) => {
    alert("Plazo extendido para libro ID: " + id);
  };

  const librosFiltrados = librosData.filter((libro) =>
    (libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.isbn10.includes(busqueda) ||
      libro.isbn13.includes(busqueda)) &&
    (categoria === "" || libro.categoria === categoria)
  );

  return (
    <div className="layout">
      <SidebarAlquileres alquileres={alquileres} extender={extender} />
      <div className="main">
        <Header busqueda={busqueda} setBusqueda={setBusqueda} />
        <Filtros categoria={categoria} setCategoria={setCategoria} />
        <div className="grid">
          {librosFiltrados.map((libro) => (
            <LibroCard key={libro.id} libro={libro} alquilar={alquilar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;