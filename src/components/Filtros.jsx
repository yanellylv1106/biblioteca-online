const Filtros = ({ categoria, setCategoria }) => {
  return (
    <div className="filtros">
      <select
        className="filtros__dropdown"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        <option value="Novela">Novela</option>
        <option value="Tecnología">Tecnología</option>
      </select>
    </div>
  );
};

export default Filtros;