import "../styles/book-card.css";

function BookCard({ book, alquilar, extender }) {
  return (
    <div className="book-card">
      <img src={book.portada} className="book-card__image" />

      <div className="book-card__content">
        <h3 className="book-card__title">{book.titulo}</h3>

        <p className="book-card__info"><strong>Autor:</strong> {book.autor}</p>
        <p className="book-card__info"><strong>Año:</strong> {book.anio}</p>
        <p className="book-card__info"><strong>ISBN-10:</strong> {book.isbn10}</p>
        <p className="book-card__info"><strong>ISBN-13:</strong> {book.isbn13}</p>
        <p className="book-card__info"><strong>Categoría:</strong> {book.categoria}</p>
        <p className="book-card__info"><strong>Idioma:</strong> {book.idioma}</p>
        <p className="book-card__info"><strong>Sinopsis:</strong> {book.descripcion}</p>
        <p className="book-card__info"><strong>Crítica:</strong> {book.critica}</p>

        {book.disponible ? (
          <button
            className="book-card__button"
            onClick={() => alquilar(book.id)}
          >
            Alquilar
          </button>
        ) : (
          <>
            <p className="book-card__status">
              Disponible hasta: {new Date(book.fechaFin).toLocaleDateString()}
            </p>
            <button
              className="book-card__button book-card__button--extend"
              onClick={() => extender(book.id)}
            >
              Extender plazo
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;