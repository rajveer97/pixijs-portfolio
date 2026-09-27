import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { aiAccelerates, aiWorkflow, humanOwns } from '../../data/ai'
import { cn } from '../../lib/utils'

export function AIEngineering() {
  return (
    <Section
      id="ai"
      index="06"
      label="Engineering With AI"
      title={
        <>
          ENGINEERING <span className="text-gradient-accent">WITH AI</span>
        </>
      }
      description="AI is not my identity — it is my accelerator. It changes how fast I can explore and verify, not who is responsible for the system."
    >
      <Reveal>
        <ol className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {aiWorkflow.map((step, i) => (
            <li
              key={step.id}
              className={cn(
                'relative min-w-[170px] rounded-xl border p-4 transition-colors duration-300 sm:min-w-0',
                step.ai ? 'border-accent/40 bg-accent/[0.07]' : 'border-line bg-surface',
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-faint">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'font-mono text-[9px] uppercase tracking-[0.15em]',
                    step.ai ? 'text-accent' : 'text-faint',
                  )}
                >
                  {step.ai ? 'AI-assisted' : 'Human'}
                </span>
              </div>
              <p className="mt-2 font-display text-sm font-semibold text-foreground">
                {step.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.note}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              AI accelerates
            </h3>
            <ul className="mt-4 space-y-2.5">
              {aiAccelerates.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
              Human owns
            </h3>
            <ul className="mt-4 space-y-2.5">
              {humanOwns.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-6 rounded-2xl border border-line bg-bg-elevated/60 p-6 text-center font-display text-lg font-semibold text-foreground sm:p-8 sm:text-xl">
          AI changes how fast I can explore.{' '}
          <span className="text-gradient-accent">It does not change who is responsible.</span>
        </p>
      </Reveal>
    </Section>
  )
}
