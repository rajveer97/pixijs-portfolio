import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { caseStudies } from '../../data/caseStudies'
import type { CaseStudy } from '../../data/caseStudies'
import { ArchitectureDiagram } from './ArchitectureDiagram'
import { cn } from '../../lib/utils'

function CaseStudyCard({ study, wide = false }: { study: CaseStudy; wide?: boolean }) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong',
      )}
    >
      <div className="border-b border-line px-6 pt-6 sm:px-8 sm:pt-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-display text-sm font-bold text-accent">
            CASE STUDY {study.index}
          </span>
          <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
            {study.domain}
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <h3
          className={cn(
            'mt-4 font-display font-bold tracking-tight text-foreground',
            wide ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
          )}
        >
          {study.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-faint">{study.subtitle}</p>
      </div>

      <div
        className={cn(
          'grid flex-1 gap-6 p-6 sm:p-8',
          wide ? 'lg:grid-cols-[1.25fr_0.75fr]' : 'lg:grid-cols-[1.15fr_0.85fr]',
        )}
      >
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{study.problem}</p>
          <h4 className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Approach
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.approach}</p>

          <h4 className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Engineering Decisions
          </h4>
          <ul className="mt-2 space-y-1.5">
            {study.decisions.map((decision) => (
              <li key={decision} className="flex items-start gap-3 text-sm text-muted">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {decision}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-1 flex-col rounded-xl border border-line bg-bg-elevated/60 p-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Architecture
            </span>
            <div className="flex flex-1 items-center justify-center overflow-x-auto">
              <ArchitectureDiagram nodes={study.nodes} note={study.nodesNote} />
            </div>
          </div>

          <div className="rounded-xl border border-accent/25 bg-accent/[0.06] p-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Result / Current State
            </span>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{study.result}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-6 pb-6 sm:px-8 sm:pb-8">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export function CaseStudies() {
  return (
    <Section
      id="engineering"
      index="05"
      label="Engineering Case Studies"
      title={
        <>
          ENGINEERING <span className="text-gradient-accent">CASE STUDIES</span>
        </>
      }
      description="Five engineering stories — each one about a problem, a structure, the decisions behind it and where it stands today."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal
            key={study.id}
            delay={0.08 * i}
            className={cn(study.index === '01' && 'lg:col-span-2')}
          >
            <CaseStudyCard study={study} wide={study.index === '01'} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
