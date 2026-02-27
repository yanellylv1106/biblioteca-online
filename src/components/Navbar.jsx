import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">BiblioFlix</h1>

      <div className="navbar__actions">
        <span>{user?.name}</span>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <button onClick={logout}>Salir</button>
      </div>
    </nav>
  );
};

export default Navbar;