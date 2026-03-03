function SidebarFavoritos({ favoritos }) {
  return (
    <aside className="sidebar-favoritos">
      <h3>❤️ Favoritos</h3>

      {favoritos.length === 0 ? (
        <p>No tienes favoritos</p>
      ) : (
        favoritos.map((libro) => (
          <div key={libro.id} className="favorito-item">
            {libro.titulo}
          </div>
        ))
      )}
    </aside>
  );
}

export default SidebarFavoritos;