const BookCard = ({ libro, alquilar }) => {
  return (
    <div className="card">
      <img src={libro.imagen} alt={libro.titulo} />
      <div className="card__info">
        <h4>{libro.titulo}</h4>
        <button onClick={() => alquilar(libro)}>Alquilar</button>
      </div>
    </div>
  );
};

export default BookCard;