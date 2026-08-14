import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { cn } from '../../lib/utils'

const LAYOUTS = ['lg:col-span-7', 'lg:col-span-5']

export function Projects() {
  return (
    <Section
      id="projects"
      index="02"
      label="Featured Work"
      title={
        <>
          FEATURED <span className="text-gradient-accent">WORK</span>
        </>
      }
      description="Browser games, slot frameworks and full-stack products — a mix of professional game development and independent builds."
    >
      <div className="grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-12">
          <ProjectCard project={projects[0]} />
        </Reveal>
        {projects.slice(1, 3).map((project, i) => (
          <Reveal key={project.id} className={cn(LAYOUTS[i % 2])} delay={0.1 * (i + 1)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
        <Reveal className="lg:col-span-12" delay={0.2}>
          <ProjectCard project={projects[3]} />
        </Reveal>
      </div>
    </Section>
  )
}
