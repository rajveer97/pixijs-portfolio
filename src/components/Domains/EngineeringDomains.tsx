import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { domains } from '../../data/domains'
import { cn } from '../../lib/utils'

const ACCENT_TEXT = {
  accent: 'text-accent',
  cyan: 'text-cyan',
  blue: 'text-blue',
} as const

const ACCENT_BORDER = {
  accent: 'group-hover:border-accent/50',
  cyan: 'group-hover:border-cyan/50',
  blue: 'group-hover:border-blue/50',
} as const

export function EngineeringDomains() {
  return (
    <Section
      id="domains"
      index="02"
      label="What I Build"
      title={
        <>
          WHAT I <span className="text-gradient-accent">BUILD</span>
        </>
      }
      description="Three areas of engineering, one way of working: understand the system, structure it properly, then make it fast."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {domains.map((domain, i) => (
          <Reveal key={domain.id} delay={0.08 * i}>
            <article
              className={cn(
                'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 sm:p-8',
                ACCENT_BORDER[domain.accent],
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className={cn('font-mono text-xs', ACCENT_TEXT[domain.accent])}>
                  {domain.index}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  {domain.accent === 'accent'
                    ? 'Primary'
                    : domain.accent === 'cyan'
                      ? 'Expanding'
                      : 'Accelerator'}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
                {domain.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{domain.summary}</p>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Capabilities
              </p>
              <ul className="mt-3 space-y-2">
                {domain.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-sm text-foreground/85"
                  >
                    <span
                      className={cn(
                        'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
                        domain.accent === 'accent' && 'bg-accent',
                        domain.accent === 'cyan' && 'bg-cyan',
                        domain.accent === 'blue' && 'bg-blue',
                      )}
                      aria-hidden="true"
                    />
                    {capability}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Technologies
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {domain.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line bg-bg-elevated px-2.5 py-1 font-mono text-[10px] text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
