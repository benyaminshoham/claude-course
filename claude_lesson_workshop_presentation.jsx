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
    badge: "סדנה · בניית שיעור AI לעסקים",
    title: "שיעור שמוכר",
    subtitle: "איך לבנות ולהעביר שיעור AI שמייצר לקוחות",
  },
  // ── 02 ──────────────────────────────────────────────────────────
  {
    id: 2, section: "פתיחה", type: "bullets",
    title: "מה נלמד היום",
    items: [
      "מבנה שיעור מסודר — מהפתיחה ועד הסגירה",
      "איך לבנות תוכן לכל שקף עם Claude",
      "דוגמאות לפניות שעובדות בפועל",
      "workflow מלא: מ-idea ועד delivery",
      "רעיונות להדגמות לייב שמרשימות",
      "הזווית המכירתית לבעלי עסקים",
      "המשך טבעי לשירותי Onyx AI",
    ],
  },
  // ── 03 ──────────────────────────────────────────────────────────
  {
    id: 3, section: "פתיחה", type: "concept",
    badge: "הרעיון המרכזי",
    title: "שיעור AI זה לא הרצאה — זה מפגן כוח",
    body: "כל שיעור שאתה מעביר הוא הוכחה חיה שאתה יודע לעבוד עם AI. זה גם content marketing, גם בניית אמון, וגם pipeline מכירות — בפגישה אחת.",
  },
  // ── 04 ─ מבנה שיעור ───────────────────────────────────────────────
  {
    id: 4, section: "מבנה שיעור", type: "section-header",
    num: "01",
    title: "מבנה שיעור מסודר",
  },
  // ── 05 ──────────────────────────────────────────────────────────
  {
    id: 5, section: "מבנה שיעור", type: "timeline",
    title: "המבנה המנצח — 90 דקות",
    steps: [
      { time: "00–10", label: "פתיחה חזקה", desc: "hook, כאב, הבטחה" },
      { time: "10–25", label: "הרקע — למה AI עכשיו", desc: "הקשר עסקי, מה השוק לא מבין" },
      { time: "25–50", label: "הגרעין — הידע", desc: "תוכן מעשי, דוגמאות, frameworks" },
      { time: "50–70", label: "הדגמה חיה", desc: "Claude בפעולה, תוצאות בזמן אמת" },
      { time: "70–80", label: "שאלות ותשובות", desc: "מענה לשאלות, טיפול בהתנגדויות" },
      { time: "80–90", label: "סגירה ו-CTA", desc: "הצעה, לשלב הבא, פרטי יצירת קשר" },
    ],
  },
  // ── 06 ──────────────────────────────────────────────────────────
  {
    id: 6, section: "מבנה שיעור", type: "doc",
    label: "הפתיחה",
    title: "10 הדקות שקובעות הכל",
    items: [
      "פתח עם שאלה שגורמת לכולם להגיד 'כן' בראש",
      "הצג כאב ספציפי — לא כללי, אחד שהם מכירים",
      "תן הבטחה ברורה: 'בסוף השיעור תוכל...'",
      "הצג מספר הפתעה: נתון שמשנה פרספקטיבה",
    ],
    note: "אל תפתח עם 'שלום, אני...' — פתח עם hook",
  },
  // ── 07 ──────────────────────────────────────────────────────────
  {
    id: 7, section: "מבנה שיעור", type: "mindshift",
    title: "טעות הפתיחה הנפוצה ביותר",
    before: "שלום, אני X, עוסק ב-AI כבר 5 שנים...",
    after: "שאלה: מה עסק ממוצע משלם על תוכן שיווקי בחודש?",
  },
  // ── 08 ─ תוכן לכל שקף ────────────────────────────────────────────
  {
    id: 8, section: "תוכן לשקפים", type: "section-header",
    num: "02",
    title: "תוכן לכל שקף",
  },
  // ── 09 ──────────────────────────────────────────────────────────
  {
    id: 9, section: "תוכן לשקפים", type: "slide-anatomy",
    title: "האנטומיה של שקף מנצח",
    parts: [
      { role: "כותרת", rule: "טענה אחת ברורה — לא נושא, אלא מסר" },
      { role: "גוף", rule: "3–5 נקודות מקסימום, כל אחת שורה אחת" },
      { role: "ויז'ואל", rule: "diagram, screenshot, תוצאה אמיתית" },
      { role: "bottom line", rule: "משפט מסכם שאפשר לצייץ" },
    ],
  },
  // ── 10 ──────────────────────────────────────────────────────────
  {
    id: 10, section: "תוכן לשקפים", type: "doc-split",
    label: "סוגי שקפים",
    title: "מה צריך להיות בכל מצגת",
    colA: {
      heading: "שקפי ידע",
      items: [
        "cover + agenda",
        "הגדרת הבעיה",
        "הסבר הפתרון",
        "דוגמאות קונקרטיות",
        "מה כדאי לא לעשות",
      ],
    },
    colB: {
      heading: "שקפי מכירה",
      items: [
        "מה הם מפסידים עכשיו",
        "התוצאה שאפשר להשיג",
        "מי כבר עושה את זה",
        "השלב הבא — CTA ברור",
      ],
    },
  },
  // ── 11 ──────────────────────────────────────────────────────────
  {
    id: 11, section: "תוכן לשקפים", type: "prompt-card",
    label: "prompt לבניית שקף",
    title: "תן ל-Claude לבנות את השקפים",
    prompt: `אני מכין שיעור על [נושא] לקהל של [בעלי עסקים בתחום X].

עזור לי לבנות שקף שמסביר [נושא ספציפי].

הפורמט שאני רוצה:
• כותרת: טענה ברורה (לא שאלה)
• 4 נקודות עיקריות — קצרות וחדות
• משפט bottom line שאפשר לצייץ
• הצעה לויז'ואל שמחזק את הנקודה`,
  },
  // ── 12 ─ דוגמאות לפניות ──────────────────────────────────────────
  {
    id: 12, section: "דוגמאות לפניות", type: "section-header",
    num: "03",
    title: "דוגמאות לפניות",
  },
  // ── 13 ──────────────────────────────────────────────────────────
  {
    id: 13, section: "דוגמאות לפניות", type: "prompt-examples",
    title: "פניות שעובדות בפועל",
    examples: [
      {
        label: "בניית agenda",
        prompt: "בנה לי מבנה שיעור של 90 דקות על [נושא] לקהל של [בעלי עסקים]. כלול: מטרה, זמנים, נקודות עיקריות, ורגע הדגמה חיה.",
      },
      {
        label: "כתיבת hook פתיחה",
        prompt: "כתוב לי 5 אפשרויות לפתיחת שיעור על AI לעסקים. כל פתיחה: שאלה שמייצרת הזדהות + הבטחה ברורה. הקהל: בעלי עסקים שמרגישים שהם מפסידים מהמהפכה.",
      },
      {
        label: "טיפול בהתנגדויות",
        prompt: "תן לי 6 התנגדויות נפוצות לשיעורי AI לעסקים ולכל אחת: תשובה קצרה, תשובה ארוכה, ודוגמה מהחיים.",
      },
      {
        label: "CTA לסוף שיעור",
        prompt: "כתוב 3 גרסאות CTA לסוף שיעור שמציע שירות [X]. גרסה רכה, גרסה ישירה, וגרסה עם urgency.",
      },
    ],
  },
  // ── 14 ─ Workflow מלא ────────────────────────────────────────────
  {
    id: 14, section: "Workflow", type: "section-header",
    num: "04",
    title: "Workflow מלא",
  },
  // ── 15 ──────────────────────────────────────────────────────────
  {
    id: 15, section: "Workflow", type: "workflow",
    title: "מ-idea עד delivery — שלבי עבודה עם Claude",
    steps: [
      { num: "01", label: "גיבוש הנושא", action: "שאל את Claude: 'מהם 5 הנושאים הכי חמים שבעלי עסקים רוצים לשמוע על AI?'" },
      { num: "02", label: "בניית skeleton", action: "בנה agenda ראשוני — 6–8 נקודות. Claude מסדר את הסדר הלוגי." },
      { num: "03", label: "תוכן לכל שקף", action: "עבור על כל נקודה ובנה את השקף עם Claude — כותרת, תוכן, bottom line." },
      { num: "04", label: "Hook + סגירה", action: "בנה את הפתיחה והסגירה בנפרד — הן הכי חשובות." },
      { num: "05", label: "הכנת דמו", action: "הכן 2–3 דוגמאות חיות מראש: prompts שתריץ בשיעור עצמו." },
      { num: "06", label: "Review & שיפורים", action: "תן ל-Claude לשחק participant ולשאול שאלות קשות." },
    ],
  },
  // ── 16 ──────────────────────────────────────────────────────────
  {
    id: 16, section: "Workflow", type: "prompt-card",
    label: "prompt לבניית agenda",
    title: "Claude כ-Curriculum Designer",
    prompt: `אני מכין שיעור על [נושא] לפורמט של 90 דקות.
הקהל: בעלי עסקים עם 5–20 עובדים, לא טכניים, מוטיבציה עסקית.
המטרה: שהם יצאו עם כלי אחד שהם מיד מיישמים.

בנה לי:
1. מבנה שיעור עם זמנים
2. 3 נקודות כאב שאפתח בהן
3. רגע ה"וואו" — הדגמה שתשאיר אותם עם הפה פתוח
4. CTA טבעי לסוף`,
  },
  // ── 17 ─ הדגמות לייב ─────────────────────────────────────────────
  {
    id: 17, section: "הדגמות לייב", type: "section-header",
    num: "05",
    title: "רעיונות להדגמות לייב",
  },
  // ── 18 ──────────────────────────────────────────────────────────
  {
    id: 18, section: "הדגמות לייב", type: "demos",
    title: "הדגמות שמשאירות רושם",
    demos: [
      {
        label: "דמו 1 — הפוך email מתסכל לזהב",
        desc: "קח email לקוח קשה מהקהל → Claude כותב תשובה מקצועית תוך 10 שניות",
        wow: "כל אחד בחדר חושב 'גם אני יכול לעשות את זה'",
      },
      {
        label: "דמו 2 — פוסט שיווקי חי",
        desc: "קח עסק של מישהו מהקהל → Claude כותב פוסט אינסטגרם בטון האישי שלו",
        wow: "הם רואים את המוצר שלהם עם שפה חדשה",
      },
      {
        label: "דמו 3 — מחקר מתחרה בזמן אמת",
        desc: "שם מתחרה אחד → Claude מנתח, מזהה gaps, מציע positioning",
        wow: "מרגיש כמו יועץ אסטרטגי בכיס",
      },
      {
        label: "דמו 4 — FAQ אוטומטי",
        desc: "קח שירות מהקהל → Claude בונה FAQ שלם עם תשובות מכירה",
        wow: "חוסך להם שעות עבודה שחוזרת",
      },
    ],
  },
  // ── 19 ──────────────────────────────────────────────────────────
  {
    id: 19, section: "הדגמות לייב", type: "doc",
    label: "טיפים להדגמה חיה",
    title: "איך לא להתרסק בדמו",
    items: [
      "הכן תמיד backup — תוצאה מוכנה מראש אם Claude נתקע",
      "השתמש בשמות ונושאים של אנשים בקהל — זה אישי",
      "הגב בקול לתוצאה — 'תראו, הוא הבין מיד ש...'",
      "אל תקרא מהמסך — הסבר מה קורה בעברית פשוטה",
      "תן לקהל לשאול prompt אחד — זה הכי memorable",
    ],
    note: "הדמו הכי טוב הוא זה שהקהל מרגיש שלקח חלק בו",
  },
  // ── 20 ─ זווית מכירתית ───────────────────────────────────────────
  {
    id: 20, section: "זווית מכירתית", type: "section-header",
    num: "06",
    title: "זווית מכירתית לבעלי עסקים",
  },
  // ── 21 ──────────────────────────────────────────────────────────
  {
    id: 21, section: "זווית מכירתית", type: "mindshift",
    title: "איך בעלי עסקים שומעים שיעורי AI",
    before: "כלי מגניב, אולי יום אחד אנסה",
    after: "כמה זה עולה לי שאני לא משתמש בזה כבר עכשיו?",
  },
  // ── 22 ──────────────────────────────────────────────────────────
  {
    id: 22, section: "זווית מכירתית", type: "pain-frames",
    title: "הפריימים שמזיזים בעלי עסקים",
    frames: [
      { icon: "⏱", label: "זמן", text: "כמה שעות בשבוע אתה משקיע על משימות שClaude יכול לעשות ב-5 דקות?" },
      { icon: "💸", label: "כסף", text: "מה עולה לך קופירייטר, VA, אסיסטנט? Claude עושה את כל זה ב-$20 לחודש." },
      { icon: "⚡", label: "מהירות", text: "המתחרה שלך כבר משתמש. כל יום שאתה לא — הוא מרוויח." },
      { icon: "📈", label: "scale", text: "AI לא עייף. לא חולה. לא מבקש העלאה. הוא scale בלי שאתה." },
    ],
  },
  // ── 23 ──────────────────────────────────────────────────────────
  {
    id: 23, section: "זווית מכירתית", type: "doc",
    label: "שיח מכירה בשיעור",
    title: "איך להמיר משתתפים ללקוחות",
    items: [
      "שאל בפתיחה: 'מי כאן משתמש ב-AI לעסק?' — זה מיפוי שוק",
      "במהלך: 'זה בדיוק מה שעשינו עם עסק דומה שלך'",
      "לפני הסוף: הכנס case study עם תוצאה מספרית",
      "בסגירה: הצע 'שיחת בדיקה חינמית' — לא 'מכירה'",
      "לאחר השיעור: מייל follow-up עם שקף אחד וCTA",
    ],
    note: "שיעור טוב מוכר בלי שתצטרך לשאול",
  },
  // ── 24 ──────────────────────────────────────────────────────────
  {
    id: 24, section: "זווית מכירתית", type: "statement",
    label: "האמת על שיעורי AI",
    lines: [
      "שיעור חינמי:",
      "לא עולה כלום",
      "שיעור טוב:",
      "שווה לידים",
    ],
    accent: 3,
  },
  // ── 25 ─ Onyx AI ──────────────────────────────────────────────────
  {
    id: 25, section: "Onyx AI", type: "section-header",
    num: "07",
    title: "המשך טבעי ל-Onyx AI",
  },
  // ── 26 ──────────────────────────────────────────────────────────
  {
    id: 26, section: "Onyx AI", type: "funnel",
    title: "המשפך הטבעי מהשיעור לשירות",
    stages: [
      { label: "שיעור / סדנה", sub: "מרוויחים אמון, מציגים ערך", color: B.muted },
      { label: "שיחת בדיקה", sub: "מבינים את הצרכים הספציפיים", color: B.silver },
      { label: "הצעת מחיר", sub: "שירות מותאם לעסק", color: B.mustardL },
      { label: "לקוח Onyx AI", sub: "הטמעה, אוטומציות, ליווי שוטף", color: B.mustard },
    ],
  },
  // ── 27 ──────────────────────────────────────────────────────────
  {
    id: 27, section: "Onyx AI", type: "services",
    title: "השירותים שנולדים מהשיעור",
    services: [
      { name: "הטמעת AI לעסק", desc: "ניתוח תהליכים, בחירת כלים, הכשרת צוות" },
      { name: "בניית מערכת הקשר", desc: "מסמכי מותג, workflow, prompt library" },
      { name: "אוטומציות עסקיות", desc: "MCP, Agents, תהליכים אוטומטיים" },
      { name: "ליווי שוטף", desc: "retainer חודשי, עדכונים, שאלות, שיפורים" },
    ],
  },
  // ── 28 ──────────────────────────────────────────────────────────
  {
    id: 28, section: "Onyx AI", type: "prompt-card",
    label: "prompt לסגירת שיעור",
    title: "CTA שמרגיש טבעי",
    prompt: `"לפני שאנחנו נפרדים —
מי מכם רוצה לדעת איפה AI יכול לחסוך לעסק שלו הכי הרבה זמן?
יש לי [X] מקומות לשיחות בדיקה בשבועיים הקרובים.
שיחה של 30 דקות, אין עלות, אין מחויבות.
מי שרוצה — שלח לי הודעה עכשיו."`,
  },
  // ── 29 ─ סיכום ───────────────────────────────────────────────────
  {
    id: 29, section: "סיכום", type: "summary",
    title: "מה לוקחים משיעור זה",
    items: [
      { label: "מבנה", value: "90 דקות · 6 שלבים · hook חזק" },
      { label: "תוכן", value: "Claude בונה שקפים · prompts מוכנים" },
      { label: "דמו", value: "4 דמואים · backup מוכן · קהל מעורב" },
      { label: "מכירה", value: "פריימים · שיחת בדיקה · follow-up" },
      { label: "Onyx AI", value: "משיעור → לקוח בצינור טבעי" },
    ],
  },
  // ── 30 ──────────────────────────────────────────────────────────
  {
    id: 30, section: "סיכום", type: "closing",
    quote: "שיעור AI טוב לא מלמד — הוא מוכר. הידע הוא הפרודוקט. הלקוח הוא הסגירה.",
    sub: "כל מצגת שתעביר היא הוכחה חיה לשירות שאתה מוכר.",
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
              flexShrink: 0, border: "0.5px solid rgba(200,146,42,0.2)",
            }}>{String(i + 1).padStart(2, "0")}</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 16, color: B.silver, lineHeight: 1.6 }}>{item}</span>
          </div>
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
        border: "0.5px solid rgba(0,212,170,0.2)",
        borderRadius: 100, padding: "4px 14px",
      }}>{slide.badge}</div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 32, color: B.white, margin: 0,
        letterSpacing: "-0.02em", lineHeight: 1.1,
      }}>{slide.title}</h2>
      <div style={{
        background: B.surface, border: `0.5px solid ${B.border}`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 10, padding: "18px 28px",
        fontFamily: "'Heebo', sans-serif", fontSize: 17,
        color: B.silver, lineHeight: 1.7, maxWidth: 520,
        textAlign: "right",
      }}>{slide.body}</div>
    </div>
  );

  if (slide.type === "timeline") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 16px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.mustard, flexShrink: 0, minWidth: 44,
              marginTop: 2, letterSpacing: "0.06em",
            }}>{step.time}'</div>
            <div>
              <div style={{
                fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                fontSize: 14, color: B.white, marginBottom: 2,
              }}>{step.label}</div>
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.muted }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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
          fontSize: 28, color: B.white, margin: 0,
          letterSpacing: "-0.02em",
        }}>{slide.title}</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
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

  if (slide.type === "doc-split") return (
    <div>
      <div style={{ marginBottom: 20 }}>
        {slide.label && (
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.teal, letterSpacing: "0.18em",
            textTransform: "uppercase", marginBottom: 6,
          }}>{slide.label}</div>
        )}
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 26, color: B.white, margin: 0,
          letterSpacing: "-0.02em",
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
              letterSpacing: "0.14em", textTransform: "uppercase",
              marginBottom: 14,
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

  if (slide.type === "mindshift") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.muted, margin: 0,
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.surface, border: "0.5px solid rgba(255,183,77,0.2)",
        borderRadius: 12, padding: "20px 32px", width: "100%",
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: B.amber, letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: 10,
        }}>מה הם שומעים</div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 600, fontSize: 20, color: "#7A7060" }}>
          "{slide.before}"
        </div>
      </div>
      <div style={{ color: B.mustard, fontSize: 24 }}>↓</div>
      <div style={{
        background: B.surface, border: "0.5px solid rgba(200,146,42,0.35)",
        borderRadius: 12, padding: "20px 32px", width: "100%",
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: B.mustard, letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: 10,
        }}>מה הם צריכים לחשוב</div>
        <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 20, color: B.white }}>
          "{slide.after}"
        </div>
      </div>
    </div>
  );

  if (slide.type === "slide-anatomy") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.parts.map((part, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "120px 1fr",
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, overflow: "hidden",
          }}>
            <div style={{
              background: B.mustardDim,
              borderLeft: `2px solid ${B.mustard}`,
              padding: "14px 18px",
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: B.mustardL, letterSpacing: "0.08em",
              display: "flex", alignItems: "center",
            }}>{part.role}</div>
            <div style={{
              padding: "14px 18px",
              fontFamily: "'Heebo', sans-serif", fontSize: 14,
              color: B.silver, lineHeight: 1.5,
            }}>{part.rule}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "prompt-card") return (
    <div>
      {slide.label && (
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 9,
          color: B.teal, letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: 8,
        }}>{slide.label}</div>
      )}
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
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
          {["#FF6058","#FFBC2E","#28CA42"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.muted, marginRight: 8 }}>Claude prompt</span>
        </div>
        <div style={{ padding: "20px 24px" }}>
          <pre style={{
            fontFamily: "'DM Mono', monospace", fontSize: 13,
            color: B.silver, lineHeight: 1.8,
            whiteSpace: "pre-wrap", margin: 0,
          }}>{slide.prompt}</pre>
        </div>
      </div>
    </div>
  );

  if (slide.type === "prompt-examples") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 18px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.examples.map((ex, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, overflow: "hidden",
          }}>
            <div style={{
              padding: "8px 16px",
              background: B.bgMid,
              borderBottom: `0.5px solid ${B.border}`,
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: B.mustard, letterSpacing: "0.12em", textTransform: "uppercase",
            }}>{ex.label}</div>
            <div style={{
              padding: "12px 16px",
              fontFamily: "'Heebo', sans-serif", fontSize: 13,
              color: B.silver, lineHeight: 1.6,
            }}>{ex.prompt}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "workflow") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 24, color: B.white, margin: "0 0 18px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            display: "flex", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "14px 16px",
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

  if (slide.type === "demos") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 18px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.demos.map((demo, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: B.teal, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 6,
            }}>{demo.label}</div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 14, color: B.silver, marginBottom: 6, lineHeight: 1.5 }}>{demo.desc}</div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.mustardL }}>✦ {demo.wow}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "pain-frames") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {slide.frames.map((frame, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderTop: `2px solid ${B.mustard}`,
            borderRadius: 10, padding: "16px 18px",
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{frame.icon}</div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: B.mustard, letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: 8,
            }}>{frame.label}</div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.silver, lineHeight: 1.6 }}>{frame.text}</div>
          </div>
        ))}
      </div>
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
            fontSize: i === slide.accent ? 44 : 28,
            color: i === slide.accent ? B.mustard : (i % 2 === 0 ? B.muted : B.white),
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>{line}</div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "funnel") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {slide.stages.map((stage, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: `${100 - i * 12}%`,
              background: B.surface,
              border: `0.5px solid ${B.border}`,
              borderRight: `3px solid ${stage.color}`,
              borderRadius: 8, padding: "12px 20px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div style={{
                fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                fontSize: 15, color: stage.color,
              }}>{stage.label}</div>
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.muted }}>{stage.sub}</div>
            </div>
            {i < slide.stages.length - 1 && (
              <div style={{ color: B.mustardDim, fontSize: 16, margin: "2px 0" }}>▼</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "services") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {slide.services.map((svc, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "18px 20px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 8,
              color: B.mustard, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 8,
            }}>שירות {String(i + 1).padStart(2, "0")}</div>
            <div style={{
              fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
              fontSize: 15, color: B.white, marginBottom: 6,
            }}>{svc.name}</div>
            <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.muted, lineHeight: 1.5 }}>{svc.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "summary") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 32, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "90px 1fr",
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, overflow: "hidden",
          }}>
            <div style={{
              background: B.mustardDim,
              borderLeft: `2px solid ${B.mustard}`,
              padding: "12px 16px",
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.mustardL, letterSpacing: "0.08em",
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

  if (slide.type === "closing") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 28 }}>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(200,146,42,0.35)`,
        borderRadius: 14, padding: "36px 48px", maxWidth: 560,
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 10,
          color: B.mustard, letterSpacing: "0.14em",
          textTransform: "uppercase", marginBottom: 20,
        }}>המסקנה</div>
        <div style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 26, color: B.white, lineHeight: 1.3,
          letterSpacing: "-0.02em",
        }}>{slide.quote}</div>
      </div>
      {slide.sub && (
        <div style={{
          fontFamily: "'Heebo', sans-serif", fontSize: 14,
          color: B.muted, maxWidth: 420, lineHeight: 1.6,
        }}>{slide.sub}</div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <OnyxLogoMark />
        <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800, fontSize: 16, color: B.white, letterSpacing: "-0.02em" }}>
          ONYX <span style={{ color: B.mustard }}>AI</span>
        </span>
      </div>
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
