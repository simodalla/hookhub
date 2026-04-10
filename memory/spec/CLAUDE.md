# hookhub — MVP Spec

> This file is both the project spec **and** Claude Code memory. It is auto-loaded when Claude works in or under `spec/`. Keep it accurate as the product evolves.

## What is hookhub?

**hookhub** is a directory website for cool, open-source **Claude Code hooks**. Hooks are authored by the community and live in GitHub repositories; hookhub is the discovery layer on top of them. Visitors browse a grid of hooks and click through to the source repo.

## What are Claude Code hooks?

Claude Code hooks are user-defined shell commands configured in `settings.json` that fire at specific lifecycle events around Claude Code's agentic loop. They enable:

- **Security** — block dangerous bash commands before they execute
- **Automation** — auto-stage git changes, auto-format edited files
- **Notifications** — post to Slack, desktop, text-to-speech
- **Validation** — pre-flight checks, permission auditing
- **Context injection** — modify prompts or tool inputs

Common events include `PreToolUse`, `PostToolUse`, `UserPromptSubmit`, `Stop`, `SessionStart`, `SessionEnd`, `Notification`, `PreCompact`. Hooks are typically distributed as shell or Python scripts inside a GitHub repo with a matching `settings.json` snippet.

## MVP scope

### Goals

1. A single public page that lists Claude hooks in a **responsive grid**.
2. Each card shows: **name**, **category**, **description**, **repo link**.
3. Data is **hardcoded at build time** from a local TypeScript file — no CMS, no GitHub API, no database.
4. Fully statically renderable via React Server Components.
5. Accessible (keyboard-reachable, aria-labeled) and responsive (mobile → desktop).

### Non-goals (MVP)

- Search, filtering, sorting, pagination
- Hook detail route (`/hooks/[slug]`)
- User submissions, auth, voting, favorites
- Fetching from GitHub API or parsing READMEs
- Dark-mode toggle (system preference only, via existing `globals.css`)
- Analytics, SEO beyond default metadata

## Data model

Single flat type.

```ts
type Hook = {
  id: string           // stable slug, used as React key
  name: string         // display name, e.g. "bash-command-validator"
  category: HookCategory
  description: string  // 1–2 sentences, plain text
  repoUrl: string      // absolute GitHub URL
}

type HookCategory =
  | "Security"
  | "Git"
  | "Notifications"
  | "Automation"
  | "Validation"
  | "Dev Tools"
  | "Session"
  | "Context"
```

Fixed union for `category` — compile-time safety, consistent future styling (e.g. per-category badge colors). Add new values here when needed; don't reach for free-form strings.

## Seed data

Ship the MVP with these 6 real hooks in `data/hooks.ts` so the grid is never empty:

| name | category | description | repo |
|---|---|---|---|
| bash-command-validator | Validation | Official Anthropic example that validates shell commands before Claude runs them. | `github.com/anthropics/claude-code/tree/main/examples/hooks` |
| claude-code-hooks-mastery | Automation | Comprehensive reference suite covering every lifecycle event with runnable examples. | `github.com/disler/claude-code-hooks-mastery` |
| dangerous-command-blocker | Security | PreToolUse hook that blocks destructive bash commands before they reach the shell. | `github.com/karanb192/claude-code-hooks` |
| slack-notifier | Notifications | Posts Claude's Notification events to a Slack channel via webhook. | `github.com/karanb192/claude-code-hooks` |
| auto-stage-git | Git | Automatically `git add`s files Claude edits after a successful PostToolUse. | `github.com/karanb192/claude-code-hooks` |
| awesome-claude-code | Dev Tools | Curated index of community hooks, subagents, and workflows. | `github.com/hesreallyhim/awesome-claude-code` |

## UI

Single route: `/` (replaces the Next.js starter in `app/page.tsx`).

### Layout

- **Header** — `hookhub` wordmark + one-line tagline: *"A directory of cool open-source Claude Code hooks."*
- **Main** — responsive grid of hook cards
  - `< sm` → 1 column
  - `sm` → 2 columns
  - `lg` → 3 columns
- **Footer** — small credit line + link to the hookhub repo

### Hook card

- Rounded border, subtle hover lift, comfortable padding
- Top row: hook **name** (bold) + **category** pill badge (right-aligned)
- Body: **description**, clamped to 2 lines
- The **entire card is a link** to `repoUrl`
  - `target="_blank"`, `rel="noopener noreferrer"`
  - `aria-label="View {name} on GitHub"`
  - Keyboard-focusable by default; visible focus ring

## File structure

```
app/
  page.tsx                 # server component, renders <HookGrid hooks={hooks} />
  layout.tsx               # update metadata title/description to "hookhub"
  globals.css              # existing Tailwind v4 entry, unchanged
components/
  HookCard.tsx             # presentational, typed props
  HookGrid.tsx             # maps hooks → <HookCard>
data/
  hooks.ts                 # exports typed Hook[] seed data
types/
  hook.ts                  # Hook + HookCategory types
memory/spec/
  CLAUDE.md                # this file
```

Path alias `@/*` is configured in `tsconfig.json`; import via `@/components/...`, `@/data/hooks`, `@/types/hook`.

## Tech stack (already in place)

- **Next.js 16.2.3** — App Router, React Server Components
- **React 19.2.4**
- **Tailwind CSS v4** — via `@import "tailwindcss"` in `app/globals.css`
- **TypeScript 5**
- **ESLint 9** — flat config (`eslint.config.mjs`)

All MVP components are server-rendered. No `"use client"` needed — the page has no state and no interactivity beyond anchor links.

## Implementation rules

> Inherits from `memory/frontend/CLAUDE.md` — re-stated here for convenience.

- **Next.js 16 has breaking changes from training data.** Before writing any Next.js API, verify against `node_modules/next/dist/docs/01-app/` (per `AGENTS.md`).
- **Tailwind only** — no bespoke CSS or inline styles
- **`const` arrow-function components** with explicit prop types
- **Early returns** where they improve readability
- **No semicolons**
- **Descriptive names**; event handlers prefixed `handle…`
- **Accessibility on every interactive element** — `aria-label`, keyboard reachability, visible focus

## Verification

Once implemented, validate end-to-end:

1. `npm run lint` — passes clean
2. `npm run build` — static build succeeds; `/` is statically rendered
3. `npm run dev` → `http://localhost:3000` via Playwright MCP:
   - Header, tagline, and all 6 seeded hooks are visible
   - Grid reflows at `sm` and `lg` breakpoints
   - Each card opens its GitHub repo in a new tab
   - Tab key walks through every card in order; Enter activates
   - `prefers-color-scheme: dark` renders legibly
4. Quick Lighthouse pass: accessibility ≥ 95, no broken links
