import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { cn } from '../../lib/utils'

export function Projects() {
  return (
    <Section
      id="work"
      index="03"
      label="Selected Systems"
      title={
        <>
          SYSTEMS I <span className="text-gradient-accent">BUILD</span>
        </>
      }
      description="Reusable game architecture, a live full-stack product, and the backend work I am expanding into."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => {
          const isLast = i === projects.length - 1
          const isLastAloneInRow = projects.length % 2 === 0 && isLast
          const wide = project.featured === true || isLastAloneInRow

          return (
            <Reveal key={project.id} delay={0.08 * (i + 1)} className={cn(wide && 'lg:col-span-2')}>
              <ProjectCard project={project} wide={wide} />
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
