import { useParams, useNavigate } from "react-router-dom";

function DetalleProducto({ productos, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca el producto por id
  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  // Muestra la imagen desde public/Fotos/
  return (
    <div className="detalle-producto">
      <img
        src={`/Fotos/${producto.image}`}
        alt={producto.title}
        style={{ width: "300px" }}
      />
      <h2>{producto.title}</h2>
      <p>
        <strong>Precio:</strong> {producto.price} €
      </p>
      <p>
        <strong>Descripción:</strong> {producto.descripcion}
      </p>
      <button onClick={() => navigate(-1)}>Volver a productos</button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => onAddToCart(producto)}
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default DetalleProducto;