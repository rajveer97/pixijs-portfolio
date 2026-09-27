import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { principles } from '../../data/principles'

export function Principles() {
  return (
    <Section
      id="principles"
      index="09"
      label="How I Think"
      title={
        <>
          HOW I <span className="text-gradient-accent">THINK</span>
        </>
      }
      description="The engineering principles I actually apply — the part of the portfolio that is not a technology list."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <Reveal key={principle.id} delay={0.06 * i}>
            <article className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent" aria-hidden="true">
                  {principle.index}
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                  {principle.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{principle.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
