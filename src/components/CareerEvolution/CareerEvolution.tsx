import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { trajectory } from '../../data/evolution'
import { cn } from '../../lib/utils'

export function CareerEvolution() {
  return (
    <Section
      id="career"
      index="07"
      label="Career Evolution"
      title={
        <>
          CAREER <span className="text-gradient-accent">EVOLUTION</span>
        </>
      }
      description="One continuous engineering path: from interactive graphics to game systems to backend and AI-augmented development."
    >
      <ol className="relative space-y-6 lg:grid lg:grid-cols-5 lg:gap-4 lg:space-y-0">
        <div
          className="absolute bottom-2 left-[7px] top-2 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[7px] lg:h-px lg:w-full"
          aria-hidden="true"
        />
        {trajectory.map((milestone, i) => (
          <Reveal key={milestone.id} delay={0.07 * i}>
            <li className="relative pl-8 lg:pl-0 lg:pt-8">
              <span className="absolute left-0 top-1.5 lg:left-0" aria-hidden="true">
                <span
                  className={cn(
                    'flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-bg',
                    milestone.current ? 'border-accent' : 'border-line-strong',
                  )}
                >
                  {milestone.current ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  ) : null}
                </span>
              </span>
              <p
                className={cn(
                  'font-mono text-[10px] uppercase tracking-[0.2em]',
                  milestone.current ? 'text-accent' : 'text-faint',
                )}
              >
                {milestone.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-foreground">
                {milestone.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{milestone.focus}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
