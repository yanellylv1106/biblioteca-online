import BookCard from "./BookCard";

function BookList({ books, alquilar, extender }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          alquilar={alquilar}
          extender={extender}
        />
      ))}
    </div>
  );
}

export default BookList;