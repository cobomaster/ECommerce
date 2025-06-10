// Ejemplo para mostrar el número total de artículos en el header
// filepath: c:\Users\cobom\OneDrive\Escritorio\Git\e-commerce\e-commerce\src\components\Header.jsx
import React from "react";

function Header({ carrito }) {
  // Calcula el número total de artículos sumando las cantidades
  const totalArticulos = carrito.reduce(
    (sum, item) => sum + Number(item.cantidad || 1),
    0
  );

  return (
    <header className="header">
      <h1>Mi E-commerce</h1>
      <div className="carrito-resumen">
        🛒 Carrito: <span style={{ fontWeight: "bold" }}>{totalArticulos}</span> artículo(s)
      </div>
    </header>
  );
}

export default Header;