import "./ProductCard.css";

function ProductCard({ title, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price} €</p>
      <button onClick={onAddToCart}>Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;
