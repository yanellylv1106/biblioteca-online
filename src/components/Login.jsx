import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login__overlay"></div>

      <div className="login__card">
        <div className="login__logo">Biblioteca Online Lara</div>
        <p className="login__subtitle">Inicia sesión para continuar</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="login__input"
            placeholder="Ingresa tu nombre o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="login__button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;