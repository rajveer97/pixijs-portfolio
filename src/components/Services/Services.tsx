import type { ReactNode } from 'react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

interface Service {
  index: string
  title: string
  description: string
  icon: ReactNode
}

function GamepadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path d="M6 11h4M8 9v4" strokeLinecap="round" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <path d="M7.5 17 5.8 19.7a2 2 0 0 1-3.4-1.9L4 13l.6-1.6A8 8 0 0 1 12.3 5h-.6a8 8 0 0 1 7.7 6.4L20 13l1.6 4.8a2 2 0 0 1-3.4 1.9L16.5 17Z" strokeLinejoin="round" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5" strokeLinejoin="round" />
      <path d="m3 16.5 9 5 9-5" strokeLinejoin="round" />
    </svg>
  )
}

function GaugeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <path d="M4.5 18a9 9 0 1 1 15 0" strokeLinecap="round" />
      <path d="M12 14 15.5 9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="14.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3Z" strokeLinejoin="round" />
    </svg>
  )
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Game Development',
    description: 'Building browser-based games and interactive experiences.',
    icon: <GamepadIcon />,
  },
  {
    index: '02',
    title: 'Game Architecture',
    description: 'Designing reusable and maintainable game systems.',
    icon: <LayersIcon />,
  },
  {
    index: '03',
    title: 'Performance',
    description: 'Optimizing rendering, animations, assets and runtime performance.',
    icon: <GaugeIcon />,
  },
  {
    index: '04',
    title: 'Interactive Web',
    description: 'Creating immersive experiences using WebGL and modern frontend technologies.',
    icon: <GlobeIcon />,
  },
]

export function Services() {
  return (
    <Section
      id="services"
      index="06"
      label="What I Do"
      title={
        <>
          WHAT I <span className="text-gradient-accent">DO</span>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal key={service.index} delay={0.08 * i}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-accent/50 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-bg-elevated text-accent transition-colors duration-500 group-hover:border-accent/50">
                    {service.icon}
                  </span>
                  <span className="font-mono text-xs text-faint" aria-hidden="true">
                    {service.index}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
