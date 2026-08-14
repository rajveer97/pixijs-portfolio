import { Reveal } from '../ui/Reveal'
import { ButtonLink } from '../ui/ButtonLink'
import { SITE } from '../../lib/site'

export function ResumeCTA() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/50 py-20 sm:py-28">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-64 w-[720px] max-w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(139,92,246,0.14),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Resume</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            WANT TO KNOW <span className="text-gradient-accent">MORE?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Explore my complete professional experience — studios, roles, technologies and the
            systems I've built.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href={SITE.resumePath} size="lg">
              Download Resume
              <span aria-hidden="true">↓</span>
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
