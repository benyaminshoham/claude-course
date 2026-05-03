import { Link } from "react-router-dom";
import Diagram from "../../claude-context-diagrams.jsx";

const navStyle = {
  direction: "rtl",
  padding: "10px 24px",
  background: "#252018",
  borderBottom: "0.5px solid #3D3528",
  display: "flex",
  alignItems: "center",
  gap: 12,
  fontFamily: "'Heebo', sans-serif",
};

export default function DiagramPage() {
  return (
    <div>
      <div style={navStyle}>
        <Link to="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#C8922A", textDecoration: "none", letterSpacing: "0.04em" }}>← חזרה</Link>
        <span style={{ color: "#3D3528" }}>|</span>
        <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 13, color: "#F5F0E8", fontWeight: 600, letterSpacing: "-0.01em" }}>דיאגרמת הקשר ו-Memory</span>
      </div>
      <Diagram />
    </div>
  );
}
