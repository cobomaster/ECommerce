import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Header from "../components/Header";
import "../pages/Home.css";


function Productos({ productos, carrito, setCarrito, onAddToCart }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState(""); // Si tienes categorías

  // Si tienes categorías, crea un array único de ellas:
  const categorias = [...new Set(productos.map(p => p.categoria).filter(Boolean))];

  // Filtrado por nombre y categoría
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.title.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria ? producto.categoria === categoria : true;
    return coincideNombre && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("");
  };

  return (
    <div>
      <Header carrito={carrito} />
      <Cart carrito={carrito} setCarrito={setCarrito} />
      <div style={{ margin: "20px 0", display: "flex", gap: 16 }}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        {categorias.length > 0 && (
          <select value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value="">Todas las categorías</option>
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        )}
        <button onClick={limpiarFiltros}>Limpiar</button>
      </div>
      <div className="productos-grid">
        {productosFiltrados.length === 0 ? (
          <p>No hay productos que coincidan con la búsqueda.</p>
        ) : (
          productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              onAddToCart={() => onAddToCart(producto)}
            />
          ))
          
        )}
      </div>
    </div>
    
  );
}

export default Productos;