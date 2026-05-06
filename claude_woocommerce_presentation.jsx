import { useState } from "react";

// ── Onyx AI brand tokens ──────────────────────────────────────────
const B = {
  bg:         "#1A1814",
  bgDeep:     "#0F0D0A",
  bgMid:      "#252018",
  surface:    "#2E2820",
  border:     "#3D3528",
  mustard:    "#C8922A",
  mustardL:   "#D4A84B",
  mustardDim: "#3D2E10",
  teal:       "#00D4AA",
  amber:      "#FFB74D",
  white:      "#F5F0E8",
  silver:     "#C8BFB0",
  muted:      "#7A7060",
};

const slides = [
  // ── 01 ──────────────────────────────────────────
  {
    id: 1, section: "פתיחה", type: "cover",
    title: "WooCommerce עם Claude ו-MCP",
    subtitle: "איך להפוך את קלוד מכלי שיחה למפעיל חנות",
    badge: "סדנה · WooCommerce",
  },
  // ── 02 ──────────────────────────────────────────
  {
    id: 2, section: "פתיחה", type: "bullets",
    title: "מה נלמד היום",
    items: [
      "מה זה MCP ואיך זה עובד",
      "חיבור קלוד לחנות WooCommerce",
      "שימושים עסקיים שמייצרים תוצאות",
      "כתיבת פרומפטים שעובדים באמת",
      "אוטומציות ומשימות מתוזמנות",
    ],
  },
  // ── 03 ──────────────────────────────────────────
  {
    id: 3, section: "הבעיה", type: "problem",
    title: "הבעיה ברוב החנויות",
    items: [
      "מוצרים לא ממירים",
      "אין אופטימיזציה שוטפת",
      "SEO חלש",
      "החלטות בלי נתונים",
    ],
  },
  // ── 04 ──────────────────────────────────────────
  {
    id: 4, section: "הבעיה", type: "mindshift",
    title: "מה משתנה היום",
    before: "אתה מנהל את החנות",
    after: "קלוד עובד בתוך החנות",
  },
  // ── 05 ──────────────────────────────────────────
  {
    id: 5, section: "מה זה MCP", type: "concept",
    badge: "Model Context Protocol",
    title: "מה זה MCP",
    body: "חיבור בין קלוד למערכות חיצוניות — Claude → MCP → WooCommerce",
  },
  // ── 06 ──────────────────────────────────────────
  {
    id: 6, section: "מה זה MCP", type: "bullets",
    title: "מה קלוד יכול לעשות בחנות",
    items: [
      "לקרוא מוצרים ולנתח מכירות",
      "לשכתב תיאורים ולשפר כותרות",
      "לזהות בעיות ולהציע שיפורים",
      "להריץ תהליכים שלמים",
    ],
  },
  // ── 07 ──────────────────────────────────────────
  {
    id: 7, section: "מה זה MCP", type: "mindshift",
    title: "ההבדל הקריטי",
    before: "בלי MCP — קלוד נותן רעיונות",
    after: "עם MCP — קלוד עובד בפועל",
  },
  // ── 08 ──────────────────────────────────────────
  {
    id: 8, section: "מה זה MCP", type: "agent",
    title: "איך זה נראה בפועל",
    steps: ["אתה כותב: נתח את החנות", "קלוד מזהה בעיות", "קלוד מציע שיפורים", "קלוד מבצע פעולות"],
  },
  // ── 09 ──────────────────────────────────────────
  {
    id: 9, section: "הגדרה ראשונית", type: "flow",
    title: "חיבור ראשוני",
    steps: [
      { num: "01", label: "חיבור קלוד ל-MCP" },
      { num: "02", label: "חיבור MCP ל-WooCommerce" },
      { num: "03", label: "בדיקת גישה לנתונים" },
    ],
  },
  // ── 10 ──────────────────────────────────────────
  {
    id: 10, section: "הגדרה ראשונית", type: "prompt",
    title: "בדיקה ראשונה",
    lines: [
      "נתח את החנות שלי",
      "ותן 5 בעיות מרכזיות",
    ],
  },
  // ── 11 ──────────────────────────────────────────
  {
    id: 11, section: "הגדרה ראשונית", type: "bullets",
    title: "מה צריך לצאת",
    items: [
      "בעיות המרה",
      "בעיות תוכן",
      "בעיות SEO",
      "בעיות מבנה",
      "בעיות תמחור",
    ],
  },
  // ── 12 ──────────────────────────────────────────
  {
    id: 12, section: "שימושים עסקיים", type: "section-header",
    num: "01",
    title: "שימושים עסקיים",
  },
  // ── 13 ──────────────────────────────────────────
  {
    id: 13, section: "שימושים עסקיים", type: "prompt",
    title: "שימוש ראשון: מוצרים חלשים",
    lines: [
      "זהה את המוצרים עם ביצועים נמוכים",
      "והסבר למה",
    ],
  },
  // ── 14 ──────────────────────────────────────────
  {
    id: 14, section: "שימושים עסקיים", type: "prompt",
    title: "שימוש שני: שיפור מוצר",
    lines: [
      "שכתב את תיאור המוצר",
      "כדי לשפר המרות",
    ],
  },
  // ── 15 ──────────────────────────────────────────
  {
    id: 15, section: "שימושים עסקיים", type: "prompt",
    title: "שימוש שלישי: הגדלת סל",
    lines: [
      "הצע 3 מוצרים משלימים",
      "למוצר הזה",
    ],
  },
  // ── 16 ──────────────────────────────────────────
  {
    id: 16, section: "שימושים עסקיים", type: "demo-header",
    label: "שימוש מרכזי",
    title: "Audit מלא לחנות",
  },
  // ── 17 ──────────────────────────────────────────
  {
    id: 17, section: "שימושים עסקיים", type: "prompt",
    title: "פרומפט ל-Audit",
    lines: [
      "בצע audit מלא וחלק לקטגוריות:",
      "SEO, המרות, UX, תמחור, מבנה",
    ],
  },
  // ── 18 ──────────────────────────────────────────
  {
    id: 18, section: "שימושים עסקיים", type: "pros",
    title: "מה מקבלים מ-audit טוב",
    items: ["תמונת מצב אמיתית", "סדר עדיפויות", "פעולות ברורות"],
  },
  // ── 19 ──────────────────────────────────────────
  {
    id: 19, section: "שיפור מוצרים", type: "section-header",
    num: "02",
    title: "שיפור מוצרים",
  },
  // ── 20 ──────────────────────────────────────────
  {
    id: 20, section: "שיפור מוצרים", type: "flow",
    title: "שיפור מוצרים בצורה שיטתית",
    steps: [
      { num: "01", label: "כותרת" },
      { num: "02", label: "תיאור" },
      { num: "03", label: "FAQ" },
      { num: "04", label: "upsells" },
    ],
  },
  // ── 21 ──────────────────────────────────────────
  {
    id: 21, section: "שיפור מוצרים", type: "prompt",
    title: "פרומפט לשיפור מוצרים",
    lines: [
      "שפר כותרת ל-SEO",
      "שפר תיאור להמרה",
      "הוסף FAQ",
      "הצע cross-sell",
    ],
  },
  // ── 22 ──────────────────────────────────────────
  {
    id: 22, section: "שיפור מוצרים", type: "prompt",
    title: "תמחור",
    lines: [
      "נתח את התמחור בחנות ומצא:",
      "מוצרים יקרים מדי",
      "מוצרים זולים מדי",
      "הזדמנויות לבאנדלים",
    ],
  },
  // ── 23 ──────────────────────────────────────────
  {
    id: 23, section: "שיפור מוצרים", type: "prompt",
    title: "SEO ותוכן",
    lines: [
      "צור תוכן SEO לקטגוריה הראשית",
    ],
  },
  // ── 24 ──────────────────────────────────────────
  {
    id: 24, section: "שיפור מוצרים", type: "prompt",
    title: "רעיונות תוכן",
    lines: [
      "תן 5 רעיונות למאמרים",
      "שמביאים תנועה לחנות",
    ],
  },
  // ── 25 ──────────────────────────────────────────
  {
    id: 25, section: "ניתוח לקוחות", type: "section-header",
    num: "03",
    title: "ניתוח לקוחות",
  },
  // ── 26 ──────────────────────────────────────────
  {
    id: 26, section: "ניתוח לקוחות", type: "prompt",
    title: "ניתוח הזמנות",
    lines: [
      "נתח הזמנות אחרונות",
      "ומצא דפוסי רכישה",
    ],
  },
  // ── 27 ──────────────────────────────────────────
  {
    id: 27, section: "ניתוח לקוחות", type: "bullets",
    title: "מה קלוד מזהה",
    items: [
      "מוצרים שנקנים יחד",
      "לקוחות חוזרים",
      "מוצרים מובילים",
    ],
  },
  // ── 28 ──────────────────────────────────────────
  {
    id: 28, section: "אוטומציה", type: "section-header",
    num: "04",
    title: "אוטומציה",
  },
  // ── 29 ──────────────────────────────────────────
  {
    id: 29, section: "אוטומציה", type: "statement",
    label: "המעבר הקריטי",
    lines: ["מפעולות חד פעמיות", "למערכת שעובדת לבד"],
    accent: 1,
  },
  // ── 30 ──────────────────────────────────────────
  {
    id: 30, section: "אוטומציה", type: "pros",
    title: "למה אוטומציה",
    items: ["שיפור קבוע", "פחות עבודה ידנית", "החלטות מבוססות נתונים"],
  },
  // ── 31 ──────────────────────────────────────────
  {
    id: 31, section: "אוטומציה", type: "toc",
    title: "משימות מתוזמנות",
    items: [
      { num: "יומי", label: "ניתוח מכירות" },
      { num: "שבועי", label: "שיפור מוצרים" },
      { num: "חודשי", label: "audit מלא" },
    ],
  },
  // ── 32 ──────────────────────────────────────────
  {
    id: 32, section: "אוטומציה", type: "prompt",
    title: "דוגמה יומית",
    lines: [
      "נתח את המכירות של אתמול",
      "והצג תובנות",
    ],
  },
  // ── 33 ──────────────────────────────────────────
  {
    id: 33, section: "אוטומציה", type: "prompt",
    title: "דוגמה שבועית",
    lines: [
      "בדוק מוצרים חדשים",
      "ושפר אותם",
    ],
  },
  // ── 34 ──────────────────────────────────────────
  {
    id: 34, section: "אוטומציה", type: "prompt",
    title: "דוגמה חודשית",
    lines: [
      "נתח את 20 המוצרים המובילים",
      "והצע שיפורים",
    ],
  },
  // ── 35 ──────────────────────────────────────────
  {
    id: 35, section: "אוטומציה", type: "agent",
    title: "מערכת שעובדת לבד",
    steps: ["בודק", "מנתח", "מציע", "משפר"],
  },
  // ── 36 ──────────────────────────────────────────
  {
    id: 36, section: "בניית סוכן", type: "section-header",
    num: "05",
    title: "בניית סוכן חנות",
  },
  // ── 37 ──────────────────────────────────────────
  {
    id: 37, section: "בניית סוכן", type: "flow",
    title: "שלושה שלבים",
    steps: [
      { num: "01", label: "מטרה ברורה" },
      { num: "02", label: "workflow" },
      { num: "03", label: "אוטומציה" },
    ],
  },
  // ── 38 ──────────────────────────────────────────
  {
    id: 38, section: "בניית סוכן", type: "examples",
    title: "דוגמאות למטרות",
    items: [
      { icon: "📈", label: "להגדיל המרות" },
      { icon: "⏱️", label: "לחסוך זמן" },
      { icon: "🔍", label: "לשפר SEO" },
      { icon: "🛒", label: "להגדיל סל ממוצע" },
    ],
  },
  // ── 39 ──────────────────────────────────────────
  {
    id: 39, section: "בניית סוכן", type: "callout",
    label: "טעויות נפוצות",
    text: "פרומפטים כלליים · בלי מבנה · לנסות הכל ביחד",
    color: "amber",
  },
  // ── 40 ──────────────────────────────────────────
  {
    id: 40, section: "בניית סוכן", type: "bullets",
    title: "איך עובדים נכון",
    items: [
      "מגדירים מטרה",
      "בונים תהליך",
      "משכפלים הצלחות",
      "מוסיפים אוטומציה",
    ],
  },
  // ── 41 ──────────────────────────────────────────
  {
    id: 41, section: "סיכום", type: "bullets",
    title: "מה לקחת מהסדנה",
    items: [
      "קלוד כסוכן — לא רק כיועץ",
      "תהליכים שחוזרים על עצמם",
      "אוטומציה אמיתית",
      "שיפור מתמיד",
    ],
  },
  // ── 42 ──────────────────────────────────────────
  {
    id: 42, section: "סיכום", type: "summary",
    title: "סיכום",
    items: [
      { label: "MCP", value: "חיבור לחנות" },
      { label: "שימושים", value: "audit, SEO, תמחור" },
      { label: "אוטומציה", value: "שיפור מתמיד" },
    ],
  },
  // ── 43 ──────────────────────────────────────────
  {
    id: 43, section: "סיכום", type: "takeaway",
    text: "חנויות שמטמיעות את זה משתפרות מהר יותר, בודקות יותר, מרוויחות יותר",
  },
  // ── 44 ──────────────────────────────────────────
  {
    id: 44, section: "סיכום", type: "closing",
    quote: "עכשיו פותחים קלוד, מחברים MCP, ומתחילים לעבוד",
  },
];

const sections = [
  "פתיחה", "הבעיה", "מה זה MCP",
  "הגדרה ראשונית", "שימושים עסקיים",
  "שיפור מוצרים", "ניתוח לקוחות",
  "אוטומציה", "בניית סוכן", "סיכום",
];

// ── OnyxLogo ──────────────────────────────────────────────────────
function OnyxLogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40">
      <rect width="40" height="40" rx="10" fill={B.bgMid}/>
      <polygon points="20,4 33.5,11.5 33.5,28.5 20,36 6.5,28.5 6.5,11.5" fill="none" stroke={B.mustard} strokeWidth="1.5"/>
      <polygon points="20,10.5 28.5,15.25 28.5,24.75 20,29.5 11.5,24.75 11.5,15.25" fill={B.mustard} fillOpacity="0.15"/>
      <circle cx="20" cy="20" r="3" fill={B.mustard}/>
    </svg>
  );
}

// ── SlideContent ──────────────────────────────────────────────────
function SlideContent({ slide }) {

  if (slide.type === "cover") return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: B.teal, background: "rgba(0,212,170,0.08)",
        border: `0.5px solid rgba(0,212,170,0.2)`,
        borderRadius: 100, padding: "5px 16px",
        display: "inline-block", marginBottom: 28,
      }}>{slide.badge}</div>
      <h1 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 46, color: B.white, margin: "0 0 16px",
        letterSpacing: "-0.03em", lineHeight: 1.05,
      }}>{slide.title}</h1>
      <p style={{
        fontFamily: "'Heebo', sans-serif", fontSize: 20,
        color: B.muted, margin: 0, fontWeight: 300,
      }}>{slide.subtitle}</p>
      <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <OnyxLogoMark />
        <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 16, color: B.white, letterSpacing: "-0.02em" }}>
          ONYX <span style={{ color: B.mustard }}>AI</span>
        </span>
      </div>
    </div>
  );

  if (slide.type === "section-header") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: "100%" }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 48, fontWeight: 500,
        color: B.mustardDim, letterSpacing: "-0.02em", lineHeight: 1,
        marginBottom: 8,
      }}>{slide.num}</div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 42, color: B.white, margin: 0,
        letterSpacing: "-0.02em", lineHeight: 1.1,
      }}>{slide.title}</h2>
      <div style={{ marginTop: 20, width: 48, height: 2, background: B.mustard, borderRadius: 2 }} />
    </div>
  );

  if (slide.type === "statement") return (
    <div style={{ textAlign: "center", padding: "8px 0" }}>
      {slide.label && (
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: B.muted, marginBottom: 24,
        }}>{slide.label}</div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.lines.map((line, i) => (
          <div key={i} style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 800,
            fontSize: slide.large ? 56 : (i === slide.accent ? 44 : 32),
            color: i === slide.accent ? B.mustard : B.white,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>{line}</div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "concept") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: B.teal, background: "rgba(0,212,170,0.08)",
        border: `0.5px solid rgba(0,212,170,0.2)`,
        borderRadius: 100, padding: "4px 14px",
      }}>{slide.badge}</div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 36, color: B.white, margin: 0,
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.surface, border: `0.5px solid ${B.border}`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 10, padding: "18px 28px",
        fontFamily: "'Heebo', sans-serif", fontSize: 18,
        color: B.silver, lineHeight: 1.6, maxWidth: 500,
      }}>{slide.body}</div>
    </div>
  );

  if (slide.type === "bullets") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: 6,
              background: B.mustardDim, color: B.mustardL,
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, border: `0.5px solid rgba(200,146,42,0.2)`,
            }}>{String(i + 1).padStart(2, "0")}</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 16, color: B.silver, lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "problem") return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 36, color: B.white, margin: 0,
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            background: "rgba(200,146,42,0.06)",
            border: `0.5px solid rgba(200,146,42,0.25)`,
            borderRadius: 12, padding: "20px 22px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.muted, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 8,
            }}>0{i + 1}</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 20, color: B.white }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "flow") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 28px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              background: B.surface, border: `0.5px solid ${B.border}`,
              borderRadius: i === 0 ? "10px 10px 0 0" : i === slide.steps.length - 1 ? "0 0 10px 10px" : 0,
              padding: "16px 22px", flex: 1,
              borderBottom: i < slide.steps.length - 1 ? "none" : `0.5px solid ${B.border}`,
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 14,
                color: B.mustard, fontWeight: 500, width: 32, flexShrink: 0,
              }}>{step.num}</div>
              <div style={{ width: 1, height: 20, background: B.border, flexShrink: 0 }} />
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 17, color: B.silver }}>
                {step.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "mindshift") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 28, color: B.muted, margin: 0,
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(255,183,77,0.2)`,
        borderRadius: 12, padding: "20px 32px", width: "100%",
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: B.amber, letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: 10,
        }}>לא</div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: 22, color: "#7A7060" }}>
          "{slide.before}"
        </div>
      </div>
      <div style={{ color: B.mustard, fontSize: 24 }}>↓</div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(200,146,42,0.35)`,
        borderRadius: 12, padding: "20px 32px", width: "100%",
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: B.mustard, letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: 10,
        }}>אלא</div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 22, color: B.white }}>
          "{slide.after}"
        </div>
      </div>
    </div>
  );

  if (slide.type === "toc") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 12, padding: "22px 24px",
            display: "flex", flexDirection: "column", gap: 8,
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 20,
              color: B.mustardL, fontWeight: 500, lineHeight: 1,
            }}>{item.num}</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 16, color: B.white }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "pros") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: "rgba(0,212,170,0.06)",
            border: `0.5px solid rgba(0,212,170,0.2)`,
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{ color: B.teal, fontSize: 18, flexShrink: 0 }}>✓</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 16, color: B.silver, lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "callout") {
    const accentMap = {
      teal:   { bg: "rgba(0,212,170,0.08)",  border: "rgba(0,212,170,0.25)",  color: B.teal,   labelColor: B.teal },
      amber:  { bg: "rgba(255,183,77,0.08)",  border: "rgba(255,183,77,0.25)", color: B.amber,  labelColor: B.amber },
      mustard:{ bg: "rgba(200,146,42,0.08)",  border: "rgba(200,146,42,0.3)",  color: B.mustard, labelColor: B.mustard },
    };
    const a = accentMap[slide.color] || accentMap.mustard;
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20 }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: a.labelColor, background: a.bg,
          border: `0.5px solid ${a.border}`,
          borderRadius: 100, padding: "4px 14px",
        }}>{slide.label}</div>
        <div style={{
          background: B.surface, border: `0.5px solid ${a.border}`,
          borderRadius: 14, padding: "32px 40px",
          textAlign: "center", width: "100%",
        }}>
          <div style={{
            fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
            fontSize: 28, color: a.color,
            letterSpacing: "-0.02em",
          }}>{slide.text}</div>
        </div>
      </div>
    );
  }

  if (slide.type === "demo-header") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 16 }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: B.teal, background: "rgba(0,212,170,0.08)",
        border: "0.5px solid rgba(0,212,170,0.2)",
        borderRadius: 100, padding: "4px 14px",
      }}>{slide.label}</div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 38, color: B.white, margin: 0,
        letterSpacing: "-0.02em", lineHeight: 1.1,
      }}>{slide.title}</h2>
    </div>
  );

  if (slide.type === "agent") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", gap: 0, position: "relative" }}>
        <div style={{
          position: "absolute", top: "50%", right: 0, left: 0,
          height: 2, background: B.border, zIndex: 0,
        }} />
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            gap: 12, position: "relative", zIndex: 1,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: B.mustardDim, border: `1.5px solid ${B.mustard}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'DM Mono', monospace", fontSize: 13,
              color: B.mustardL, fontWeight: 500,
            }}>{String(i + 1).padStart(2, "0")}</div>
            <div style={{
              fontFamily: "'Heebo', sans-serif", fontSize: 13,
              color: B.silver, textAlign: "center", lineHeight: 1.4,
              padding: "0 4px",
            }}>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "prompt") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.bgDeep, border: `0.5px solid ${B.border}`,
        borderRadius: 12, overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "8px 14px", background: B.bgMid,
          borderBottom: `0.5px solid ${B.border}`,
        }}>
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#27C93F" }} />
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.muted, marginRight: "auto", letterSpacing: "0.05em",
          }}>claude prompt</span>
        </div>
        <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
          {slide.lines.map((line, i) => (
            <div key={i} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 14,
              color: i === 0 ? B.mustardL : B.teal,
              lineHeight: 1.7, direction: "rtl", textAlign: "right",
            }}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );

  if (slide.type === "examples") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: slide.items.length <= 3 ? `repeat(${slide.items.length}, 1fr)` : "1fr 1fr",
        gap: 12,
      }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 12, padding: "24px",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 10, textAlign: "center",
          }}>
            <div style={{ fontSize: 32 }}>{item.icon}</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 16, color: B.white }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "takeaway") return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div style={{
        background: B.bgDeep, border: `0.5px solid ${B.mustard}`,
        borderRadius: 14, padding: "36px 44px",
        textAlign: "center", width: "100%",
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: B.mustard, marginBottom: 16,
        }}>Takeaway</div>
        <div style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 24, color: B.white, letterSpacing: "-0.01em",
          lineHeight: 1.4,
        }}>{slide.text}</div>
      </div>
    </div>
  );

  if (slide.type === "summary") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 36, color: B.white, margin: "0 0 28px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 0,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, overflow: "hidden",
          }}>
            <div style={{
              padding: "18px 24px",
              background: B.bgMid, borderLeft: `0.5px solid ${B.border}`,
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: B.mustard, letterSpacing: "0.06em",
              textTransform: "uppercase", minWidth: 140,
            }}>{item.label}</div>
            <div style={{
              padding: "18px 24px",
              fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
              fontSize: 20, color: B.white,
            }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "closing") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 32, color: B.white, lineHeight: 1.3,
        letterSpacing: "-0.02em", marginBottom: 32,
      }}>«{slide.quote}»</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <OnyxLogoMark />
        <div>
          <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 18, color: B.white, letterSpacing: "-0.02em" }}>
            ONYX <span style={{ color: B.mustard }}>AI</span>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: B.muted, marginTop: 2 }}>
            onyx-ai.co.il · 2026
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ color: B.muted, fontFamily: "'Heebo', sans-serif", fontSize: 14 }}>
      [{slide.type} — {slide.title}]
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────
export default function WoocommercePresentation() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const total = slides.length;

  const go = (dir) => setCurrent((c) => Math.max(0, Math.min(total - 1, c + dir)));

  const btn = (label, disabled, onClick) => (
    <button onClick={onClick} disabled={disabled} style={{
      padding: "10px 24px",
      background: disabled ? B.surface : B.mustard,
      color: disabled ? B.muted : B.bgDeep,
      border: `0.5px solid ${disabled ? B.border : B.mustard}`,
      borderRadius: 8, cursor: disabled ? "default" : "pointer",
      fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500,
      letterSpacing: "0.04em",
    }}>{label}</button>
  );

  return (
    <div style={{
      direction: "rtl",
      fontFamily: "'Heebo', sans-serif",
      minHeight: "100vh",
      background: B.bg,
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "24px 16px 48px",
    }}>

      {/* Progress */}
      <div style={{ width: "100%", maxWidth: 820, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.mustard, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {slide.section}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.muted }}>
            {current + 1} / {total}
          </span>
        </div>
        <div style={{ height: 2, background: B.surface, borderRadius: 2 }}>
          <div style={{
            height: "100%",
            width: `${((current + 1) / total) * 100}%`,
            background: B.mustard, borderRadius: 2,
            transition: "width 0.3s ease",
          }} />
        </div>
      </div>

      {/* Slide card */}
      <div style={{
        width: "100%", maxWidth: 820, minHeight: 440,
        background: B.bgMid,
        border: `0.5px solid ${B.border}`,
        borderRadius: 16, padding: "44px 52px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 240, height: 240,
          background: "radial-gradient(circle, rgba(200,146,42,0.06) 0%, transparent 68%)",
          pointerEvents: "none",
        }} />
        <SlideContent slide={slide} />
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", gap: 12, marginTop: 20, alignItems: "center" }}>
        {btn("הקודם →", current === 0, () => go(-1))}

        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", maxWidth: 440 }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)} title={s.title || s.section} style={{
              width: i === current ? 20 : 6, height: 6, borderRadius: 3,
              background: i === current ? B.mustard : B.border,
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.2s",
            }} />
          ))}
        </div>

        {btn("← הבא", current === total - 1, () => go(1))}
      </div>

      {/* Section jump */}
      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {sections.map((sec) => {
          const idx = slides.findIndex(s => s.section === sec);
          if (idx === -1) return null;
          const active = slide.section === sec;
          return (
            <button key={sec} onClick={() => setCurrent(idx)} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, padding: "4px 12px", letterSpacing: "0.06em",
              border: `0.5px solid ${active ? B.mustard : B.border}`,
              background: active ? B.mustardDim : "transparent",
              color: active ? B.mustardL : B.muted,
              borderRadius: 20, cursor: "pointer",
            }}>{sec}</button>
          );
        })}
      </div>
    </div>
  );
}
