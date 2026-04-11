import { useState } from "react";

const slides = [
  {
    id: 1,
    section: "פתיחה",
    title: "Claude לעסק שלך",
    subtitle: "שיעור ראשון — Claude Chat",
    type: "cover",
    accent: "#1a1a2e",
  },
  {
    id: 2,
    section: "מה זה Claude",
    title: "לא מנוע חיפוש — שותף לחשיבה",
    type: "two-col",
    left: {
      label: "מנוע חיפוש",
      items: ["מחזיר קישורים", "עונה על עובדות", "תוצאות קבועות"],
      color: "#e8e8e8",
      textColor: "#555",
    },
    right: {
      label: "Claude",
      items: ["מנתח את המצב שלך", "מסייע בהחלטות", "מתאים לכל הקשר"],
      color: "#1a1a2e",
      textColor: "#fff",
    },
  },
  {
    id: 3,
    section: "מה זה Claude",
    title: "שלוש שכבות של עוצמה",
    type: "layers",
    layers: [
      { label: "Claude גולמי", desc: "שיחה חופשית, ללא הקשר", color: "#e8eaf6" },
      { label: "פרויקטים", desc: "הקשר עסקי קבוע שלך", color: "#c5cae9" },
      { label: "Connectors + Skills", desc: "חיבור לכלים ויכולות מורחבות", color: "#1a1a2e" },
    ],
  },
  {
    id: 4,
    section: "פרומפטים",
    title: "האנטומיה של פרומפט טוב",
    type: "anatomy",
    parts: [
      { label: "תפקיד", example: "\"אתה יועץ שיווקי מנוסה\"", color: "#e3f2fd" },
      { label: "הקשר", example: "\"יש לי עסק קטן של..\"", color: "#e8f5e9" },
      { label: "משימה", example: "\"כתוב לי אימייל ללקוח\"", color: "#fff3e0" },
      { label: "פורמט", example: "\"3 נקודות, עברית, קצר\"", color: "#fce4ec" },
    ],
  },
  {
    id: 5,
    section: "פרומפטים",
    title: "פרומפט רע מול פרומפט טוב",
    type: "compare",
    bad: {
      label: "פרומפט חלש",
      text: "\"כתוב לי אימייל ללקוח\"",
      result: "אימייל גנרי, לא רלוונטי, דורש כתיבה מחדש",
    },
    good: {
      label: "פרומפט חזק",
      text: "\"אתה עוזר שיווקי. אני מנהל סטודיו לעיצוב. כתוב אימייל תזכורת ללקוח שלא שילם — טון מקצועי אך ידידותי, 3 משפטים\"",
      result: "תוצאה מדויקת, בטון הנכון, מוכנה לשליחה",
    },
  },
  {
    id: 6,
    section: "פרויקטים",
    title: "מה זה פרויקט?",
    type: "feature",
    icon: "folder",
    tagline: "הזיכרון הקבוע של Claude לעסק שלך",
    bullets: [
      "הוראות קבועות — מי אתה, מה העסק, איזה טון",
      "קבצי ידע — מחירון, נהלים, FAQ, בריף מותג",
      "כל שיחה בתוך הפרויקט יורשת את ההקשר אוטומטית",
    ],
  },
  {
    id: 7,
    section: "פרויקטים",
    title: "הגדרת פרויקט — LIVE",
    type: "demo",
    steps: [
      "פותחים פרויקט חדש ב-Claude",
      "כותבים System Prompt: שם העסק, שירותים, טון, קהל יעד",
      "מעלים קובץ ידע (מחירון / FAQ)",
      "מבצעים אותה בקשה — עם ובלי הפרויקט",
    ],
    tip: "תראו איך אותה בקשה נותנת תוצאה שונה לחלוטין",
  },
  {
    id: 8,
    section: "שימושים עסקיים",
    title: "4 שימושים עסקיים ליבתיים",
    type: "use-cases",
    cases: [
      { icon: "✉", label: "כתיבה ותקשורת", desc: "אימיילים, הצעות, תוכן שיווקי" },
      { icon: "🧠", label: "שותף לחשיבה", desc: "קבלת החלטות, מחירים, אסטרטגיה" },
      { icon: "📄", label: "סיכום חומרים", desc: "חוזים, שרשורי אימייל, דוחות" },
      { icon: "📣", label: "יצירת תוכן", desc: "LinkedIn, ניוזלטר, פוסטים" },
    ],
  },
  {
    id: 9,
    section: "שימושים עסקיים",
    title: "דמו חי — כתיבה ותקשורת",
    type: "demo",
    steps: [
      "בקשה: \"כתוב אימייל ללקוח שמתלונן על עיכוב\"",
      "תוצאה ראשונה — ללא הקשר",
      "עכשיו אותה בקשה בתוך פרויקט עם הקשר עסקי",
      "שינוי טון: \"עשה אותו יותר ישיר / יותר חם\"",
    ],
    tip: "איטרציה היא הכלי הכי חזק — לעולם אל תסתפקו בתוצאה הראשונה",
  },
  {
    id: 10,
    section: "שימושים עסקיים",
    title: "דמו חי — שותף לחשיבה",
    type: "demo",
    steps: [
      "\"עזור לי להחליט אם להעלות מחירים ב-20%\"",
      "\"מה החסרונות בתוכנית שלי?\"",
      "\"תן לי 5 אפשרויות — ואמור איזו הכי טובה ולמה\"",
    ],
    tip: "Claude הוא יועץ שלא שופט ולא עייף — ניתן לשאול אותו הכל",
  },
  {
    id: 11,
    section: "Connectors",
    title: "Connectors — Claude רואה את העסק שלך",
    type: "feature",
    icon: "plug",
    tagline: "חיבור ישיר לכלים שאתם כבר משתמשים בהם",
    bullets: [
      "Google Drive — מוצא מסמכים, מסכם, מנתח",
      "Gmail — קורא שרשורים, מציע תגובות",
      "Google Calendar — רואה לוח זמנים, מתכנן",
      "ועוד: Notion, Slack, ועוד",
    ],
  },
  {
    id: 12,
    section: "Connectors",
    title: "דמו חי — Connectors",
    type: "demo",
    steps: [
      "מחברים Google Drive ל-Claude",
      "\"מצא את הצעת המחיר האחרונה שלי\"",
      "\"סכם את שרשורי האימייל הדחופים מהשבוע\"",
      "\"מה יש לי מחר בלוח הזמנים?\"",
    ],
    tip: "Claude מפסיק לעבוד על מה שאתם מדביקים — ומתחיל לעבוד על מה שקיים",
  },
  {
    id: 13,
    section: "Skills",
    title: "Skills — מצבי מומחה של Claude",
    type: "feature",
    icon: "star",
    tagline: "יכולות מוכנות מראש להפעלה בלחיצה",
    bullets: [
      "מחקר מעמיק — ניתוח שוק, מתחרים, מגמות",
      "ניתוח מסמכים — חוזים, דוחות, טפסים",
      "סיכום נתונים — טבלאות, ספרדשיטים, נתונים",
    ],
  },
  {
    id: 14,
    section: "Skills",
    title: "דמו חי — Skills",
    type: "demo",
    steps: [
      "פותחים Skill: Deep Research",
      "\"נתח את המתחרים שלי בשוק ה-X\"",
      "Claude מחפש, מסכם, ומציג ממצאים",
      "\"מה אני צריך לדעת לפני שאני נכנס לשוק הזה?\"",
    ],
    tip: "Skills חוסכות שעות של מחקר ידני — ב-2 דקות",
  },
  {
    id: 15,
    section: "תבניות פרומפט",
    title: "5 תבניות שכל בעל עסק צריך",
    type: "templates",
    templates: [
      { pattern: "\"אתה [תפקיד] — עזור לי ב[משימה]\"", use: "לתת ל-Claude עדשה מקצועית" },
      { pattern: "\"הנה הטיוטה שלי — עשה אותה [קצרה / ישירה / משכנעת]\"", use: "מצב עריכה" },
      { pattern: "\"מה אני מפספס?\"", use: "עורך דין השטן" },
      { pattern: "\"תן לי 5 אפשרויות, אז המלץ על אחת ולמה\"", use: "תמיכה בהחלטות" },
      { pattern: "\"הסבר לי כמו שמסבירים ל[קהל] — בלי ז'רגון\"", use: "פישוט מורכבות" },
    ],
  },
  {
    id: 16,
    section: "טעויות נפוצות",
    title: "4 טעויות שכדאי להימנע מהן",
    type: "mistakes",
    items: [
      { title: "לסמוך בלי לבדוק", desc: "Claude יכול לטעות — תמיד עוברים על הפלט" },
      { title: "פרומפט ריק מהקשר", desc: "ככל שתתנו יותר, תקבלו יותר" },
      { title: "לא להשתמש בפרויקטים", desc: "עבודה חשובה צריכה הקשר קבוע" },
      { title: "לעצור בתוצאה הראשונה", desc: "איטרציה היא הכלי הכי חזק" },
    ],
  },
  {
    id: 17,
    section: "אתגר השבוע",
    title: "האתגר שלכם לשבוע הבא",
    type: "challenge",
    items: [
      "הגדירו פרויקט אחד לתחום העבודה הכי חוזר שלכם",
      "חברו כלי אחד שאתם כבר משתמשים בו יומיומית",
      "הריצו משימה חוזרת אחת דרך Claude כל יום השבוע",
      "הביאו לשיעור הבא: הפרומפט הכי טוב והכי גרוע שלכם",
    ],
  },
];

const icons = {
  folder: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
  plug: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" />
      <path d="M18 8H6a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a1 1 0 0 0-1-1z" />
    </svg>
  ),
  star: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export default function Presentation() {
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
      <h2 className="sr-only">מצגת קורס Claude — שיעור ראשון</h2>

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
      <div style={{
        display: "flex",
        gap: 12,
        marginTop: 20,
        alignItems: "center",
      }}>
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          style={{
            padding: "10px 24px",
            background: current === 0 ? "#f0ede8" : "#1a1a2e",
            color: current === 0 ? "#bbb" : "#fff",
            border: "none",
            borderRadius: 8,
            cursor: current === 0 ? "default" : "pointer",
            fontSize: 14,
            fontFamily: "inherit",
          }}
        >
          הקודם →
        </button>

        {/* Dot nav */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", maxWidth: 400 }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              title={s.title}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? "#1a1a2e" : "#d0cdc7",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={current === total - 1}
          style={{
            padding: "10px 24px",
            background: current === total - 1 ? "#f0ede8" : "#1a1a2e",
            color: current === total - 1 ? "#bbb" : "#fff",
            border: "none",
            borderRadius: 8,
            cursor: current === total - 1 ? "default" : "pointer",
            fontSize: 14,
            fontFamily: "inherit",
          }}
        >
          ← הבא
        </button>
      </div>

      {/* Section jump */}
      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {["פתיחה","מה זה Claude","פרומפטים","פרויקטים","שימושים עסקיים","Connectors","Skills","תבניות פרומפט","טעויות נפוצות","אתגר השבוע"].map((sec) => {
          const idx = slides.findIndex(s => s.section === sec);
          if (idx === -1) return null;
          return (
            <button key={sec} onClick={() => setCurrent(idx)} style={{
              fontSize: 12,
              padding: "4px 12px",
              border: `1px solid ${slide.section === sec ? "#1a1a2e" : "#d0cdc7"}`,
              background: slide.section === sec ? "#1a1a2e" : "transparent",
              color: slide.section === sec ? "#fff" : "#666",
              borderRadius: 20,
              cursor: "pointer",
              fontFamily: "inherit",
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
          display: "inline-block",
          background: "#1a1a2e",
          color: "#fff",
          fontSize: 12,
          letterSpacing: 2,
          padding: "6px 16px",
          borderRadius: 20,
          marginBottom: 24,
        }}>שיעור 1</div>
        <h1 style={{ fontSize: 42, fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px" }}>{slide.title}</h1>
        <p style={{ fontSize: 18, color: "#888", margin: 0 }}>{slide.subtitle}</p>
      </div>
    );
  }

  if (slide.type === "two-col") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 28 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[slide.left, slide.right].map((col, i) => (
            <div key={i} style={{
              background: col.color,
              borderRadius: 12,
              padding: "24px 20px",
              border: "1px solid #e8e6e0",
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: col.textColor, opacity: 0.7, marginBottom: 12 }}>{col.label}</div>
              {col.items.map((item, j) => (
                <div key={j} style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
                  fontSize: 15, color: col.textColor,
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: 3, background: col.textColor, opacity: 0.5, flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
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
              background: l.color,
              borderRadius: 10,
              padding: "18px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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

  if (slide.type === "anatomy") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 28 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {slide.parts.map((p, i) => (
            <div key={i} style={{
              background: p.color,
              borderRadius: 10,
              padding: "18px 20px",
              border: "1px solid #e8e6e0",
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 8 }}>0{i + 1} — {p.label}</div>
              <div style={{ fontSize: 14, color: "#333", fontStyle: "italic" }}>{p.example}</div>
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

  if (slide.type === "demo") {
    return (
      <div>
        <div style={{
          display: "inline-block",
          background: "#1a1a2e",
          color: "#fff",
          fontSize: 11,
          letterSpacing: 1.5,
          padding: "4px 12px",
          borderRadius: 20,
          marginBottom: 16,
        }}>LIVE DEMO</div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 20 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {slide.steps.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 6, background: "#e8e6e0",
                color: "#555", fontSize: 13, display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0, fontWeight: 600,
              }}>{i + 1}</div>
              <span style={{ fontSize: 15, color: "#333", lineHeight: 1.7, paddingTop: 3 }}>{s}</span>
            </div>
          ))}
        </div>
        {slide.tip && (
          <div style={{
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: 8,
            padding: "10px 16px",
            fontSize: 13,
            color: "#92400e",
          }}>
            💡 {slide.tip}
          </div>
        )}
      </div>
    );
  }

  if (slide.type === "use-cases") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 24 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {slide.cases.map((c, i) => (
            <div key={i} style={{
              background: "#f8f7f4",
              borderRadius: 10,
              padding: "20px",
              border: "1px solid #e8e6e0",
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a2e", marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 13, color: "#888" }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "templates") {
    return (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a2e", marginBottom: 20 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {slide.templates.map((t, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr auto",
              alignItems: "center", gap: 12,
              background: "#f8f7f4", borderRadius: 8, padding: "12px 16px",
              border: "1px solid #e8e6e0",
            }}>
              <div style={{ fontSize: 14, color: "#333", fontStyle: "italic" }}>{t.pattern}</div>
              <div style={{
                fontSize: 11, color: "#1a1a2e",
                background: "#e8e6e0", borderRadius: 6,
                padding: "4px 10px", whiteSpace: "nowrap",
              }}>{t.use}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "mistakes") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 24 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {slide.items.map((item, i) => (
            <div key={i} style={{
              background: "#fef2f2",
              borderRadius: 10,
              padding: "18px 20px",
              border: "1px solid #fecaca",
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#b91c1c", marginBottom: 6 }}>✕ {item.title}</div>
              <div style={{ fontSize: 13, color: "#555" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "challenge") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 24 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {slide.items.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              background: i === 3 ? "#1a1a2e" : "#f8f7f4",
              borderRadius: 10,
              padding: "16px 20px",
              border: `1px solid ${i === 3 ? "#1a1a2e" : "#e8e6e0"}`,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 14,
                background: i === 3 ? "#fff" : "#1a1a2e",
                color: i === 3 ? "#1a1a2e" : "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, flexShrink: 0,
              }}>{i + 1}</div>
              <span style={{ fontSize: 15, color: i === 3 ? "#fff" : "#333", lineHeight: 1.6, paddingTop: 3 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{slide.title}</div>;
}
