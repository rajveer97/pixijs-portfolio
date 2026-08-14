import type { MouseEvent } from 'react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { skillGroups } from '../../data/skills'
import type { SkillGroup } from '../../data/skills'
import { cn } from '../../lib/utils'

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong sm:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,0.1), transparent 70%)',
        }}
      />
      <div className="relative">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-mono text-xs text-accent" aria-hidden="true">
            {index.toString().padStart(2, '0')}
          </span>
          <span className={cn('font-mono text-[10px] uppercase tracking-widest', group.accent)}>
            {group.skills.length} items
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">
          {group.title}
        </h3>
        <p className="mt-1 text-sm text-faint">{group.blurb}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
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
  )
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      label="Technical Skills"
      title={
        <>
          SKILL <span className="text-gradient-accent">SET</span>
        </>
      }
      description="The stack I use to ship games and interactive products — from engine-level rendering to full-stack services."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={0.08 * i}>
            <SkillCard group={group} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
