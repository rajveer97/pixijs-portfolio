export type ProjectCategory = 'Game Development' | 'Full Stack' | 'Civic Technology'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  technologies: string[]
  description: string
  highlights: string[]
  visual: 'reel-framework' | 'reel-slot' | 'techtube' | 'civic'
  url?: string
  github?: string
  cta?: string
  label?: string
}

export const projects: Project[] = [
  {
    id: 'slot-game-dev',
    title: 'Slot Game Development',
    category: 'Game Development',
    technologies: ['PixiJS', 'TypeScript', 'Phaser', 'WebGL'],
    description:
      'Professional experience developing interactive browser-based slot games, focusing on game logic, animations, UI systems, reel mechanics and performance.',
    highlights: ['Game logic', 'Animations', 'UI systems', 'Reel mechanics', 'Performance'],
    visual: 'reel-slot',
    cta: 'Case Study',
  },
  {
    id: 'techtube',
    title: 'TechTube',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    description:
      'A developer-focused community platform helping developers discover useful programming tutorials and educational YouTube content.',
    highlights: ['React frontend', 'REST APIs', 'Node.js backend', 'MongoDB', 'Search & discovery'],
    visual: 'techtube',
    url: 'https://www.techtube.co.in/',
    github: 'https://github.com/',
    cta: 'View Live Site',
  },
]
