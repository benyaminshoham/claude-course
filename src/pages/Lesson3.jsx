import { Link } from "react-router-dom";
import LandingPagePresentation from "../../claude_landing_page_presentation.jsx";

export default function Lesson3() {
  return (
    <div>
      <div style={{
        direction: "rtl",
        padding: "12px 24px",
        background: "#fff",
        borderBottom: "1px solid #e8e6e0",
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}>
        <Link to="/" style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>← חזרה לקורס</Link>
        <span style={{ color: "#e8e6e0" }}>|</span>
        <span style={{ fontSize: 13, color: "#1a1a2e", fontWeight: 600 }}>שיעור 3 — דף נחיתה ממיר עם קלוד</span>
      </div>
      <LandingPagePresentation />
    </div>
  );
}
