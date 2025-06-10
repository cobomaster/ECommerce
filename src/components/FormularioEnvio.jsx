import { useState } from "react";

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
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto", background: "#f9f9f9", padding: 20, borderRadius: 8, border: "1px solid #ccc" }}>
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
      <br />
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Ciudad:
        <input
          type="text"
          name="ciudad"
          value={form.ciudad}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
        />
      </label>
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" style={{ marginTop: 10 }}>Continuar</button>
    </form>
  );
}

export default FormularioEnvio;