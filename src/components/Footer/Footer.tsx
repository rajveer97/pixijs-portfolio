import { SITE } from '../../lib/site'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold tracking-[0.15em] text-foreground">
              RAJVEER
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              PixiJS Game Developer — building high-performance browser games, slot frameworks and
              interactive experiences with TypeScript, PixiJS and WebGL.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Sitemap</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Connect</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-muted transition-colors hover:text-foreground">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-faint">© 2026 Rajveer Pandey</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
