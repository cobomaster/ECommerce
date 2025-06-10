import { Link } from "react-router-dom";

function ProductCard({ id, title, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/producto/${id}`}>
        <img src={`/Fotos/${image}`} alt={title} />
        <h3>{title}</h3>
        <p>{price} €</p>
      </Link>
      <button onClick={onAddToCart}>Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;