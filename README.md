# Rajveer Pandey — Game / Graphics Engineer Portfolio

A premium, high-performance interactive portfolio for a **Game / Graphics Engineer** moving into backend and AI-assisted software engineering — built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and PixiJS. The hero runs a real-time PixiJS/WebGL system map of the engineering domains behind the work, the intro is a game-style loading screen, and a hidden Konami-code slot machine is tucked in as an easter egg.

**Live site:** https://rajveer97.github.io/pixijs-portfolio/

---

## Positioning

The site is written around one honest arc: **graphics and game systems → architecture → backend and distributed systems → AI-assisted development**, with AI framed as an accelerator while humans own architecture, correctness, testing and security. Unbuilt or unverified work is labelled _exploring_, _in progress_ or _placeholder_ instead of being dressed up with invented metrics.

## Highlights

- **Interactive PixiJS system map** — a live WebGL scene (particles, drifting grid, connections) that highlights how graphics, game systems, API, data and AI workflow relate; hover, click and keyboard paths all work, and every node is mirrored by an accessible DOM control
- **Game-style loading intro** — animated loader that plays once per visitor (remembered via `localStorage`, skipped for `prefers-reduced-motion` users)
- **Konami easter egg** — type the Konami code to unlock a 3-reel slot machine with a jackpot state
- **Narrative section set** — From Graphics to Systems, Systems I Build, Engineering Domains, Engineering Case Studies, Engineering Stack, AI-Assisted Development, Career Evolution, Experience, How I Think, Resume and Contact
- **Five engineering case studies** — rendering pipelines, game performance and scaling, API/auth/service decomposition, data pipelines and validation, and an AI-assisted development workflow
- **Performance-first** — PixiJS and every below-the-fold section are code-split into lazy chunks; animated reveals use the Intersection Observer–driven `Reveal` component
- **SEO & a11y ready** — semantic landmarks, skip-to-content link, focus-visible styles, meta/OG/Twitter tags, JSON-LD schema, `robots.txt`, `sitemap.xml`, a focus-trapped Konami dialog and inline form validation
- **Fully responsive** — verified from 320px to 1440px, with a dedicated narrow-viewport system-map layout and no horizontal overflow
- **Dark, engineering-inspired design system** — custom Tailwind v4 theme tokens, grid background, numbered section rails, marquee capability ticker

## Tech Stack

| Layer      | Tech                                                     |
| ---------- | -------------------------------------------------------- |
| Core       | React 19, TypeScript, Vite 8                             |
| Styling    | Tailwind CSS v4 (via `@tailwindcss/vite`)                |
| Motion     | Framer Motion 13                                         |
| Graphics   | PixiJS 8 (WebGL/WebGPU rendering)                        |
| Linting    | ESLint 9 + typescript-eslint + eslint-plugin-react-hooks |
| Formatting | Prettier                                                 |

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
├── .github/workflows/release.yml  # GitHub Release from a v* tag, notes from CHANGELOG.md
├── public/                        # static assets (favicon, robots.txt, sitemap.xml, og-image)
├── src/
│   ├── components/
│   │   ├── ui/                    # primitives: Reveal, Section, ButtonLink, TechTag, ScrollProgress, ErrorBoundary
│   │   ├── Loading/               # game-style intro screen
│   │   ├── Navbar/                # sticky nav + mobile menu
│   │   ├── Hero/                  # hero copy + interactive PixiJS SystemMap
│   │   ├── Evolution/ Domains/ Stack/ Projects/ CaseStudies/
│   │   ├── AIEngineering/ CareerEvolution/ Experience/ Principles/
│   │   ├── ResumeCTA/ Contact/ Footer/
│   │   └── EasterEgg/             # Konami slot machine
│   ├── data/                      # content: projects, case studies, experience, skills, system map, AI, principles, social
│   ├── hooks/                     # useKonami, usePrefersReducedMotion
│   ├── lib/                       # site config + utils
│   └── styles/                    # Tailwind v4 theme tokens + custom utilities
├── index.html                     # SEO meta, fonts, JSON-LD
└── CHANGELOG.md                   # version history (Keep a Changelog)
```

## Customizing the Content

Site-wide identity lives in **`src/lib/site.ts`**:

| Setting        | Value                                                                           |
| -------------- | ------------------------------------------------------------------------------- |
| `displayName`  | `RAJVEER` (navbar/loader brand)                                                 |
| `name`         | `Rajveer Pandey`                                                                |
| `title`        | `Game / Graphics Engineer`                                                      |
| `roles`        | the three-role arc shown under the headline                                     |
| `email`        | `ramkumarpandey243@gmail.com`                                                   |
| `canonicalUrl` | `https://rajveer97.github.io/pixijs-portfolio/`                                 |
| `resumePath`   | `${import.meta.env.BASE_URL}Resume.pdf` — the file lives at `public/Resume.pdf` |
| `introFlagKey` | `localStorage` key for the one-time loading intro — bump it to replay the intro |

`SITE` drives the loading screen, navbar, footer, hero CTA, JSON-LD seed and contact details, so renaming the site or swapping contact information is a one-file change. Social links are centralized separately in **`src/data/social.ts`** (`SOCIAL_LINKS`), which is the single source for GitHub, LinkedIn, TechTube and email; `mailtoHref` builds the contact form's prefilled subject.

Section content lives in the matching files under `src/data/`:

| File             | Drives                                                           |
| ---------------- | ---------------------------------------------------------------- |
| `skills.ts`      | hero capability strip + layered engineering stack                |
| `domains.ts`     | "What I Build" cards                                             |
| `evolution.ts`   | From Graphics to Systems story + career trajectory               |
| `ai.ts`          | AI-assisted workflow, accelerators, and human ownership          |
| `principles.ts`  | How I Think                                                      |
| `systemMap.ts`   | hero system-map nodes, connections, and per-breakpoint positions |
| `projects.ts`    | Systems I Build cards (set `placeholder: true` for unbuilt work) |
| `caseStudies.ts` | Engineering Case Studies                                         |
| `experience.ts`  | Experience timeline (`role`, `domain`, `focus`, `technologies`)  |

Projects without a public repository set `note` in `src/data/projects.ts` instead of a link, and the commented-out `url` shows where to add one. Keep claims honest: no metrics, client names or ownership of confidential production systems.

To change the assets, drop your own resume at `public/Resume.pdf` and your social preview image at `public/og-image.png` (1200×630). `index.html` hardcodes the site name and URLs for crawlers — keep it in sync with `src/lib/site.ts`.

## Deployment

Deploying is automatic via GitHub Actions (`.github/workflows/deploy.yml`):

1. GitHub Pages must be enabled with **Source → GitHub Actions** in _Settings → Pages_.
2. Push to `main` — the workflow installs deps, runs the production build, and deploys `dist/` to Pages.

The site is served from the `/pixijs-portfolio/` subpath, matching the `base` configured in `vite.config.ts`.

## Versioning and Releases

Changes are tracked in [`CHANGELOG.md`](./CHANGELOG.md) using the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format, and versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

To cut a release:

1. Move the changes under `## [Unreleased]` in `CHANGELOG.md` into a new `## [x.y.z] - YYYY-MM-DD` section.
2. Bump `version` in `package.json` to `x.y.z`.
3. Commit and push those two files to `main`.
4. Tag and push the tag. The release workflow publishes the GitHub Release using the matching CHANGELOG section as the release notes:

   ```bash
   git add CHANGELOG.md package.json
   git commit -m "Release v1.1.0"
   git push origin main
   git tag -a v1.1.0 -m "v1.1.0"
   git push origin v1.1.0
   ```

`.github/workflows/release.yml` fails the run if the tag does not match the `package.json` version or the CHANGELOG has no section for it, so those two files must be committed before tagging.

## License

Private project. All rights reserved by the author.
