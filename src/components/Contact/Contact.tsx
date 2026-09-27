import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { SITE } from '../../lib/site'
import { SOCIAL_LINKS, mailtoHref } from '../../data/social'

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {}

  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10) errors.message = 'Please add a little more detail.'

  return errors
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const formId = useId()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors = validate({ name, email, message })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`)
    window.location.href = `${mailtoHref(`Portfolio inquiry from ${name.trim()}`)}&body=${body}`
    setSubmitted(true)
  }

  const fieldClass = (hasError: boolean) =>
    [
      'w-full rounded-xl border bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors',
      hasError ? 'border-red-500/70' : 'border-line focus:border-accent',
    ].join(' ')

  return (
    <Section
      id="contact"
      index="10"
      label="Contact"
      title={
        <>
          LET&apos;S <span className="text-gradient-accent">BUILD</span>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              Have a project, opportunity or idea?{' '}
              <span className="font-semibold text-white">Let&apos;s talk.</span>
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you need a real-time browser game, an interactive graphics experience, a
              backend API, or a full-stack product built with AI-assisted engineering — I&apos;m
              interested in the engineering problem behind it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <span className="text-accent" aria-hidden="true">
                    ›
                  </span>
                  {link.id === 'email' ? SITE.email : link.label}
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                  }}
                  className={fieldClass(Boolean(errors.name))}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                />
                {errors.name ? (
                  <p id={`${formId}-name-error`} role="alert" className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                  }}
                  className={fieldClass(Boolean(errors.email))}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                />
                {errors.email ? (
                  <p
                    id={`${formId}-email-error`}
                    role="alert"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }))
                  }}
                  rows={5}
                  className={`${fieldClass(Boolean(errors.message))} resize-none`}
                  placeholder="Tell me about your project…"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                />
                {errors.message ? (
                  <p
                    id={`${formId}-message-error`}
                    role="alert"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:bg-white hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]"
              >
                Send Message
                <span aria-hidden="true">→</span>
              </button>

              <p
                role="status"
                className="text-center font-mono text-[11px] leading-relaxed text-muted"
              >
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
