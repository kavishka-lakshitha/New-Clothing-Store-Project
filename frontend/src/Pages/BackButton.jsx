import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "Back", className = "", style = {} }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`back-btn ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#333",
        background: "rgba(255,255,255,0.85)",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        backdropFilter: "blur(4px)",
        zIndex: 10,
        ...style,   
      }}
    >
      ← {label}
    </button>
  );
}