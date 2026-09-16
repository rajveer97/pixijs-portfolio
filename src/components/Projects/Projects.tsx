import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

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
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={0.1 * (i + 1)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
