function ProductCard({ title, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price} €</p>
      <button onClick={onAddToCart}>Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;