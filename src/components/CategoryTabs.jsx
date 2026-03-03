import React from "react";

function CategoryTabs({ categorias, categoriaActiva, setCategoriaActiva }) {
  return (
    <div className="categorias-container">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={
            categoriaActiva === cat
              ? "categoria-btn active"
              : "categoria-btn"
          }
          onClick={() => setCategoriaActiva(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;