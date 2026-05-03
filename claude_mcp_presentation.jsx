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
    title: "MCP בקלוד",
    subtitle: "איך להפוך את קלוד לסוכן חכם",
    badge: "סדנה · 3 שעות",
  },
  // ── 02 ──────────────────────────────────────────
  {
    id: 2, section: "פתיחה", type: "bullets",
    title: "מה נלמד היום",
    items: [
      "מה זה MCP ולמה זה משנה את כל המשחק",
      "סוגי קונקטורים",
      "אוטומציות עסקיות אמיתיות",
      "איך לבנות קונקטור משלך",
      "איך לחשוב כמו מי שמפעיל סוכן",
    ],
  },
  // ── 03 ──────────────────────────────────────────
  {
    id: 3, section: "הבעיה", type: "problem",
    title: "הבעיה",
    items: [
      "הרבה כלים",
      "הרבה טאבים",
      "הרבה עבודה ידנית",
      "אין רצף בין פעולות",
    ],
  },
  // ── 04 ──────────────────────────────────────────
  {
    id: 4, section: "הבעיה", type: "statement",
    label: "הפתרון",
    lines: ["סוכן אחד", "שמחובר לכל הכלים", "ומבצע משימות מקצה לקצה"],
    accent: 0,
  },
  // ── 05 ──────────────────────────────────────────
  {
    id: 5, section: "מה זה MCP", type: "concept",
    badge: "Model Context Protocol",
    title: "מה זה MCP",
    body: "שכבת חיבור בין קלוד לבין שירותים חיצוניים",
  },
  // ── 06 ──────────────────────────────────────────
  {
    id: 6, section: "מה זה MCP", type: "bullets",
    title: "מה MCP מאפשר",
    items: [
      "קריאה וכתיבה למערכות",
      "ביצוע פעולות אמיתיות",
      "עבודה עם דאטה בזמן אמת",
      "בניית אוטומציות מורכבות",
    ],
  },
  // ── 07 ──────────────────────────────────────────
  {
    id: 7, section: "מה זה MCP", type: "flow",
    title: "איך זה עובד בפועל",
    steps: [
      { num: "01", label: "קלוד מזהה כוונה" },
      { num: "02", label: "בוחר כלי" },
      { num: "03", label: "מפעיל קונקטור" },
      { num: "04", label: "מחזיר תוצאה" },
    ],
  },
  // ── 08 ──────────────────────────────────────────
  {
    id: 8, section: "מה זה MCP", type: "mindshift",
    title: "שינוי תפיסה",
    before: "שואל את קלוד",
    after: "מפעיל סוכן שעובד בשבילי",
  },
  // ── 09 ──────────────────────────────────────────
  {
    id: 9, section: "מה זה MCP", type: "toc",
    title: "מבנה הסדנה",
    items: [
      { num: "01", label: "קונקטורים מובנים" },
      { num: "02", label: "קונקטורים בענן" },
      { num: "03", label: "קונקטורים מקומיים" },
      { num: "04", label: "בניית קונקטור" },
    ],
  },
  // ── 10 ──────────────────────────────────────────
  {
    id: 10, section: "מה זה MCP", type: "principle",
    text: "כל קונקטור = יכולת פעולה",
  },
  // ── 11 ──────────────────────────────────────────
  {
    id: 11, section: "קונקטורים מובנים", type: "section-header",
    num: "01",
    title: "קונקטורים מובנים",
  },
  // ── 12 ──────────────────────────────────────────
  {
    id: 12, section: "קונקטורים מובנים", type: "concept",
    badge: "Built-in Connectors",
    title: "מה זה קונקטורים מובנים",
    body: "קונקטורים שמגיעים עם קלוד — ללא התקנה",
  },
  // ── 13 ──────────────────────────────────────────
  {
    id: 13, section: "קונקטורים מובנים", type: "examples",
    title: "דוגמאות",
    items: [
      { icon: "📁", label: "Google Drive" },
      { icon: "✉️", label: "Gmail" },
      { icon: "📅", label: "Google Calendar" },
    ],
  },
  // ── 14 ──────────────────────────────────────────
  {
    id: 14, section: "קונקטורים מובנים", type: "pros",
    title: "יתרונות",
    items: ["קל להתחיל", "יציב", "אין תחזוקה"],
  },
  // ── 15 ──────────────────────────────────────────
  {
    id: 15, section: "קונקטורים מובנים", type: "callout",
    label: "חיסרון",
    text: "מוגבל למה שהכלי מאפשר",
    color: "amber",
  },
  // ── 16 ──────────────────────────────────────────
  {
    id: 16, section: "קונקטורים מובנים", type: "demo-header",
    label: "דמו עסקי",
    title: "ניהול לידים עם Gmail",
  },
  // ── 17 ──────────────────────────────────────────
  {
    id: 17, section: "קונקטורים מובנים", type: "scenario",
    title: "תרחיש",
    items: ["מגיעים מיילים מלקוחות", "צריך למיין", "צריך להגיב", "צריך לעקוב"],
  },
  // ── 18 ──────────────────────────────────────────
  {
    id: 18, section: "קונקטורים מובנים", type: "agent",
    title: "מה הסוכן עושה",
    steps: ["סורק מיילים", "מזהה לידים", "מסכם", "מציע תגובה"],
  },
  // ── 19 ──────────────────────────────────────────
  {
    id: 19, section: "קונקטורים מובנים", type: "prompt",
    title: "דוגמא לפרומפט",
    lines: [
      "בדוק את כל המיילים מהיום",
      "זהה פניות מכירה",
      "סכם לי כל פנייה",
      "והצע תשובה",
    ],
  },
  // ── 20 ──────────────────────────────────────────
  {
    id: 20, section: "קונקטורים מובנים", type: "upgrade",
    label: "שדרוג",
    text: "שליחת תשובות אוטומטיות",
  },
  // ── 21 ──────────────────────────────────────────
  {
    id: 21, section: "קונקטורים מובנים", type: "upgrade-bullets",
    label: "שדרוג נוסף",
    title: "תיוג מיילים לפי סטטוס",
    items: ["חדש", "בטיפול", "נסגר"],
  },
  // ── 22 ──────────────────────────────────────────
  {
    id: 22, section: "קונקטורים מובנים", type: "takeaway",
    text: "גם בלי קוד — אפשר להתחיל לבנות סוכן",
  },
  // ── 23 ──────────────────────────────────────────
  {
    id: 23, section: "קונקטורים בענן", type: "section-header",
    num: "02",
    title: "קונקטורים בענן",
  },
  // ── 24 ──────────────────────────────────────────
  {
    id: 24, section: "קונקטורים בענן", type: "concept",
    badge: "Cloud MCP Servers",
    title: "מה זה",
    body: "שרת MCP חיצוני שמתחבר דרך URL",
  },
  // ── 25 ──────────────────────────────────────────
  {
    id: 25, section: "קונקטורים בענן", type: "pros",
    title: "יתרונות",
    items: ["גישה ליותר שירותים", "אפשרויות מתקדמות", "סקייל"],
  },
  // ── 26 ──────────────────────────────────────────
  {
    id: 26, section: "קונקטורים בענן", type: "cons",
    title: "חסרונות",
    items: ["תלות בשירות חיצוני", "לפעמים דורש הגדרה"],
  },
  // ── 27 ──────────────────────────────────────────
  {
    id: 27, section: "קונקטורים בענן", type: "callout",
    label: "שימוש מרכזי",
    text: "Google Drive + Docs",
    color: "teal",
  },
  // ── 28 ──────────────────────────────────────────
  {
    id: 28, section: "קונקטורים בענן", type: "demo-header",
    label: "דמו עסקי",
    title: "יצירת תוכן אוטומטי",
  },
  // ── 29 ──────────────────────────────────────────
  {
    id: 29, section: "קונקטורים בענן", type: "scenario",
    title: "תרחיש",
    items: ["צריך לייצר פוסטים", "לשמור אותם", "לעבוד בצוות"],
  },
  // ── 30 ──────────────────────────────────────────
  {
    id: 30, section: "קונקטורים בענן", type: "agent",
    title: "מה הסוכן עושה",
    steps: ["מייצר תוכן", "יוצר Google Doc", "שומר בתיקיה", "משתף"],
  },
  // ── 31 ──────────────────────────────────────────
  {
    id: 31, section: "קונקטורים בענן", type: "prompt",
    title: "פרומפט",
    lines: [
      "צור 5 פוסטים לפייסבוק",
      "שמור כל פוסט כקובץ בגוגל דרייב",
      "בתיקיית שיווק",
    ],
  },
  // ── 32 ──────────────────────────────────────────
  {
    id: 32, section: "קונקטורים בענן", type: "upgrade-bullets",
    label: "שדרוג",
    title: "יכולות נוספות",
    items: ["יצירת תיקיות לפי נושא", "עבודה לפי תבניות"],
  },
  // ── 33 ──────────────────────────────────────────
  {
    id: 33, section: "קונקטורים בענן", type: "callout",
    label: "שימוש נוסף",
    text: "Google Calendar",
    color: "teal",
  },
  // ── 34 ──────────────────────────────────────────
  {
    id: 34, section: "קונקטורים בענן", type: "demo-header",
    label: "דמו",
    title: "ניהול פגישות",
  },
  // ── 35 ──────────────────────────────────────────
  {
    id: 35, section: "קונקטורים בענן", type: "scenario",
    title: "תרחיש",
    items: ["קביעת פגישות", "תיאום מול לקוחות", "מעקב"],
  },
  // ── 36 ──────────────────────────────────────────
  {
    id: 36, section: "קונקטורים בענן", type: "agent",
    title: "מה הסוכן עושה",
    steps: ["בודק יומן", "מציע זמנים", "קובע פגישה", "שולח מייל"],
  },
  // ── 37 ──────────────────────────────────────────
  {
    id: 37, section: "קונקטורים בענן", type: "takeaway",
    text: "פה מתחילה אוטומציה אמיתית",
  },
  // ── 38 ──────────────────────────────────────────
  {
    id: 38, section: "קונקטורים מקומיים", type: "section-header",
    num: "03",
    title: "קונקטורים מקומיים",
  },
  // ── 39 ──────────────────────────────────────────
  {
    id: 39, section: "קונקטורים מקומיים", type: "concept",
    badge: "Local MCP Servers",
    title: "מה זה",
    body: "שרת MCP שרץ על המחשב שלך",
  },
  // ── 40 ──────────────────────────────────────────
  {
    id: 40, section: "קונקטורים מקומיים", type: "bullets",
    title: "מתי משתמשים",
    items: ["קבצים מקומיים", "דאטה רגיש", "מערכות פנימיות"],
  },
  // ── 41 ──────────────────────────────────────────
  {
    id: 41, section: "קונקטורים מקומיים", type: "pros",
    title: "יתרונות",
    items: ["שליטה מלאה", "פרטיות", "התאמה אישית"],
  },
  // ── 42 ──────────────────────────────────────────
  {
    id: 42, section: "קונקטורים מקומיים", type: "cons",
    title: "חסרונות",
    items: ["התקנה", "תחזוקה"],
  },
  // ── 43 ──────────────────────────────────────────
  {
    id: 43, section: "קונקטורים מקומיים", type: "demo-header",
    label: "דמו עסקי",
    title: "עבודה עם קבצי אקסל מקומיים",
  },
  // ── 44 ──────────────────────────────────────────
  {
    id: 44, section: "קונקטורים מקומיים", type: "scenario",
    title: "תרחיש",
    items: ["יש רשימת לקוחות", "צריך ניתוח", "צריך הפקת תובנות"],
  },
  // ── 45 ──────────────────────────────────────────
  {
    id: 45, section: "קונקטורים מקומיים", type: "agent",
    title: "מה הסוכן עושה",
    steps: ["קורא קובץ", "מנתח נתונים", "מוציא דוח"],
  },
  // ── 46 ──────────────────────────────────────────
  {
    id: 46, section: "קונקטורים מקומיים", type: "upgrade",
    label: "שדרוג",
    text: "שמירה חזרה ל-Drive",
  },
  // ── 47 ──────────────────────────────────────────
  {
    id: 47, section: "קונקטורים מקומיים", type: "takeaway",
    text: "זה כבר כלי BI אישי",
  },
  // ── 48 ──────────────────────────────────────────
  {
    id: 48, section: "בניית קונקטור", type: "section-header",
    num: "04",
    title: "בניית קונקטור",
  },
  // ── 49 ──────────────────────────────────────────
  {
    id: 49, section: "בניית קונקטור", type: "bullets",
    title: "למה לבנות",
    items: ["שליטה מלאה", "התאמה לעסק", "יתרון תחרותי"],
  },
  // ── 50 ──────────────────────────────────────────
  {
    id: 50, section: "בניית קונקטור", type: "bullets",
    title: "עקרונות חשובים",
    items: [
      "כל קונקטור = פעולה ברורה",
      "תיאור מדויק",
      "קלטים מוגדרים",
    ],
  },
  // ── 51 ──────────────────────────────────────────
  {
    id: 51, section: "בניית קונקטור", type: "code-example",
    title: "דוגמה",
    name: "create_lead",
    desc: "יוצר ליד במערכת",
  },
  // ── 52 ──────────────────────────────────────────
  {
    id: 52, section: "בניית קונקטור", type: "anatomy",
    title: "מבנה קונקטור",
    parts: [
      { label: "שם", example: "create_lead" },
      { label: "תיאור", example: "יוצר ליד חדש במערכת ה-CRM" },
      { label: "פרמטרים", example: "name, email, source" },
      { label: "פעולה", example: "POST /api/leads" },
    ],
  },
  // ── 53 ──────────────────────────────────────────
  {
    id: 53, section: "בניית קונקטור", type: "demo-header",
    label: "דמו עסקי",
    title: "חיבור בין Gmail ל-CRM",
  },
  // ── 54 ──────────────────────────────────────────
  {
    id: 54, section: "בניית קונקטור", type: "scenario",
    title: "תרחיש",
    items: ["מייל חדש", "הפיכה לליד", "שמירה ב-CRM"],
  },
  // ── 55 ──────────────────────────────────────────
  {
    id: 55, section: "בניית קונקטור", type: "agent",
    title: "מה הסוכן עושה",
    steps: ["קורא מייל", "שולף פרטים", "מפעיל קונקטור"],
  },
  // ── 56 ──────────────────────────────────────────
  {
    id: 56, section: "בניית קונקטור", type: "arch",
    title: "ארכיטקטורה מומלצת",
    subtitle: "שרת MCP מרוחק",
    layers: [
      { label: "קלוד", color: B.mustard },
      { label: "MCP Server (Remote)", color: B.teal },
      { label: "API / שירות חיצוני", color: B.silver },
    ],
  },
  // ── 57 ──────────────────────────────────────────
  {
    id: 57, section: "בניית קונקטור", type: "bullets",
    title: "למה שרת מרוחק",
    items: ["אין התקנה", "עובד מכל מקום", "קל לשתף"],
  },
  // ── 58 ──────────────────────────────────────────
  {
    id: 58, section: "בניית קונקטור", type: "callout",
    label: "אימות",
    text: "אם עובדים עם שירותים — צריך OAuth",
    color: "amber",
  },
  // ── 59 ──────────────────────────────────────────
  {
    id: 59, section: "בניית קונקטור", type: "principle",
    text: "אל תחשוב \"פיצ'רים\" — תחשוב \"פעולות עסקיות\"",
  },
  // ── 60 ──────────────────────────────────────────
  {
    id: 60, section: "בניית קונקטור", type: "examples",
    title: "דוגמאות לפעולות",
    items: [
      { icon: "👤", label: "יצירת לקוח" },
      { icon: "✉️", label: "שליחת מייל" },
      { icon: "📄", label: "יצירת מסמך" },
      { icon: "📅", label: "קביעת פגישה" },
    ],
  },
  // ── 61 ──────────────────────────────────────────
  {
    id: 61, section: "בניית קונקטור", type: "callout",
    label: "טעות נפוצה",
    text: "יותר מדי קונקטורים",
    color: "amber",
  },
  // ── 62 ──────────────────────────────────────────
  {
    id: 62, section: "בניית קונקטור", type: "principle",
    text: "מעט פעולות — מאוד מדויקות",
  },
  // ── 63 ──────────────────────────────────────────
  {
    id: 63, section: "יכולות מתקדמות", type: "callout",
    label: "שימוש מתקדם",
    text: "Search + Execute",
    color: "teal",
  },
  // ── 64 ──────────────────────────────────────────
  {
    id: 64, section: "יכולות מתקדמות", type: "concept",
    badge: "Advanced Pattern",
    title: "מה זה אומר",
    body: "הסוכן מחפש פעולה — ואז מבצע",
  },
  // ── 65 ──────────────────────────────────────────
  {
    id: 65, section: "יכולות מתקדמות", type: "callout",
    label: "מתי צריך",
    text: "מערכות גדולות",
    color: "teal",
  },
  // ── 66 ──────────────────────────────────────────
  {
    id: 66, section: "יכולות מתקדמות", type: "bullets",
    title: "יכולות מתקדמות",
    items: [
      "בקשת מידע מהמשתמש",
      "עבודה עם דאטה",
      "שרשרת פעולות",
    ],
  },
  // ── 67 ──────────────────────────────────────────
  {
    id: 67, section: "יכולות מתקדמות", type: "demo-header",
    label: "דוגמה מלאה",
    title: "אוטומציית שיווק",
  },
  // ── 68 ──────────────────────────────────────────
  {
    id: 68, section: "יכולות מתקדמות", type: "flow",
    title: "הזרימה",
    steps: [
      { num: "01", label: "קבלת מייל" },
      { num: "02", label: "יצירת תוכן" },
      { num: "03", label: "שמירה בדרייב" },
      { num: "04", label: "קביעת פוסט" },
    ],
  },
  // ── 69 ──────────────────────────────────────────
  {
    id: 69, section: "יכולות מתקדמות", type: "statement",
    label: "",
    lines: ["זה כבר סוכן"],
    accent: 0,
    large: true,
  },
  // ── 70 ──────────────────────────────────────────
  {
    id: 70, section: "חשיבה נכונה", type: "bullets",
    title: "איך לחשוב נכון",
    items: [
      "מה הפעולה העסקית",
      "איזה דאטה צריך",
      "איזה כלי מבצע",
    ],
  },
  // ── 71 ──────────────────────────────────────────
  {
    id: 71, section: "חשיבה נכונה", type: "exercise",
    title: "תרגיל",
    text: "בחר תהליך בעסק שלך ופרט אותו לפעולות",
  },
  // ── 72 ──────────────────────────────────────────
  {
    id: 72, section: "חשיבה נכונה", type: "examples",
    title: "דוגמאות לתהליכים",
    items: [
      { icon: "🎯", label: "גיוס לידים" },
      { icon: "💬", label: "שירות לקוחות" },
      { icon: "✍️", label: "יצירת תוכן" },
      { icon: "✅", label: "ניהול משימות" },
    ],
  },
  // ── 73 ──────────────────────────────────────────
  {
    id: 73, section: "חשיבה נכונה", type: "principle",
    text: "כל פעולה = קונקטור",
  },
  // ── 74 ──────────────────────────────────────────
  {
    id: 74, section: "חשיבה נכונה", type: "principle",
    text: "קונקטורים = סוכן",
  },
  // ── 75 ──────────────────────────────────────────
  {
    id: 75, section: "סיכום", type: "summary",
    title: "סיכום",
    items: [
      { label: "MCP", value: "שכבת כוח" },
      { label: "קונקטורים", value: "פעולות" },
      { label: "סוכן", value: "אוטומציה" },
    ],
  },
  // ── 76 ──────────────────────────────────────────
  {
    id: 76, section: "סיכום", type: "bullets",
    title: "מה הלאה",
    items: [
      "לבנות קונקטור ראשון",
      "לחבר לגוגל",
      "להריץ אוטומציה",
    ],
  },
  // ── 77 ──────────────────────────────────────────
  {
    id: 77, section: "סיכום", type: "closing",
    quote: "מי שמחבר מערכות — שולט בתהליך",
  },
];

const sections = [
  "פתיחה", "הבעיה", "מה זה MCP",
  "קונקטורים מובנים", "קונקטורים בענן",
  "קונקטורים מקומיים", "בניית קונקטור",
  "יכולות מתקדמות", "חשיבה נכונה", "סיכום",
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

  // COVER
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
        fontSize: 52, color: B.white, margin: "0 0 16px",
        letterSpacing: "-0.03em", lineHeight: 1.0,
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

  // SECTION HEADER
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

  // STATEMENT
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

  // CONCEPT
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
        color: B.silver, lineHeight: 1.6, maxWidth: 480,
      }}>{slide.body}</div>
    </div>
  );

  // BULLETS
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

  // PROBLEM
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

  // FLOW
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
              <div style={{
                width: 1, height: 20, background: B.border, flexShrink: 0,
              }} />
              <div style={{ fontFamily: "'Heebo', sans-serif", fontSize: 17, color: B.silver }}>
                {step.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // MINDSHIFT
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

  // TOC
  if (slide.type === "toc") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 12, padding: "22px 24px",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 24,
              color: B.mustardDim, fontWeight: 500, lineHeight: 1,
            }}>{item.num}</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 18, color: B.white }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // PRINCIPLE
  if (slide.type === "principle") return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div style={{
        background: B.mustardDim,
        border: `0.5px solid rgba(200,146,42,0.3)`,
        borderRight: `3px solid ${B.mustard}`,
        borderRadius: 12, padding: "32px 40px",
        textAlign: "center", width: "100%",
      }}>
        <div style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 30, color: B.white, lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}>{slide.text}</div>
      </div>
    </div>
  );

  // EXAMPLES (icon grid)
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

  // PROS
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

  // CONS
  if (slide.type === "cons") return (
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
            background: "rgba(255,183,77,0.06)",
            border: `0.5px solid rgba(255,183,77,0.2)`,
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{ color: B.amber, fontSize: 18, flexShrink: 0 }}>△</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 16, color: B.silver, lineHeight: 1.5 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // CALLOUT
  if (slide.type === "callout") {
    const accentMap = {
      teal:   { bg: "rgba(0,212,170,0.08)",   border: "rgba(0,212,170,0.25)",   color: B.teal,  labelColor: B.teal },
      amber:  { bg: "rgba(255,183,77,0.08)",   border: "rgba(255,183,77,0.25)",  color: B.amber, labelColor: B.amber },
      mustard:{ bg: "rgba(200,146,42,0.08)",   border: "rgba(200,146,42,0.3)",   color: B.mustard, labelColor: B.mustard },
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
            fontSize: 34, color: a.color,
            letterSpacing: "-0.02em",
          }}>{slide.text}</div>
        </div>
      </div>
    );
  }

  // DEMO HEADER
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

  // SCENARIO
  if (slide.type === "scenario") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "12px 18px",
            borderRight: `2px solid ${B.border}`,
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10,
              color: B.muted, width: 20, flexShrink: 0,
            }}>{String(i + 1).padStart(2, "0")}</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 17, color: B.silver }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // AGENT STEPS
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
              fontFamily: "'Heebo', sans-serif", fontSize: 14,
              color: B.silver, textAlign: "center", lineHeight: 1.4,
            }}>{step}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // PROMPT
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

  // UPGRADE
  if (slide.type === "upgrade") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16 }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: B.mustardL, background: B.mustardDim,
        border: `0.5px solid rgba(200,146,42,0.2)`,
        borderRadius: 100, padding: "4px 14px",
      }}>{slide.label}</div>
      <div style={{
        background: B.surface, border: `0.5px solid rgba(200,146,42,0.3)`,
        borderRadius: 14, padding: "28px 36px",
        textAlign: "center", width: "100%",
      }}>
        <div style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
          fontSize: 28, color: B.white, letterSpacing: "-0.01em",
        }}>{slide.text}</div>
      </div>
    </div>
  );

  // UPGRADE-BULLETS
  if (slide.type === "upgrade-bullets") return (
    <div>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: B.mustardL, background: B.mustardDim,
        border: `0.5px solid rgba(200,146,42,0.2)`,
        borderRadius: 100, padding: "4px 14px",
        display: "inline-block", marginBottom: 16,
      }}>{slide.label}</div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 20px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {slide.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 14,
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "14px 18px",
          }}>
            <div style={{ color: B.mustard, fontSize: 16, flexShrink: 0 }}>→</div>
            <span style={{ fontFamily: "'Heebo', sans-serif", fontSize: 16, color: B.silver }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // TAKEAWAY
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
          fontSize: 28, color: B.white, letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}>{slide.text}</div>
      </div>
    </div>
  );

  // CODE EXAMPLE
  if (slide.type === "code-example") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        background: B.bgDeep, border: `0.5px solid ${B.border}`,
        borderRadius: 12, overflow: "hidden",
      }}>
        <div style={{
          padding: "9px 14px", background: B.bgMid,
          borderBottom: `0.5px solid ${B.border}`,
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#27C93F" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: B.muted, marginRight: "auto" }}>connector.json</span>
        </div>
        <div style={{ padding: "20px 24px", direction: "ltr", textAlign: "left" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, lineHeight: 2 }}>
            <span style={{ color: B.muted }}>// </span><span style={{ color: B.silver }}>{slide.desc}</span><br/>
            <span style={{ color: "#4A4438" }}>name: </span>
            <span style={{ color: B.mustardL }}>"{slide.name}"</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ANATOMY
  if (slide.type === "anatomy") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 24px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {slide.parts.map((p, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRadius: 10, padding: "18px 20px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 9,
              color: B.mustard, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 8,
            }}>0{i + 1} — {p.label}</div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 13,
              color: B.teal,
            }}>{p.example}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ARCH
  if (slide.type === "arch") return (
    <div>
      <h2 style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
        fontSize: 28, color: B.white, margin: "0 0 8px",
        letterSpacing: "-0.01em",
      }}>{slide.title}</h2>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        color: B.teal, letterSpacing: "0.1em",
        textTransform: "uppercase", marginBottom: 24,
      }}>{slide.subtitle}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {slide.layers.map((l, i) => (
          <div key={i} style={{
            background: B.surface, border: `0.5px solid ${B.border}`,
            borderRight: `3px solid ${l.color}`,
            borderRadius: 10, padding: "18px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 17, color: B.white }}>{l.label}</span>
            {i < slide.layers.length - 1 && (
              <span style={{ color: B.muted, fontSize: 14 }}>↓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // EXERCISE
  if (slide.type === "exercise") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 20 }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: 10,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: B.teal, background: "rgba(0,212,170,0.08)",
        border: "0.5px solid rgba(0,212,170,0.2)",
        borderRadius: 100, padding: "4px 14px",
      }}>{slide.title}</div>
      <div style={{
        background: B.surface, border: `0.5px solid ${B.border}`,
        borderRadius: 14, padding: "36px 40px",
        textAlign: "center", width: "100%",
      }}>
        <div style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
          fontSize: 24, color: B.white, letterSpacing: "-0.01em",
          lineHeight: 1.5,
        }}>{slide.text}</div>
      </div>
    </div>
  );

  // SUMMARY
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

  // CLOSING
  if (slide.type === "closing") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
        fontSize: 36, color: B.white, lineHeight: 1.2,
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
export default function McpPresentation() {
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
        {/* Decorative orb */}
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
