export type StackAccent = 'accent' | 'cyan' | 'blue' | 'muted'

export interface StackLayer {
  id: string
  title: string
  status: string
  blurb: string
  skills: string[]
  accent: StackAccent
}

export const stackLayers: StackLayer[] = [
  {
    id: 'core',
    title: 'Core',
    status: 'Primary expertise',
    blurb: 'The graphics and game engineering I build with every day.',
    skills: [
      'PixiJS',
      'TypeScript',
      'JavaScript',
      'WebGL',
      'Canvas Rendering',
      'Game Architecture',
      'Animation Systems',
      'Slot Game Systems',
    ],
    accent: 'accent',
  },
  {
    id: 'backend',
    title: 'Backend',
    status: 'Expanding',
    blurb: 'APIs and data models behind interactive products.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'API Design'],
    accent: 'cyan',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    status: 'Working toolkit',
    blurb: 'The tools I use to ship, review and maintain code.',
    skills: [
      'React',
      'Tailwind CSS',
      'Vite',
      'HTML5',
      'CSS3',
      'Git',
      'Azure DevOps',
      'Jenkins',
      'Postman',
      'SonarQube',
      'SVN',
    ],
    accent: 'blue',
  },
  {
    id: 'exploring',
    title: 'Exploring',
    status: 'Current learning',
    blurb: 'Where I am deliberately growing next.',
    skills: [
      'Go',
      'Distributed Systems',
      'PostgreSQL',
      'Docker',
      'Cloud Platforms',
      'AI-Assisted Development',
    ],
    accent: 'muted',
  },
]

export const heroCapabilities = [
  'PIXIJS',
  'TYPESCRIPT',
  'WEBGL',
  'GO',
  'REACT',
  'MONGODB',
  'AI-ASSISTED DEVELOPMENT',
]
