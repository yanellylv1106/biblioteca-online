const LibroCard = ({ libro, alquilar }) => {
  return (
    <div className="libro-card">
      <img className="libro-card__img" src={libro.imagen} alt={libro.titulo} />
      <div className="libro-card__info">
        <h3 className="libro-card__title">{libro.titulo}</h3>
        <p className="libro-card__autor">{libro.autor}</p>
        <p className="libro-card__descripcion">{libro.descripcion}</p>
        <button
          className="libro-card__btn"
          onClick={() => alquilar(libro)}
        >
          Alquilar
        </button>
      </div>
    </div>
  );
};

export default LibroCard;