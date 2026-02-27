const SidebarAlquileres = ({ alquileres, extender }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Mis Alquileres</h2>
      {alquileres.length === 0 && (
        <p className="sidebar__empty">No tienes libros alquilados</p>
      )}
      {alquileres.map((libro) => (
        <div key={libro.id} className="sidebar__item">
          <p>{libro.titulo}</p>
          <button
            className="sidebar__btn"
            onClick={() => extender(libro.id)}
          >
            Extender plazo
          </button>
        </div>
      ))}
    </aside>
  );
};

export default SidebarAlquileres;