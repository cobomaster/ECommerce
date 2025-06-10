import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";

// Cambia aquí: solo el nombre del archivo, sin "Fotos/"
const productos = [
  { id: 1, title: "Camiseta React", price: 20, image: "camiseta.jpeg", descripcion: "Camiseta cómoda y moderna para fans de React." },
  { id: 2, title: "Gorra JavaScript", price: 15, image: "Gorra.jpeg", descripcion: "Gorra para amantes de JavaScript." },
  { id: 3, title: "Taza Frontend", price: 10, image: "taza.jpeg", descripcion: "Taza ideal para programadores frontend." },
];

function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleAddToCart = (producto) => {
    setCarrito((prevCarrito) => {
      const productoEnCarrito = prevCarrito.find((item) => item.id === producto.id);
      if (productoEnCarrito) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Number(item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Productos
            productos={productos}
            carrito={carrito}
            setCarrito={setCarrito}
            onAddToCart={handleAddToCart}
          />
        }
      />
      <Route
        path="/producto/:id"
        element={
          <DetalleProducto
            productos={productos}
            onAddToCart={handleAddToCart}
          />
        }
      />
    </Routes>
  );
}

export default App;