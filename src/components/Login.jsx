import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (name.trim() !== "") {
      login(name);
    }
  };

  return (
    <div className="login">
      <div className="login__overlay"></div>

      <div className="login__card">
        <h1 className="login__logo">BiblioFlix</h1>
        <p className="login__subtitle">
          Tu biblioteca digital premium
        </p>

        <div className="login__form">
          <input
            className="login__input"
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            className="login__button"
            onClick={handleLogin}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;