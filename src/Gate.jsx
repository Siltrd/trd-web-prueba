// src/Gate.jsx
import { useEffect, useState } from "react";

const PASSWORD = "trd2025"; // 🔐 cámbiala si querés

export default function Gate() {
  const [authorized, setAuthorized] = useState(false);
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessTDR") === "ok") {
      setAuthorized(true);
    }
  }, []);

  const submit = () => {
    if (pwd === PASSWORD) {
      localStorage.setItem("accessTDR", "ok");
      setAuthorized(true);
      window.location.replace("/"); // recarga limpia
    } else {
      alert("Contraseña incorrecta");
    }
  };

  if (authorized) return null; // ya autenticado

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: "#f9f3ed", // fondo TDR
        zIndex: 99999,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        color: "#444",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          borderRadius: "16px",
          padding: "30px 25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "8px" }}>Web en desarrollo</h2>
        <p style={{ marginBottom: "18px", opacity: 0.8 }}>
          Introduce la contraseña para continuar:
        </p>
        <input
          type="password"
          placeholder="Contraseña"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "12px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "10px",
            border: "0",
            background: "#f57c00", // ámbar TRD
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
