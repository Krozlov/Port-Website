# Stefan Luciano Kencana — Portfolio

A terminal / IDE themed software engineer portfolio built with Vite, React, TypeScript, and Tailwind CSS, with an interactive particle background that reacts to your cursor and clicks.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`, ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc).

## Structure

- `src/data.ts` — all editable content: name, contact links, skills, experience, projects
- `src/components/` — one component per section (Hero, About, Skills, Experience, Projects, Contact, CommandPalette, Footer, TitleBar)
- `src/components/InteractiveBackground.tsx` — the canvas particle network: particles drift and link to nearby neighbors, nodes near your cursor are pulled gently toward it, and clicking anywhere sends out a ripple. It automatically falls back to a static frame if the visitor's system has "reduce motion" turned on.
- `src/hooks/` — scroll reveal and active-section tracking hooks
- `tailwind.config.ts` — the color palette and font families used throughout

## Things to personalize

- Resume data (education, work history, projects, skills, contact links) all lives in `src/data.ts`, already filled in from your resume
- The resume download button in `src/components/Hero.tsx` still points at `#`, wire it up to your actual PDF
- Tune the particle background's feel (count, link distance, pull strength) via the constants at the top of `InteractiveBackground.tsx`
