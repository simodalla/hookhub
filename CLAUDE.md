# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint (flat config, eslint.config.mjs)

## Tech Stack

- **Next.js 16** (App Router) with React 19, TypeScript, Tailwind CSS v4
- Path alias: `@/*` maps to project root

## Important: Next.js 16 Breaking Changes

This project uses Next.js 16, which has breaking changes from earlier versions. **Before writing any code, read the relevant guide in `node_modules/next/dist/docs/`** — especially `01-app/` for App Router patterns. Do not rely on training data for Next.js APIs or conventions; verify against the bundled docs first.
