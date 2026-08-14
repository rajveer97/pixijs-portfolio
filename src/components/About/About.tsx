import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { SITE } from '../../lib/site'

const EXPLORING = ['Advanced WebGL', 'Three.js', 'Game Architecture', 'Backend Engineering', 'Go']

const SPECIALIZATION = [
  ['browser_games', 'true'],
  ['slot_games', 'true'],
  ['game_architecture', 'true'],
  ['animation_systems', 'true'],
  ['reel_systems', 'true'],
  ['rendering_performance', 'true'],
  ['interactive_ui', 'true'],
  ['reusable_frameworks', 'true'],
] as const

const FACTS = [
  { value: '3+', label: 'Years Experience' },
  { value: '2', label: 'Game Studios' },
  { value: 'PixiJS', label: 'Primary Engine' },
  { value: 'TS', label: 'Primary Language' },
]

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          ABOUT <span className="text-gradient-accent">ME</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              I'm <span className="font-semibold text-white">{SITE.firstName}</span>, a game developer
              specializing in <span className="text-accent">TypeScript</span>,{' '}
              <span className="text-accent">PixiJS</span>, <span className="text-accent">Phaser</span> and{' '}
              <span className="text-accent">WebGL</span> — with professional experience building
              browser-based slot games and interactive experiences.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-muted">
              I care about how game systems are designed: game architecture, rendering, animation
              systems, performance and reusable frameworks that let a team ship faster. Beyond games,
              I enjoy building interactive applications and clean frontend engineering with React.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Currently exploring
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {EXPLORING.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" aria-hidden="true" />
              <span className="ml-3 font-mono text-xs text-faint">specialization.config.ts</span>
            </div>
            <div className="px-5 py-5 font-mono text-sm leading-8">
              <p className="text-faint">// specialization</p>
              {SPECIALIZATION.map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4">
                  <span className="text-cyan">{key}</span>
                  <span className="text-muted">=</span>
                  <span className="text-accent">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <dl className="mt-14 grid grid-cols-2 gap-4 border-t border-line pt-10 sm:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-faint">{fact.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
