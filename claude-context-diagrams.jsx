import { useState } from "react";

const diagrams = ["chat", "code", "cowork", "compare"];

const palette = {
  chat:    { accent: "#2563eb", light: "#eff6ff", border: "#bfdbfe", tag: "#1d4ed8" },
  code:    { accent: "#16a34a", light: "#f0fdf4", border: "#bbf7d0", tag: "#15803d" },
  cowork:  { accent: "#ea580c", light: "#fff7ed", border: "#fed7aa", tag: "#c2410c" },
  compare: { accent: "#7c3aed", light: "#faf5ff", border: "#ddd6fe", tag: "#6d28d9" },
};

const labels = { chat: "Claude Chat", code: "Claude Code", cowork: "Claude Cowork", compare: "Comparison" };

const base = {
  bg: "#f8f7f4",
  card: "#fff",
  border: "#e8e6e0",
  text: "#1a1a2e",
  muted: "#666",
  faint: "#999",
  subtle: "#f8f7f4",
  font: "'Segoe UI', Arial, sans-serif",
};

// ─── CHAT DIAGRAM ───────────────────────────────────────────────────────────
function ChatDiagram() {
  const p = palette.chat;
  const layers = [
    { label: "SYSTEM PROMPT", sub: "Project instructions · Injected every conversation", color: p.accent },
    { label: "PROJECT KNOWLEDGE FILES", sub: "Uploaded docs · Auto-injected · Always present", color: palette.compare.accent },
    { label: "MEMORIES (userMemories)", sub: "Auto-generated · Cloud-stored · Project-scoped", color: palette.code.accent },
    { label: "SKILLS (.md files)", sub: "Lazy-loaded on demand · Not auto-injected", color: base.muted },
    { label: "CONVERSATION HISTORY", sub: "Grows per session · Not cross-session", color: "#555" },
    { label: "UPLOADED FILES (per message)", sub: "Images/PDFs inline · Re-upload each session", color: "#777" },
  ];

  return (
    <div style={{ fontFamily: base.font, color: base.text, padding: "32px", minHeight: "500px" }}>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "3px", color: p.accent, textTransform: "uppercase", marginBottom: "6px" }}>Context Architecture</div>
        <div style={{ fontSize: "26px", fontWeight: "700", color: base.text }}>Claude Chat</div>
        <div style={{ fontSize: "12px", color: base.faint, marginTop: "4px" }}>cloud-first · session-scoped · project-isolated</div>
      </div>

      {/* Context Window */}
      <div style={{ position: "relative", border: `1px solid ${p.border}`, borderRadius: "12px", padding: "24px", background: p.light, marginBottom: "20px" }}>
        <div style={{ position: "absolute", top: "-10px", left: "20px", background: base.card, padding: "0 10px", fontSize: "10px", color: p.accent, letterSpacing: "3px", fontWeight: "600" }}>CONTEXT WINDOW</div>
        {layers.map((layer, i) => (
          <div key={i} style={{ marginBottom: "8px", width: ["100%","90%","82%","74%","100%","88%"][i] }}>
            <div style={{
              border: `1px solid ${layer.color}33`,
              borderRadius: "6px",
              padding: "10px 14px",
              background: base.card,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}>
              <div>
                <div style={{ fontSize: "10px", fontWeight: "700", color: layer.color, letterSpacing: "1.5px" }}>{layer.label}</div>
                <div style={{ fontSize: "11px", color: base.muted, marginTop: "2px" }}>{layer.sub}</div>
              </div>
              <div style={{ fontSize: "18px", color: layer.color, opacity: 0.4, letterSpacing: "-2px" }}>{"▓".repeat(i % 2 === 0 ? 5 : 4) + "░░"}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Update paths */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
        {[
          { title: "Auto Updated", items: ["Memories (background)", "Conversation history"], color: p.accent },
          { title: "You Update", items: ["Project instructions", "Knowledge files", "Memory edits"], color: palette.compare.accent },
          { title: "Per Session", items: ["File uploads", "Conversation history"], color: palette.code.accent },
        ].map((box, i) => (
          <div key={i} style={{ border: `1px solid ${box.color}33`, borderRadius: "8px", padding: "14px", background: base.card, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: "10px", color: box.color, letterSpacing: "1.5px", fontWeight: "600", marginBottom: "8px" }}>{box.title.toUpperCase()}</div>
            {box.items.map((item, j) => (
              <div key={j} style={{ fontSize: "12px", color: base.muted, marginBottom: "4px" }}>▸ {item}</div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "16px", padding: "10px 16px", border: `1px solid ${p.border}`, borderRadius: "8px", fontSize: "11px", color: base.muted, textAlign: "center", background: p.light }}>
        ⚠ Memory is <span style={{ color: p.accent, fontWeight: "600" }}>project-scoped</span> — general memories don't cross into projects · Sessions don't persist history
      </div>
    </div>
  );
}

// ─── CODE DIAGRAM ────────────────────────────────────────────────────────────
function CodeDiagram() {
  const p = palette.code;
  const files = [
    { indent: 0, icon: "🌐", file: "~/.claude/CLAUDE.md", label: "GLOBAL", desc: "User-level instructions across all projects", color: p.accent, load: "always" },
    { indent: 1, icon: "📁", file: "CLAUDE.md", label: "PROJECT ROOT", desc: "Project-wide instructions · Version controlled", color: palette.compare.accent, load: "always" },
    { indent: 2, icon: "📄", file: ".claude/rules/*.md", label: "RULES", desc: "Modular topic files · Can be path-scoped", color: palette.chat.accent, load: "conditional" },
    { indent: 2, icon: "🔧", file: ".claude/commands/*.md", label: "COMMANDS", desc: "Custom slash commands · On demand", color: base.muted, load: "on-demand" },
    { indent: 1, icon: "🧠", file: "auto-memory files", label: "AUTO MEMORY", desc: "Claude writes these itself from corrections", color: "#b45309", load: "always" },
  ];

  return (
    <div style={{ fontFamily: base.font, color: base.text, padding: "32px", minHeight: "500px" }}>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "3px", color: p.accent, textTransform: "uppercase", marginBottom: "6px" }}>Context Architecture</div>
        <div style={{ fontSize: "26px", fontWeight: "700", color: base.text }}>Claude Code</div>
        <div style={{ fontSize: "12px", color: base.faint, marginTop: "4px" }}>repo-first · filesystem-based · hierarchical</div>
      </div>

      {/* File hierarchy */}
      <div style={{ border: `1px solid ${p.border}`, borderRadius: "12px", padding: "24px", background: p.light, marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", color: p.accent, letterSpacing: "2px", fontWeight: "600", marginBottom: "14px" }}>MEMORY FILE HIERARCHY (load order: broadest → narrowest)</div>
        {files.map((item, i) => (
          <div key={i} style={{ marginBottom: "8px", paddingLeft: `${item.indent * 24}px` }}>
            <div style={{
              border: `1px solid ${item.color}33`,
              borderRadius: "6px",
              padding: "10px 14px",
              background: base.card,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}>
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", color: item.color, fontWeight: "600" }}>{item.file}</span>
                  <span style={{ fontSize: "9px", background: `${item.color}18`, color: item.color, padding: "1px 7px", borderRadius: "3px", letterSpacing: "1px", fontWeight: "600" }}>{item.label}</span>
                </div>
                <div style={{ fontSize: "11px", color: base.muted, marginTop: "2px" }}>{item.desc}</div>
              </div>
              <div style={{
                fontSize: "10px",
                fontWeight: "600",
                color: item.load === "always" ? p.accent : item.load === "conditional" ? "#b45309" : base.faint,
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
              }}>
                {item.load === "always" ? "● ALWAYS" : item.load === "conditional" ? "◐ COND." : "○ ON-DEMAND"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Path scoping */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ border: `1px solid ${p.border}`, borderRadius: "8px", padding: "14px", background: base.card }}>
          <div style={{ fontSize: "10px", color: p.accent, letterSpacing: "1.5px", fontWeight: "600", marginBottom: "6px" }}>PATH-SCOPED RULES</div>
          <div style={{ fontSize: "12px", color: base.muted, lineHeight: 1.5 }}>Rules only load when matching files are opened — saves tokens on irrelevant context</div>
          <div style={{ marginTop: "8px", fontSize: "11px", color: base.faint, fontFamily: "monospace" }}>paths: ["src/tests/**"]</div>
        </div>
        <div style={{ border: `1px solid ${palette.compare.border}`, borderRadius: "8px", padding: "14px", background: base.card }}>
          <div style={{ fontSize: "10px", color: palette.compare.accent, letterSpacing: "1.5px", fontWeight: "600", marginBottom: "6px" }}>AUTO MEMORY</div>
          <div style={{ fontSize: "12px", color: base.muted, lineHeight: 1.5 }}>Claude writes its own memory files from your corrections — no manual effort needed</div>
          <div style={{ marginTop: "8px", fontSize: "11px", color: base.faint }}>Available as of March 2026</div>
        </div>
      </div>

      <div style={{ marginTop: "14px", padding: "10px 16px", border: `1px solid ${p.border}`, borderRadius: "8px", fontSize: "11px", color: base.muted, textAlign: "center", background: p.light }}>
        ✓ Target <span style={{ color: p.accent, fontWeight: "600" }}>&lt;200 lines</span> per CLAUDE.md · Use imports (@path/to/file) to stay modular
      </div>
    </div>
  );
}

// ─── COWORK DIAGRAM ──────────────────────────────────────────────────────────
function CoworkDiagram() {
  const p = palette.cowork;

  return (
    <div style={{ fontFamily: base.font, color: base.text, padding: "32px", minHeight: "500px" }}>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "3px", color: p.accent, textTransform: "uppercase", marginBottom: "6px" }}>Context Architecture</div>
        <div style={{ fontSize: "26px", fontWeight: "700", color: base.text }}>Claude Cowork</div>
        <div style={{ fontSize: "12px", color: base.faint, marginTop: "4px" }}>desktop-first · local filesystem · project-scoped</div>
      </div>

      {/* Two columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "18px" }}>
        {/* Standalone */}
        <div style={{ border: `1px solid ${base.border}`, borderRadius: "12px", padding: "20px", background: base.subtle, opacity: 0.7 }}>
          <div style={{ fontSize: "10px", color: base.faint, letterSpacing: "2px", fontWeight: "600", marginBottom: "10px" }}>STANDALONE SESSION ✗</div>
          {["Global instructions", "Current folder access", "No memory persistence", "No cross-session context"].map((item, i) => (
            <div key={i} style={{ fontSize: "12px", color: i < 2 ? base.text : base.faint, marginBottom: "6px", padding: "7px 10px", border: `1px solid ${base.border}`, borderRadius: "5px", background: base.card }}>
              {i < 2 ? "✓" : "✗"} {item}
            </div>
          ))}
        </div>

        {/* Project */}
        <div style={{ border: `1px solid ${p.border}`, borderRadius: "12px", padding: "20px", background: p.light }}>
          <div style={{ fontSize: "10px", color: p.accent, letterSpacing: "2px", fontWeight: "600", marginBottom: "10px" }}>COWORK PROJECT ✓</div>
          {[
            { text: "Global instructions", color: p.accent },
            { text: "Folder instructions (auto-update)", color: p.accent },
            { text: "memory.md (local file)", color: palette.compare.accent },
            { text: "Linked chat project", color: "#b45309" },
            { text: "Local folder context", color: palette.chat.accent },
            { text: "Plugins & connectors", color: base.muted },
          ].map((item, i) => (
            <div key={i} style={{ fontSize: "12px", color: item.color, marginBottom: "5px", padding: "7px 10px", border: `1px solid ${item.color}33`, borderRadius: "5px", background: base.card, fontWeight: "500" }}>
              ✓ {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* memory.md highlight */}
      <div style={{ border: `1px solid ${palette.compare.border}`, borderRadius: "10px", padding: "16px", background: palette.compare.light, marginBottom: "14px" }}>
        <div style={{ fontSize: "10px", color: palette.compare.accent, letterSpacing: "2px", fontWeight: "600", marginBottom: "10px" }}>memory.md — THE KEY FILE</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { label: "Location", value: "Inside your project folder on disk" },
            { label: "Format", value: "Plain markdown — human readable" },
            { label: "Update", value: "Claude writes it · You can edit it directly" },
          ].map((item, i) => (
            <div key={i} style={{ fontSize: "12px" }}>
              <div style={{ color: palette.compare.accent, marginBottom: "3px", fontSize: "10px", letterSpacing: "1px", fontWeight: "600" }}>{item.label.toUpperCase()}</div>
              <div style={{ color: base.muted }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ border: `1px solid ${p.border}`, borderRadius: "8px", padding: "14px", background: base.card }}>
          <div style={{ fontSize: "10px", color: p.accent, letterSpacing: "1.5px", fontWeight: "600", marginBottom: "6px" }}>SCHEDULED TASKS</div>
          <div style={{ fontSize: "12px", color: base.muted }}>Recurring tasks run automatically while desktop app is open</div>
        </div>
        <div style={{ border: `1px solid #fde68a`, borderRadius: "8px", padding: "14px", background: "#fffbeb" }}>
          <div style={{ fontSize: "10px", color: "#b45309", letterSpacing: "1.5px", fontWeight: "600", marginBottom: "6px" }}>⚠ ISOLATION</div>
          <div style={{ fontSize: "12px", color: base.muted }}>Memory scoped per project — doesn't cross to other projects or chat</div>
        </div>
      </div>
    </div>
  );
}

// ─── COMPARE DIAGRAM ─────────────────────────────────────────────────────────
function CompareDiagram() {
  const p = palette.compare;
  const rows = [
    { aspect: "Instructions", chat: "Project instructions\n(cloud UI)", code: "CLAUDE.md\n(local file, git)", cowork: "Global + folder\n(desktop settings)" },
    { aspect: "Memory", chat: "userMemories\n(cloud, auto-gen)", code: "Auto-memory .md files\n(Claude writes)", cowork: "memory.md\n(local file, editable)" },
    { aspect: "Knowledge", chat: "Uploaded files\n(cloud, project-wide)", code: ".claude/rules/*.md\n(path-scopable)", cowork: "Local folder +\nlinked chat project" },
    { aspect: "Persistence", chat: "Cross-session\n(within project)", code: "Cross-session\n(always)", cowork: "Cross-session\n(within project only)" },
    { aspect: "Loading", chat: "Auto-injected\n(always present)", code: "Hierarchy load\n(global→project)", cowork: "Lazy + auto\n(on task start)" },
    { aspect: "Where lives", chat: "Anthropic cloud ☁", code: "Your repo / filesystem 💻", cowork: "Your desktop 🖥" },
    { aspect: "Version ctrl", chat: "No", code: "Yes (git)", cowork: "No (local files)" },
    { aspect: "Token mgmt", chat: "Keep files short,\nprune memories", code: "<200 lines, path-scope\nrules to save tokens", cowork: "Projects > standalone\nfor context carry" },
  ];

  return (
    <div style={{ fontFamily: base.font, color: base.text, padding: "32px", minHeight: "500px" }}>
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "3px", color: p.accent, textTransform: "uppercase", marginBottom: "6px" }}>Side by Side</div>
        <div style={{ fontSize: "26px", fontWeight: "700", color: base.text }}>Context Systems Compared</div>
        <div style={{ fontSize: "12px", color: base.faint, marginTop: "4px" }}>chat · code · cowork</div>
      </div>

      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "130px 1fr 1fr 1fr", gap: "3px", marginBottom: "3px" }}>
        {["", "CHAT", "CODE", "COWORK"].map((h, i) => {
          const col = [palette.chat, palette.code, palette.cowork][i - 1];
          return (
            <div key={i} style={{
              padding: "10px 14px",
              fontSize: "10px",
              letterSpacing: "2px",
              fontWeight: "700",
              color: i === 0 ? base.faint : col.accent,
              background: i === 0 ? "transparent" : col.light,
              borderRadius: "6px",
              textAlign: i === 0 ? "left" : "center",
              border: i === 0 ? "none" : `1px solid ${col.border}`,
            }}>
              {h}
            </div>
          );
        })}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "130px 1fr 1fr 1fr", gap: "3px", marginBottom: "3px" }}>
          <div style={{ padding: "11px 14px", fontSize: "10px", color: p.accent, letterSpacing: "1.5px", fontWeight: "600", display: "flex", alignItems: "center", borderRadius: "5px", background: p.light, border: `1px solid ${p.border}` }}>
            {row.aspect.toUpperCase()}
          </div>
          {[row.chat, row.code, row.cowork].map((cell, j) => {
            const col = [palette.chat, palette.code, palette.cowork][j];
            return (
              <div key={j} style={{
                padding: "11px 14px",
                fontSize: "11px",
                color: base.muted,
                background: i % 2 === 0 ? base.card : base.subtle,
                borderRadius: "5px",
                border: `1px solid ${base.border}`,
                lineHeight: "1.6",
                whiteSpace: "pre-line",
                textAlign: "center",
              }}>
                {cell}
              </div>
            );
          })}
        </div>
      ))}

      {/* Summary pills */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginTop: "18px" }}>
        {[
          { label: "Chat", desc: "Cloud-native. Best for recurring work with stable context. Memory auto-grows.", col: palette.chat },
          { label: "Code", desc: "Repo-native. Most flexible. Path-scoped rules = most token-efficient.", col: palette.code },
          { label: "Cowork", desc: "Desktop-native. Local files = human-readable + directly editable memory.", col: palette.cowork },
        ].map((pill, i) => (
          <div key={i} style={{ border: `1px solid ${pill.col.border}`, borderRadius: "8px", padding: "14px", background: pill.col.light, textAlign: "center" }}>
            <div style={{ fontSize: "10px", color: pill.col.accent, letterSpacing: "1.5px", fontWeight: "600", marginBottom: "6px" }}>{pill.label.toUpperCase()}</div>
            <div style={{ fontSize: "11px", color: base.muted, lineHeight: "1.6" }}>{pill.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("chat");
  const p = palette[active];

  const DiagramMap = { chat: ChatDiagram, code: CodeDiagram, cowork: CoworkDiagram, compare: CompareDiagram };
  const ActiveDiagram = DiagramMap[active];

  return (
    <div style={{
      minHeight: "100vh",
      background: base.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "32px 16px",
      fontFamily: base.font,
    }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: base.faint, marginBottom: "4px" }}>ANTHROPIC</div>
        <div style={{ fontSize: "14px", color: base.muted, letterSpacing: "2px" }}>CONTEXT SYSTEM DIAGRAMS</div>
      </div>

      {/* Tab nav */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "28px", background: base.card, padding: "6px", borderRadius: "10px", border: `1px solid ${base.border}` }}>
        {diagrams.map((d) => {
          const dp = palette[d];
          const isActive = active === d;
          return (
            <button
              key={d}
              onClick={() => setActive(d)}
              style={{
                padding: "9px 18px",
                fontSize: "11px",
                letterSpacing: "1px",
                fontFamily: base.font,
                fontWeight: "600",
                background: isActive ? dp.light : "transparent",
                color: isActive ? dp.accent : base.muted,
                border: isActive ? `1px solid ${dp.border}` : "1px solid transparent",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {labels[d]}
            </button>
          );
        })}
      </div>

      {/* Diagram card */}
      <div style={{
        width: "100%",
        maxWidth: "780px",
        background: base.card,
        border: `1px solid ${p.border}`,
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        overflow: "hidden",
      }}>
        {/* Top bar */}
        <div style={{ padding: "10px 20px", background: p.light, borderBottom: `1px solid ${p.border}`, display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: base.border }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: base.border }} />
          <div style={{ width: 9, height: 9, borderRadius: "50%", background: base.border }} />
          <div style={{ flex: 1, textAlign: "center", fontSize: "10px", color: base.faint, letterSpacing: "2px" }}>
            claude-context / {active}.diagram
          </div>
        </div>

        <ActiveDiagram />
      </div>

      <div style={{ marginTop: "20px", fontSize: "10px", color: base.border, letterSpacing: "2px" }}>
        CLAUDE SONNET 4.6 · 2026
      </div>
    </div>
  );
}
