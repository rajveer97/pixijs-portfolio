import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { caseStudies } from '../../data/caseStudies'
import type { CaseStudy } from '../../data/caseStudies'
import { ArchitectureDiagram } from './ArchitectureDiagram'

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong">
      <div className="border-b border-line px-6 pt-6 sm:px-8 sm:pt-8">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-bold text-accent">
            CASE STUDY {study.index}
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {study.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-faint">{study.subtitle}</p>
      </div>

      <div className="grid flex-1 gap-6 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{study.problem}</p>
          <h4 className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Approach
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{study.approach}</p>
        </div>

        <div className="flex flex-col rounded-xl border border-line bg-bg-elevated/60 p-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            Architecture
          </span>
          <div className="flex flex-1 items-center justify-center overflow-x-auto">
            <ArchitectureDiagram nodes={study.nodes} note={study.nodesNote} />
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
      id="case-studies"
      index="05"
      label="Case Studies"
      title={
        <>
          ENGINEERING <span className="text-gradient-accent">DEEP DIVES</span>
        </>
      }
      description="How I think about game architecture — the systems behind reels, assets, layouts and animation."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.id} delay={0.08 * i}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
