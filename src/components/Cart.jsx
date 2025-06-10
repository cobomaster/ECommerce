import "./Cart.css";

function Cart({ carrito, setCarrito }) {
  const total = carrito.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.cantidad || 1),
    0
  );

  const handleIncrement = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: Number(item.cantidad || 1) + 1 }
          : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id && Number(item.cantidad || 1) > 1
          ? { ...item, cantidad: Number(item.cantidad || 1) - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

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
                {producto.title} - Cantidad: {producto.cantidad || 1} - {producto.price} € cada uno
                <button onClick={() => handleIncrement(producto.id)}>+</button>
                <button
                  onClick={() => handleDecrement(producto.id)}
                  disabled={Number(producto.cantidad || 1) <= 1}
                >
                  -
                </button>
                <button onClick={() => handleRemove(producto.id)}>Eliminar</button>
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