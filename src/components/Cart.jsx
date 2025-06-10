import { useState } from "react";
import FormularioEnvio from "../components/FormularioEnvio";
import "./Cart.css"; // <--- Importa el CSS aquí

function Cart({ carrito, setCarrito }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [datosEnvio, setDatosEnvio] = useState(null);

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

  const handleFinalizarCompra = () => {
    setMostrarFormulario(true);
  };

  const handleEnviarFormulario = (datos) => {
    setDatosEnvio(datos);
    setMostrarFormulario(false);
  };

  if (mostrarFormulario) {
    return <FormularioEnvio onEnviar={handleEnviarFormulario} />;
  }

  if (datosEnvio) {
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
        <p style={{ fontWeight: "bold", fontSize: "24px", backgroundColor: "yellow", color: "black" }}>
          Total: <strong>{total} €</strong>
        </p>
        <div style={{ marginTop: "20px", padding: "16px", border: "1px solid #ccc", borderRadius: "8px", background: "#f9f9f9" }}>
          <h3>Datos de envío</h3>
          <p><strong>Nombre:</strong> {datosEnvio.nombre}</p>
          <p><strong>Dirección:</strong> {datosEnvio.direccion}</p>
          <p><strong>Ciudad:</strong> {datosEnvio.ciudad}</p>
          <p><strong>Teléfono:</strong> {datosEnvio.telefono}</p>
        </div>
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