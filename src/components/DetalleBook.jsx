import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/detalleBook.css";

function DetalleBook({
  libro,
  onCerrar,
  alquilar,
  alquileres,
  favoritos,
  toggleFavorito
}) {
  const navigate = useNavigate();

  if (!libro) return null;

  const yaAlquilado = alquileres?.some((l) => l.id === libro.id);
  const esFavorito = favoritos?.some((f) => f.id === libro.id);

  return (
    <div className="detalle-container">
      <div className="detalle-card">

        <button 
          className="detalle-back"
          onClick={() => navigate("/")}
        >
          ← Regresar
        </button>

        <h2>{libro.titulo}</h2>

        <p><strong>Autor:</strong> {libro.autor}</p>
        <p><strong>Descripción:</strong> {libro.descripcion}</p>

        <div className="detalle-actions">
          <button onClick={() => alquilar(libro)} disabled={yaAlquilado}>
            {yaAlquilado ? "Ya alquilado" : "Alquilar"}
          </button>

          <button onClick={() => toggleFavorito(libro)}>
            {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default DetalleBook;