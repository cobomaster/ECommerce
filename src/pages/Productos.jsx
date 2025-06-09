import { useState } from "react";
import ProductCard from "../components/ProductCard";

const productos = [
  { id: 1, title: "Camiseta React", price: 20, image: "Fotos/camiseta.jpeg" },
  { id: 2, title: "Gorra JavaScript", price: 15, image: "Fotos/Gorra.jpeg" },
  { id: 3, title: "Taza Frontend", price: 10, image: "Fotos/taza.jpeg" },
];

function Productos() {
  const [carrito, setCarrito] = useState([]);

  const handleAddToCart = (producto) => {
    setCarrito([...carrito, producto]);
    console.log("Carrito actual:", [...carrito, producto]);
  };

  return (
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
  );
}

export default Productos;
