import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "Claude Chat", subtitle: "הכרת הממשק, פרומפטים, פרויקטים ו-Connectors", to: "/lesson/1" },
  { id: 2, title: "חיסכון בטוקנים", subtitle: "כלכלת הקונטקסט — חלון, זיכרון, Prompt Caching וטיפים", to: "/lesson/2" },
  { id: 3, title: "דף נחיתה ממיר עם קלוד", subtitle: "מחקר CRO, סקיל, ויזואלים, קלוד קוד ו-GitHub Pages", to: "/lesson/3" },
];

const extras = [
  { label: "דיאגרמת הקשר ו-Memory", to: "/diagram" },
];

const s = {
  page: {
    direction: "rtl",
    minHeight: "100vh",
    background: "#f8f7f4",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    padding: "48px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inner: { width: "100%", maxWidth: 720 },
  header: { marginBottom: 48, textAlign: "center" },
  eyebrow: { fontSize: 11, letterSpacing: 4, color: "#888", textTransform: "uppercase", marginBottom: 12 },
  title: { fontSize: 36, fontWeight: 700, color: "#1a1a2e", margin: "0 0 10px" },
  subtitle: { fontSize: 16, color: "#888" },
  sectionLabel: { fontSize: 11, letterSpacing: 3, color: "#aaa", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 },
  grid: { display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 },
  card: (active) => ({
    display: "block",
    padding: "24px 28px",
    background: active ? "#fff" : "#f0ede8",
    border: "1px solid",
    borderColor: active ? "#e8e6e0" : "#e8e6e0",
    borderRadius: 12,
    textDecoration: "none",
    color: "inherit",
    opacity: active ? 1 : 0.55,
    cursor: active ? "pointer" : "default",
    pointerEvents: active ? "auto" : "none",
    transition: "box-shadow 0.15s",
  }),
  cardNum: { fontSize: 11, color: "#aaa", letterSpacing: 2, marginBottom: 6 },
  cardTitle: { fontSize: 18, fontWeight: 600, color: "#1a1a2e", marginBottom: 4 },
  cardSub: { fontSize: 13, color: "#888" },
  badge: {
    display: "inline-block",
    fontSize: 10,
    padding: "2px 10px",
    borderRadius: 20,
    background: "#e8e6e0",
    color: "#aaa",
    marginTop: 8,
  },
  extrasGrid: { display: "flex", flexDirection: "column", gap: 8 },
  extraLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 16px",
    background: "#fff",
    border: "1px solid #e8e6e0",
    borderRadius: 8,
    textDecoration: "none",
    fontSize: 14,
    color: "#1a1a2e",
    fontWeight: 500,
  },
};

export default function Home() {
  return (
    <div style={s.page}>
      <div style={s.inner}>
        <header style={s.header}>
          <div style={s.eyebrow}>קורס</div>
          <h1 style={s.title}>Claude לעסק שלך</h1>
          <p style={s.subtitle}>3 שיעורים לשליטה מלאה בכלים של Anthropic</p>
        </header>

        <section>
          <div style={s.sectionLabel}>שיעורים</div>
          <div style={s.grid}>
            {lessons.map((lesson) => {
              const active = !!lesson.to;
              return active ? (
                <Link key={lesson.id} to={lesson.to} style={s.card(true)}>
                  <div style={s.cardNum}>שיעור {lesson.id}</div>
                  <div style={s.cardTitle}>{lesson.title}</div>
                  <div style={s.cardSub}>{lesson.subtitle}</div>
                </Link>
              ) : (
                <div key={lesson.id} style={s.card(false)}>
                  <div style={s.cardNum}>שיעור {lesson.id}</div>
                  <div style={s.cardTitle}>{lesson.title}</div>
                  <div style={s.cardSub}>{lesson.subtitle}</div>
                  <span style={s.badge}>בקרוב</span>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div style={s.sectionLabel}>חומרים נוספים</div>
          <div style={s.extrasGrid}>
            {extras.map((e) => (
              <Link key={e.to} to={e.to} style={s.extraLink}>
                <span>📊</span>
                {e.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
