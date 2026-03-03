import "../styles/hero.css";

function Hero({ libro }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${libro.imagen})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{libro.titulo}</h1>
          <p className="hero-autor">{libro.autor}</p>
          <p className="hero-desc">{libro.descripcion}</p>

          <div className="hero-buttons">
            <button className="btn-primary">Leer ahora</button>
            <button className="btn-secondary">Más información</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;