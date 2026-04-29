import { useState } from "react";

const slides = [
  {
    id: 1,
    section: "פתיחה",
    title: "אגנט חדשות לרשתות חברתיות",
    subtitle: "שיעור רביעי — מהכותרת עד הפוסט, אוטומטית",
    type: "cover",
  },
  {
    id: 2,
    section: "מה זה אגנט?",
    title: "צ'אט vs אגנט — מה ההבדל?",
    type: "compare",
    bad: {
      label: "קלוד צ'אט (Chat)",
      text: "אתה פותח, אתה שואל, אתה מקבל תשובה — כלום לא קורה בלי שתתחיל",
      result: "מצריך נוכחות אנושית בכל איטרציה",
    },
    good: {
      label: "קלוד אגנט (Agent)",
      text: "מתעורר לבד, קורא חדשות, מחליט מה מעניין, כותב פוסט — ועושה זאת כל בוקר",
      result: "עובד בזמן שאתה ישן",
    },
  },
  {
    id: 3,
    section: "מה זה אגנט?",
    title: "האגנט שנבנה היום",
    type: "feature",
    icon: "agent",
    tagline: "מכונה שמייצרת תוכן ממקורות חדשות — ללא מגע יד אדם",
    bullets: [
      "כל בוקר ב-08:00 האגנט מתעורר ומושך כותרות ממקורות RSS / APIs",
      "קלוד בוחר את הפריט הכי רלוונטי לקהל היעד ומסביר למה",
      "קלוד כותב פוסט מותאם לרשת (פייסבוק, לינקדאין, טוויטר/X)",
      "הפוסט נשמר כטיוטה או מתפרסם אוטומטית דרך ה-API של הפלטפורמה",
    ],
  },
  {
    id: 4,
    section: "ארכיטקטורה",
    title: "הצינור של האגנט",
    type: "layers",
    layers: [
      { label: "Scheduler (Cron)", desc: "מפעיל את האגנט בשעה קבועה כל בוקר", color: "#e8eaf6" },
      { label: "News Fetcher", desc: "מושך כותרות מ-RSS / NewsAPI / Hacker News", color: "#c5cae9" },
      { label: "Claude — בחירה וניתוח", desc: "בוחר פריט מעניין, מסכם, מנתח זווית", color: "#9fa8da" },
      { label: "Claude — יצירת פוסט", desc: "כותב פוסט לפי פורמט וטון של הקהל", color: "#5c6bc0" },
      { label: "Publisher", desc: "דוחף לפלטפורמה או שומר כטיוטה", color: "#1a1a2e" },
    ],
  },
  {
    id: 5,
    section: "ארכיטקטורה",
    title: "רכיבי האגנט",
    type: "anatomy",
    parts: [
      { label: "Trigger — מפעיל", example: "cron job, n8n, GitHub Actions, Make.com", color: "#e3f2fd" },
      { label: "Tools — כלים", example: "fetch (RSS), HTTP client (NewsAPI), פונקציית פרסום", color: "#e8f5e9" },
      { label: "Memory — הקשר", example: "System prompt עם פרופיל הקהל וטון המותג", color: "#fff3e0" },
      { label: "Output — פלט", example: "טקסט פוסט + hashtags + אמוג'י + הצעת תמונה", color: "#fce4ec" },
    ],
  },
  {
    id: 6,
    section: "קריאת חדשות",
    title: "מקורות המידע",
    type: "feature",
    icon: "news",
    tagline: "האגנט לא מנחש — הוא קורא מקורות אמינים",
    bullets: [
      "RSS Feeds — כל אתר חדשות מפרסם feed חינמי, פשוט לצרכנות",
      "NewsAPI.org — 70,000+ מקורות, API חינמי לשימוש בסיסי, תמיכה בפילטרים לפי קטגוריה ושפה",
      "Hacker News API — מושלם לתוכן טכנולוגי, חינמי לחלוטין, בזמן אמת",
      "Reddit API — תוכן ויראלי לפי subreddit, אידיאלי להבנת מגמות",
    ],
  },
  {
    id: 7,
    section: "קריאת חדשות",
    title: "הגדרת מקורות — טיפים",
    type: "tips",
    tips: [
      { num: 1, text: "בחרו 3–5 מקורות ספציפיים לנישה שלכם — פחות רעש, יותר רלוונטיות" },
      { num: 2, text: "הגבילו ל-10–20 כותרות אחרונות — מספיק לבחירה, לא יוצר עומס טוקנים" },
      { num: 3, text: "שמרו log של פריטים שכבר פורסמו — למנוע כפילויות לאורך זמן" },
      { num: 4, text: "הוסיפו תאריך-תפוגה: חדשות מעל 24 שעות → מסוננות אוטומטית" },
    ],
  },
  {
    id: 8,
    section: "יצירת תוכן",
    title: "System Prompt לאגנט",
    type: "callout",
    text: "אתה מנהל תוכן דיגיטלי של {שם עסק}. הקהל שלך הם {תיאור קהל}. הטון הוא {טון}. לעולם אל תפרסם פוסט על אותה חדשה פעמיים.",
    sub: "ה-System Prompt הוא ה-DNA של האגנט — הוא מגדיר את האישיות, הטון והגבולות לכל סבב.",
  },
  {
    id: 9,
    section: "יצירת תוכן",
    title: "פרומפט לבחירת חדשה",
    type: "compare",
    bad: {
      label: "פרומפט חלש",
      text: "\"בחר את הכותרת הכי מעניינת מהרשימה\"",
      result: "קלוד בוחר לפי מה שנראה לו מעניין — לאו דווקא רלוונטי לקהל",
    },
    good: {
      label: "פרומפט חזק",
      text: "\"בחר כותרת אחת שהכי רלוונטית לקהל: יזמים ישראלים בתחום הטכנולוגיה. הסבר בשורה אחת למה. הימנע מפוליטיקה וקטסטרופות.\"",
      result: "קלוד בוחר לפי קריטריונים ברורים — ניתן לחזות ולשפר",
    },
  },
  {
    id: 10,
    section: "יצירת תוכן",
    title: "פרומפט ליצירת הפוסט",
    type: "feature",
    icon: "write",
    tagline: "תת-משימה נפרדת — אחרי שנבחרה החדשה",
    bullets: [
      "ציינו את הפלטפורמה: פייסבוק (ארוך+אמוג'י), לינקדאין (פורמלי), X (קצר+חד)",
      "בקשו מבנה מוגדר: Hook ← הסבר קצר ← הזווית שלכם ← שאלה/CTA",
      "הגבילו אורך: \"עד 280 תו\" / \"3–4 פסקאות\" / \"עד 5 bullet points\"",
      "בקשו hashtags: \"הוסף 3–5 hashtags רלוונטיים בסוף — לא בתוך הטקסט\"",
    ],
  },
  {
    id: 11,
    section: "קוד וכלים",
    title: "הטכנולוגיה בפועל",
    type: "anatomy",
    parts: [
      { label: "שפה ורץ", example: "Python / Node.js — שתיהן עם SDK רשמי של Anthropic", color: "#e3f2fd" },
      { label: "Anthropic SDK", example: "anthropic.messages.create() עם tools להפעלת fetch", color: "#e8f5e9" },
      { label: "Scheduler", example: "cron (לינוקס), GitHub Actions (חינמי), n8n (no-code)", color: "#fff3e0" },
      { label: "Publisher", example: "Buffer API, Meta Graph API, LinkedIn API, Zapier Webhook", color: "#fce4ec" },
    ],
  },
  {
    id: 12,
    section: "קוד וכלים",
    title: "מבנה הקוד — 4 שלבים",
    type: "tips",
    tips: [
      { num: 1, text: "fetch_news() — מושך כותרות, מסנן ישנות, מחזיר JSON עם title+url+summary" },
      { num: 2, text: "select_item(headlines) — קורא לקלוד עם רשימת הכותרות, מקבל בחזרה פריט + נימוק" },
      { num: 3, text: "create_post(item, platform) — קורא לקלוד שוב עם הפריט הנבחר, מקבל פוסט מוכן" },
      { num: 4, text: "publish(post) — שולח ל-API של הפלטפורמה או שומר בגיליון / Notion / Airtable" },
    ],
  },
  {
    id: 13,
    section: "פרסום ותזמון",
    title: "אפשרויות פרסום",
    type: "layers",
    layers: [
      { label: "מיידי — API ישיר", desc: "Meta Graph API, LinkedIn API — מפרסם ברגע", color: "#e8eaf6" },
      { label: "טיוטה — Buffer / Hootsuite", desc: "הפוסט נכנס לתור — ניתן לעריכה לפני פרסום", color: "#c5cae9" },
      { label: "Google Sheet / Notion", desc: "טבלת תוכן — צוות מאשר לפני שיוצא", color: "#9fa8da" },
      { label: "Email לאחראי", desc: "הכי פשוט: שולח את הפוסט במייל לאישור אנושי", color: "#1a1a2e" },
    ],
  },
  {
    id: 14,
    section: "פרסום ותזמון",
    title: "Human-in-the-Loop — מומלץ בהתחלה",
    type: "callout",
    text: "אל תפרסמו אוטומטית מהיום הראשון — הפעילו מצב \"טיוטה\" למשך שבוע, בדקו את האיכות, ורק אז שחררו לאוויר.",
    sub: "גישת ה-Human-in-the-Loop שומרת על המותג: האגנט מייצר, אדם מאשר. עם הזמן אפשר להפחית את הפיקוח כשרואים שהאיכות יציבה.",
  },
  {
    id: 15,
    section: "סיכום",
    title: "הזרימה המלאה",
    type: "layers",
    layers: [
      { label: "Cron / Scheduler", desc: "מפעיל את האגנט כל בוקר ב-08:00", color: "#e8eaf6" },
      { label: "News Fetcher + Claude בוחר", desc: "קורא חדשות, בוחר את הפריט הנכון", color: "#c5cae9" },
      { label: "Claude כותב פוסט", desc: "מותאם לפלטפורמה, לקהל ולטון המותג", color: "#9fa8da" },
      { label: "Publish / Draft", desc: "אוטומטי או לאישור אנושי — לפי בחירתכם", color: "#1a1a2e" },
    ],
  },
  {
    id: 16,
    section: "סיכום",
    title: "הנקודה המרכזית לשיעור",
    type: "callout",
    text: "אגנט הוא לא קסם — הוא פשוט קוד שמפעיל את קלוד עם הכלים הנכונים, בזמן הנכון, לפי הוראות ברורות.",
    sub: "ההשקעה האמיתית היא ב-System Prompt ובבחירת מקורות. הקוד עצמו — קלוד יכתוב אותו בשבילכם.",
  },
];

const sections = [
  "פתיחה", "מה זה אגנט?", "ארכיטקטורה",
  "קריאת חדשות", "יצירת תוכן", "קוד וכלים", "פרסום ותזמון", "סיכום",
];

const icons = {
  agent: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M19 8h2M3 8h2M12 2V1" />
    </svg>
  ),
  news: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
    </svg>
  ),
  write: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
};

export default function NewsAgentPresentation() {
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
      <h2 className="sr-only">מצגת קורס Claude — שיעור רביעי</h2>

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
        }}>שיעור 4</div>
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
