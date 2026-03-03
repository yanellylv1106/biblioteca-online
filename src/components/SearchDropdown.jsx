import React from "react";

function SearchDropdown({ libros, busqueda, setBusqueda }) {
  if (!busqueda) return null;

  const resultados = libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="search-dropdown">
      {resultados.length > 0 ? (
        resultados.slice(0, 5).map((libro) => (
          <div
            key={libro.id}
            className="search-item"
            onClick={() => setBusqueda(libro.titulo)}
          >
            {libro.titulo} - {libro.autor}
          </div>
        ))
      ) : (
        <div className="search-item">Sin resultados</div>
      )}
    </div>
  );
}

export default SearchDropdown;