import { useEffect } from "react";

function Feedback({ mensaje, tipo, onClose }) {
  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [mensaje, onClose]);

  if (!mensaje) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: tipo === "error" ? "#f44336" : "#4caf50",
        color: "#fff",
        padding: "16px 24px",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        zIndex: 1000,
        fontWeight: "bold",
        fontSize: 16,
      }}
    >
      {mensaje}
    </div>
  );
}

export default Feedback;