# Isa Guarache — One-pager Design Spec

**Date:** 2026-07-08  
**Status:** Approved for implementation planning  
**Goal:** Replace msha.ke link-in-bio with a personal digital business card that redirects to 3 projects.

---

## 1. Purpose

A single-page, static personal site for Isa Guarache. Warm, feminine, editorial. Mobile-first (Instagram bio traffic). Fast enough for Lighthouse 95+.

Not a portfolio, blog, or CMS — a calm “tarjeta de presentación” with three outbound links.

---

## 2. Approach

**Chosen:** Single App Router page + thin client components for motion/hover.

- One static route (`/`)
- No backend, DB, forms, or CMS
- Tailwind only (no heavy UI libs)
- framer-motion only for load fade-in + subtle link hover

Rejected alternatives: multi-component folder split (unnecessary for this size); external JSON/CMS for links (links are fixed).

---

## 3. Visual design

### Layout (mobile-first)

- Single centered column, max-width ~560–640px
- Generous horizontal padding; short vertical scroll on small phones, near one-screen on larger
- Order: photo → name → tagline → subtitle → intro → 3 project links → footer

### Typography

| Role | Font | Notes |
|------|------|--------|
| Name / headlines | Fraunces (Google Fonts via `next/font`) | Editorial serif, warm |
| Body / links / footer | DM Sans | Clean, mobile-legible |

### Color palette

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#FAF6F1` | Page bg (cream, not pure white) |
| Text | `#2C2420` | Primary copy |
| Muted | `#6B5E56` | Tagline support, descriptions |
| Accent | `#D98E73` | Terracotta — underlines, accents |
| Blush | `#E8B4A8` | Secondary detail (hover tint, soft accents) |
| Rule | `#E8DFD6` | Dividers between links |

No sage green. No hard shadows. No saturated gradients.

### Photo

- `/public/isa.jpg` (placeholder until replaced)
- Circular (`rounded-full`)
- Medium size: ~112–128px mobile, slightly larger desktop
- Optimized with `next/image`

### Project links (Dalen-style list, not cards)

Three full-width rows separated by hairline rules:

1. **Isa Beauty** — “Mi marca personal: moda, marketing y contenido con propósito” → https://www.instagram.com/isagbeauty/
2. **Metamonarca 🦋** — “Moda con intención. Piezas únicas, honrando raíces.” → https://www.instagram.com/metamonarca/
3. **D'Colors Gift** — “Estudio creativo: arte, estrategia e identidad visual” → https://www.instagram.com/dcolorsgift/

Behavior:

- `target="_blank"` + `rel="noopener noreferrer"`
- Touch target ≥48px height on mobile
- Hover/focus: sliding underline (accent/blush) + slight `translateX` (2–4px)
- No box shadows, no card chrome

### Copy (exact)

- Name: `Isa Guarache`
- Tagline: `Traduzco tu propósito en contenido que conecta y vende.`
- Subtitle: `Marca personal · Moda · Marketing con alma 🧚🏻‍♀️`
- Intro: `Ayudo a marcas y personas a encontrar la esencia de lo que quieren decir, y a convertirla en presencia digital con propósito. Esto es lo que estoy construyendo:`
- Emojis only where specified (subtitle fairy, Metamonarca butterfly). No extra body emojis.

### Footer

- `© 2026 Isa Guarache`
- Small Instagram icon → https://www.instagram.com/isagbeauty/
- WhatsApp plain text: `+58 412-6259276` → https://wa.me/584126259276
- No large CTA buttons

### Motion

- Soft fade-in on load (framer-motion), light stagger: hero → intro → links
- Link hover micro-animation only
- Nothing else

### Favicon

- Simple butterfly or initial “I” (SVG/ICO in `app/` or `public/`)

---

## 4. Technical architecture

### Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- framer-motion
- Deploy: Vercel (static)

### File structure

```
app/
  layout.tsx       # fonts, metadata, html shell
  page.tsx         # page composition
  globals.css      # CSS variables + base
  icon.svg         # favicon (or public/favicon)
components/
  FadeIn.tsx       # client motion wrapper
  ProjectLinks.tsx # link list + hover (client)
public/
  isa.jpg          # photo placeholder
README.md
package.json
tailwind.config.ts
tsconfig.json
next.config.mjs
vercel.json        # only if needed
```

### SEO metadata (`layout.tsx`)

- `title`: `Isa Guarache`
- `description`: tagline
- `openGraph.images`: `/isa.jpg`
- Basic Twitter card mirroring OG

### Performance targets

- Instant feel on mobile; Lighthouse Performance/Best Practices/SEO ≥95
- `next/font` for Fraunces + DM Sans (no layout shift)
- `next/image` for photo
- Minimal JS: only framer-motion client islands

### Deploy

- Ready for `vercel --prod` or GitHub → Vercel import
- README: `npm run dev`, replace `/public/isa.jpg`, deploy steps

---

## 5. Out of scope

- Backend, auth, forms, analytics SDKs, blog, CMS
- Extra pages or sections beyond hero / intro / links / footer
- Heavy animation libraries or UI kits

---

## 6. Success criteria

- [ ] One-pager loads fast on mobile, looks editorial and warm
- [ ] All three project links + IG + WhatsApp work
- [ ] Photo swap is drop-in (`public/isa.jpg`)
- [ ] SEO metadata present
- [ ] README covers local run + photo + deploy
- [ ] Deployable to Vercel without extra setup
