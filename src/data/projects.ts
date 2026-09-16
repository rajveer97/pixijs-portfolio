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
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Golang',
      'REST APIs',
      'MongoDB',
      'YouTube API',
    ],
    description:
      'A developer-focused learning and discovery platform that helps developers discover curated programming tutorials, learning resources, and interview-preparation content from YouTube, organized around skills, roles, and career goals.',
    highlights: [
      'Skill, role & interview-prep resources',
      'Curated content with search & discovery',
      'Video ratings, likes/dislikes & comments',
      'Auth & profile management',
      'Progress & streak tracking',
      'Analytics & dynamic organization',
      'RESTful APIs with MongoDB',
    ],
    visual: 'techtube',
    url: 'https://www.techtube.co.in/',
    github: 'https://github.com/rajveer97/techtube',
    cta: 'View Live Site',
  },
]
