import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Header from "../components/Header";
import "./Productos.css";

function Productos({ productos, carrito, setCarrito, onAddToCart }) {
  return (
    <div>
      <Header carrito={carrito} />
      <Cart carrito={carrito} setCarrito={setCarrito} />
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            onAddToCart={() => onAddToCart(producto)}
          />
        ))}
      </div>
    </div>
  );
}

export default Productos;