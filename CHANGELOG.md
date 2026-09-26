# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `CHANGELOG.md` to track user-visible changes in one place
- GitHub Releases workflow (`.github/workflows/release.yml`) that publishes a release from a `v*` tag

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

### Changed

- Rebranded the site to Ram Pandey with real projects, resume and contact details
- Added the TechTube project card with a dedicated icon image and updated case-study details
- Served the app from the `/pixijs-portfolio/` subpath to match the GitHub Pages project URL

[Unreleased]: https://github.com/rajveer97/pixijs-portfolio/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/rajveer97/pixijs-portfolio/releases/tag/v1.0.0
