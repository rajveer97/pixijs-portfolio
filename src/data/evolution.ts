export interface EvolutionStep {
  id: string
  index: string
  title: string
  headline: string
  body: string
  learning: string[]
}

export const evolutionSteps: EvolutionStep[] = [
  {
    id: 'graphics',
    index: '01',
    title: 'Graphics & Interaction',
    headline: 'Started where the pixels are.',
    body: 'I started in interactive graphics, learning how rendering, animation and responsiveness behave when every frame has to hold up. That is where I built my instinct for performance.',
    learning: ['WebGL', 'PixiJS', 'Animation', 'Responsive layout', 'Debugging'],
  },
  {
    id: 'systems',
    index: '02',
    title: 'Systems & Architecture',
    headline: 'Moved from scenes to systems.',
    body: 'Once individual scenes worked, the interesting problem became structure: reusable components, predictable state, asset pipelines and rendering cost across a whole product.',
    learning: [
      'Game architecture',
      'Reusable systems',
      'Asset pipelines',
      'Profiling',
      'Code review',
    ],
  },
  {
    id: 'ai',
    index: '03',
    title: 'AI-Augmented Engineering',
    headline: 'Now the workflow is part of the system.',
    body: 'Today I treat AI as part of the engineering process itself — exploring options, generating tests, debugging and reviewing faster, while the architecture and the final quality stay mine.',
    learning: ['AI-assisted development', 'System design', 'Testing strategy', 'Backend & APIs'],
  },
]

export interface TrajectoryMilestone {
  id: string
  period: string
  role: string
  focus: string
  current?: boolean
}

export const trajectory: TrajectoryMilestone[] = [
  {
    id: 'start',
    period: '2022',
    role: 'Start',
    focus:
      'First professional steps in software development — TypeScript, browser games, interactive engineering.',
  },
  {
    id: 'slot',
    period: '2023',
    role: 'Slot Game Engineering',
    focus:
      'Trainee to Developer at Merkur Gaming India. PixiJS and Phaser slot games, reel mechanics, animation systems and game state.',
  },
  {
    id: 'systems',
    period: '2024 – 2026',
    role: 'Game Systems',
    focus:
      'Reusable game systems, runtime performance work, delivery pipelines and code review across production titles.',
  },
  {
    id: 'graphics',
    period: '2026',
    role: 'Browser Game Engineering',
    focus:
      'PixiJS Developer at Gamemano. Real-time browser games, graphics pipelines and game architecture.',
  },
  {
    id: 'expanding',
    period: 'Now',
    role: 'Backend & AI-Augmented',
    focus:
      'Expanding into Go, APIs, data modeling and distributed systems, with AI-assisted engineering as an accelerator.',
    current: true,
  },
]
