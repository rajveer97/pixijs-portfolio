import { SITE } from '../../lib/site'
import { SOCIAL_LINKS } from '../../data/social'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'What I Build', href: '#domains' },
  { label: 'Systems I Build', href: '#work' },
  { label: 'Engineering Stack', href: '#stack' },
  { label: 'Case Studies', href: '#engineering' },
  { label: 'Engineering With AI', href: '#ai' },
  { label: 'Career Evolution', href: '#career' },
  { label: 'Experience', href: '#experience' },
  { label: 'How I Think', href: '#principles' },
  { label: 'Contact', href: '#contact' },
]

function ExternalIcon() {
  return (
    <span aria-hidden="true" className="ml-1">
      ↗
    </span>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold tracking-[0.15em] text-foreground">
              RAJVEER
            </p>
            <ul className="mt-4 space-y-1.5">
              {SITE.roles.map((role) => (
                <li
                  key={role}
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Sitemap</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Connect</p>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.id === 'email' ? SITE.email : link.label}
                    {link.external ? <ExternalIcon /> : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
