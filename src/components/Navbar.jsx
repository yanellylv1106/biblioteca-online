import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/navBar.css";

const Navbar = ({
  darkMode,
  setDarkMode,
  busqueda,
  setBusqueda,
  libros,
  reiniciarAlquileres,   // 👈 NUEVO
  alquileres             // 👈 NUEVO
}) => {
  const { user, logout } = useContext(AuthContext);

  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const searchRef = useRef(null);

  const sugerencias = libros
    .filter((libro) =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )
    .slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setMostrarDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!busqueda) {
      setMostrarDropdown(false);
    }
  }, [busqueda]);

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Biblioteca Online Lara</h1>

      <div className="navbar__actions">
        <div className="search-container" ref={searchRef}>
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setMostrarDropdown(true);
            }}
            onFocus={() => busqueda && setMostrarDropdown(true)}
            className="search-input"
          />

          {mostrarDropdown && sugerencias.length > 0 && (
            <div className="search-dropdown">
              {sugerencias.map((libro) => (
                <div
                  key={libro.id}
                  className="dropdown-item"
                  onClick={() => {
                    setBusqueda(libro.titulo);
                    setMostrarDropdown(false);
                  }}
                >
                  {libro.titulo}
                </div>
              ))}
            </div>
          )}
        </div>

        <span>{user?.name}</span>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>

        {/* SOLO SI HAY ALQUILERES */}
        {alquileres.length > 0 && (
          <button onClick={reiniciarAlquileres}>
            Reiniciar alquileres ({alquileres.length})
          </button>
        )}

        <button onClick={logout}>Salir</button>
      </div>
    </nav>
  );
};

export default Navbar;