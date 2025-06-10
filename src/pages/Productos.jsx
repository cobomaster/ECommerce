import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import "./Productos.css";

const productos = [
  { id: 1, title: "Camiseta React", price: 20, image: "Fotos/camiseta.jpeg" },
  { id: 2, title: "Gorra JavaScript", price: 15, image: "Fotos/Gorra.jpeg" },
  { id: 3, title: "Taza Frontend", price: 10, image: "Fotos/taza.jpeg" },
];

function Productos() {
  // Recuperar carrito desde localStorage al cargar la app
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // (Opcional) Feedback visual al restaurar el carrito
  useEffect(() => {
    if (carrito.length > 0) {
      // Puedes mostrar un mensaje visual aquí si quieres
      // alert("¡Carrito restaurado correctamente!");
    }
  }, []);

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
    <div>
      <Cart carrito={carrito} setCarrito={setCarrito} />
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            onAddToCart={() => handleAddToCart(producto)}
          />
        ))}
      </div>
    </div>
  );
}

export default Productos;