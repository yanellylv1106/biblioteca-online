import { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { librosData } from "./data/books";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LibroRow from "./components/BookRow";
import SidebarAlquileres from "./components/SidebarAlquileres";
import Login from "./components/Login";
import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);
  const [alquileres, setAlquileres] = useState([]);

  if (!user) return <Login />;

  const alquilar = (libro) => {
    const fechaFin = new Date();
    fechaFin.setDate(fechaFin.getDate() + 14);

    setAlquileres([
      ...alquileres,
      { ...libro, fechaFin }
    ]);
  };

  const extender = (id) => {
    setAlquileres(
      alquileres.map((l) =>
        l.id === id
          ? {
              ...l,
              fechaFin: new Date(
                new Date(l.fechaFin).setDate(
                  new Date(l.fechaFin).getDate() + 7
                )
              )
            }
          : l
      )
    );
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero libro={librosData[0]} />
      <div className="content">
        <LibroRow
          titulo="Populares"
          libros={librosData}
          alquilar={alquilar}
        />
      </div>
      <SidebarAlquileres alquileres={alquileres} extender={extender} />
    </div>
  );
}

export default App;