import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { evolutionSteps } from '../../data/evolution'

export function FromGraphicsToSystems() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          FROM GRAPHICS <span className="text-gradient-accent">TO SYSTEMS</span>
        </>
      }
      description="I am a Game and Graphics Engineer who has moved from pixels to platforms — learning that both are really the same problem: making complex things feel simple and stay fast."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {evolutionSteps.map((step, i) => (
          <Reveal key={step.id} delay={0.08 * i}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong sm:p-8">
              <span
                className="absolute -right-2 -top-4 font-display text-7xl font-bold text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/10"
                aria-hidden="true"
              >
                {step.index}
              </span>
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {step.title}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">
                  {step.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  What it taught me
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {step.learning.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-bg-elevated px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
