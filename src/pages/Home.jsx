import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container">
      {/* ...otras secciones... */}

      <section className="home-contacto">
        <h2>Contacto</h2>
        <ul>
          <li><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad</li>
          <li><strong>Teléfono:</strong> 123 456 789</li>
          <li><strong>Email:</strong> contacto@mitienda.com</li>
        </ul>
      </section>

      <section className="home-mapa">
        <h2>¿Dónde estamos?</h2>
        <div className="mapa-contenedor">
          <iframe
            title="Ubicación MiTienda"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.406003047837!2d-3.703790684602095!3d40.4167759793647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42299780000001%3A0x6e8b7b7b7b7b7b7b!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620222222222!5m2!1ses!2ses"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="home-horario">
        <h2>Horario</h2>
        <p>Lunes a Viernes: 9:00 - 20:00</p>
        <p>Sábados: 10:00 - 14:00</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
      </footer>
    </div>
    </div>
  );
}

export default Home;