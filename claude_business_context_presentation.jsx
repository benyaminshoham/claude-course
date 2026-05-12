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
    badge: "סדנה · הגדרת עסק לקלוד",
    title: "תפסיק להישמע כמו כולם",
    subtitle: "איך להגדיר את העסק שלך לקלוד",
  },
  // ── 02 ──────────────────────────────────────────
  {
    id: 2, section: "פתיחה", type: "bullets",
    title: "מה נלמד היום",
    items: [
      "יצירת בידול בעולם שבו כולם משתמשים באותם כלים",
      "לגרום לקלוד להבין את העסק שלך באמת",
      "בניית מערכת הקשר שמייצרת תוצאות עקביות",
      "תוכן, עיצוב, שיווק, מכירות ושירות באותה שפה",
    ],
  },
  // ── 03 ──────────────────────────────────────────
  {
    id: 3, section: "הבעיה", type: "problem-list",
    title: "למה רוב התוכן עם AI נראה אותו דבר",
    items: [
      "אין לקלוד הקשר אמיתי על העסק",
      "אין מסמכי מותג",
      "אין הגדרת קול וטון",
      "אין הבנת קהל יעד",
      "אין הבנת שוק ומתחרים",
      "כל שיחה מתחילה מאפס",
    ],
    result: "תוכן גנרי. עיצוב גנרי. מסרים גנריים.",
  },
  // ── 04 ──────────────────────────────────────────
  {
    id: 4, section: "הפתרון", type: "concept",
    badge: "הגדרת עסק לקלוד",
    title: "מה זה בעצם להגדיר עסק לקלוד",
    body: "לא prompt אחד — אלא ספריית ידע עסקית שלמה שגורמת לקלוד לעבוד כאילו הוא חלק מהצוות",
  },
  // ── 05 ──────────────────────────────────────────
  {
    id: 5, section: "הפתרון", type: "layers",
    title: "אילו מסמכים צריך לבנות",
    layers: [
      {
        label: "שכבת זהות",
        items: ["מסמך מותג", "מסמך קול וטון", "מסמך מיצוב"],
      },
      {
        label: "שכבת שוק",
        items: ["מחקר מתחרים", "קהל יעד ולקוחות", "ערוצי שיווק"],
      },
      {
        label: "שכבת תפעול",
        items: ["מוצרים ושירותים", "תהליכי עבודה", "מערכות עסקיות"],
      },
      {
        label: "שכבת מדיה",
        items: ["לוגואים", "תמונות", "עיצוב", "תבניות"],
      },
    ],
  },
  // ── 06 ──────────────────────────────────────────
  {
    id: 6, section: "שכבת זהות", type: "section-header",
    num: "01",
    title: "שכבת זהות",
  },
  // ── 07 ──────────────────────────────────────────
  {
    id: 7, section: "שכבת זהות", type: "doc",
    label: "מסמך מותג",
    title: "מה הוא צריך להכיל",
    items: [
      "שם העסק ומה הוא עושה",
      "למי העסק פונה ומה מבדל אותו",
      "ערכי מותג · צבעים · פונטים · סגנון עיצוב",
      "משפטי מפתח · סלוגנים",
      "מילים שכן משתמשים בהן ומילים שלא",
    ],
    note: "שקלוד יכתוב ויעצב בצורה עקבית",
  },
  // ── 08 ──────────────────────────────────────────
  {
    id: 8, section: "שכבת זהות", type: "doc",
    label: "מסמך קול וטון",
    title: "זה המסמך שהופך AI למשהו אישי",
    items: [
      "איך העסק מדבר — מקצועי או חברי",
      "קצר או מפורט · יש הומור · יש סלנג",
      "רמת ישירות · אורך משפטים · מבנה כתיבה",
      "סוג hooks · CTA נפוצים",
      "דוגמאות: פוסטים, תשובות ללקוחות, מיילים",
    ],
    note: "שגם בלי לשאול — הטון יהיה נכון",
  },
  // ── 09 ──────────────────────────────────────────
  {
    id: 9, section: "שכבת זהות", type: "doc",
    label: "מסמך מיצוב שוק",
    title: "קלוד חייב להבין",
    items: [
      "באיזה שוק העסק פועל ומה רמת המחירים",
      "מה מבדל את העסק · איך המתחרים נשמעים",
      "מה מבטיחים בענף · מה הלקוח באמת רוצה",
      "מי אתה לא · מה אתה לא מוכר",
      "איזה לקוחות אתה לא רוצה",
    ],
    note: "בידול אמיתי מתחיל בידיעה מה אתה לא",
  },
  // ── 10 ──────────────────────────────────────────
  {
    id: 10, section: "שכבת שוק", type: "section-header",
    num: "02",
    title: "שכבת שוק",
  },
  // ── 11 ──────────────────────────────────────────
  {
    id: 11, section: "שכבת שוק", type: "doc-split",
    label: "מחקר מתחרים",
    title: "המסמך הכי מוזנח אצל בעלי עסקים",
    colA: {
      heading: "מה אוספים",
      items: [
        "אתרי מתחרים · פוסטים · פרסומות",
        "סגנון ויזואלי · הצעות ערך",
        "מחירים · hooks · עמודי מכירה",
        "ביקורות לקוחות",
      ],
    },
    colB: {
      heading: "מה קלוד עושה עם זה",
      items: [
        "מזהה הזדמנויות בידול",
        "נמנע מקופי גנרי",
        "מבין את שפת השוק",
      ],
    },
  },
  // ── 12 ──────────────────────────────────────────
  {
    id: 12, section: "שכבת שוק", type: "doc",
    label: "מסמך לקוחות וקהל יעד",
    title: "בלי זה, כל תוכן יוצא כללי מדי",
    items: [
      "מי הלקוח — גילאים, מקצועות, רמת ידע",
      "פחדים · רצונות · התנגדויות · חלומות",
      "איפה הם נמצאים אונליין · איך הם מדברים",
      "שאלות אמיתיות · צילומי מסך · שיחות מכירה",
      "תגובות ברשתות חברתיות",
    ],
    note: "הלקוח הוא מקור האמת — לא ההנחות שלך",
  },
  // ── 13 ──────────────────────────────────────────
  {
    id: 13, section: "שכבת שוק", type: "doc",
    label: "מסמך ערוצי שיווק",
    title: "לכל פלטפורמה יש שפה אחרת",
    items: [
      "פייסבוק · אינסטגרם · לינקדאין · טיקטוק",
      "ניוזלטר · בלוג · ווטסאפ",
      "עבור כל ערוץ: סוג תוכן ואורך",
      "טון · CTA · תדירות · מטרת הערוץ",
    ],
    note: "שקלוד ידע לכתוב ספציפית לכל פלטפורמה",
  },
  // ── 14 ──────────────────────────────────────────
  {
    id: 14, section: "שכבת תפעול", type: "section-header",
    num: "03",
    title: "שכבת תפעול",
  },
  // ── 15 ──────────────────────────────────────────
  {
    id: 15, section: "שכבת תפעול", type: "doc",
    label: "מסמך מוצרים ושירותים",
    title: "קלוד צריך להבין מה אתם מוכרים",
    items: [
      "לכל שירות: שם · תיאור קצר · תיאור ארוך",
      "יתרונות · תהליך עבודה · מחיר",
      "FAQ · התנגדויות",
      "למי זה מתאים · למי זה לא מתאים",
    ],
    note: "אחרת כל פוסט ממציא מחדש את העסק",
  },
  // ── 16 ──────────────────────────────────────────
  {
    id: 16, section: "שכבת תפעול", type: "doc",
    label: "מסמך מערכות ותהליכים",
    title: "כדי שקלוד יוכל לעזור באמת",
    items: [
      "מערכות: CRM · אימייל · אתר · WhatsApp",
      "Google Drive · ERP · WooCommerce · Notion",
      "תהליכי מכירה · שירות · onboarding",
      "יצירת תוכן · הצעות מחיר · גביה",
    ],
    note: "קלוד עובד טוב יותר כשהוא מבין את הכלים",
  },
  // ── 17 ──────────────────────────────────────────
  {
    id: 17, section: "שכבת תפעול", type: "doc",
    label: "מסמך FAQ פנימי",
    title: "אחד המסמכים הכי חזקים",
    items: [
      "שאלות שחוזרות שוב ושוב",
      "התנגדויות · טעויות נפוצות",
      "תשובות שירות ותשובות מכירה",
      "הסברים מקצועיים",
    ],
    note: "קלוד נותן תשובות עקביות בכל מקום",
  },
  // ── 18 ──────────────────────────────────────────
  {
    id: 18, section: "שכבת תפעול", type: "doc",
    label: "מסמך ידע מקצועי",
    title: "הידע האמיתי של העסק",
    items: [
      "מאמרים · מדריכים · מחקרים · PDF",
      "הקלטות · תמלולים",
      "מסמכי SOP · נהלים",
      "מצגות · מסמכי לקוחות",
    ],
    note: "זה מה שהופך AI מגנרי למומחה",
  },
  // ── 19 ──────────────────────────────────────────
  {
    id: 19, section: "שכבת מדיה", type: "section-header",
    num: "04",
    title: "שכבת מדיה",
  },
  // ── 20 ──────────────────────────────────────────
  {
    id: 20, section: "שכבת מדיה", type: "doc-split",
    label: "חומרים גרפיים",
    title: "לא רק טקסט — גם התמונות צריכות להרגיש כמו המותג",
    colA: {
      heading: "ספריית מדיה",
      items: [
        "לוגו · גרסאות צבע · פונטים",
        "אייקונים · mockups",
        "תמונות מוצר · תמונות צוות",
        "moodboards · דוגמאות עיצוב",
      ],
    },
    colB: {
      heading: "מסמך עיצוב",
      items: [
        "צבעים · פונטים · מרווחים",
        "סגנון תמונות · סוג איורים",
        "מבנה כפתורים · סגנון UI",
        "קריטי ליצירת תמונות AI",
      ],
    },
  },
  // ── 21 ──────────────────────────────────────────
  {
    id: 21, section: "ארגון וכלים", type: "section-header",
    num: "05",
    title: "ארגון וכלים",
  },
  // ── 22 ──────────────────────────────────────────
  {
    id: 22, section: "ארגון וכלים", type: "folder",
    title: "המבנה הכי פשוט",
    folders: [
      "/business",
      "  /brand",
      "  /marketing",
      "  /products",
      "  /customers",
      "  /design",
      "  /operations",
      "  /knowledge",
      "  /media",
    ],
    note: "Google Drive · Dropbox · Notion · Git · תיקייה מסודרת במחשב",
  },
  // ── 23 ──────────────────────────────────────────
  {
    id: 23, section: "ארגון וכלים", type: "files",
    title: "אילו קבצים עובדים הכי טוב עם קלוד",
    recommended: ["Markdown", "PDF", "Google Docs", "TXT", "CSV", "Images", "Presentations"],
    avoid: ["קבצים מבולגנים", "screenshots בלי הקשר", "תיקיות בלי שמות ברורים"],
  },
  // ── 24 ──────────────────────────────────────────
  {
    id: 24, section: "הטעות הגדולה", type: "mindshift",
    title: "הטעות הכי גדולה",
    before: "אנשים נותנים לקלוד רק prompt",
    after: "מערכת הקשר = מותג עקבי לאורך זמן",
  },
  // ── 25 ──────────────────────────────────────────
  {
    id: 25, section: "הטעות הגדולה", type: "statement",
    label: "ההבדל הקריטי",
    lines: ["Prompt טוב בלי הקשר:", "תוצאה חד פעמית", "מערכת הקשר טובה:", "מותג עקבי"],
    accent: 3,
  },
  // ── 26 ──────────────────────────────────────────
  {
    id: 26, section: "התוצאה", type: "pros",
    title: "מה קורה כשהעסק מוגדר נכון",
    items: [
      "תוכן נראה אישי — לא גנרי",
      "פחות זמן על תיקונים",
      "תוצאות עקביות לאורך זמן",
      "עובדים יכולים להשתמש באותה מערכת",
      "קל יותר לעשות scale",
      "AI מתחיל לעבוד כמו עובד אמיתי",
    ],
  },
  // ── 27 ──────────────────────────────────────────
  {
    id: 27, section: "הדגמה", type: "demo-header",
    label: "הדגמה חיה",
    title: "ניקח עסק אמיתי ונבנה לו את הכל",
  },
  // ── 28 ──────────────────────────────────────────
  {
    id: 28, section: "הדגמה", type: "bullets",
    title: "מה נבנה יחד",
    items: [
      "מסמך מותג",
      "מסמך קול וטון",
      "מסמך לקוחות",
      "ספריית חומרים",
      "prompt ראשי — ואז נראה איך התוצרים משתנים מיד",
    ],
  },
  // ── 29 ──────────────────────────────────────────
  {
    id: 29, section: "סיכום", type: "summary",
    title: "סיכום",
    items: [
      { label: "זהות", value: "מותג · טון · מיצוב" },
      { label: "שוק", value: "מתחרים · לקוחות · ערוצים" },
      { label: "תפעול", value: "מוצרים · FAQ · ידע" },
      { label: "מדיה", value: "עיצוב · תמונות · תבניות" },
    ],
  },
  // ── 30 ──────────────────────────────────────────
  {
    id: 30, section: "סיכום", type: "closing",
    quote: "AI בלי הקשר = תוכן גנרי. AI עם הקשר = יתרון עסקי.",
  },
];

const sections = [
  "פתיחה", "הבעיה", "הפתרון",
  "שכבת זהות", "שכבת שוק", "שכבת תפעול",
  "שכבת מדיה", "ארגון וכלים", "הטעות הגדולה",
  "התוצאה", "הדגמה", "סיכום",
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

  if (slide.type === "problem-list") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 28, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
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
        borderRadius: 10, padding: "16px 22px",
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 20, color: B.mustardL,
        letterSpacing: "-0.01em",
      }}>התוצאה: {slide.result}</div>
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
        fontSize: 36, color: B.white, margin: 0,
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.surface, border: `0.5px solid ${B.border}`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 10, padding: "18px 28px",
        fontFamily: "'Heebo', sans-serif", fontSize: 18,
        color: B.silver, lineHeight: 1.6, maxWidth: 520,
      }}>{slide.body}</div>
    </div>
  );

  if (slide.type === "layers") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
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

  if (slide.type === "doc") return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 9,
          color: B.teal, letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: 6,
        }}>{slide.label}</div>
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
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: B.muted, marginLeft: 8 }}>המטרה:</span>
          {" "}{slide.note}
        </div>
      )}
    </div>
  );

  if (slide.type === "doc-split") return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 9,
          color: B.teal, letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: 6,
        }}>{slide.label}</div>
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

  if (slide.type === "folder") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.bgDeep, border: `0.5px solid ${B.border}`,
        borderRadius: 12, overflow: "hidden", marginBottom: 16,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "8px 14px", background: B.bgMid,
          borderBottom: `0.5px solid ${B.border}`,
        }}>
          {["#FF6058","#FFBC2E","#28CA42"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.muted, marginRight: 8 }}>structure</span>
        </div>
        <div style={{ padding: "20px 24px" }}>
          {slide.folders.map((line, i) => (
            <div key={i} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 14,
              color: line.startsWith("  ") ? B.silver : B.mustardL,
              lineHeight: 1.9,
            }}>{line}</div>
          ))}
        </div>
      </div>
      <div style={{
        background: B.surface, border: `0.5px solid ${B.border}`,
        borderRadius: 8, padding: "10px 16px",
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.muted, textAlign: "center",
      }}>{slide.note}</div>
    </div>
  );

  if (slide.type === "files") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.teal, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 12,
          }}>מומלץ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.recommended.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "rgba(0,212,170,0.06)",
                border: "0.5px solid rgba(0,212,170,0.2)",
                borderRadius: 8, padding: "10px 14px",
              }}>
                <div style={{ color: B.teal, fontSize: 14 }}>✓</div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: B.silver }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.amber, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 12,
          }}>פחות מומלץ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.avoid.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "rgba(255,183,77,0.06)",
                border: "0.5px solid rgba(255,183,77,0.2)",
                borderRadius: 8, padding: "10px 14px",
              }}>
                <div style={{ color: B.amber, fontSize: 14 }}>⚠</div>
                <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 13, color: B.silver }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
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
        background: B.surface, border: "0.5px solid rgba(255,183,77,0.2)",
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
        background: B.surface, border: "0.5px solid rgba(200,146,42,0.35)",
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
            border: "0.5px solid rgba(0,212,170,0.2)",
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{ color: B.teal, fontSize: 18, flexShrink: 0 }}>✓</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 16, color: B.silver, lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

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

  if (slide.type === "summary") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 32, color: B.white, margin: "0 0 28px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 12, padding: "20px 24px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.mustard, letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: 8,
            }}>{item.label}</div>
            <div style={{
              fontFamily: "'Heebo', sans-serif", fontSize: 15,
              color: B.silver, lineHeight: 1.5,
            }}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "closing") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: 32 }}>
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
          fontSize: 28, color: B.white, lineHeight: 1.25,
          letterSpacing: "-0.02em",
        }}>{slide.quote}</div>
      </div>
      <div style={{
        fontFamily: "'Heebo', sans-serif", fontSize: 14,
        color: B.muted,
      }}>הכלי זמין לכולם. ההבדל הוא מי בונה מערכת עבודה אמיתית.</div>
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
export default function BusinessContextPresentation() {
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
            fontSize: 11, color: current === slides.length - 1 ? B.muted : B.silver,
            cursor: current === slides.length - 1 ? "default" : "pointer",
            letterSpacing: "0.06em",
          }}
        >הבא ←</button>
      </div>
    </div>
  );
}
