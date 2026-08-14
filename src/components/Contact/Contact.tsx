import { useState } from 'react'
import type { FormEvent } from 'react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { SITE } from '../../lib/site'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title={
        <>
          LET'S BUILD <span className="text-gradient-accent">SOMETHING</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              Have a project, opportunity or idea? <span className="text-white font-semibold">Let's talk.</span>
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether it's a browser game, an interactive experience or a PixiJS-powered product — I'm
              always interested in hearing about interesting engineering problems.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <span className="text-accent" aria-hidden="true">›</span>
                GitHub
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <span className="text-accent" aria-hidden="true">›</span>
                LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-muted transition-colors hover:text-foreground"
              >
                <span className="text-accent" aria-hidden="true">›</span>
                {SITE.email}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-line bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
                  placeholder="Tell me about your project…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:bg-white hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]"
              >
                Send Message
                <span aria-hidden="true">→</span>
              </button>

              <p className="text-center font-mono text-[11px] leading-relaxed text-faint">
                {submitted
                  ? 'Opening your email client… If nothing happened, email me directly.'
                  : 'Form opens your email client — connect a backend or email service in src/components/Contact/Contact.tsx when ready.'}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
