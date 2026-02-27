function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.portada} alt={book.titulo} />
      <h3>{book.titulo}</h3>
      <p>{book.autor}</p>
      <button>Alquilar</button>
    </div>
  );
}

export default BookCard;