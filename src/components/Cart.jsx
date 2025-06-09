import "./Cart.css";

function Cart({ carrito }) {
  console.log("Renderizando carrito:", carrito);

  // Calcular el total del carrito
  const total = carrito.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                {producto.title} - Cantidad: {producto.cantidad} - {producto.price} € cada uno
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold", fontSize: "24px", backgroundColor: "yellow", color: "black" }}>
            Total: <strong>{total} €</strong>
          </p>
        </>
      )}
    </div>
  );
}

export default Cart;
