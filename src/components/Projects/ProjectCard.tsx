import type { Project } from '../../data/projects'
import { ProjectVisual } from './ProjectVisual'
import { TechTag } from '../ui/TechTag'
import { cn } from '../../lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const primaryHref = project.url ?? project.github ?? '#case-studies'

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong',
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
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          {project.label ? (
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] text-accent">
              {project.label}
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] text-muted"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <a
            href={primaryHref}
            target={primaryHref.startsWith('http') ? '_blank' : undefined}
            rel={primaryHref.startsWith('http') ? 'noreferrer' : undefined}
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
          {project.github && project.github !== project.url ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
