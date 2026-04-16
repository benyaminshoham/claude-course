import { useState } from "react";

const slides = [
  {
    id: 1,
    section: "פתיחה",
    title: "חיסכון בטוקנים",
    subtitle: "שיעור שני — כלכלת הקונטקסט",
    type: "cover",
  },
  {
    id: 2,
    section: "מנגנון הטוקנים",
    title: "מהו טוקן?",
    type: "feature",
    icon: "token",
    tagline: "יחידת העיבוד הבסיסית של המודל",
    bullets: [
      "~0.75 מילים באנגלית, או כ-3–4 תווים",
      "בעברית: מילה אחת יכולה לשקול 2–3 טוקנים",
      "טוקני קלט ופלט נספרים בנפרד — פלט יקר יותר",
    ],
  },
  {
    id: 3,
    section: "מנגנון הטוקנים",
    title: "מה נספר כטוקנים?",
    type: "anatomy",
    parts: [
      { label: "הנחיות מערכת", example: "System Prompt, Project Instructions", color: "#e3f2fd" },
      { label: "היסטוריית שיחה", example: "כל ההודעות מההתחלה, בכל פעם מחדש", color: "#e8f5e9" },
      { label: "קבצים ותמונות", example: "PDF, Word, תמונות — הכל עולה", color: "#fff3e0" },
      { label: "כלים מחוברים", example: "כל connector פעיל: 1,500–3,000 טוקן להודעה", color: "#fce4ec" },
    ],
  },
  {
    id: 4,
    section: "מנגנון הטוקנים",
    title: "הנקודה הקריטית",
    type: "callout",
    text: "בכל הודעה שאתה שולח, קלוד מקבל מחדש את כל היסטוריית השיחה מההתחלה.",
    sub: "הודעה ה-50 שלך שולחת גם את 49 ההודעות הקודמות. עלויות שיחה ארוכה גדלות אקספוננציאלית.",
  },
  {
    id: 5,
    section: "חלון הקונטקסט",
    title: "גדלי חלון לפי תוכנית",
    type: "layers",
    layers: [
      { label: "Claude.ai Pro / Team / Max", desc: "200,000 טוקן לשיחה", color: "#e8eaf6" },
      { label: "Claude Enterprise", desc: "500,000 טוקן לשיחה", color: "#c5cae9" },
      { label: "Claude Code", desc: "חלון גלילי של 5 שעות", color: "#9fa8da" },
      { label: "API — מודלים חדשים", desc: "עד 1,000,000 טוקן", color: "#1a1a2e" },
    ],
  },
  {
    id: 6,
    section: "חלון הקונטקסט",
    title: "קלוד הוא Stateless",
    type: "compare",
    bad: {
      label: "מה שנדמה",
      text: "\"קלוד זוכר אותי משיחות קודמות\"",
      result: "אין זיכרון בין שיחות — כל שיחה מתחילה מאפס",
    },
    good: {
      label: "מה שקורה בפועל",
      text: "\"Memories\" הן מסמכים קצרים שנטענים לתחילת השיחה",
      result: "הן עוזרות, אבל גם הן תופסות טוקנים",
    },
  },
  {
    id: 7,
    section: "חלון הקונטקסט",
    title: "כשהחלון מתמלא",
    type: "mistakes",
    items: [
      { title: "חזרה על הגדרות", desc: "קלוד מתחיל לשכוח הוראות שנאמרו בתחילת השיחה" },
      { title: "אי-עקביות", desc: "תשובות שסותרות מה שנאמר 30 הודעות קודם" },
      { title: "אובדן הקשר", desc: "קלוד מעדיף הקשר אחרון — מידע מוקדם נדחק החוצה" },
      { title: "Projects עובדים אחרת", desc: "קבצים בפרויקט נטענים ב-retrieval — לא הכל בו-זמנית" },
    ],
  },
  {
    id: 8,
    section: "גבולות שימוש",
    title: "מגבלות לפי פלטפורמה",
    type: "usage",
    rows: [
      { platform: "Claude.ai Chat", limit: "לפי טוקנים, לא הודעות", reset: "כל 5 שעות" },
      { platform: "Claude Code Pro", limit: "~44,000 טוקן", reset: "כל 5 שעות" },
      { platform: "Claude Code Max 5x", limit: "~88,000 טוקן", reset: "כל 5 שעות" },
      { platform: "Claude Code Max 20x", limit: "~220,000 טוקן", reset: "כל 5 שעות" },
    ],
    note: "⚠ Claude.ai, Claude Desktop ו-Claude Code חולקים את אותה מכסה",
  },
  {
    id: 9,
    section: "Prompt Caching",
    title: "Prompt Caching — חיסכון מובנה",
    type: "feature",
    icon: "cache",
    tagline: "prefix חוזר נשמר ב-cache — תשלום של 10% בלבד",
    bullets: [
      "CLAUDE.md נשמר אוטומטית — חיסכון של ~40% בטוקני קלט",
      "סשן ללא caching: $50–100 | עם caching: $10–19",
      "API: cache hit = 10% ממחיר טוקן רגיל",
    ],
  },
  {
    id: 10,
    section: "Prompt Caching",
    title: "מה שובר את ה-Cache",
    type: "mistakes",
    items: [
      { title: "הוספת / הסרת MCP", desc: "שינוי כלים מחוברים באמצע שיחה — cache miss מיידי" },
      { title: "שינוי מודל באמצע סשן", desc: "מעבר מ-Sonnet ל-Opus = תשלום מחדש על הכל" },
      { title: "עריכת CLAUDE.md", desc: "שינוי ב-prefix הנפוץ ביותר — מכפיל עלויות לאותה בקשה" },
      { title: "כל שינוי ב-prefix", desc: "הנחיה חדשה לפרויקט, שינוי System Prompt = cache miss" },
    ],
  },
  {
    id: 11,
    section: "טיפים — Chat",
    title: "ניהול שיחות",
    type: "tips",
    tips: [
      { num: 1, text: "פתח שיחות חדשות לנושאים שונים — היסטוריה ארוכה שורפת טוקנים על הקשר לא רלוונטי" },
      { num: 2, text: "שאל הכל בהודעה אחת — 5 שאלות בהודעה אחת עדיפות על 5 הודעות נפרדות" },
      { num: 3, text: "אל תעלה קבצים שוב — קלוד זוכר קבצים שכבר הועלו באותה שיחה" },
    ],
  },
  {
    id: 12,
    section: "טיפים — Chat",
    title: "ניהול קבצים ותוכן",
    type: "tips",
    tips: [
      { num: 4, text: "גזור לפני שאתה מדביק — 50 עמודי PDF = 75,000–150,000 טוקן רק מהקריאה" },
      { num: 5, text: "טקסט עדיף על קבצים — Word/PowerPoint/Excel כוללים metadata שמוסיף טוקנים" },
      { num: 6, text: "הסר קבצים מפרויקטים שלא בשימוש — קלוד קורא הכל לפני שהוא מחליט מה רלוונטי" },
      { num: 7, text: "כבה connectors שלא בשימוש — כל connector פעיל מוסיף 1,500–3,000 טוקן לכל הודעה" },
    ],
  },
  {
    id: 13,
    section: "טיפים — Chat",
    title: "ניהול כלים והנחיות",
    type: "tips",
    tips: [
      { num: 8, text: "הגדר 'Load tools when needed' — קלוד מחפש כלים רק כשצריך (מומלץ עם 10+ connectors)" },
      { num: 9, text: "כבה Web Search ו-Extended Thinking כשלא צריך — Extended Thinking שורפת עשרות אלפי טוקני פלט" },
      { num: 10, text: "קצר את Project Instructions — נטענות בכל הודעה; שמור הנחיות ספציפיות למשימה בתוך השיחה" },
    ],
  },
  {
    id: 14,
    section: "טיפים — Work",
    title: "Claude for Work — Teams / Enterprise",
    type: "tips",
    tips: [
      { num: 12, text: "נצל Projects נכון — העלה מסמכים לפרויקט כשעובדים עליהם חוזרות; ה-retrieval יעיל מהדבקה ידנית" },
      { num: 13, text: "כתוב System Prompt מובנה: הקשר / משימה / אילוצים / פורמט פלט" },
      { num: 14, text: "השתמש ב-XML tags: <context>, <task>, <output_format> — גבולות ברורים מפחיתים הבהרות חוזרות" },
      { num: 15, text: "שקול Batch API לעיבוד מסמכים — 50% הנחה תמורת עיכוב של עד 24 שעות" },
    ],
  },
  {
    id: 15,
    section: "טיפים — Code",
    title: "ניהול CLAUDE.md",
    type: "tips",
    tips: [
      { num: 16, text: "שמור CLAUDE.md קצר מ-500 טוקן (~350 מילים) — נטען בתחילת כל הודעה, בכל סשן" },
      { num: 17, text: "השתמש ב-CLAUDE.md כ-index — 'לפרטים ראה /docs/ARCHITECTURE.md' במקום לכתוב הכל שם" },
      { num: 18, text: "אל תערוך CLAUDE.md באמצע סשן — שובר את ה-cache ומכפיל עלויות לאותה בקשה" },
    ],
  },
  {
    id: 16,
    section: "טיפים — Code",
    title: "ניהול סשנים",
    type: "tips",
    tips: [
      { num: 19, text: "/compact בזמן הנכון — כש-cache עדיין חם (פחות מ-5 דקות). אחרי 5 דקות — עדיף /clear" },
      { num: 20, text: "/compact בנקודות עצירה טבעיות — אחרי פיצ'ר מוכן, אחרי תיקון באג; לא כשקלוד מזהיר שהחלון מתמלא" },
      { num: 21, text: "/clear בין משימות שונות — הקשר לא רלוונטי שורף טוקנים על כל בקשה" },
    ],
  },
  {
    id: 17,
    section: "טיפים — Code",
    title: "ניהול קוד ומודלים",
    type: "tips",
    tips: [
      { num: 22, text: "הוסף .claudeignore — מניעת קריאה של node_modules, dist, .git, logs" },
      { num: 23, text: "ציין קבצים ספציפיים — 'שורה 47 ב-src/auth.js' זול בהרבה מ-'תסתכל על הפרויקט'" },
      { num: 24, text: "בקשות batch — במקום 3 בקשות: 'ב-src/auth.js: חלץ constants, הוסף error handling, תקן שורה 47'" },
      { num: 25, text: "Sonnet כ-default, Opus רק כשצריך — Sonnet מטפל ב-80% מהמשימות ועולה ~5x פחות" },
    ],
  },
  {
    id: 18,
    section: "סיכום",
    title: "טבלת סיכום",
    type: "summary-table",
    headers: ["נושא", "claude.ai Chat", "Claude for Work", "Claude Code"],
    rows: [
      ["חלון קונטקסט", "200K", "500K (Enterprise)", "200K"],
      ["מגבלת שימוש", "5 שעות rolling", "לפי תוכנית", "5 שעות rolling"],
      ["מנגנון זיכרון", "Memory feature", "Projects + Memory", "CLAUDE.md"],
      ["כלי לדחיסה", "שיחה חדשה", "שיחה חדשה", "/compact"],
      ["המלכודת הנפוצה", "שיחות ארוכות", "System Prompt ארוך", "CLAUDE.md גדול"],
      ["החיסכון הגדול", "כבה connectors", "XML structure", ".claudeignore + /compact"],
    ],
  },
  {
    id: 19,
    section: "סיכום",
    title: "The Big 5 — טעויות נפוצות",
    type: "big5",
    items: [
      { myth: "יותר הקשר = תשובה טובה יותר", reality: "הקשר לא רלוונטי מבלבל ועולה כסף" },
      { myth: "שולח הודעות קצרות — אז אני חוסך", reality: "הבעיה היא היסטוריית השיחה, לא ההודעה הנוכחית" },
      { myth: "הכלים פעילים אבל לא בשימוש — בסדר", reality: "כל connector פעיל שורף 1,500–3,000 טוקן להודעה" },
      { myth: "אעלה את כל הקוד ש-Claude יחליט", reality: "קלוד קורא הכל לפני שמחליט — עדיף שתחליט אתה" },
      { myth: "אשמור cache ואחסוך", reality: "cache נשבר מכל שינוי ב-prefix: MCP, מודל, CLAUDE.md" },
    ],
  },
  {
    id: 20,
    section: "דיון",
    title: "נקודות לדיון",
    type: "discussion",
    items: [
      { q: "מה ההבדל בין 'usage limit' ל-'context window'?", a: "Context window = כמה קלוד יכול לזכור; usage limit = כמה מותר לך להשתמש" },
      { q: "מתי כדאי להתחיל שיחה חדשה לעומת להמשיך?", a: "כשהנושא משתנה, כשיש cache miss, כשהחלון מתמלא" },
      { q: "האם ה-Memory feature עוזר או מכביד?", a: "תלוי בתוכן — memories ארוכות = טוקנים נוספים בכל שיחה" },
      { q: "מה עדיף: Haiku מהיר וזול, או Sonnet שמצריך פחות הבהרות?", a: "תלוי במשימה — Haiku למשימות פשוטות, Sonnet כשדיוק חשוב" },
    ],
  },
];

const sections = [
  "פתיחה", "מנגנון הטוקנים", "חלון הקונטקסט", "גבולות שימוש",
  "Prompt Caching", "טיפים — Chat", "טיפים — Work", "טיפים — Code",
  "סיכום", "דיון",
];

const icons = {
  token: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v2M12 16v2M6 12h2M16 12h2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  cache: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
      <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" />
    </svg>
  ),
};

export default function TokensPresentation() {
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
      <h2 className="sr-only">מצגת קורס Claude — שיעור שני</h2>

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
        }}>שיעור 2</div>
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

  if (slide.type === "mistakes") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 24 }}>{slide.title}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {slide.items.map((item, i) => (
            <div key={i} style={{ background: "#fef2f2", borderRadius: 10, padding: "18px 20px", border: "1px solid #fecaca" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#b91c1c", marginBottom: 6 }}>✕ {item.title}</div>
              <div style={{ fontSize: 13, color: "#555" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "usage") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 20 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {slide.rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              background: i % 2 === 0 ? "#f8f7f4" : "#fff",
              borderRadius: 8, border: "1px solid #e8e6e0", overflow: "hidden",
            }}>
              <div style={{ padding: "14px 16px", fontWeight: 600, fontSize: 14, color: "#1a1a2e", borderLeft: "1px solid #e8e6e0" }}>{row.platform}</div>
              <div style={{ padding: "14px 16px", fontSize: 14, color: "#333", borderLeft: "1px solid #e8e6e0" }}>{row.limit}</div>
              <div style={{ padding: "14px 16px", fontSize: 13, color: "#888" }}>{row.reset}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 8, padding: "10px 16px", fontSize: 13, color: "#92400e" }}>
          {slide.note}
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

  if (slide.type === "summary-table") {
    const colColors = ["#e3f2fd", "#e8f5e9", "#fff3e0"];
    return (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a2e", marginBottom: 18 }}>{slide.title}</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr>
                {slide.headers.map((h, i) => (
                  <th key={i} style={{
                    padding: "10px 14px", textAlign: i === 0 ? "right" : "center",
                    background: i === 0 ? "#f8f7f4" : colColors[i - 1],
                    border: "1px solid #e8e6e0", fontWeight: 600, color: "#1a1a2e", fontSize: 12,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{
                      padding: "10px 14px", textAlign: j === 0 ? "right" : "center",
                      border: "1px solid #e8e6e0",
                      background: j === 0 ? "#f8f7f4" : i % 2 === 0 ? "#fff" : `${colColors[j - 1]}55`,
                      color: j === 0 ? "#1a1a2e" : "#444", fontWeight: j === 0 ? 600 : 400,
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (slide.type === "big5") {
    return (
      <div>
        <h2 style={{ fontSize: 22, fontWeight: 600, color: "#1a1a2e", marginBottom: 18 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {slide.items.map((item, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "28px 1fr 1fr",
              alignItems: "center", gap: 12,
              background: "#f8f7f4", borderRadius: 8, padding: "12px 14px",
              border: "1px solid #e8e6e0",
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: 12, background: "#1a1a2e",
                color: "#fff", fontSize: 11, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{i + 1}</div>
              <div style={{ fontSize: 13, color: "#b91c1c", fontStyle: "italic" }}>"{item.myth}"</div>
              <div style={{ fontSize: 13, color: "#15803d", fontWeight: 500 }}>↳ {item.reality}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "discussion") {
    return (
      <div>
        <h2 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a2e", marginBottom: 24 }}>{slide.title}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {slide.items.map((item, i) => (
            <div key={i} style={{ background: "#f8f7f4", borderRadius: 10, padding: "16px 20px", border: "1px solid #e8e6e0" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a2e", marginBottom: 6 }}>💬 {item.q}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{slide.title}</div>;
}
