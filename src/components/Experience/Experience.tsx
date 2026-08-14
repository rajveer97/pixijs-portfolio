import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { timeline } from '../../data/experience'
import type { TimelineEntry } from '../../data/experience'
import { cn } from '../../lib/utils'

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const [open, setOpen] = useState(index === 0)

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
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-line px-5 py-5 sm:px-7 sm:py-6">
                <p className="text-sm leading-relaxed text-muted">{entry.summary}</p>
                <ul className="mt-4 space-y-2">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {detail}
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
      index="04"
      label="Experience"
      title={
        <>
          CAREER <span className="text-gradient-accent">TIMELINE</span>
        </>
      }
      description="A professional journey through game studios and slot game development."
    >
      <div className="relative">
        <div
          className="absolute bottom-2 left-0 top-2 w-px bg-line sm:left-1"
          aria-hidden="true"
        />
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
