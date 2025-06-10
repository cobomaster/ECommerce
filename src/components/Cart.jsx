import { useState } from "react";
import "./Cart.css";

function Cart({ carrito, setCarrito }) {
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [compraConfirmada, setCompraConfirmada] = useState(false);

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

  const handleVaciarCarrito = () => {
    setCarrito([]);
  };

  // NUEVO: Finalizar compra
  const handleFinalizarCompra = () => {
    setMostrarResumen(true);
  };

  const handleConfirmarCompra = () => {
    setCompraConfirmada(true);
    setCarrito([]);
    setMostrarResumen(false);
  };

  if (compraConfirmada) {
    return (
      <div className="cart">
        <h2>¡Compra confirmada!</h2>
        <p>Gracias por tu compra. Tu carrito ha sido vaciado.</p>
      </div>
    );
  }

  if (mostrarResumen) {
    return (
      <div className="cart">
        <h2>Resumen de tu pedido</h2>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.title} - Cantidad: {producto.cantidad || 1} - {producto.price} € cada uno
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          Total: <strong>{total} €</strong>
        </p>
        <button onClick={handleConfirmarCompra} style={{ marginRight: "10px" }}>
          Confirmar compra
        </button>
        <button onClick={() => setMostrarResumen(false)}>
          Volver al carrito
        </button>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <button onClick={handleVaciarCarrito} style={{ marginBottom: "10px" }}>
            Vaciar carrito
          </button>
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
          <button
            onClick={handleFinalizarCompra}
            style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;