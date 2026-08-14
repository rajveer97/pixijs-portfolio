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
    id: 'slot-framework',
    title: 'Slot Game Framework',
    category: 'Game Development',
    technologies: ['TypeScript', 'PixiJS', 'WebGL'],
    description:
      'A scalable game framework for building browser-based slot games with reusable components, game systems, animations, asset management and responsive layouts.',
    highlights: [
      'Reel system',
      'Symbol system',
      'Animation system',
      'Asset loading',
      'Game state management',
      'Responsive layout',
    ],
    visual: 'reel-framework',
    cta: 'Case Study',
  },
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
    github: 'https://github.com/',
    cta: 'View on GitHub',
  },
  {
    id: 'we-the-people',
    title: 'We, the People of India',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    description:
      'A conceptual civic technology platform focused on helping citizens discover government schemes, share public opinions and understand representative performance.',
    highlights: [
      'Government schemes',
      'Public opinion',
      'Representative scorecards',
      'Reporting system',
      'Data visualization',
    ],
    visual: 'civic',
    github: 'https://github.com/',
    cta: 'View on GitHub',
    label: 'Personal concept project',
  },
]
