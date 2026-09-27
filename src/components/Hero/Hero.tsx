import { Suspense, lazy, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SITE } from '../../lib/site'
import { SOCIAL_LINKS } from '../../data/social'
import { heroCapabilities } from '../../data/skills'
import { systemNodes, type SystemNodeId } from '../../data/systemMap'
import { ButtonLink } from '../ui/ButtonLink'
import { ErrorBoundary } from '../ui/ErrorBoundary'
import { cn } from '../../lib/utils'

const SystemMap = lazy(() =>
  import('./SystemMap').then((module) => ({ default: module.SystemMap })),
)

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const item = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
})

const DEFAULT_NODE: SystemNodeId = 'graphics'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const y = reduceMotion ? 0 : 24
  const [activeNode, setActiveNode] = useState<SystemNodeId>(DEFAULT_NODE)
  const active = systemNodes.find((node) => node.id === activeNode) ?? systemNodes[0]

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(139,92,246,0.16),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-14 pt-28 sm:px-8 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item(y)}
              className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
              Portfolio — 2026 · Noida, India
            </motion.p>

            <motion.h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
              <motion.span variants={item(y)} className="block text-foreground">
                {SITE.displayName}
              </motion.span>
              <motion.span
                variants={item(y)}
                className="mt-2 block text-2xl text-gradient sm:mt-3 sm:text-4xl"
              >
                GAME / GRAPHICS ENGINEER
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item(y)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {SITE.tagline}
            </motion.p>

            <motion.div variants={item(y)} className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#work" size="lg">
                View My Work
                <span aria-hidden="true">→</span>
              </ButtonLink>
              <ButtonLink href="#engineering" size="lg" variant="secondary">
                Explore My Engineering
              </ButtonLink>
              <ButtonLink href={SITE.resumePath} size="lg" variant="ghost" download>
                Download Resume
              </ButtonLink>
            </motion.div>

            <motion.div
              variants={item(y)}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-xs text-muted"
            >
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                  {link.external ? (
                    <span aria-hidden="true" className="ml-0.5">
                      ↗
                    </span>
                  ) : null}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={item(y)}
            className="relative min-h-[460px] overflow-hidden rounded-3xl border border-line bg-surface/40 backdrop-blur-sm sm:min-h-[500px]"
          >
            <Suspense fallback={<div className="grid-bg absolute inset-0 opacity-40" />}>
              <ErrorBoundary fallback={<div className="grid-bg absolute inset-0 opacity-40" />}>
                <SystemMap
                  activeId={activeNode}
                  onActiveChange={(id) => {
                    if (id) setActiveNode(id)
                  }}
                />
              </ErrorBoundary>
            </Suspense>

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
              <div>
                <span className="inline-block rounded-full border border-line bg-bg/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
                  Engineering Universe
                </span>

                <div
                  aria-live="polite"
                  className="mt-3 max-w-sm rounded-2xl border border-line bg-bg/70 p-4 backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {active.label}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/90 sm:line-clamp-none">
                    {active.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {active.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-line bg-bg-elevated px-2 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                role="group"
                aria-label="Engineering system layers"
                className="pointer-events-auto flex flex-wrap gap-1.5"
              >
                {systemNodes.map((node) => (
                  <button
                    key={node.id}
                    type="button"
                    aria-pressed={node.id === activeNode}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onFocus={() => setActiveNode(node.id)}
                    onClick={() => setActiveNode(node.id)}
                    className={cn(
                      'rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors',
                      node.id === activeNode
                        ? 'border-accent bg-accent/15 text-white'
                        : 'border-line bg-bg/70 text-muted hover:border-line-strong hover:text-foreground',
                    )}
                  >
                    {node.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative flex overflow-hidden border-t border-line bg-bg-elevated/60 py-4 backdrop-blur-sm">
          <div
            className="animate-marquee flex w-max shrink-0 items-center gap-10 pr-10"
            aria-hidden="true"
          >
            {[...heroCapabilities, ...heroCapabilities].map((tech, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-display text-sm font-semibold tracking-[0.25em] text-faint"
              >
                {tech}
                <span className="text-accent" aria-hidden="true">
                  ◆
                </span>
              </span>
            ))}
          </div>
          <h2 className="sr-only">Technologies</h2>
          <ul className="sr-only">
            {heroCapabilities.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
