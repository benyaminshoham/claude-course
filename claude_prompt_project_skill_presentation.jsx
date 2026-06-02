import { useState } from "react";

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

function OnyxLogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill={B.bgMid}/>
      <polygon points="20,4 33.5,11.5 33.5,28.5 20,36 6.5,28.5 6.5,11.5" fill="none" stroke={B.mustard} strokeWidth="1.5"/>
      <polygon points="20,10.5 28.5,15.25 28.5,24.75 20,29.5 11.5,24.75 11.5,15.25" fill={B.mustard} fillOpacity="0.15"/>
      <circle cx="20" cy="20" r="3" fill={B.mustard}/>
    </svg>
  );
}

const slides = [
  // 01 - Cover
  {
    id: 1, section: "פתיחה", type: "cover",
    badge: "סדנה · Claude לעסק",
    title: "פרומפט, פרויקט או סקיל?",
    subtitle: "איך לעבוד נכון עם קלוד בלי להתחיל מאפס בכל פעם",
    meta: "שיעור חינמי · שעה · בנימין שהם · Onyx AI",
  },
  // 02 - הבעיה
  {
    id: 2, section: "פתיחה", type: "problem-list",
    title: "קלוד לא אמור לזכור את העסק שלך מחדש בכל שיחה",
    items: [
      "כותבים פרומפט ארוך מדי",
      "מדביקים שוב ושוב את אותם הסברים",
      "מערבבים הוראות כלליות עם משימה נקודתית",
      "פותחים שיחה חדשה בלי הקשר",
      "מצפים שקלוד יבין את העסק מתוך משפט אחד",
      "שומרים פרומפטים בקובץ מבולגן ולא יודעים מתי להשתמש במה",
    ],
    result: "אין לכם מבנה — לא חסרים לכם פרומפטים טובים.",
  },
  // 03 - שלושת הכלים
  {
    id: 3, section: "פתיחה", type: "three-tools",
    title: "המודל הפשוט",
    tools: [
      { name: "פרומפט", color: B.mustard, desc: "בקשה חד פעמית לביצוע משימה מסוימת" },
      { name: "פרויקט", color: B.teal, desc: "סביבת עבודה קבועה עם הקשר, קבצים, הנחיות וידע" },
      { name: "סקיל", color: B.amber, desc: "יכולת חוזרת שמלמדת את קלוד איך לבצע סוג משימה מסוים" },
    ],
    key: [
      "פרומפט אומר מה לעשות עכשיו.",
      "פרויקט אומר באיזה עולם אנחנו עובדים.",
      "סקיל אומר איך לבצע תהליך שחוזר על עצמו.",
    ],
  },
  // 04 - מתי פרומפט
  {
    id: 4, section: "פרומפט", type: "when-tool",
    label: "פרומפט",
    color: B.mustard,
    title: "מתי משתמשים בפרומפט",
    when: [
      "המשימה חד פעמית",
      "אין צורך בהקשר עסקי רחב",
      "אין תהליך קבוע שחוזר על עצמו",
      "התוצאה לא חייבת להיות זהה בכל פעם",
      "רוצים לחשוב, לנסח, לבדוק או לשפר משהו קטן",
    ],
    examples: [
      "כתוב לי פוסט לפייסבוק על סדנה חדשה",
      "סכם לי את הטקסט הזה",
      "תן לי 10 רעיונות לכותרות",
      "שפר לי את המייל הזה",
      "בנה לי רשימת שאלות ללקוח",
    ],
  },
  // 05 - מבנה פרומפט טוב
  {
    id: 5, section: "פרומפט", type: "prompt-template",
    title: "מבנה פרומפט טוב",
    parts: ["תפקיד", "הקשר", "משימה", "קהל יעד", "סגנון", "פורמט", "מגבלות", "דוגמה"],
    example: `אתה יועץ AI לעסקים קטנים.
אני מעביר סדנה לבעלי עסקים על שימוש בקלוד.
כתוב פוסט לפייסבוק שמזמין לשיעור חינמי.
קהל היעד הוא עצמאים ובעלי עסקים שכבר שמעו על AI אבל לא יודעים איך להתחיל.
הסגנון צריך להיות ישיר, מעשי ולא הייפי.
כתוב פוסט קצר, עם פתיחה חזקה, תיאור הערך, והנעה להגיב כדי לקבל קישור.`,
    note: "פרומפט טוב הוא לא ארוך — הוא מדויק.",
  },
  // 06 - מתי פרויקט
  {
    id: 6, section: "פרויקט", type: "when-tool",
    label: "פרויקט",
    color: B.teal,
    title: "מתי משתמשים בפרויקט",
    when: [
      "יש לכם תחום עבודה קבוע",
      "יש מידע שקלוד צריך להכיר תמיד",
      "יש קבצים שצריך להתבסס עליהם",
      "יש סגנון, קהל יעד, מוצרים או תהליכים חוזרים",
      "רוצים שכל שיחה תתחיל עם הקשר נכון",
    ],
    examples: [
      "פרויקט לעסק",
      "פרויקט לשיווק ותוכן",
      "פרויקט לאתר לקוח",
      "פרויקט לקורס או סדנה",
      "פרויקט לפיתוח תוכנה",
    ],
  },
  // 07 - מה שמים בפרויקט
  {
    id: 7, section: "פרויקט", type: "project-files",
    title: "מה שמים בפרויקט",
    files: [
      "מסמך עסק",
      "מסמך קהל יעד",
      "מסמך שירותים ומוצרים",
      "מסמך סגנון כתיבה",
      "דוגמאות טובות של תוצרים קודמים",
      "שאלות ותשובות נפוצות",
      "רשימת תהליכים בעסק",
    ],
    instructions: `אתה עוזר לי ליצור תוכן, הצעות, תהליכי עבודה ואוטומציות עבור העסק שלי.

לפני כל תשובה, השתמש במסמכי הפרויקט כהקשר. כתוב בעברית פשוטה וברורה. אל תמציא פרטים שלא מופיעים במסמכים. כאשר חסר מידע, ציין מה חסר ואז תן את הפתרון הטוב ביותר לפי המידע הקיים.`,
    note: "הוראות הפרויקט = הקשר כללי + תפקיד קלוד. שאר המשימות — בשיחה עצמה.",
  },
  // 08 - מתי סקיל
  {
    id: 8, section: "סקיל", type: "when-tool",
    label: "סקיל",
    color: B.amber,
    title: "מתי משתמשים בסקיל",
    when: [
      "יש משימה שחוזרת על עצמה",
      "יש דרך קבועה לבצע אותה",
      "רוצים תוצאה עקבית",
      "יש שלבים, פורמט וכללים קבועים",
      "רוצים שקלוד יזהה לבד מתי להשתמש בתהליך",
    ],
    examples: [
      "כתיבת פוסט בסגנון העסק",
      "בניית הצעת מחיר",
      "ניתוח ליד חדש",
      "הפקת סיכום פגישה",
      "יצירת מאמר SEO",
    ],
  },
  // 09 - טבלת החלטה
  {
    id: 9, section: "השוואה", type: "decision-table",
    title: "טבלת החלטה",
    rows: [
      { situation: "אני צריך תשובה חד פעמית", tool: "פרומפט", color: B.mustard },
      { situation: "אני עובד על עסק או פרויקט מתמשך", tool: "פרויקט", color: B.teal },
      { situation: "אני חוזר על אותה משימה הרבה פעמים", tool: "סקיל", color: B.amber },
      { situation: "אני צריך שקלוד יכיר קבצים קבועים", tool: "פרויקט", color: B.teal },
      { situation: "אני צריך תהליך קבוע עם שלבים", tool: "סקיל", color: B.amber },
      { situation: "אני צריך לשנות הנחיות רק למשימה הזו", tool: "פרומפט", color: B.mustard },
      { situation: "אני רוצה שכל שיחה תתחיל עם אותו הקשר", tool: "פרויקט", color: B.teal },
      { situation: "אני רוצה לארוז שיטת עבודה שאפשר לשתף", tool: "סקיל", color: B.amber },
    ],
    key: [
      "הפרויקט מחזיק את הידע.",
      "הסקיל מחזיק את השיטה.",
      "הפרומפט מפעיל את המשימה.",
    ],
  },
  // 10 - דוגמה 1 - פרומפט
  {
    id: 10, section: "דוגמאות", type: "compare",
    title: "דוגמה מעשית — כתיבת פוסט לפייסבוק",
    colA: {
      heading: "דרך חלשה",
      items: [
        "כתוב לי פוסט על שיעור חינמי בקלוד.",
        "",
        "— אין קהל יעד",
        "— אין מטרה",
        "— אין סגנון",
        "— אין הנעה לפעולה",
      ],
    },
    colB: {
      heading: "דרך טובה עם פרומפט",
      items: [
        "קהל: בעלי עסקים קטנים שכבר שמעו על קלוד",
        "נושא: ההבדל בין פרומפט, פרויקט וסקיל",
        "מסר: מי שעובד רק עם פרומפטים מתחיל מאפס בכל פעם",
        "סגנון: ישיר, מעשי, בלי הייפ",
        "CTA: להגיב 'קלוד' לקישור לקבוצה",
      ],
    },
  },
  // 11 - דוגמה 2 - פרויקט
  {
    id: 11, section: "דוגמאות", type: "project-demo",
    title: "אותה משימה בתוך פרויקט",
    name: "Onyx AI Marketing",
    files: ["מסמך מותג", "מסמך קהל יעד", "מסמך שירותים", "דוגמאות פוסטים", "מסמך סגנון כתיבה"],
    instructions: "אתה עוזר לי ליצור תוכן שיווקי עבור Onyx AI. שמור על שפה, סגנון, הצעות ומיצוב לפי מסמכי הפרויקט. כתוב בעברית. טון ישיר ומעשי.",
    prompt: "כתוב פוסט לפייסבוק על השיעור החינמי של מחר בנושא פרומפטים, פרויקטים וסקילים בקלוד.",
    note: "הפרומפט התקצר — אבל התוצאה השתפרה. זה הכוח של פרויקט.",
  },
  // 12 - דוגמה 3 - סקיל
  {
    id: 12, section: "דוגמאות", type: "skill-demo",
    title: "אותה משימה כסקיל",
    skillName: "facebook-post-writer",
    description: "Use this skill when the user asks to write a Facebook post for an Israeli business audience.",
    instructions: [
      "Start with a strong hook based on pain, contradiction, or practical insight.",
      "Write in Hebrew.",
      "Use short paragraphs.",
      "Avoid hype and vague AI buzzwords.",
      "Make the value clear. Include who it is for.",
      "End with a simple call to action.",
    ],
    prompt: "כתוב פוסט לפייסבוק על השיעור החינמי של מחר. השתמש בסקיל של כתיבת פוסטים.",
    note: "לא צריך להסביר איך כותבים פוסט — קלוד יודע את הנוהל.",
  },
  // 13 - מה לא לעשות
  {
    id: 13, section: "שיטת עבודה", type: "dont-list",
    title: "מה לא לעשות",
    items: [
      "לא להפוך כל פרומפט לסקיל",
      "לא לפתוח פרויקט חדש לכל משימה קטנה",
      "לא להכניס כל פרט קטן להוראות הפרויקט",
      "לא לערבב בין מסמכי ידע לבין הוראות פעולה",
      "לא להשתמש בסקיל ענק שעושה הכול",
      "לא להעלות קבצים לא מסודרים בלי שמות ברורים",
      "לא לסמוך על קלוד בלי בדיקה אנושית",
      "לא לעבוד עם מידע רגיש בלי לחשוב על אבטחה",
    ],
    footer: "הסכנה היא לא להשתמש מעט מדי — הסכנה היא לבנות בלגן חדש בשם AI.",
  },
  // 14 - היררכיית עבודה
  {
    id: 14, section: "שיטת עבודה", type: "hierarchy",
    title: "היררכיית עבודה",
    steps: [
      { num: "01", label: "פרומפט", desc: "משימה חד פעמית", color: B.mustard },
      { num: "02", label: "פרויקט", desc: "כשחוזרים על ההקשר", color: B.teal },
      { num: "03", label: "סקיל", desc: "כשחוזרים על התהליך", color: B.amber },
      { num: "04", label: "קונקטור / MCP", desc: "חיבור למערכת חיצונית", color: B.mustardL },
      { num: "05", label: "Workflow", desc: "אוטומציה מלאה", color: B.silver },
    ],
    example: [
      "פעם ראשונה: כתוב לי פוסט",
      "פעם שנייה: כתוב לי פוסט לפי סגנון העסק",
      "פעם שלישית: נבנה פרויקט שיווק",
      "פעם רביעית: נבנה סקיל כתיבת פוסטים",
    ],
    note: "אל תתחילו מסקיל. תתחילו מעבודה אמיתית. כשמשימה חוזרת שלוש פעמים, אפשר לארוז אותה.",
  },
  // 15 - תרגיל
  {
    id: 15, section: "שיטת עבודה", type: "exercise",
    title: "תרגיל — בחרו משימה שחוזרת אצלכם",
    questions: [
      "מה המשימה?",
      "כמה פעמים בחודש היא חוזרת?",
      "איזה מידע קלוד צריך לדעת כדי לבצע אותה?",
      "האם המידע שייך לפרויקט?",
      "האם השלבים שייכים לסקיל?",
      "מה נשאר לפרומפט הספציפי?",
    ],
    examples: [
      "כתיבת פוסטים", "מענה לפניות לקוחות", "הצעות מחיר",
      "סיכום פגישות", "ניתוח קמפיינים", "כתיבת מאמרים",
      "תסריטים לסרטונים", "בדיקת קוד", "יצירת דוחות",
    ],
  },
  // 16 - קבצי המתנה
  {
    id: 16, section: "סיכום", type: "gifts",
    title: "קבצי המתנה למשתתפים",
    gifts: [
      "תבנית פרומפט חכם",
      "תבנית הקמת פרויקט בקלוד",
      "תבנית skill.md בסיסית",
      "טבלת החלטה — פרומפט מול פרויקט מול סקיל",
      "20 רעיונות לסקילים עסקיים",
      "צ׳קליסט לסידור קלוד לעסק",
    ],
    note: "קבצים שאפשר לפתוח מחר בבוקר ולהשתמש בהם מיד.",
  },
  // 17 - סיכום
  {
    id: 17, section: "סיכום", type: "summary",
    title: "מה לקחת מהשיעור",
    items: [
      { label: "פרומפט", value: "משימה נקודתית. לא אסטרטגיה." },
      { label: "פרויקט", value: "חוסך הסברים חוזרים. ההקשר שייך כאן." },
      { label: "סקיל", value: "יוצר עקביות. השיטה שייכת כאן." },
      { label: "עבודה נכונה", value: "מתחילה במבנה — לא בפרומפט מושלם." },
    ],
  },
  // 18 - closing
  {
    id: 18, section: "סיכום", type: "closing",
    quote: "מי שעובד נכון עם קלוד לא מחפש את הפרומפט המושלם. הוא בונה סביבת עבודה שמייצרת תוצאות טובות שוב ושוב.",
    cta: "לפרטים, כתבו לי בפרטי או בווטסאפ · 054-5587225",
  },
];

function SlideContent({ slide }) {

  if (slide.type === "cover") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 24, minHeight: 360 }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.18em",
        textTransform: "uppercase", color: B.mustard,
        background: B.mustardDim, border: `0.5px solid rgba(200,146,42,0.3)`,
        borderRadius: 100, padding: "4px 16px",
      }}>{slide.badge}</div>
      <div>
        <h1 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 42, color: B.white, margin: "0 0 14px",
          letterSpacing: "-0.03em", lineHeight: 1.05,
        }}>{slide.title}</h1>
        <p style={{
          fontFamily: "'Heebo', sans-serif", fontSize: 18,
          color: B.silver, margin: 0, lineHeight: 1.5,
        }}>{slide.subtitle}</p>
      </div>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        color: B.muted, letterSpacing: "0.1em",
        borderTop: `0.5px solid ${B.border}`, paddingTop: 20, width: "100%",
      }}>{slide.meta}</div>
    </div>
  );

  if (slide.type === "problem-list") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 10,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "10px 14px",
          }}>
            <span style={{ color: B.mustard, fontSize: 10, marginTop: 5, flexShrink: 0 }}>◆</span>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 14, color: B.silver, lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{
        background: "rgba(200,146,42,0.08)", border: `0.5px solid rgba(200,146,42,0.3)`,
        borderRadius: 8, padding: "12px 16px",
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 15, color: B.mustardL,
      }}>{slide.result}</div>
    </div>
  );

  if (slide.type === "three-tools") return (
    <div>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        color: B.muted, letterSpacing: "0.14em",
        textTransform: "uppercase", marginBottom: 20,
      }}>{slide.title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
        {slide.tools.map((t, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 16,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "16px 20px",
          }}>
            <div style={{
              fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
              fontSize: 18, color: t.color, minWidth: 80,
            }}>{t.name}</div>
            <div style={{
              fontFamily: "'Heebo', sans-serif", fontSize: 14,
              color: B.silver, lineHeight: 1.4,
            }}>{t.desc}</div>
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.2)`,
        borderRadius: 10, padding: "16px 20px",
        display: "flex", flexDirection: "column", gap: 6,
      }}>
        {slide.key.map((line, i) => (
          <div key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            color: i === 0 ? B.mustard : i === 1 ? B.teal : B.amber,
            lineHeight: 1.6,
          }}>{line}</div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "when-tool") return (
    <div>
      <div style={{
        display: "inline-block",
        fontFamily: "'DM Mono', monospace", fontSize: 9,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: slide.color,
        background: `${slide.color}18`,
        border: `0.5px solid ${slide.color}44`,
        borderRadius: 100, padding: "3px 14px", marginBottom: 16,
      }}>{slide.label}</div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: slide.color, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 10,
          }}>מתי</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.when.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 8, alignItems: "flex-start",
                fontFamily: "'Heebo', sans-serif", fontSize: 13,
                color: B.silver, lineHeight: 1.5,
              }}>
                <span style={{ color: slide.color, fontSize: 9, marginTop: 5, flexShrink: 0 }}>◆</span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.muted, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 10,
          }}>דוגמאות</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.examples.map((item, i) => (
              <div key={i} style={{
                background: B.surface, border: `0.5px solid ${B.border}`,
                borderRadius: 6, padding: "8px 12px",
                fontFamily: "'Heebo', sans-serif", fontSize: 13,
                color: B.silver,
              }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (slide.type === "prompt-template") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {slide.parts.map((p, i) => (
          <span key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: B.mustardL, background: B.mustardDim,
            border: `0.5px solid rgba(200,146,42,0.25)`,
            borderRadius: 6, padding: "4px 12px",
          }}>{p}</span>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid ${B.border}`,
        borderRadius: 10, overflow: "hidden", marginBottom: 14,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "8px 14px", background: B.bgMid,
          borderBottom: `0.5px solid ${B.border}`,
        }}>
          {["#FF6058","#FFBC2E","#28CA42"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.muted, marginRight: 8 }}>prompt</span>
        </div>
        <div style={{ padding: "16px 20px" }}>
          {slide.example.split("\n").map((line, i) => (
            <div key={i} style={{
              fontFamily: "'DM Mono', monospace", fontSize: 12,
              color: B.silver, lineHeight: 1.9,
            }}>{line}</div>
          ))}
        </div>
      </div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(200,146,42,0.2)`,
        borderRadius: 8, padding: "10px 16px",
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.mustardL, textAlign: "center",
      }}>{slide.note}</div>
    </div>
  );

  if (slide.type === "project-files") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.teal, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 10,
          }}>קבצים מומלצים</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {slide.files.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(0,212,170,0.06)",
                border: "0.5px solid rgba(0,212,170,0.18)",
                borderRadius: 6, padding: "8px 12px",
                fontFamily: "'DM Mono', monospace", fontSize: 12,
                color: B.silver,
              }}>
                <span style={{ color: B.teal }}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9,
            color: B.mustard, letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 10,
          }}>הוראות פרויקט לדוגמה</div>
          <div style={{
            background: B.bgDeep, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 14px",
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: B.muted, lineHeight: 1.8,
          }}>{slide.instructions}</div>
        </div>
      </div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(200,146,42,0.2)`,
        borderRadius: 8, padding: "10px 16px",
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.muted, textAlign: "center",
      }}>{slide.note}</div>
    </div>
  );

  if (slide.type === "decision-table") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
        {slide.rows.map((row, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 0,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, overflow: "hidden",
          }}>
            <div style={{
              flex: 1, padding: "10px 14px",
              fontFamily: "'Heebo', sans-serif", fontSize: 13,
              color: B.silver, lineHeight: 1.4,
            }}>{row.situation}</div>
            <div style={{
              padding: "10px 18px",
              background: `${row.color}14`,
              borderRight: `2px solid ${row.color}`,
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              color: row.color, fontWeight: 700,
              whiteSpace: "nowrap",
            }}>{row.tool}</div>
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(200,146,42,0.2)`,
        borderRadius: 10, padding: "14px 20px",
        display: "flex", flexDirection: "column", gap: 4,
      }}>
        {slide.key.map((line, i) => (
          <div key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            color: i === 0 ? B.teal : i === 1 ? B.amber : B.mustard,
          }}>{line}</div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "compare") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 24, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
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
              {col.items.filter(Boolean).map((item, i) => (
                <div key={i} style={{
                  fontFamily: "'Heebo', sans-serif", fontSize: 13,
                  color: ci === 0 ? B.muted : B.silver,
                  display: "flex", gap: 8, alignItems: "flex-start",
                  lineHeight: 1.5,
                }}>
                  {ci === 1 && <span style={{ color: B.teal, fontSize: 9, marginTop: 5, flexShrink: 0 }}>◆</span>}
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slide.type === "project-demo") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 24, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.teal,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8,
          }}>project: {slide.name}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
            {slide.files.map((f, i) => (
              <div key={i} style={{
                background: "rgba(0,212,170,0.06)",
                border: "0.5px solid rgba(0,212,170,0.18)",
                borderRadius: 6, padding: "7px 12px",
                fontFamily: "'DM Mono', monospace", fontSize: 11, color: B.silver,
                display: "flex", gap: 8, alignItems: "center",
              }}><span style={{ color: B.teal }}>📄</span>{f}</div>
            ))}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.mustard,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8,
          }}>הוראות פרויקט</div>
          <div style={{
            background: B.bgDeep, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 14px",
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: B.muted, lineHeight: 1.8, marginBottom: 12,
          }}>{slide.instructions}</div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.silver,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6,
          }}>הפרומפט הקצר</div>
          <div style={{
            background: "rgba(200,146,42,0.06)",
            border: `0.5px solid rgba(200,146,42,0.25)`,
            borderRadius: 8, padding: "12px 14px",
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            color: B.mustardL,
          }}>{slide.prompt}</div>
        </div>
      </div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(0,212,170,0.2)`,
        borderRadius: 8, padding: "10px 16px",
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.teal, textAlign: "center",
      }}>{slide.note}</div>
    </div>
  );

  if (slide.type === "skill-demo") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 24, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.bgDeep, border: `0.5px solid rgba(255,183,77,0.25)`,
        borderRadius: 10, overflow: "hidden", marginBottom: 14,
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "8px 14px", background: B.bgMid,
          borderBottom: `0.5px solid ${B.border}`,
        }}>
          {["#FF6058","#FFBC2E","#28CA42"].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: B.amber, marginRight: 8 }}>skill: {slide.skillName}</span>
        </div>
        <div style={{ padding: "16px 20px" }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: B.muted, marginBottom: 14, lineHeight: 1.6,
          }}>{slide.description}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {slide.instructions.map((line, i) => (
              <div key={i} style={{
                fontFamily: "'DM Mono', monospace", fontSize: 12,
                color: B.silver, lineHeight: 1.7,
                display: "flex", gap: 8,
              }}>
                <span style={{ color: B.amber, flexShrink: 0 }}>→</span>{line}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{
        background: "rgba(255,183,77,0.06)",
        border: `0.5px solid rgba(255,183,77,0.25)`,
        borderRadius: 8, padding: "12px 16px",
        fontFamily: "'DM Mono', monospace", fontSize: 12,
        color: B.amber, marginBottom: 10,
      }}>{slide.prompt}</div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(255,183,77,0.2)`,
        borderRadius: 8, padding: "10px 16px",
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.amber, textAlign: "center",
      }}>{slide.note}</div>
    </div>
  );

  if (slide.type === "dont-list") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 10,
            background: "rgba(255,183,77,0.05)",
            border: "0.5px solid rgba(255,183,77,0.18)",
            borderRadius: 8, padding: "10px 14px",
          }}>
            <span style={{ color: B.amber, fontSize: 14, flexShrink: 0 }}>✗</span>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 14, color: B.silver, lineHeight: 1.4 }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(200,146,42,0.25)`,
        borderRadius: 8, padding: "12px 16px",
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 14, color: B.mustardL, textAlign: "center",
      }}>{slide.footer}</div>
    </div>
  );

  if (slide.type === "hierarchy") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {slide.steps.map((step, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 8, padding: "12px 16px",
          }}>
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: step.color, minWidth: 24,
            }}>{step.num}</span>
            <span style={{
              fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
              fontSize: 16, color: step.color, minWidth: 100,
            }}>{step.label}</span>
            <span style={{
              fontFamily: "'Heebo', sans-serif", fontSize: 13,
              color: B.muted,
            }}>{step.desc}</span>
          </div>
        ))}
      </div>
      <div style={{
        background: B.bgDeep, border: `0.5px solid ${B.border}`,
        borderRadius: 8, padding: "12px 16px", marginBottom: 10,
      }}>
        {slide.example.map((line, i) => (
          <div key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            color: B.silver, lineHeight: 1.8,
          }}>{line}</div>
        ))}
      </div>
      <div style={{
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.muted, textAlign: "center",
      }}>{slide.note}</div>
    </div>
  );

  if (slide.type === "exercise") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 24, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.mustard,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
          }}>שאלות</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {slide.questions.map((q, i) => (
              <div key={i} style={{
                display: "flex", gap: 8, alignItems: "flex-start",
                background: B.surface, border: `0.5px solid ${B.border}`,
                borderRadius: 6, padding: "10px 12px",
                fontFamily: "'Heebo', sans-serif", fontSize: 13,
                color: B.silver, lineHeight: 1.4,
              }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 9,
                  color: B.mustard, flexShrink: 0, marginTop: 3,
                }}>{i + 1}.</span>
                {q}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.muted,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10,
          }}>דוגמאות</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {slide.examples.map((ex, i) => (
              <span key={i} style={{
                fontFamily: "'Heebo', sans-serif", fontSize: 12,
                color: B.silver, background: B.surface,
                border: `0.5px solid ${B.border}`,
                borderRadius: 6, padding: "6px 12px",
              }}>{ex}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (slide.type === "gifts") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 26, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.02em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {slide.gifts.map((gift, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: "rgba(0,212,170,0.06)",
            border: "0.5px solid rgba(0,212,170,0.18)",
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: B.teal, minWidth: 20, textAlign: "center",
            }}>0{i + 1}</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 15, color: B.silver }}>📄 {gift}</span>
          </div>
        ))}
      </div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(0,212,170,0.2)`,
        borderRadius: 8, padding: "10px 16px",
        fontFamily: "'Heebo', sans-serif", fontSize: 13,
        color: B.teal, textAlign: "center",
      }}>{slide.note}</div>
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
          fontSize: 22, color: B.white, lineHeight: 1.35,
          letterSpacing: "-0.02em",
        }}>{slide.quote}</div>
      </div>
      <div style={{
        fontFamily: "'Heebo', sans-serif", fontSize: 15,
        color: B.silver,
      }}>{slide.cta}</div>
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

export default function PromptProjectSkillPresentation() {
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
