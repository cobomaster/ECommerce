function Menu({ carrito }) {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <div>
        🛒 Carrito: {carrito.reduce((sum, item) => sum + item.cantidad, 0)} productos
      </div>
    </nav>
  );
}

export default Menu;
