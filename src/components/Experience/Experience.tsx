import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { timeline } from '../../data/experience'
import type { TimelineEntry } from '../../data/experience'
import { cn } from '../../lib/utils'

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const panelId = `timeline-panel-${entry.id}`
  const buttonId = `timeline-button-${entry.id}`

  return (
    <div className="relative pl-8 sm:pl-10">
      <span
        className="absolute -left-[13px] top-1.5 flex h-6 w-6 items-center justify-center sm:-left-[17px] sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        {entry.current ? (
          <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:h-4 sm:w-4" />
          </span>
        ) : (
          <span className="h-3 w-3 rounded-full border-2 border-line-strong bg-bg sm:h-3.5 sm:w-3.5" />
        )}
      </span>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
        <button
          type="button"
          id={buttonId}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
        >
          <div>
            <span
              className={cn(
                'font-mono text-xs uppercase tracking-widest',
                entry.current ? 'text-accent' : 'text-faint',
              )}
            >
              {entry.period}
              {entry.current ? ' · Current' : ''}
            </span>
            <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {entry.role}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {entry.company}
              {entry.location ? <span className="text-faint"> — {entry.location}</span> : null}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {entry.domain}
            </p>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              'mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform duration-300',
              open && 'rotate-45 text-accent',
            )}
          >
            +
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-line px-5 py-5 sm:px-7 sm:py-6">
                <p className="text-sm leading-relaxed text-muted">{entry.summary}</p>

                <h4 className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  Engineering Focus
                </h4>
                <ul className="mt-2 space-y-2">
                  {entry.focus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  Technologies
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-line bg-bg-elevated px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="08"
      label="Experience"
      title={
        <>
          EXPERIENCE<span className="text-gradient-accent">.</span>
        </>
      }
      description="Professional game engineering across browser graphics, slot game systems and interactive products."
    >
      <div className="relative">
        <div className="absolute bottom-2 left-0 top-2 w-px bg-line sm:left-1" aria-hidden="true" />
        <div className="space-y-6">
          {timeline.map((entry, i) => (
            <Reveal key={entry.id} delay={0.08 * i}>
              <TimelineItem entry={entry} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
