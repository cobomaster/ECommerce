import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

// Productos de ejemplo
const productos = [
  { id: 1, title: "Camiseta React", price: 20, image: "/Fotos/camiseta.jpeg" },
  { id: 2, title: "Gorra JavaScript", price: 15, image: "/Fotos/Gorra.jpeg" },
  { id: 3, title: "Taza Frontend", price: 10, image: "/Fotos/taza.jpeg" },
];

function Productos() {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const handleAddToCart = (producto) => {
    console.log("Producto a añadir:", producto);
    setCarrito(prevCarrito => {
      const productoEnCarrito = prevCarrito.find(item => item.id === producto.id);
      if (productoEnCarrito) {
        // Si ya está en el carrito, se incrementa la cantidad
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si no está en el carrito, se agrega con cantidad 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  console.log("Renderizando Productos, carrito:", carrito);

  return (
    <>
      <Cart carrito={carrito} />
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
    </>
  );
}

export default Productos;
