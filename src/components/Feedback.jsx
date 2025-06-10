import { useEffect } from "react";
import "./Feedback.css";

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
    <div className={`feedback${tipo === "error" ? " error" : ""}`}>
      {mensaje}
    </div>
  );
}

export default Feedback;