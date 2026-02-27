const SidebarAlquileres = ({ alquileres, extender }) => {
  const hoy = new Date();

  return (
    <aside className="sidebar">
      <h3>Mis Alquileres</h3>

      {alquileres.map((libro) => {
        const diasRestantes = Math.ceil(
          (new Date(libro.fechaFin) - hoy) / (1000 * 60 * 60 * 24)
        );

        return (
          <div key={libro.id} className="sidebar__item">
            <p>{libro.titulo}</p>
            <span>{diasRestantes} días restantes</span>
            <button onClick={() => extender(libro.id)}>
              Extender 7 días
            </button>
          </div>
        );
      })}
    </aside>
  );
};

export default SidebarAlquileres;