import { useState, useEffect } from "react";

function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(key);
      return guardado ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error("Error guardando en localStorage:", error);
    }
  }, [key, valor]);

  return [valor, setValor];
}

export default useLocalStorage;