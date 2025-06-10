import React from "react";
import "./Header.css";

function Header({ carrito }) {
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