export interface TimelineEntry {
  id: string
  period: string
  role: string
  company: string
  location?: string
  summary: string
  details: string[]
  current?: boolean
}

export const timeline: TimelineEntry[] = [
  {
    id: 'gamemano',
    period: '2026',
    role: 'PixiJS Developer',
    company: 'Gamemano Pvt Ltd',
    location: 'Noida, India',
    summary:
      'Building browser-based games on PixiJS with TypeScript and WebGL — focusing on interactive graphics, game architecture, mechanics and performance.',
    details: [
      'Browser-based game development on PixiJS',
      'Interactive graphics and game mechanics',
      'Game architecture and reusable systems',
      'Performance optimization for runtime graphics',
    ],
    current: true,
  },
  {
    id: 'merkur',
    period: '2023 – 2026',
    role: 'Developer / Associate Developer / Trainee Developer',
    company: 'Merkur Gaming India',
    summary:
      'Professional slot game development journey covering game logic, animations, UI, reel mechanics and performance across PixiJS and Phaser.',
    details: [
      'Slot game development with PixiJS and Phaser',
      'Game logic, animations and UI systems',
      'Reel mechanics and game state handling',
      'Grew from Trainee Developer to Developer',
    ],
  },
  {
    id: 'start',
    period: '2022',
    role: 'Started professional development journey',
    company: 'Software Development',
    summary:
      'Began a professional development journey that grew into a specialization in TypeScript, browser games and interactive engineering.',
    details: [
      'First professional steps in software engineering',
      'Deep focus on TypeScript, PixiJS and WebGL',
      'Specialized in game and interactive development',
    ],
  },
]
