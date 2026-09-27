export interface Domain {
  id: string
  index: string
  title: string
  summary: string
  technologies: string[]
  capabilities: string[]
  accent: 'accent' | 'cyan' | 'blue'
}

export const domains: Domain[] = [
  {
    id: 'game-graphics',
    index: '01',
    title: 'Game & Graphics Engineering',
    summary:
      'I build real-time browser systems where rendering, animation, state and performance have to work together.',
    technologies: ['PixiJS', 'TypeScript', 'WebGL', 'Phaser'],
    capabilities: [
      'Rendering pipelines',
      'Animation systems',
      'Reel & game state logic',
      'Frame-budget optimization',
    ],
    accent: 'accent',
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend & API Engineering',
    summary:
      'I design APIs and data models that sit behind interactive products — clear, testable and built to extend.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST', 'Go (expanding)'],
    capabilities: [
      'REST API design',
      'Data modeling',
      'Service boundaries',
      'Debugging & integration',
    ],
    accent: 'cyan',
  },
  {
    id: 'ai',
    index: '03',
    title: 'AI-Assisted Software Engineering',
    summary:
      'I use AI as an engineering accelerator — exploring, scaffolding, testing and reviewing — while owning the architecture and the quality.',
    technologies: ['AI coding assistants', 'Prompting workflows', 'Test generation', 'Code review'],
    capabilities: [
      'Requirement exploration',
      'Rapid scaffolding',
      'Test coverage',
      'Documentation & review',
    ],
    accent: 'blue',
  },
]
