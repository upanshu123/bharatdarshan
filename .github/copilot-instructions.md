# GitHub Copilot instructions

<!-- github-copilot-toolbox:mcp-skills-awareness-begin -->

### MCP & Skills awareness (GitHub Copilot Toolbox)

_Last synced: 2026-09-12T10:57:39.352Z._

- **Full report:** `.github/copilot-toolbox-mcp-skills-awareness.md` in this workspace (auto-overwritten on each scan). Use it as ground truth for configured servers and skill folders.
- **MCP:** For **live tools**, use **Copilot Chat → Agent** and **trust/start** the right servers in the MCP UI.
- **When the user’s task matches a server** (e.g. “open this Confluence page” and a **Confluence** / **Atlassian** MCP is listed), **prefer that server id** and plan on Agent + MCP for actions—not only file search.
- **Skills:** Folders below contain `SKILL.md`; attach or cite paths in chat when relevant.

#### Workspace MCP

- `c:\Users\Upanshu Gautam\OneDrive\Desktop\bharatdarshan\.vscode\mcp.json` _(workspace: bharatdarshan)_ — _file missing_

_No active workspace servers in mcp.json._

#### User MCP

- `C:\Users\Upanshu Gautam\AppData\Roaming\Code\User\mcp.json` — _file missing_

_No active user-scoped servers in mcp.json._

#### Project skills

_None found (or no workspace open)._

#### User skills

_None found._

<!-- github-copilot-toolbox:mcp-skills-awareness-end -->

---

## CRITICAL IMAGE & VISUAL ACCURACY RULES (ZERO MISMATCH POLICY)

### 1. LANDMARK-SPECIFIC HERO SHOTS ONLY
- For any destination or landmark, the primary image query MUST target the single most recognizable, iconic front-facing facade of THAT specific monument.
- Strictly FORBID generic queries (e.g., NEVER use "Jaipur fort", "Rajasthan heritage", "Indian temple", or generic city landscapes).
- If generating an image search term or Unsplash query, strictly format as:
  `"[Exact Monument Name] [City] iconic front facade landmark"`
  (Example: `"Hawa Mahal Jaipur iconic front facade"` — NOT `"Jaipur palace"`).

### 2. STRICT PROHIBITION ON MIXING SISTER MONUMENTS
- Do NOT swap or confuse nearby attractions within the same city (e.g., Amer Fort wall cannot be used for Hawa Mahal; Taj Mahal cannot use Agra Fort photos; Qutub Minar cannot use Red Fort photos).
- If the exact landmark photo cannot be verified with certainty, fallback strictly to an official high-resolution Wikimedia Commons URL for that exact monument title, never a random stock photo.

