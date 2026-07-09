# Isa Guarache One-pager Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a static, mobile-first personal one-pager for Isa Guarache that replaces her msha.ke link-in-bio and links to three Instagram projects.

**Architecture:** Next.js 14 App Router single route. Server layout for fonts/metadata; page composes hero/intro/footer; two thin client components (`FadeIn`, `ProjectLinks`) for framer-motion. No backend.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, framer-motion, `next/font` (Fraunces + DM Sans), `next/image`, Vercel.

## Global Constraints

- Copy must match the design spec verbatim (tagline, subtitle with 🧚🏻‍♀️, intro, three project lines, Metamonarca 🦋 only).
- Palette: bg `#FAF6F1`, text `#2C2420`, muted `#6B5E56`, accent `#D98E73`, blush `#E8B4A8`, rule `#E8DFD6`. No green.
- Mobile-first; touch targets ≥48px; max content width ~560–640px.
- No UI libraries, no forms, no backend.
- Photo path fixed: `/public/isa.jpg`.
- Footer: © 2026, IG `isagbeauty`, WhatsApp `+58 412-6259276` → `https://wa.me/584126259276`.

---

## File map

| File | Responsibility |
|------|----------------|
| `package.json` | Scripts + deps |
| `next.config.mjs` | Next config |
| `tailwind.config.ts` | Theme tokens + fonts |
| `postcss.config.mjs` | PostCSS |
| `tsconfig.json` | TS |
| `app/globals.css` | CSS variables + base |
| `app/layout.tsx` | Fonts, metadata, shell |
| `app/page.tsx` | Page composition |
| `app/icon.svg` | Favicon butterfly |
| `components/FadeIn.tsx` | Client fade-in wrapper |
| `components/ProjectLinks.tsx` | Project list + hover |
| `public/isa.jpg` | Photo placeholder |
| `README.md` | Local / photo / deploy |

---

### Task 1: Scaffold Next.js 14 + Tailwind + framer-motion

**Files:**
- Create: project root via `create-next-app` (or manual package files)
- Create: `package.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `.gitignore`

- [ ] **Step 1: Scaffold in project directory**

Run from `C:\Users\yeshua\Desktop\Isaguarache` (preserve existing `docs/`):

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm --yes
```

If create-next-app refuses non-empty dir, scaffold manually with equivalent `package.json` and configs.

- [ ] **Step 2: Install framer-motion**

```bash
npm install framer-motion
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: Next.js ready on localhost:3000 without errors.

- [ ] **Step 4: Commit only if user asks** — skip unless requested.

---

### Task 2: Theme, fonts, metadata, favicon

**Files:**
- Create/Modify: `app/globals.css`
- Create/Modify: `app/layout.tsx`
- Create/Modify: `tailwind.config.ts`
- Create: `app/icon.svg`

- [ ] **Step 1: Set CSS variables in `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #faf6f1;
  --color-text: #2c2420;
  --color-muted: #6b5e56;
  --color-accent: #d98e73;
  --color-blush: #e8b4a8;
  --color-rule: #e8dfd6;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 2: Extend Tailwind theme**

In `tailwind.config.ts`, map colors `cream`, `ink`, `muted`, `accent`, `blush`, `rule` to the hex values above; set `fontFamily.serif` → `var(--font-fraunces)` and `fontFamily.sans` → `var(--font-dm-sans)`.

- [ ] **Step 3: Wire fonts + SEO in `app/layout.tsx`**

- Load Fraunces + DM Sans via `next/font/google`
- Metadata: title `Isa Guarache`, description = tagline, OG/Twitter image `/isa.jpg`
- `lang="es"` on `<html>`
- Apply font CSS variables on `body`

- [ ] **Step 4: Add `app/icon.svg`**

Simple blush/terracotta butterfly mark (or stylized “I”) as SVG favicon.

- [ ] **Step 5: Verify** — open `/`, confirm cream background and metadata in page source.

---

### Task 3: Client components — FadeIn + ProjectLinks

**Files:**
- Create: `components/FadeIn.tsx`
- Create: `components/ProjectLinks.tsx`

**Interfaces:**
- Produces: `FadeIn({ children, delay?: number, className?: string })`
- Produces: `ProjectLinks()` — renders the three fixed projects

- [ ] **Step 1: Implement `FadeIn.tsx`**

`"use client"`; `motion.div` with `initial={{ opacity: 0, y: 12 }}`, `animate={{ opacity: 1, y: 0 }}`, duration ~0.5–0.6s, optional `delay`.

- [ ] **Step 2: Implement `ProjectLinks.tsx`**

Hardcode the three projects. Each row:

- Full-width `<a>`, min-h 48px, py generous
- Title + description
- Border-bottom `rule` (last item included or separators between)
- Hover: `translate-x-1` + sliding underline via CSS (`after:` scale-x animation) using accent/blush
- `target="_blank"` `rel="noopener noreferrer"`

- [ ] **Step 3: Smoke-check in isolation** — import temporarily in page if needed; confirm hover works on desktop and tap opens IG.

---

### Task 4: Page composition + placeholder photo

**Files:**
- Create/Modify: `app/page.tsx`
- Create: `public/isa.jpg` (placeholder image)

- [ ] **Step 1: Create placeholder `public/isa.jpg`**

Generate a simple cream/blush placeholder JPEG (or copy a solid-color image) so `next/image` does not 404. Document that user replaces this file.

- [ ] **Step 2: Build `app/page.tsx`**

Centered column `max-w-xl` / `max-w-[640px]`, px-6, py-10+ :

1. `FadeIn`: circular `Image` `/isa.jpg` (~120px mobile, ~140px sm+)
2. Name `Isa Guarache` — Fraunces, large clamp
3. Tagline exact
4. Subtitle exact with 🧚🏻‍♀️
5. `FadeIn` delay: intro paragraph exact
6. `FadeIn` delay: `<ProjectLinks />`
7. Footer: © 2026, IG SVG icon link, WhatsApp text link

Tone: airy, editorial, no cards/shadows.

- [ ] **Step 3: Visual check mobile** — browser narrow viewport; confirm no overflow, tap targets OK.

---

### Task 5: README + production build

**Files:**
- Create: `README.md`
- Optional: `vercel.json` only if needed (prefer defaults)

- [ ] **Step 1: Write short README**

Sections: what it is; `npm install` / `npm run dev`; replace `public/isa.jpg`; deploy with Vercel (GitHub import or `npx vercel --prod`).

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: success, static `/` page.

- [ ] **Step 3: Final checklist vs spec**

- [ ] Exact copy
- [ ] Palette (no green)
- [ ] Three links + IG + WhatsApp
- [ ] Metadata + favicon
- [ ] Mobile-first layout

---

## Spec coverage (self-review)

| Spec item | Task |
|-----------|------|
| Next 14 + TS + Tailwind + framer-motion | 1 |
| Palette / fonts / SEO / favicon | 2 |
| Fade-in + project list hover | 3 |
| Hero, intro, footer, photo | 4 |
| README + deploy readiness | 5 |
| No backend / no green / exact copy | Global + 4 |

No placeholders left in plan steps.
