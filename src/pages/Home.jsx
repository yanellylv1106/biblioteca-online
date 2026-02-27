import BookList from "../components/BookList";

function Home() {
  return (
    <div className="container">
      <h1>Biblioteca Online Lara</h1>
      <p>Explora y alquila tus libros favoritos</p>
      <BookList />
    </div>
  );
}

export default Home;