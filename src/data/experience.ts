export interface TimelineEntry {
  id: string
  period: string
  role: string
  company: string
  location?: string
  domain: string
  summary: string
  focus: string[]
  technologies: string[]
  current?: boolean
}

export const timeline: TimelineEntry[] = [
  {
    id: 'gamemano',
    period: '2026',
    role: 'PixiJS Developer',
    company: 'Gamemano Pvt Ltd',
    location: 'Noida, India',
    domain: 'Game & Graphics Engineering',
    summary:
      'Building browser-based games with PixiJS, TypeScript and WebGL — real-time graphics, game architecture and runtime performance.',
    focus: [
      'Real-time browser game development on PixiJS',
      'Interactive graphics and game systems',
      'Reusable game architecture',
      'Runtime performance work',
    ],
    technologies: ['PixiJS', 'TypeScript', 'WebGL', 'JavaScript'],
    current: true,
  },
  {
    id: 'merkur',
    period: '2023 – 2026',
    role: 'Developer / Associate Developer / Trainee Developer',
    company: 'Merkur Gaming India',
    domain: 'Slot Game Engineering',
    summary:
      'Professional slot game development across PixiJS and Phaser — game logic, animation, UI and reel mechanics.',
    focus: [
      'Slot game development with PixiJS and Phaser',
      'Game logic, animation and UI systems',
      'Reel mechanics and game state handling',
      'Grew from Trainee Developer to Developer',
    ],
    technologies: ['PixiJS', 'Phaser', 'TypeScript', 'WebGL'],
  },
  {
    id: 'start',
    period: '2022',
    role: 'Started professional development journey',
    company: 'Software Development',
    domain: 'Software Engineering Foundations',
    summary:
      'The start of a professional engineering journey that grew into a specialization in TypeScript, browser games and interactive systems.',
    focus: [
      'First professional steps in software engineering',
      'Deep focus on TypeScript, PixiJS and WebGL',
      'Foundations in interactive and game development',
    ],
    technologies: ['TypeScript', 'JavaScript', 'PixiJS'],
  },
]
