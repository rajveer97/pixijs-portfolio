# Rajveer Pandey — PixiJS Game Developer Portfolio

A premium, high-performance interactive portfolio for a PixiJS Game Developer — built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and PixiJS. The hero runs a real-time PixiJS/WebGL scene, the intro is a game-style loading screen, and a hidden Konami-code slot machine is tucked in as an easter egg.

**Live site:** https://rajveer97.github.io/pixijs-portfolio/

---

## Highlights

- **Game-style loading intro** — animated loader that plays once per visitor (remembered via `localStorage`, skipped for `prefers-reduced-motion` users)
- **Interactive PixiJS hero** — a live WebGL scene (floating particles, drifting grid, parallax) rendered with PixiJS v8
- **Konami easter egg** — type the Konami code to unlock a 3-reel slot machine with a jackpot state
- **Full section set** — About, Projects, Skills, Experience timeline, Case Studies with architecture diagrams, What I Do, Resume CTA, Contact and Footer
- **Performance-first** — PixiJS code-split into a lazy-loaded chunk; animated reveals use the Intersection Observer–driven `Reveal` component
- **SEO & a11y ready** — semantic landmarks, skip-to-content link, focus-visible styles, meta/OG/Twitter tags, JSON-LD schema, `robots.txt` and `sitemap.xml`
- **Fully responsive** — verified from 320px to 1440px with no horizontal overflow
- **Dark, game-inspired design system** — custom Tailwind v4 theme tokens, grid background, marquee tech ticker

## Tech Stack

| Layer       | Tech                                                                 |
| ----------- | -------------------------------------------------------------------- |
| Core        | React 19, TypeScript, Vite 8                                          |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`)                             |
| Motion      | Framer Motion 13                                                      |
| Graphics    | PixiJS 8 (WebGL/WebGPU rendering)                                     |
| Linting     | ESLint 9 + typescript-eslint + eslint-plugin-react-hooks              |
| Formatting  | Prettier                                                              |

## Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# typecheck, lint, and format
npm run typecheck
npm run lint
npm run format

# production build + local preview
npm run build
npm run preview
```

## Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD (build + deploy on push to main)
├── public/                        # static assets (favicon, robots.txt, sitemap.xml, og-image)
├── src/
│   ├── components/
│   │   ├── ui/                    # primitives: Reveal, Section, ButtonLink, TechTag, ScrollProgress, ErrorBoundary
│   │   ├── Loading/               # game-style intro screen
│   │   ├── Navbar/                # sticky nav + mobile menu
│   │   ├── Hero/                  # hero section + lazy-loaded PixiJS visual (HeroVisual)
│   │   ├── About/ Projects/ Skills/ Experience/ CaseStudies/
│   │   ├── Services/              # "What I Do"
│   │   ├── ResumeCTA/ Contact/ Footer/
│   │   └── EasterEgg/             # Konami slot machine
│   ├── data/                      # content: projects, skills, experience, case studies
│   ├── hooks/                     # useKonami, usePrefersReducedMotion
│   ├── lib/                       # site config + utils
│   └── styles/                    # Tailwind v4 theme tokens + custom utilities
└── index.html                     # SEO meta, fonts, JSON-LD
```

## Customizing the Content

All site-wide configuration lives in **`src/lib/site.ts`** — replace the placeholders with your real details:

| Setting        | Placeholder used                                    |
| -------------- | --------------------------------------------------- |
| `email`        | `hello@rajveerpandey.dev`                           |
| `github`       | `https://github.com/`                               |
| `linkedin`     | `https://www.linkedin.com/`                         |
| `canonicalUrl` | `https://rajveerpandey.dev/`                        |
| `resumePath`   | `/resume.pdf` — drop your resume at `public/resume.pdf` |

Section content (projects, skills, experience, case studies) lives in the matching files under `src/data/`.

## Deployment

Deploying is automatic via GitHub Actions (`.github/workflows/deploy.yml`):

1. GitHub Pages must be enabled with **Source → GitHub Actions** in *Settings → Pages*.
2. Push to `main` — the workflow installs deps, runs the production build, and deploys `dist/` to Pages.

The site is served from the `/pixijs-portfolio/` subpath, matching the `base` configured in `vite.config.ts`.

## License

Private project. All rights reserved by the author.
