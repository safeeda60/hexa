
// src/components/CSRCard.jsx
import React from "react";

function Csrcard({ badge, title, description, metrics, buttonText, icon }) {
  return (
    <div className="csr-card" style={styles.card}>
      {/* Left Section */}
      <div style={styles.left}>
        {/* Badge */}
        {badge && <span style={styles.badge}>{badge}</span>}

        {/* Title */}
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>

        {/* Metrics */}
        <div style={styles.metrics}>
          {metrics.map((m, i) => (
            <div key={i} style={styles.metricItem}>
              <h3 style={styles.metricValue}>{m.value}</h3>
              <p style={styles.metricLabel}>{m.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {buttonText && (
          <button style={styles.button}>{buttonText}</button>
        )}
      </div>

      {/* Right Section (Image / Illustration) */}
      <div style={styles.right}>
        <img src={icon} alt={title} style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
  left: { flex: 1 },
  right: { flex: 1, textAlign: "right" },
  badge: {
    display: "inline-block",
    padding: "0.3rem 0.8rem",
    background: "#0056b3",
    color: "#fff",
    borderRadius: "20px",
    fontSize: "0.8rem",
    marginBottom: "1rem",
  },
  title: { fontSize: "1.8rem", margin: "0.5rem 0" },
  description: { fontSize: "1rem", color: "#555" },
  metrics: {
    display: "flex",
    gap: "2rem",
    margin: "1rem 0",
  },
  metricItem: { textAlign: "center" },
  metricValue: { fontSize: "1.5rem", fontWeight: "bold", margin: 0 },
  metricLabel: { fontSize: "0.9rem", color: "#666" },
  button: {
    background: "green",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer",
  },
  image: { maxWidth: "300px", borderRadius: "8px" },
};

export default Csrcard;
    