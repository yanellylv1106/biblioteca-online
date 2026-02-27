const Hero = ({ libro }) => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${libro.imagen})` }}
    >
      <div className="hero__overlay">
        <h2>{libro.titulo}</h2>
        <p>{libro.descripcion}</p>
      </div>
    </div>
  );
};

export default Hero;