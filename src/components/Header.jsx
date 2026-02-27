const Header = ({ busqueda, setBusqueda }) => {
  return (
    <header className="header">
      <h1 className="header__title">Biblioteca Online Lara</h1>
      <input
        className="header__search"
        type="text"
        placeholder="Buscar por título, autor, ISBN..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </header>
  );
};

export default Header;