# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-09-27

### Added

- Interactive PixiJS **engineering system map** as the hero visual: five connected domains (graphics, game systems, API, data, AI workflow) with hover/click connection highlighting, mirrored by accessible DOM controls, a focus-trapped readout panel, reduced-motion handling and a separate narrow-viewport node layout
- `src/data/systemMap.ts` with node specs, connection edges and per-breakpoint positions
- New sections: `FromGraphicsToSystems` (`#about`), `EngineeringDomains` (`#domains`), `EngineeringStack` (`#stack`), `AIEngineering` (`#ai`), `CareerEvolution` (`#career`) and `Principles` (`#principles`)
- New content modules `src/data/domains.ts`, `evolution.ts`, `ai.ts`, `principles.ts` and `social.ts`
- Five engineering case studies covering rendering pipelines, game performance and scaling, API/auth/service decomposition, data pipelines and validation, and an AI-assisted development workflow
- `src/data/social.ts` as the single source for GitHub, LinkedIn, TechTube and email, with a `mailtoHref` helper for the contact form
- Accessible contact-form validation with inline errors, `aria-invalid`/`aria-describedby` wiring and `name` attributes
- Focus management for the Konami easter egg: labelled modal, focus move on open, Tab trap, focus restore on close
- `aria-controls`/`aria-labelledby` wiring for the experience timeline accordions
- `id="resume"` anchor for the resume section, and footer links to Case Studies and What I Do
- `noscript` fallback with the profile headline and profile links
- Decorative trading-platform project artwork and a neutral scorecard ring for the civic project

### Changed

- Repositioned the portfolio as **Game / Graphics Engineer → Backend Engineer → AI-Assisted Software Engineer**, replacing the slot-game-developer framing across the hero, sections, copy and SEO
- Headline is now `RAJVEER` with the "Game / Graphics Engineer" title, a three-role subtitle and an engineering-focused capability strip
- **Projects** is now **Systems I Build** with per-project engineering lenses; the lead project is the professional **Game / Slot Engine** work
- Experience rows are grouped as `ROLE`, `DOMAIN`, `ENGINEERING FOCUS` and `TECHNOLOGIES` with factual, non-inflated technology lists
- Section order, numbering and nav anchors now follow the engineering narrative
- Rewrote the resume CTA, contact block, footer and loading intro around engineering work; `© 2026 Rajveer Pandey`
- SEO: revised title/description/keywords, OpenGraph and Twitter copy, JSON-LD and `noscript`; JSON-LD `sameAs` points at the real GitHub/LinkedIn profiles and includes email; canonical, `og:url` and `sitemap.xml`/`robots.txt` use the deployed GitHub Pages URL
- Code-split every below-the-fold section into lazy chunks with anchor-addressable placeholders
- Loading screen version now comes from `package.json` at build time instead of a hardcoded string
- Konami listener ignores modified keystrokes and keystrokes typed into form fields
- Bumped `--color-faint`/`--color-muted` for WCAG contrast and made decorative glyphs `aria-hidden`

### Removed

- The `HeroVisual`, `About`, `Services` and `Skills` components and their slot-game-service framing
- The unused reel/slot project scene
- `SITE.github` / `SITE.linkedin` / `SITE.social` in favour of `src/data/social.ts`, so links are no longer duplicated across components
- Dead theme tokens (`--color-accent-2`, `--animate-float`) and the unused `.edge-fade` utility
- A fabricated `72%` figure from the civic project visual

### Notes

- No metrics, client names, traffic figures or production Go/AI ownership claims were added; unbuilt or unverified work is described as exploring or in progress, and the trading platform is an explicit placeholder

## [1.0.0] - 2026-09-17

### Added

- Interactive PixiJS hero scene (floating particles, drifting grid, parallax) rendered with PixiJS v8
- Game-style loading intro, remembered via `localStorage` and skipped for `prefers-reduced-motion` visitors
- Konami-code easter egg that unlocks a 3-reel slot machine with a jackpot state
- Full section set: About, Projects, Skills, Experience, Case Studies, Services, Resume CTA, Contact, Footer
- Reveal-on-scroll animations via an Intersection Observer-driven `Reveal` component, plus `ScrollProgress` and `ErrorBoundary`
- SEO and accessibility foundation: semantic landmarks, skip-to-content link, focus-visible styles, meta/OG/Twitter tags, JSON-LD, `robots.txt`, `sitemap.xml`
- Custom Tailwind v4 theme tokens, grid background and marquee tech ticker
- Project README covering setup, content customization and deployment
- GitHub Actions workflow that builds and deploys the site to GitHub Pages on push to `main`
- `CHANGELOG.md` to track user-visible changes in one place
- GitHub Releases workflow (`.github/workflows/release.yml`) that publishes a release from a `v*` tag

### Changed

- Rebranded the site to Ram Pandey with real projects, resume and contact details
- Added the TechTube project card with a dedicated icon image and updated case-study details
- Served the app from the `/pixijs-portfolio/` subpath to match the GitHub Pages project URL

[Unreleased]: https://github.com/rajveer97/pixijs-portfolio/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/rajveer97/pixijs-portfolio/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/rajveer97/pixijs-portfolio/releases/tag/v1.0.0
