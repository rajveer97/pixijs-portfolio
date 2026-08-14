import { Suspense, lazy } from 'react'
import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SITE } from '../../lib/site'
import { marqueeTech } from '../../data/skills'
import { ButtonLink } from '../ui/ButtonLink'
import { ErrorBoundary } from '../ui/ErrorBoundary'

const HeroVisual = lazy(() =>
  import('./HeroVisual').then((module) => ({ default: module.HeroVisual })),
)

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const item = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
})

const HERO_FACTS = ['3+ Years Experience', 'Game Development', 'Interactive Graphics', 'TypeScript']

export function Hero() {
  const reduceMotion = useReducedMotion()
  const y = reduceMotion ? 0 : 24

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(139,92,246,0.16),transparent)]"
        aria-hidden="true"
      />
      <Suspense
        fallback={
          <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
        }
      >
        <ErrorBoundary
          fallback={
            <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
          }
        >
          <HeroVisual />
        </ErrorBoundary>
      </Suspense>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p
            variants={item(y)}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
            Portfolio — 2026 · Noida, India
          </motion.p>

          <motion.h1
            variants={item(y)}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">PIXIJS</span>
            <br />
            <span className="text-foreground">GAME DEVELOPER</span>
          </motion.h1>

          <motion.p
            variants={item(y)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {SITE.tagline}
          </motion.p>

          <motion.ul
            variants={item(y)}
            className="mt-7 flex flex-wrap gap-2.5"
            aria-label="Key facts"
          >
            {HERO_FACTS.map((fact) => (
              <li
                key={fact}
                className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted"
              >
                {fact}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item(y)} className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" size="lg">
              View My Work
              <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink href={SITE.resumePath} size="lg" variant="secondary">
              Download Resume
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={item(y)}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-xs text-muted"
          >
            <a href={SITE.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              GitHub ↗
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              LinkedIn ↗
            </a>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-foreground">
              Email ↗
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative flex overflow-hidden border-t border-line bg-bg-elevated/60 py-4 backdrop-blur-sm">
          <div className="animate-marquee flex w-max shrink-0 items-center gap-10 pr-10" aria-hidden="true">
            {[...marqueeTech, ...marqueeTech].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-display text-sm font-semibold tracking-[0.25em] text-faint"
              >
                {tech}
                <span className="text-accent">◆</span>
              </span>
            ))}
          </div>
          <span className="sr-only">Technologies: {marqueeTech.join(', ')}</span>
        </div>
      </motion.div>
    </section>
  )
}
