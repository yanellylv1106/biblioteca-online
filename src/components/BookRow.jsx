import BookCard from "./BookCard";

const BookRow = ({ titulo, libros, alquilar }) => {
  return (
    <div className="row">
      <h2 className="row__title">{titulo}</h2>
      <div className="row__scroll">
        {libros.map((libro) => (
          <BookCard key={libro.id} libro={libro} alquilar={alquilar} />
        ))}
      </div>
    </div>
  );
};

export default BookRow;