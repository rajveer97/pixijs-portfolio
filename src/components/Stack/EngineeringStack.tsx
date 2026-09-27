import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { stackLayers } from '../../data/skills'
import type { StackAccent } from '../../data/skills'
import { cn } from '../../lib/utils'

const ACCENT_TEXT: Record<StackAccent, string> = {
  accent: 'text-accent',
  cyan: 'text-cyan',
  blue: 'text-blue',
  muted: 'text-muted',
}

export function EngineeringStack() {
  return (
    <Section
      id="stack"
      index="04"
      label="Engineering Stack"
      title={
        <>
          ENGINEERING <span className="text-gradient-accent">STACK</span>
        </>
      }
      description="Organized by depth and honesty — what I build with daily, what I am expanding into, and what I am deliberately learning next."
    >
      <div className="space-y-4">
        {stackLayers.map((layer, i) => (
          <Reveal key={layer.id} delay={0.07 * i}>
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong">
              <span
                className={cn(
                  'absolute inset-y-0 left-0 w-1 transition-opacity duration-500',
                  layer.accent === 'accent' && 'bg-accent',
                  layer.accent === 'cyan' && 'bg-cyan',
                  layer.accent === 'blue' && 'bg-blue',
                  layer.accent === 'muted' && 'bg-line-strong',
                )}
                aria-hidden="true"
              />
              <div className="grid gap-5 p-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:p-8 sm:pl-9">
                <div>
                  <div className="flex items-baseline justify-between gap-4 sm:block">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                      {layer.title}
                    </h3>
                    <p
                      className={cn(
                        'font-mono text-[10px] uppercase tracking-[0.2em] sm:mt-1.5',
                        ACCENT_TEXT[layer.accent],
                      )}
                    >
                      {layer.status}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{layer.blurb}</p>
                </div>

                <ul className="flex flex-wrap content-start gap-2">
                  {layer.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-bg-elevated px-3.5 py-1.5 font-mono text-xs text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
        Layered by confidence on purpose — this is a working engineering stack, not a list inflated
        to look bigger.
      </p>
    </Section>
  )
}
