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
  // ── 01 ─ Cover ────────────────────────────────────────────────────
  {
    id: 1, section: "פתיחה", type: "cover",
    badge: "שיעור חינמי · Onyx AI",
    title: "מכונת לידים לעסק",
    subtitle: "איך לבנות מערכת שמביאה לקוחות חדשים באופן קבוע",
    tools: ["Google Search", "Google Sheets", "Gmail", "WhatsApp", "Claude"],
  },
  // ── 02 ─ מי אני ───────────────────────────────────────────────────
  {
    id: 2, section: "פתיחה", type: "bio",
    label: "מי אני",
    title: "בנימין · Onyx AI",
    items: [
      "מפתח וורדפרס ו-AI מעל 15 שנה",
      "בונה אוטומציות, סוכנים ותהליכי AI לעסקים",
      "מלווה עסקים בהטמעת AI",
      "עובד עם Claude, MCP, Google Workspace ואוטומציות עסקיות",
    ],
    goal: "לעזור לעסקים קטנים לעבוד כמו צוות גדול יותר.",
  },
  // ── 03 ─ הבעיה ───────────────────────────────────────────────────
  {
    id: 3, section: "הבעיה", type: "problem-list",
    title: "רוב בעלי העסקים משווקים בצורה אקראית",
    items: [
      "מעלים פוסטים ומקווים ללידים",
      "מחכים להמלצות",
      "מגיבים לפניות במקום לייצר אותן",
      "אין מערכת מסודרת למעקב",
      "שיחות הולכות לאיבוד",
      "אין משפך מכירות אמיתי",
    ],
    result: "חוסר יציבות בהכנסות.",
  },
  // ── 04 ─ שינוי חשיבה ─────────────────────────────────────────────
  {
    id: 4, section: "הבעיה", type: "shift-list",
    before: 'לחפש לקוחות',
    after: 'לבנות מערכת',
    listTitle: "מערכת טובה:",
    items: [
      "מוצאת לידים",
      "מארגנת מידע",
      "מייצרת פניות",
      "עוקבת אחרי שיחות",
      "מזכירה לבצע פולואפ",
      "משתפרת עם הזמן",
    ],
    note: "המטרה היא לא עוד כלי. המטרה היא תהליך שחוזר על עצמו.",
  },
  // ── 05 ─ מה נבנה היום ─────────────────────────────────────────────
  {
    id: 5, section: "המכונה", type: "section-header",
    num: "01–06",
    title: "מכונת לידים מלאה",
  },
  // ── 06 ──────────────────────────────────────────────────────────
  {
    id: 6, section: "המכונה", type: "workflow",
    title: "ששת השלבים",
    steps: [
      { num: "01", label: "חיפוש עסקים",          action: "מציאת לידים רלוונטיים בפייסבוק, לינקדאין, Google Maps ואתרי דרושים" },
      { num: "02", label: "איסוף נתונים",          action: "פרטי קשר, שם איש הקשר, אתר, כאב שזוהה" },
      { num: "03", label: "סידור לידים בגיליון",   action: "Google Sheets כ-CRM פשוט עם סטטוסים ותאריכי פולואפ" },
      { num: "04", label: "יצירת הודעות מותאמות", action: "Claude מנתח את העסק וכותב פנייה ספציפית לכל ליד" },
      { num: "05", label: "מעקב ופולואפ",          action: "Gmail + WhatsApp + תזכורות אוטומטיות" },
      { num: "06", label: "שיפור מתמשך",           action: "מה עבד, מה לא — עדכון הגישה כל שבוע" },
    ],
  },
  // ── 07 ─ למי זה מתאים ────────────────────────────────────────────
  {
    id: 7, section: "לידים", type: "doc-split",
    label: "קהל יעד",
    title: "אילו עסקים צריכים מכונת לידים",
    colA: {
      heading: "סוגי עסקים",
      items: [
        "סוכנויות פרסום",
        "מטפלים וקליניקות",
        "עורכי דין",
        "רואי חשבון",
        "חברות שירות",
        "בעלי מקצוע",
        "חברות תוכנה קטנות",
        "יועצים",
        "חנויות אונליין",
      ],
    },
    colB: {
      heading: "המאפיינים",
      items: [
        "צוות קטן",
        "עומס תפעולי",
        "שיווק פעיל",
        "תלות בבעל העסק",
        "הרבה עבודה ידנית",
      ],
    },
  },
  // ── 08 ─ מקורות לידים ────────────────────────────────────────────
  {
    id: 8, section: "לידים", type: "layers",
    title: "מקורות מידע טובים בישראל",
    layers: [
      {
        label: "פייסבוק",
        items: ["דפים עסקיים", "מפרסמים פעילים", "קבוצות בעלי עסקים", "תגובות לפוסטים"],
      },
      {
        label: "לינקדאין",
        items: ["מנכ״לים", "בעלי חברות", "מנהלי שיווק", "VP Operations"],
      },
      {
        label: "Google Maps",
        items: ["עסקים מקומיים", "חברות שירות", "קליניקות", "משרדים"],
      },
      {
        label: "אתרי דרושים",
        items: ["מגייסים שירות לקוחות", "מגייסים תוכן", "מגייסים אדמיניסטרציה", "→ כנראה יש שם כאב"],
      },
    ],
  },
  // ── 09 ─ מה מחפשים ───────────────────────────────────────────────
  {
    id: 9, section: "לידים", type: "doc",
    label: "סינון לידים",
    title: "לא כל עסק הוא לקוח טוב",
    items: [
      "עומס ברור",
      "כאב שניתן לזהות",
      "תהליכים ידניים שחוזרים",
      "הרבה תוכן שמייצרים",
      "הרבה לקוחות במקביל",
      "שיווק פעיל",
      "חוסר סדר",
    ],
    note: "דוגמא: \"העסק הזה מעלה 20 פוסטים בשבוע ידנית\" — זאת הזדמנות.",
  },
  // ── 10 ─ Google Sheets ─────────────────────────────────────────────
  {
    id: 10, section: "ניהול נתונים", type: "crm-fields",
    title: "Google Sheets כמערכת CRM פשוטה",
    fields: [
      "שם העסק", "תחום", "איש קשר", "תפקיד",
      "אימייל", "טלפון", "אתר", "מקור הליד",
      "כאב שזוהה", "רעיון להצעה", "סטטוס",
      "תאריך פולואפ", "הערות",
    ],
    note: "הטעות הכי גדולה: לא לתעד.",
  },
  // ── 11 ─ הדגמה ────────────────────────────────────────────────────
  {
    id: 11, section: "ניהול נתונים", type: "demo-header",
    label: "הדגמה חיה",
    title: "בניית גיליון לידים חי",
    bullets: [
      "יצירת הגיליון",
      "בניית עמודות",
      "סינונים",
      "צבעי סטטוס",
      "תאריכי מעקב",
      "עבודה מהירה מהטלפון",
    ],
  },
  // ── 12 ─ איסוף פרטי קשר ──────────────────────────────────────────
  {
    id: 12, section: "ניהול נתונים", type: "doc-split",
    label: "איסוף פרטי קשר",
    title: "איך מוצאים אנשים אמיתיים",
    colA: {
      heading: "כלים",
      items: [
        "LinkedIn",
        "Apollo",
        "Hunter.io",
        "אתר החברה",
        "עמוד אודות",
        "פייסבוק",
        "אינסטגרם",
        "WhatsApp עסקי",
      ],
    },
    colB: {
      heading: "המטרה",
      items: ["לדבר עם מקבל החלטות."],
    },
  },
  // ── 13 ─ למה פניות נכשלות ─────────────────────────────────────────
  {
    id: 13, section: "פניות", type: "mindshift",
    title: "למה רוב הפניות נכשלות",
    before: "שלום, אני נותן שירותי AI",
    after: "מה כן עובד: ספציפי · כאב · ערך · שפה אנושית",
  },
  // ── 14 ─ Claude לניתוח וכתיבה ────────────────────────────────────
  {
    id: 14, section: "פניות", type: "doc",
    label: "Claude כמנוע מחקר וכתיבה",
    title: "בניית זווית מותאמת",
    items: [
      "מנתח אתר ומזהה הזדמנויות",
      "מזהה עומס וכאב עסקי",
      "מנסח הודעה מותאמת לעסק הספציפי",
      "מציע workflow לחיסכון בזמן",
      "כותב פולואפים מוכנים לשיחה",
    ],
    note: "דוגמא: \"ראיתי שאתם מעלים הרבה תוכן ומנהלים כמה לקוחות במקביל...\"",
  },
  // ── 15 ─ מבנה הודעה ───────────────────────────────────────────────
  {
    id: 15, section: "פניות", type: "message-anatomy",
    title: "מבנה הודעה טובה — קצרה. אישית. ברורה.",
    steps: [
      { num: "01", label: "משהו ספציפי שראית",  hint: "מראה שעשית שיעורי בית" },
      { num: "02", label: "כאב אפשרי",           hint: "לא מה שאתה מוכר — מה הם חווים" },
      { num: "03", label: "רעיון לפתרון",         hint: "קצר, לא הצעה מלאה" },
      { num: "04", label: "הצעה לשיחה קצרה",     hint: "שאלה, לא מכירה" },
    ],
    example: "\"ראיתי שאתם מעלים הרבה תוכן ומגייסים אנשי שירות. אפשר כנראה לחסוך לכם לא מעט שעות עם AI. רוצה שאשלח רעיון קצר?\"",
  },
  // ── 16 ─ Gmail ────────────────────────────────────────────────────
  {
    id: 16, section: "כלים", type: "doc",
    label: "Gmail כמנוע עבודה",
    title: "לא לשלוח ידנית כל פעם מחדש",
    items: [
      "טיוטות מוכנות לפי תחום",
      "תבניות שמחכות לעריכה קלה",
      "פולואפים מוכנים מראש",
      "ספריית הודעות לפי שלב",
      "עבודה מהירה מתוך Gmail",
    ],
    note: "המטרה: להוריד חיכוך. הודעה שנשלחת ב-2 דקות עדיפה על הודעה מושלמת שלא נשלחת.",
  },
  // ── 17 ─ WhatsApp ─────────────────────────────────────────────────
  {
    id: 17, section: "כלים", type: "doc-split",
    label: "WhatsApp כפלטפורמת מכירות",
    title: "בישראל זה הערוץ הכי חזק",
    colA: {
      heading: "למה זה עובד",
      items: ["אישי", "מהיר", "כולם שם", "אחוזי פתיחה גבוהים"],
    },
    colB: {
      heading: "הכללים",
      items: [
        "קצר",
        "בלי חפירות",
        "בלי PDF ראשון",
        "בלי 9 הודעות ברצף",
        "לדבר כמו בן אדם",
      ],
    },
  },
  // ── 18 ─ פולואפ ───────────────────────────────────────────────────
  {
    id: 18, section: "פולואפ", type: "timeline",
    title: "רוב העסקאות נסגרות אחרי המעקב",
    steps: [
      { time: "יום 1",  label: "פנייה ראשונה",              desc: "קצרה, ספציפית, ברורה" },
      { time: "יום 3",  label: "הודעת המשך",                desc: "לא חפירה — רק תזכורת עדינה" },
      { time: "יום 7",  label: "רעיון או דוגמא",            desc: "ערך בלי לבקש כלום" },
      { time: "יום 14", label: "בדיקה אם עדיין רלוונטי",   desc: "שאלה פתוחה, לא מכירה" },
      { time: "יום 30", label: "תוכן חדש או case study",    desc: "הוכחה חברתית" },
    ],
    note: "הבעיה: רוב האנשים פשוט מפסיקים לעקוב.",
  },
  // ── 19 ─ Workflow מחבר ────────────────────────────────────────────
  {
    id: 19, section: "פולואפ", type: "flow-chain",
    title: "איך הכל מתחבר יחד",
    chain: ["חיפוש", "גיליון", "Claude", "Gmail", "WhatsApp", "פולואפ"],
    goal: "שכל ליד חדש נכנס ישר למערכת.",
  },
  // ── 20 ─ הדגמה מלאה ──────────────────────────────────────────────
  {
    id: 20, section: "הדגמה", type: "demo-header",
    label: "הדגמה מלאה",
    title: "מה נראה בלייב",
    bullets: [
      "מציאת עסק",
      "איסוף מידע",
      "ניתוח עם Claude",
      "יצירת הודעה",
      "שמירה בגיליון",
      "טיוטת מייל",
      "מעקב בוואטסאפ",
    ],
  },
  // ── 21 ─ הרמה הבאה ───────────────────────────────────────────────
  {
    id: 21, section: "סיכום", type: "bullets",
    title: "מה אפשר להוסיף בהמשך",
    items: [
      "MCP — חיבור כלים ישירות ל-Claude",
      "אוטומציות עם n8n",
      "CRM מלא",
      "סוכני AI לסינון ותעדוף לידים",
      "Scoring אוטומטי לפי כאב",
      "Pipelines אוטומטיים מקצה לקצה",
    ],
  },
  // ── 22 ─ טעויות נפוצות ────────────────────────────────────────────
  {
    id: 22, section: "סיכום", type: "problem-list",
    title: "טעויות נפוצות — מה לא לעשות",
    items: [
      "לשלוח ספאם המוני בלי מחקר",
      "לדבר על AI במקום על כאב עסקי",
      "למכור ישר בהודעה הראשונה",
      "לא לבצע פולואפ",
      "לעבוד בלי תיעוד",
      "להשתמש ב-10 כלים בלי workflow ברור",
    ],
    result: "פניות שנראות כמו ספאם. עסקאות שלא נסגרות.",
  },
  // ── 23 ─ סיכום ───────────────────────────────────────────────────
  {
    id: 23, section: "סיכום", type: "summary",
    title: "מה למדנו היום",
    items: [
      { label: "לידים",   value: "פייסבוק · לינקדאין · Google Maps · דרושים" },
      { label: "כאב",     value: "לזהות עומס, תהליכים ידניים, חוסר סדר" },
      { label: "ניהול",   value: "Google Sheets כ-CRM פשוט ויעיל" },
      { label: "פניות",   value: "ספציפי · אנושי · ערך · CTA ברור" },
      { label: "פולואפ",  value: "רצף 5 שלבים על פני 30 יום" },
      { label: "AI",      value: "Claude מנתח, כותב, מאמן — אתה מוביל" },
    ],
  },
  // ── 24 ─ הצעה להמשך ──────────────────────────────────────────────
  {
    id: 24, section: "סיכום", type: "services",
    title: "רוצים לבנות מערכת כזאת לעסק שלכם?",
    services: [
      { name: "סדנאות",             desc: "שיעורים קבוצתיים על AI ואוטומציות עסקיות" },
      { name: "ליווי אישי",         desc: "בניית מכונת לידים מותאמת לעסק שלך" },
      { name: "הטמעה עסקית",        desc: "ניתוח תהליכים, בחירת כלים, הכשרת צוות" },
      { name: "Workflows מותאמים",  desc: "אוטומציות, MCP, pipelines לפי הצורך" },
    ],
  },
  // ── 25 ─ שאלות ───────────────────────────────────────────────────
  {
    id: 25, section: "סיכום", type: "closing",
    quote: "לא עוד פוסט בפייסבוק. מערכת שמביאה הזדמנויות חדשות כל שבוע.",
    sub: "שאלות ותשובות — שאלו הכל.",
    qa: [
      "איזה עסק מתאים?",
      "כמה זמן זה לוקח?",
      "מה עובד הכי טוב בישראל?",
      "איך לא להיראות כמו ספאם?",
      "איך עובדים עם Claude נכון?",
      "איך ממשיכים מכאן?",
    ],
  },
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

  // ── cover ──────────────────────────────────────────────────────
  if (slide.type === "cover") return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: B.teal, background: "rgba(0,212,170,0.08)",
        border: "0.5px solid rgba(0,212,170,0.2)",
        borderRadius: 100, padding: "5px 16px",
        display: "inline-block", marginBottom: 28,
      }}>{slide.badge}</div>
      <h1 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 46, color: B.white, margin: "0 0 14px",
        letterSpacing: "-0.03em", lineHeight: 1.05,
      }}>{slide.title}</h1>
      <p style={{
        fontFamily: "'Heebo', sans-serif", fontSize: 18,
        color: B.muted, margin: "0 0 28px", fontWeight: 300,
      }}>{slide.subtitle}</p>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
        {slide.tools.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            padding: "5px 12px", borderRadius: 6,
            background: B.mustardDim, color: B.mustardL,
            border: "0.5px solid rgba(200,146,42,0.2)",
            letterSpacing: "0.06em",
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <OnyxLogoMark />
        <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 16, color: B.white, letterSpacing: "-0.02em" }}>
          ONYX <span style={{ color: B.mustard }}>AI</span>
        </span>
      </div>
    </div>
  );

  // ── bio ────────────────────────────────────────────────────────
  if (slide.type === "bio") return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 9,
          color: B.teal, letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: 6,
        }}>{slide.label}</div>
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 30, color: B.white, margin: 0,
          letterSpacing: "-0.02em",
        }}>{slide.title}</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 12,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 16px",
          }}>
            <span style={{ color: B.mustard, fontSize: 12, marginTop: 3, flexShrink: 0 }}>▸</span>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 15, color: B.silver, lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.3)`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 8, padding: "14px 20px",
        fontFamily: "'Heebo', sans-serif", fontSize: 15,
        color: B.mustardL, lineHeight: 1.5,
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.muted, marginLeft: 8 }}>המטרה שלי:</span>
        {" "}{slide.goal}
      </div>
    </div>
  );

  // ── section-header ─────────────────────────────────────────────
  if (slide.type === "section-header") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: "100%" }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 44, fontWeight: 500,
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

  // ── problem-list ───────────────────────────────────────────────
  if (slide.type === "problem-list") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 18px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "rgba(200,146,42,0.05)",
            border: "0.5px solid rgba(200,146,42,0.18)",
            borderRadius: 8, padding: "10px 16px",
          }}>
            <div style={{ color: B.muted, fontSize: 14, flexShrink: 0 }}>✕</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 15, color: B.silver }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.4)`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 10, padding: "14px 20px",
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 18, color: B.mustardL, letterSpacing: "-0.01em",
      }}>התוצאה: {slide.result}</div>
    </div>
  );

  // ── shift-list ─────────────────────────────────────────────────
  if (slide.type === "shift-list") return (
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ flex: "0 0 260px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{
          background: B.surface, border: "0.5px solid rgba(255,183,77,0.2)",
          borderRadius: 10, padding: "16px 20px", textAlign: "center",
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.amber, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>להפסיק</div>
          <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 18, color: "#7A7060" }}>"{slide.before}"</div>
        </div>
        <div style={{ textAlign: "center", color: B.mustard, fontSize: 20 }}>↓</div>
        <div style={{
          background: B.surface, border: "0.5px solid rgba(200,146,42,0.35)",
          borderRadius: 10, padding: "16px 20px", textAlign: "center",
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.mustard, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>להתחיל</div>
          <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 18, color: B.white }}>"{slide.after}"</div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.teal,
          letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
        }}>{slide.listTitle}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
          {slide.items.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              background: B.surface, border: `0.5px solid ${B.border}`,
              borderRadius: 7, padding: "9px 14px",
            }}>
              <span style={{ color: B.teal, fontSize: 10 }}>✓</span>
              <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 14, color: B.silver }}>{item}</span>
            </div>
          ))}
        </div>
        {slide.note && (
          <div style={{
            fontFamily: "'Heebo', sans-serif", fontSize: 13,
            color: B.muted, lineHeight: 1.5,
            padding: "10px 14px", background: B.bgDeep,
            borderRadius: 8, border: `0.5px solid ${B.border}`,
          }}>{slide.note}</div>
        )}
      </div>
    </div>
  );

  // ── workflow ───────────────────────────────────────────────────
  if (slide.type === "workflow") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 24, color: B.white, margin: "0 0 16px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            display: "flex", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "13px 16px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 12,
              color: B.mustard, flexShrink: 0, minWidth: 28, fontWeight: 500,
            }}>{step.num}</div>
            <div>
              <div style={{
                fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                fontSize: 14, color: B.white, marginBottom: 3,
              }}>{step.label}</div>
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.muted, lineHeight: 1.5 }}>{step.action}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── doc-split ──────────────────────────────────────────────────
  if (slide.type === "doc-split") return (
    <div>
      <div style={{ marginBottom: 18 }}>
        {slide.label && (
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.teal, letterSpacing: "0.18em",
            textTransform: "uppercase", marginBottom: 6,
          }}>{slide.label}</div>
        )}
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 26, color: B.white, margin: 0, letterSpacing: "-0.02em",
        }}>{slide.title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[slide.colA, slide.colB].map((col, ci) => (
          <div key={ci} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "18px 20px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: ci === 0 ? B.muted : B.teal,
              letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14,
            }}>{col.heading}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {col.items.map((item, i) => (
                <div key={i} style={{
                  fontFamily: "'Heebo', sans-serif", fontSize: 14,
                  color: B.silver, display: "flex", gap: 8, alignItems: "flex-start",
                }}>
                  <span style={{ color: ci === 0 ? B.mustardL : B.teal, fontSize: 10, marginTop: 4, flexShrink: 0 }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── layers ─────────────────────────────────────────────────────
  if (slide.type === "layers") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 18px", letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.layers.map((layer, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderTop: `2px solid ${B.mustard}`,
            borderRadius: 10, padding: "16px 20px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: B.mustard, letterSpacing: "0.14em",
              textTransform: "uppercase", marginBottom: 12,
            }}>{layer.label}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {layer.items.map((item, j) => (
                <div key={j} style={{
                  fontFamily: "'Heebo', sans-serif", fontSize: 14,
                  color: B.silver, display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ color: B.mustardL, fontSize: 10 }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── doc ────────────────────────────────────────────────────────
  if (slide.type === "doc") return (
    <div>
      <div style={{ marginBottom: 16 }}>
        {slide.label && (
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.teal, letterSpacing: "0.18em",
            textTransform: "uppercase", marginBottom: 6,
          }}>{slide.label}</div>
        )}
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 28, color: B.white, margin: 0, letterSpacing: "-0.02em",
        }}>{slide.title}</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 12,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 16px",
          }}>
            <span style={{ color: B.mustard, fontSize: 12, marginTop: 3, flexShrink: 0 }}>▸</span>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 15, color: B.silver, lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
      {slide.note && (
        <div style={{
          background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.3)`,
          borderRight: `3px solid ${B.mustard}`,
          borderRadius: 8, padding: "12px 18px",
          fontFamily: "'Heebo', sans-serif", fontSize: 14,
          color: B.mustardL, lineHeight: 1.5,
        }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.muted, marginLeft: 8 }}>לזכור:</span>
          {" "}{slide.note}
        </div>
      )}
    </div>
  );

  // ── crm-fields ─────────────────────────────────────────────────
  if (slide.type === "crm-fields") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 18px", letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 }}>
        {slide.fields.map((field, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "10px 14px",
            fontFamily: "'Heebo', sans-serif", fontSize: 13,
            color: B.silver, display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.mustard }}>{String(i + 1).padStart(2, "0")}</span>
            {field}
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.3)`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 8, padding: "12px 18px",
        fontFamily: "'Heebo', sans-serif", fontSize: 14,
        color: B.mustardL,
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.muted, marginLeft: 8 }}>לזכור:</span>
        {" "}{slide.note}
      </div>
    </div>
  );

  // ── demo-header ────────────────────────────────────────────────
  if (slide.type === "demo-header") return (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
      <div style={{ flex: 1, paddingTop: 8 }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: B.teal, background: "rgba(0,212,170,0.08)",
          border: "0.5px solid rgba(0,212,170,0.2)",
          borderRadius: 100, padding: "4px 14px",
          display: "inline-block", marginBottom: 16,
        }}>{slide.label}</div>
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 36, color: B.white, margin: 0,
          letterSpacing: "-0.02em", lineHeight: 1.1,
        }}>{slide.title}</h2>
      </div>
      {slide.bullets && (
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.muted,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12,
          }}>בדמו</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {slide.bullets.map((b, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: B.surface, border: `0.5px solid ${B.border}`,
                borderRadius: 7, padding: "9px 14px",
                fontFamily: "'Heebo', sans-serif", fontSize: 14, color: B.silver,
              }}>
                <span style={{ color: B.teal, fontSize: 10 }}>✓</span>
                {b}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // ── mindshift ──────────────────────────────────────────────────
  if (slide.type === "mindshift") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.muted, margin: 0, letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.surface, border: "0.5px solid rgba(255,183,77,0.2)",
        borderRadius: 12, padding: "20px 32px", width: "100%",
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.amber, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>מה נכשל</div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: 20, color: "#7A7060" }}>"{slide.before}"</div>
      </div>
      <div style={{ color: B.mustard, fontSize: 22 }}>↓</div>
      <div style={{
        background: B.surface, border: "0.5px solid rgba(200,146,42,0.35)",
        borderRadius: 12, padding: "20px 32px", width: "100%",
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.mustard, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>מה עובד</div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 20, color: B.white }}>"{slide.after}"</div>
      </div>
    </div>
  );

  // ── message-anatomy ────────────────────────────────────────────
  if (slide.type === "message-anatomy") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 22, color: B.white, margin: "0 0 16px", letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "28px 1fr auto",
            alignItems: "center", gap: 12,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 16px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: B.mustard, fontWeight: 500,
            }}>{step.num}</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 14, color: B.white }}>{step.label}</div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 12, color: B.muted }}>{step.hint}</div>
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(0,212,170,0.25)`,
        borderRight: `3px solid ${B.teal}`,
        borderRadius: 8, padding: "14px 18px",
        fontFamily: "'Heebo', sans-serif", fontSize: 14,
        color: B.silver, lineHeight: 1.6,
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.teal, marginLeft: 10 }}>דוגמא:</span>
        {slide.example}
      </div>
    </div>
  );

  // ── timeline ───────────────────────────────────────────────────
  if (slide.type === "timeline") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 24, color: B.white, margin: "0 0 18px", letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 14 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "11px 16px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.mustard, flexShrink: 0, minWidth: 52,
              marginTop: 2, letterSpacing: "0.04em",
            }}>{step.time}</div>
            <div>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 14, color: B.white, marginBottom: 2 }}>{step.label}</div>
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.muted }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
      {slide.note && (
        <div style={{
          background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.3)`,
          borderRight: `3px solid ${B.mustard}`,
          borderRadius: 8, padding: "12px 18px",
          fontFamily: "'Heebo', sans-serif", fontSize: 14, color: B.mustardL,
        }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.muted, marginLeft: 8 }}>לזכור:</span>
          {" "}{slide.note}
        </div>
      )}
    </div>
  );

  // ── flow-chain ─────────────────────────────────────────────────
  if (slide.type === "flow-chain") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: 0, letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {slide.chain.map((node, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              background: B.surface, border: `0.5px solid ${B.border}`,
              borderTop: `2px solid ${B.mustard}`,
              borderRadius: 10, padding: "14px 20px",
              fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
              fontSize: 15, color: B.white,
            }}>{node}</div>
            {i < slide.chain.length - 1 && (
              <div style={{ color: B.mustard, fontSize: 18 }}>→</div>
            )}
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.35)`,
        borderRadius: 10, padding: "14px 28px",
        fontFamily: "'Heebo', sans-serif", fontSize: 16,
        color: B.mustardL, lineHeight: 1.5,
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.muted, marginLeft: 10 }}>המטרה:</span>
        {slide.goal}
      </div>
    </div>
  );

  // ── bullets ────────────────────────────────────────────────────
  if (slide.type === "bullets") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 22px", letterSpacing: "-0.01em",
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
              flexShrink: 0, border: "0.5px solid rgba(200,146,42,0.2)",
            }}>{String(i + 1).padStart(2, "0")}</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 15, color: B.silver, lineHeight: 1.6 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // ── summary ────────────────────────────────────────────────────
  if (slide.type === "summary") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 30, color: B.white, margin: "0 0 20px", letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "80px 1fr",
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, overflow: "hidden",
          }}>
            <div style={{
              background: B.mustardDim, borderLeft: `2px solid ${B.mustard}`,
              padding: "12px 14px",
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.mustardL, letterSpacing: "0.06em",
              display: "flex", alignItems: "center",
            }}>{item.label}</div>
            <div style={{
              padding: "12px 16px",
              fontFamily: "'Heebo', sans-serif", fontSize: 14,
              color: B.silver, lineHeight: 1.5,
              display: "flex", alignItems: "center",
            }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── services ───────────────────────────────────────────────────
  if (slide.type === "services") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px", letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {slide.services.map((svc, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderTop: `2px solid ${B.mustard}`,
            borderRadius: 10, padding: "18px 20px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 8,
              color: B.mustard, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 8,
            }}>שירות {String(i + 1).padStart(2, "0")}</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 15, color: B.white, marginBottom: 6 }}>{svc.name}</div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.muted, lineHeight: 1.5 }}>{svc.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── closing ────────────────────────────────────────────────────
  if (slide.type === "closing") return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <div style={{
          background: B.surface, border: `0.5px solid rgba(200,146,42,0.35)`,
          borderRadius: 14, padding: "28px 32px", marginBottom: 16,
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10,
            color: B.mustard, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 16,
          }}>המסקנה</div>
          <div style={{
            fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
            fontSize: 22, color: B.white, lineHeight: 1.3, letterSpacing: "-0.02em",
          }}>{slide.quote}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <OnyxLogoMark />
          <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 15, color: B.white, letterSpacing: "-0.02em" }}>
            ONYX <span style={{ color: B.mustard }}>AI</span>
          </span>
        </div>
      </div>
      {slide.qa && (
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.teal,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12,
          }}>{slide.sub}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {slide.qa.map((q, i) => (
              <div key={i} style={{
                background: B.surface, border: `0.5px solid ${B.border}`,
                borderRadius: 8, padding: "9px 14px",
                fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.silver,
                display: "flex", gap: 8, alignItems: "flex-start",
              }}>
                <span style={{ color: B.muted, fontSize: 10, marginTop: 3, flexShrink: 0 }}>?</span>
                {q}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return null;
}

// ── Main component ────────────────────────────────────────────────
export default function LessonWorkshopPresentation() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const uniqueSections = [...new Set(slides.map(s => s.section))];

  return (
    <div style={{
      minHeight: "100vh",
      background: B.bg,
      fontFamily: "'Heebo', sans-serif",
      color: B.silver,
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Section tabs */}
      <div style={{
        background: B.bgMid,
        borderBottom: `0.5px solid ${B.border}`,
        padding: "0 24px",
        display: "flex",
        gap: 0,
        overflowX: "auto",
        direction: "rtl",
      }}>
        {uniqueSections.map((sec) => {
          const isActive = slide.section === sec;
          return (
            <button key={sec} onClick={() => {
              const idx = slides.findIndex(s => s.section === sec);
              if (idx !== -1) setCurrent(idx);
            }} style={{
              background: "none", border: "none",
              padding: "12px 16px",
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: isActive ? B.mustard : B.muted,
              borderBottom: isActive ? `2px solid ${B.mustard}` : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.15s",
            }}>{sec}</button>
          );
        })}
      </div>

      {/* Slide area */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}>
        <div style={{
          width: "100%", maxWidth: 720,
          background: B.bgMid,
          border: `0.5px solid ${B.border}`,
          borderRadius: 20,
          padding: "52px 56px",
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          direction: "rtl",
        }}>
          <SlideContent slide={slide} />
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        background: B.bgMid,
        borderTop: `0.5px solid ${B.border}`,
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        direction: "rtl",
      }}>
        <button
          onClick={() => setCurrent(c => Math.max(0, c - 1))}
          disabled={current === 0}
          style={{
            background: B.surface,
            border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "8px 20px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11, color: current === 0 ? B.muted : B.silver,
            cursor: current === 0 ? "default" : "pointer",
            letterSpacing: "0.06em",
          }}
        >→ הקודם</button>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.muted }}>
            {current + 1} / {slides.length}
          </span>
          <div style={{ display: "flex", gap: 4 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? 18 : 6,
                height: 6, borderRadius: 3,
                background: i === current ? B.mustard : B.border,
                border: "none", cursor: "pointer",
                padding: 0,
                transition: "width 0.2s, background 0.2s",
              }} />
            ))}
          </div>
        </div>

        <button
          onClick={() => setCurrent(c => Math.min(slides.length - 1, c + 1))}
          disabled={current === slides.length - 1}
          style={{
            background: B.surface,
            border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "8px 20px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: current === slides.length - 1 ? B.muted : B.silver,
            cursor: current === slides.length - 1 ? "default" : "pointer",
            letterSpacing: "0.06em",
          }}
        >הבא ←</button>
      </div>
    </div>
  );
}
