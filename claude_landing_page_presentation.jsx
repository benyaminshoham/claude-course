import { useState } from "react";

const slides = [
  {
    id: 1,
    section: "פתיחה",
    title: "בניית דף נחיתה ממיר עם קלוד",
    subtitle: "שיעור שלישי — מהמחקר עד הפרסום",
    type: "cover",
  },
  {
    id: 2,
    section: "שלב 1 — סקיל",
    title: "שלב 1 — מחקר ויצירת סקיל",
    type: "feature",
    icon: "research",
    tagline: "לפני שבונים משהו, בונים את המוח שיודע לבנות",
    bullets: [
      "מבקשים מקלוד לחקור עקרונות CRO עדכניים — Joanna Wiebe, Neil Patel, Peep Laja",
      "קלוד מחזיר סינתזה: היררכיה ויזואלית, כותרת לכאב, הוכחה חברתית, CTA ברור, F-pattern",
      "הופכים את הסינתזה ל-SKILL.md — קובץ הוראות קבוע לכל פרויקט עתידי",
    ],
  },
  {
    id: 3,
    section: "שלב 1 — סקיל",
    title: "מה הסקיל כולל",
    type: "anatomy",
    parts: [
      { label: "מתי להשתמש בו", example: "תנאים להפעלת הסקיל בכל פרויקט", color: "#e3f2fd" },
      { label: "עקרונות קופירייטינג", example: "כותרת לכאב, social proof, CTA ברור", color: "#e8f5e9" },
      { label: "מבנה קוד מומלץ", example: "header → hero → יתרונות → טסטימוניאלס → טופס", color: "#fff3e0" },
      { label: "Checklist לפני פרסום", example: "בדיקות CRO לפני שעולים לאוויר", color: "#fce4ec" },
    ],
  },
  {
    id: 4,
    section: "שלב 1 — סקיל",
    title: "למה זה חשוב",
    type: "callout",
    text: "במקום להסביר לקלוד מחדש בכל פרויקט מה זה דף נחיתה טוב — הסקיל עושה את זה אוטומטית.",
    sub: "הסקיל הוא ההשקעה החכמה — עושים אותו פעם אחת ומשתמשים בו בכל לקוח.",
  },
  {
    id: 5,
    section: "שלב 2 — ויזואלים",
    title: "שלב 2 — פרומפטים לתוצרים ויזואליים",
    type: "feature",
    icon: "visual",
    tagline: "לפני שכותבים קוד — מייצרים את הנכסים",
    bullets: [
      "כותבים פרומפט לגנרציית לוגו / hero image דרך Flux (מחובר כ-MCP לקלוד)",
      "הפרומפט חייב לכלול: סגנון ויזואלי, פלטת צבעים, מצב רוח, יחס גובה-רוחב",
      "מייצרים גם תמונות supporting — hero background, אייקונים, trust badges",
      "שומרים את כל הנכסים בתיקייה מסודרת לפני שנוגעים בקוד",
    ],
  },
  {
    id: 6,
    section: "שלב 2 — ויזואלים",
    title: "פרומפט גנרי vs פרומפט עם Brand Context",
    type: "compare",
    bad: {
      label: "פרומפט גנרי",
      text: "\"Create a logo for my wellness business\"",
      result: "תוצאה: לוגו כללי, ללא אישיות, לא שמיש בפרויקט",
    },
    good: {
      label: "פרומפט עם Context",
      text: "\"Clean minimal logo, wellness brand, sage green & cream, sans-serif, white background, SVG style\"",
      result: "תוצאה: לוגו ישיר לשימוש — צבע, סגנון ופורמט מוגדרים",
    },
  },
  {
    id: 7,
    section: "שלב 3 — קלוד קוד",
    title: "שלב 3 — בניית הדף עם קלוד קוד",
    type: "feature",
    icon: "code",
    tagline: "כאן מתחיל הקסם",
    bullets: [
      "פותחים Claude Code בטרמינל בתוך תיקיית הפרויקט",
      "נותנים לקלוד את הסקיל, הנכסים הויזואליים, וה-brief של העסק",
      "מבקשים single-file HTML/CSS/JS — פשוט, מהיר, ללא תלויות מיותרות",
      "iterations קצרות: \"הגדל כותרת\", \"שנה צבע ל...\", \"הוסף אנימציה בכניסה\"",
    ],
  },
  {
    id: 8,
    section: "שלב 3 — קלוד קוד",
    title: "קלוד קוד vs קלוד רגיל",
    type: "compare",
    bad: {
      label: "קלוד רגיל (Chat)",
      text: "מחזיר קוד בתוך ה-chat — מעתיק, מדביק, בודק ידנית",
      result: "מאבד context בכל פעם שמבצעים שינויים",
    },
    good: {
      label: "קלוד קוד (Terminal)",
      text: "כותב קבצים ישירות לדיסק, מריץ preview, משנה בלי לאבד הקשר",
      result: "iterations מהירות — כמה שינויים בדקה",
    },
  },
  {
    id: 9,
    section: "שלב 4 — גיטהאב",
    title: "שלב 4 — העלאה לגיטהאב",
    type: "tips",
    tips: [
      { num: 1, text: "git init — מאתחל repository מקומי בתיקיית הפרויקט" },
      { num: 2, text: "git add . && git commit -m \"initial landing page\" — שומר snapshot ראשון" },
      { num: 3, text: "gh repo create my-landing-page --public — יוצר repo ב-GitHub דרך ה-CLI" },
      { num: 4, text: "git push -u origin main — דוחף את הקוד ל-GitHub" },
    ],
  },
  {
    id: 10,
    section: "שלב 4 — גיטהאב",
    title: "טיפ חשוב לפני שממשיכים",
    type: "callout",
    text: "ניתן לבקש מקלוד קוד לבצע את כל פקודות ה-git האלה אוטומטית — בלי לגעת בטרמינל בעצמך.",
    sub: "חשוב: וודאו שהתיקייה מכילה index.html בשורש — זה קריטי לשלב GitHub Pages.",
  },
  {
    id: 11,
    section: "שלב 5 — Pages",
    title: "שלב 5 — פרסום עם GitHub Pages",
    type: "layers",
    layers: [
      { label: "הכנס ל-Settings של ה-repo", desc: "לשונית Settings בגיטהאב", color: "#e8eaf6" },
      { label: "לחץ על Pages בתפריט השמאלי", desc: "מתחת ל-Code and automation", color: "#c5cae9" },
      { label: "בחר: Deploy from a branch → main → / (root)", desc: "Source settings", color: "#9fa8da" },
      { label: "תוך 2–3 דקות הדף חי!", desc: "https://username.github.io/repo-name", color: "#1a1a2e" },
    ],
  },
  {
    id: 12,
    section: "שלב 5 — Pages",
    title: "אופציה מתקדמת",
    type: "anatomy",
    parts: [
      { label: "דומיין מותאם אישית", example: "שדה Custom Domain באותו דף Settings → Pages", color: "#e3f2fd" },
      { label: "HTTPS אוטומטי", example: "GitHub מטפל בתעודת SSL בחינם", color: "#e8f5e9" },
      { label: "עדכון אוטומטי", example: "כל push ל-main מעדכן את הדף החי", color: "#fff3e0" },
      { label: "אפס עלות", example: "GitHub Pages חינמי לפרויקטים פומביים", color: "#fce4ec" },
    ],
  },
  {
    id: 13,
    section: "סיכום",
    title: "הזרימה המלאה",
    type: "layers",
    layers: [
      { label: "מחקר מומחים", desc: "CRO, copywriting, עקרונות UX", color: "#e8eaf6" },
      { label: "SKILL.md", desc: "פעם אחת — שמיש בכל לקוח", color: "#c5cae9" },
      { label: "פרומפטים ויזואליים + קלוד קוד", desc: "נכסים + single-file HTML", color: "#9fa8da" },
      { label: "GitHub → GitHub Pages", desc: "דף חי תוך דקות, אפס תשלום", color: "#1a1a2e" },
    ],
  },
  {
    id: 14,
    section: "סיכום",
    title: "הנקודה המרכזית לשיעור",
    type: "callout",
    text: "הסקיל הוא ההשקעה החכמה — עושים אותו פעם אחת ומשתמשים בו בכל לקוח.",
    sub: "זה ההבדל בין \"להשתמש בקלוד\" לבין \"לבנות מערכת עם קלוד\".",
  },
];

const sections = [
  "פתיחה", "שלב 1 — סקיל", "שלב 2 — ויזואלים",
  "שלב 3 — קלוד קוד", "שלב 4 — גיטהאב", "שלב 5 — Pages", "סיכום",
];

const icons = {
  research: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  ),
  visual: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  ),
  code: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function LandingPagePresentation() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const total = slides.length;

  const go = (dir) => {
    setCurrent((c) => Math.max(0, Math.min(total - 1, c + dir)));
  };

  return (
    <div style={{
      direction: "rtl",
      fontFamily: "'Segoe UI', 'Arial', sans-serif",
      minHeight: "100vh",
      background: "#f8f7f4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 16px",
    }}>
      <h2 className="sr-only">מצגת קורס Claude — שיעור שלישי</h2>

      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: 800, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: "#888" }}>{slide.section}</span>
          <span style={{ fontSize: 13, color: "#888" }}>{current + 1} / {total}</span>
        </div>
        <div style={{ height: 3, background: "#e0ddd6", borderRadius: 2 }}>
          <div style={{
            height: "100%",
            width: `${((current + 1) / total) * 100}%`,
            background: "#1a1a2e",
            borderRadius: 2,
            transition: "width 0.3s ease",
          }} />
        </div>
      </div>

      {/* Slide card */}
      <div style={{
        width: "100%",
        maxWidth: 800,
        minHeight: 420,
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #e8e6e0",
        padding: "40px 48px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <SlideContent slide={slide} />
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", gap: 12, marginTop: 20, alignItems: "center" }}>
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          style={{
            padding: "10px 24px",
            background: current === 0 ? "#f0ede8" : "#1a1a2e",
            color: current === 0 ? "#bbb" : "#fff",
            border: "none", borderRadius: 8,
            cursor: current === 0 ? "default" : "pointer",
            fontSize: 14, fontFamily: "inherit",
          }}
        >
          הקודם →
        </button>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", maxWidth: 400 }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)} title={s.title} style={{
              width: i === current ? 24 : 8, height: 8, borderRadius: 4,
              background: i === current ? "#1a1a2e" : "#d0cdc7",
              border: "none", cursor: "pointer", padding: 0, transition: "all 0.2s",
            }} />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={current === total - 1}
          style={{
            padding: "10px 24px",
            background: current === total - 1 ? "#f0ede8" : "#1a1a2e",
            color: current === total - 1 ? "#bbb" : "#fff",
            border: "none", borderRadius: 8,
            cursor: current === total - 1 ? "default" : "pointer",
            fontSize: 14, fontFamily: "inherit",
          }}
        >
          ← הבא
        </button>
      </div>

      {/* Section jump */}
      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {sections.map((sec) => {
          const idx = slides.findIndex(s => s.section === sec);
          if (idx === -1) return null;
          return (
            <button key={sec} onClick={() => setCurrent(idx)} style={{
              fontSize: 12, padding: "4px 12px",
              border: `1px solid ${slide.section === sec ? "#1a1a2e" : "#d0cdc7"}`,
              background: slide.section === sec ? "#1a1a2e" : "transparent",
              color: slide.section === sec ? "#fff" : "#666",
              borderRadius: 20, cursor: "pointer", fontFamily: "inherit",
            }}>{sec}</button>
          );
        })}
      </div>
    </div>
  );
}

function SlideContent({ slide }) {

  if (slide.type === "cover") {
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <div style={{
          display: "inline-block", background: "#1a1a2e", color: "#fff",
          fontSize: 12, letterSpacing: 2, padding: "6px 16px", borderRadius: 20, marginBottom: 24,
        }}>שיעור 3</div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px" }}>{slide.title}</h1>
        <p style={{ fontSize: 18, color: "#888", margin: 0 }}>{slide.subtitle}</p>
      </div>
    );
  }

  if (slide.type === "feature") {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ color: "#1a1a2e" }}>{icons[slide.icon]}</div>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", margin: "0 0 4px" }}>{slide.title}</h2>
            <p style={{ fontSize: 15, color: "#888", margin: 0 }}>{slide.tagline}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {slide.bullets.map((b, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 12,
              background: "#f8f7f4", borderRadius: 8, padding: "12px 16px",
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: 12, background: "#1a1a2e",
                color: "#fff", fontSize: 12, display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, fontWeight: 600,
              }}>{i + 1}</div>
              <span style={{ fontSize: 15, color: "#333", lineHeight: 1.6 }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "anatomy") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 28 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {slide.parts.map((p, i) => (
            <div key={i} style={{ background: p.color, borderRadius: 10, padding: "18px 20px", border: "1px solid #e8e6e0" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>0{i + 1} — {p.label}</div>
              <div style={{ fontSize: 14, color: "#333", fontStyle: "italic" }}>{p.example}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "callout") {
    return (
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a2e", marginBottom: 28 }}>{slide.title}</h2>
        <div style={{
          background: "#1a1a2e", borderRadius: 14, padding: "32px 36px", marginBottom: 20,
        }}>
          <p style={{ fontSize: 20, fontWeight: 600, color: "#fff", lineHeight: 1.6, margin: 0 }}>{slide.text}</p>
        </div>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0 }}>{slide.sub}</p>
      </div>
    );
  }

  if (slide.type === "layers") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 28 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {slide.layers.map((l, i) => (
            <div key={i} style={{
              background: l.color, borderRadius: 10, padding: "18px 24px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              border: "1px solid #e8e6e0",
            }}>
              <span style={{ fontSize: 17, fontWeight: 600, color: l.color === "#1a1a2e" ? "#fff" : "#1a1a2e" }}>{l.label}</span>
              <span style={{ fontSize: 14, color: l.color === "#1a1a2e" ? "#aaa" : "#666" }}>{l.desc}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "compare") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 24 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#fef2f2", borderRadius: 10, padding: "20px", border: "1px solid #fecaca" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#b91c1c", marginBottom: 10 }}>{slide.bad.label}</div>
            <div style={{ fontSize: 14, fontStyle: "italic", color: "#444", marginBottom: 12 }}>{slide.bad.text}</div>
            <div style={{ fontSize: 13, color: "#b91c1c" }}>{slide.bad.result}</div>
          </div>
          <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "20px", border: "1px solid #bbf7d0" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#15803d", marginBottom: 10 }}>{slide.good.label}</div>
            <div style={{ fontSize: 14, fontStyle: "italic", color: "#444", marginBottom: 12 }}>{slide.good.text}</div>
            <div style={{ fontSize: 13, color: "#15803d" }}>{slide.good.result}</div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.type === "tips") {
    return (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a2e", marginBottom: 20 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {slide.tips.map((t, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              background: "#f8f7f4", borderRadius: 10, padding: "14px 18px",
              border: "1px solid #e8e6e0",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 14, background: "#1a1a2e",
                color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, flexShrink: 0,
              }}>{t.num}</div>
              <span style={{ fontSize: 14, color: "#333", lineHeight: 1.65, paddingTop: 3 }}>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{slide.title}</div>;
}
