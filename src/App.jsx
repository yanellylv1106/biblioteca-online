import { useState, useContext } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LibroRow from "./components/BookRow";
import SidebarAlquileres from "./components/SidebarAlquileres";
import CategoryTabs from "./components/CategoryTabs";
import DetalleLibro from "./components/DetalleBook";

import { librosData } from "./data/books";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/global.css";

function App() {
  const { user } = useContext(AuthContext);

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  const [alquileres, setAlquileres] = useLocalStorage("alquileres", []);
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", []);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  /* Reiniciar alquileres */
  const reiniciarAlquileres = () => {
    if (window.confirm("¿Deseas reiniciar todos los alquileres?")) {
      setAlquileres([]);
    }
  };

  const categorias = [
    "Todos",
    ...new Set(librosData.map((libro) => libro.categoria))
  ];

  const librosFiltrados = librosData.filter((libro) => {
    const coincideBusqueda =
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaActiva === "Todos" ||
      libro.categoria === categoriaActiva;

    return coincideBusqueda && coincideCategoria;
  });

  const alquilar = (libro) => {
    if (alquileres.find((l) => l.id === libro.id)) return;

    const fechaFin = new Date();
    fechaFin.setDate(fechaFin.getDate() + 14);

    setAlquileres([...alquileres, { ...libro, fechaFin }]);
  };

  const extender = (id) => {
    setAlquileres(
      alquileres.map((l) =>
        l.id === id
          ? {
              ...l,
              fechaFin: new Date(
                new Date(l.fechaFin).setDate(
                  new Date(l.fechaFin).getDate() + 7
                )
              )
            }
          : l
      )
    );
  };

  const toggleFavorito = (libro) => {
    const existe = favoritos.find((l) => l.id === libro.id);

    if (existe) {
      setFavoritos(favoritos.filter((l) => l.id !== libro.id));
    } else {
      setFavoritos([...favoritos, libro]);
    }
  };

  const DetallePage = () => {
    const { id } = useParams();
    const libro = librosData.find((l) => l.id === Number(id));

    if (!libro) return <div>Libro no encontrado</div>;

    return (
      <DetalleLibro
        libro={libro}
        alquilar={alquilar}
        alquileres={alquileres}
        favoritos={favoritos}
        toggleFavorito={toggleFavorito}
      />
    );
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Navbar solo si hay usuario */}
      {user && (
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          libros={librosData}
          reiniciarAlquileres={reiniciarAlquileres}
          alquileres={alquileres}
        />
      )}

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            user ? <Navigate to="/" replace /> : <Login />
          }
        />

        {/* HOME */}
        <Route
          path="/"
          element={
            user ? (
              <>
                <main className="main-content">
                  <Hero libro={librosFiltrados[0] || librosData[0]} />

                  <CategoryTabs
                    categorias={categorias}
                    categoriaActiva={categoriaActiva}
                    setCategoriaActiva={setCategoriaActiva}
                  />

                  <div className="row-container">
                    {categoriaActiva === "Todos"
                      ? categorias
                          .filter((cat) => cat !== "Todos")
                          .map((cat) => {
                            const librosCategoria = librosFiltrados.filter(
                              (l) => l.categoria === cat
                            );

                            if (librosCategoria.length === 0) return null;

                            return (
                              <LibroRow
                                key={cat}
                                titulo={cat}
                                libros={librosCategoria}
                                alquilar={alquilar}
                              />
                            );
                          })
                      : librosFiltrados.length > 0 && (
                          <LibroRow
                            titulo={categoriaActiva}
                            libros={librosFiltrados}
                            alquilar={alquilar}
                          />
                        )}
                  </div>
                </main>

                <SidebarAlquileres
                  alquileres={alquileres}
                  extender={extender}
                />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* DETALLE */}
        <Route
          path="/detalle/:id"
          element={user ? <DetallePage /> : <Navigate to="/login" />}
        />

        {/* FAVORITOS */}
        <Route
          path="/favoritos"
          element={
            user ? (
              <LibroRow
                titulo="Mis Favoritos"
                libros={favoritos}
                alquilar={alquilar}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ALQUILERES */}
        <Route
          path="/alquileres"
          element={
            user ? (
              <SidebarAlquileres
                alquileres={alquileres}
                extender={extender}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>

    </div>
  );
}

export default App;