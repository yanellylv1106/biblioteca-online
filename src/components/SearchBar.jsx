import "../styles/search.css";

function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="Buscar por título, ISBN, autor..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;