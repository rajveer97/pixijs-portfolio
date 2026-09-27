import type { Project } from '../../data/projects'
import { ProjectVisual } from './ProjectVisual'
import { TechTag } from '../ui/TechTag'
import { cn } from '../../lib/utils'

interface ProjectCardProps {
  project: Project
  /** Full-width treatment on desktop for the lead project. */
  wide?: boolean
  className?: string
}

export function ProjectCard({ project, wide = false, className }: ProjectCardProps) {
  const primaryHref = project.url ?? project.github ?? project.ctaHref
  const isExternal = primaryHref?.startsWith('http') ?? false

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-colors duration-500',
        project.placeholder
          ? 'border-dashed border-line-strong'
          : 'border-line hover:border-line-strong',
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectVisual variant={project.visual} className="h-full w-full" />
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-line bg-bg/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
          {project.category}
        </div>
        {project.featured ? (
          <div className="absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
            Core System
          </div>
        ) : null}
        {project.placeholder ? (
          <div className="absolute right-4 top-4 rounded-full border border-line-strong bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-faint backdrop-blur-sm">
            In progress
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3
            className={cn(
              'font-display font-bold tracking-tight text-foreground',
              wide ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
            )}
          >
            {project.title}
          </h3>
          {project.label ? (
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] text-accent">
              {project.label}
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {project.lens ? (
          <dl className="mt-7 grid gap-5 sm:grid-cols-3">
            {project.lens.map((lens) => (
              <div key={lens.label} className="border-t border-line pt-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {lens.label}
                </dt>
                <dd>
                  <ul className="mt-2 space-y-1.5">
                    {lens.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {project.highlights.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        {project.technologies.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          {primaryHref ? (
            <a
              href={primaryHref}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {project.cta ?? 'View Project'}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              >
                →
              </span>
            </a>
          ) : project.note ? (
            <span className="font-mono text-[11px] text-faint">{project.note}</span>
          ) : null}
          {project.github && project.github !== project.url ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
