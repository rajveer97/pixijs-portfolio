import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '../../lib/utils'

interface SectionProps {
  id: string
  index: string
  label: string
  title: ReactNode
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, index, label, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 py-20 sm:py-28', className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex items-center gap-4 sm:mb-14">
            <span className="font-mono text-xs text-accent" aria-hidden="true">
              {index}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
