import BookCard from "./BookCard";
import "../styles/bookRow.css";

const BookRow = ({ titulo, libros, alquilar }) => {
  if (!libros || libros.length === 0) {
    return null;
  }

  return (
    <section className="row">
      <h2 className="row__title">{titulo}</h2>

      <div className="row__scroll">
        {libros.map((libro) => (
          <BookCard
            key={libro.id}
            libro={libro}
            alquilar={alquilar}
          />
        ))}
      </div>
    </section>
  );
};

export default BookRow;