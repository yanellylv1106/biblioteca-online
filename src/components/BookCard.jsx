import { useNavigate } from "react-router-dom";
import "../styles/bookCard.css";

const BookCard = ({ libro, alquilar }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/detalle/${libro.id}`)}
    >
      <img src={libro.imagen} alt={libro.titulo} />

      <div className="card__info">
        <h4>{libro.titulo}</h4>

        <button
          onClick={(e) => {
            e.stopPropagation(); // evita navegar al detalle
            alquilar(libro);
          }}
        >
          Alquilar
        </button>
      </div>
    </div>
  );
};

export default BookCard;