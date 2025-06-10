import { useState } from "react";
import "./FormularioEnvio.css";

function FormularioEnvio({ onEnviar, datosPrevios }) {
  const [form, setForm] = useState(
    datosPrevios || { nombre: "", direccion: "", ciudad: "", telefono: "" }
  );
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.direccion || !form.ciudad || !form.telefono) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    setError("");
    onEnviar(form);
  };

  return (
    <form className="formulario-envio" onSubmit={handleSubmit}>
      <h2>Datos de envío</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
        />
      </label>
      <label>
        Ciudad:
        <input
          type="text"
          name="ciudad"
          value={form.ciudad}
          onChange={handleChange}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Continuar</button>
    </form>
  );
}

export default FormularioEnvio;