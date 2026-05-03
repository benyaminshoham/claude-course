import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "Claude Chat", subtitle: "הכרת הממשק, פרומפטים, פרויקטים ו-Connectors", to: "/lesson/1" },
  { id: 2, title: "חיסכון בטוקנים", subtitle: "כלכלת הקונטקסט — חלון, זיכרון, Prompt Caching וטיפים", to: "/lesson/2" },
  { id: 3, title: "דף נחיתה ממיר עם קלוד", subtitle: "מחקר CRO, סקיל, ויזואלים, קלוד קוד ו-GitHub Pages", to: "/lesson/3" },
  { id: 4, title: "אגנט חדשות לרשתות חברתיות", subtitle: "RSS, NewsAPI, Claude SDK, תזמון ופרסום אוטומטי", to: "/lesson/4" },
  { id: 5, title: "חיבורי MCP בקלוד", subtitle: "קונקטורים, אוטומציות עסקיות, Google Drive, Gmail, Calendar ובניית קונקטור", to: "/lesson/5", badge: "סדנה" },
];

const extras = [
  { label: "דיאגרמת הקשר ו-Memory", to: "/diagram", icon: "📊" },
];

const resources = [
  { label: "איך לכתוב CLAUDE.md שעובד", href: "/claude-md-guide.html", icon: "📄", badge: "מדריך" },
];

function OnyxLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="36" height="36" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#252018"/>
        <polygon points="20,4 33.5,11.5 33.5,28.5 20,36 6.5,28.5 6.5,11.5" fill="none" stroke="#C8922A" strokeWidth="1.5"/>
        <polygon points="20,10.5 28.5,15.25 28.5,24.75 20,29.5 11.5,24.75 11.5,15.25" fill="#C8922A" fillOpacity="0.15"/>
        <line x1="20" y1="4" x2="20" y2="10.5" stroke="#C8922A" strokeOpacity="0.6" strokeWidth="1"/>
        <line x1="33.5" y1="11.5" x2="28.5" y2="15.25" stroke="#C8922A" strokeOpacity="0.6" strokeWidth="1"/>
        <line x1="33.5" y1="28.5" x2="28.5" y2="24.75" stroke="#C8922A" strokeOpacity="0.6" strokeWidth="1"/>
        <line x1="20" y1="36" x2="20" y2="29.5" stroke="#C8922A" strokeOpacity="0.6" strokeWidth="1"/>
        <line x1="6.5" y1="28.5" x2="11.5" y2="24.75" stroke="#C8922A" strokeOpacity="0.6" strokeWidth="1"/>
        <line x1="6.5" y1="11.5" x2="11.5" y2="15.25" stroke="#C8922A" strokeOpacity="0.6" strokeWidth="1"/>
        <circle cx="20" cy="20" r="3" fill="#C8922A"/>
      </svg>
      <div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 20, color: "#F5F0E8", letterSpacing: "-0.02em", lineHeight: 1 }}>
          ONYX <span style={{ color: "#C8922A" }}>AI</span>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A7060", marginTop: 3 }}>
          Build · Teach · Transform
        </div>
      </div>
    </div>
  );
}

const hoverCard = {
  enter: (e) => { e.currentTarget.style.borderColor = "#4D4030"; e.currentTarget.style.transform = "translateY(-2px)"; },
  leave: (e) => { e.currentTarget.style.borderColor = "#3D3528"; e.currentTarget.style.transform = "translateY(0)"; },
};

const hoverLink = {
  enter: (e) => { e.currentTarget.style.borderColor = "#4D4030"; },
  leave: (e) => { e.currentTarget.style.borderColor = "#3D3528"; },
};

const hoverResource = {
  enter: (e) => { e.currentTarget.style.borderColor = "rgba(200,146,42,0.6)"; },
  leave: (e) => { e.currentTarget.style.borderColor = "rgba(200,146,42,0.3)"; },
};

export default function Home() {
  return (
    <div style={{
      direction: "rtl",
      minHeight: "100vh",
      background: "#1A1814",
      fontFamily: "'Heebo', sans-serif",
      color: "#C8BFB0",
      padding: "48px 16px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div style={{ width: "100%", maxWidth: 680 }}>

        {/* Header */}
        <header style={{ marginBottom: 56, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
          <OnyxLogo />
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7060", marginBottom: 12 }}>
              קורס · Claude Code Series
            </div>
            <h1 style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 38, color: "#F5F0E8", margin: "0 0 10px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Claude לעסק שלך
            </h1>
            <p style={{ fontSize: 15, color: "#7A7060", fontWeight: 300, lineHeight: 1.7 }}>
              4 שיעורים לשליטה מלאה בכלים של Anthropic
            </p>
          </div>
        </header>

        {/* Lessons */}
        <section style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7060", marginBottom: 16 }}>
            01 — שיעורים
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {lessons.map((lesson) => (
              <Link key={lesson.id} to={lesson.to} style={{
                display: "block",
                padding: "20px 24px",
                background: "#2E2820",
                border: "0.5px solid #3D3528",
                borderRadius: 12,
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={hoverCard.enter}
              onMouseLeave={hoverCard.leave}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#C8922A", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    שיעור {lesson.id}
                  </span>
                  {lesson.badge && (
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 8,
                      padding: "2px 8px", borderRadius: 100,
                      background: "#3D2E10", color: "#D4A84B",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      border: "0.5px solid rgba(200,146,42,0.2)",
                    }}>{lesson.badge}</span>
                  )}
                </div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 17, color: "#F5F0E8", marginBottom: 4 }}>
                  {lesson.title}
                </div>
                <div style={{ fontSize: 13, color: "#7A7060", lineHeight: 1.6 }}>
                  {lesson.subtitle}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Extras */}
        <section style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7060", marginBottom: 16 }}>
            02 — חומרים נוספים
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {extras.map((e) => (
              <Link key={e.to} to={e.to} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                background: "#2E2820",
                border: "0.5px solid #3D3528",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 14,
                color: "#C8BFB0",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={hoverLink.enter}
              onMouseLeave={hoverLink.leave}
              >
                <span>{e.icon}</span>
                {e.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7060", marginBottom: 16 }}>
            03 — מדריכים ומשאבים
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {resources.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 18px",
                background: "#2E2820",
                border: "0.5px solid rgba(200,146,42,0.3)",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 14,
                color: "#C8BFB0",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={hoverResource.enter}
              onMouseLeave={hoverResource.leave}
              >
                <span>{r.icon}</span>
                <span style={{ flex: 1 }}>{r.label}</span>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  padding: "3px 10px",
                  background: "#3D2E10",
                  color: "#D4A84B",
                  borderRadius: 100,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "0.5px solid rgba(200,146,42,0.2)",
                }}>{r.badge}</span>
                <span style={{ color: "#7A7060", fontSize: 12 }}>↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div style={{ marginTop: 64, borderTop: "0.5px solid #3D3528", paddingTop: 20, textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#7A7060", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Onyx AI · onyx-ai.co.il · 2026
          </div>
        </div>

      </div>
    </div>
  );
}
