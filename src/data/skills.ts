export interface SkillGroup {
  id: string
  title: string
  blurb: string
  skills: string[]
  accent: string
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'game-development',
    title: 'Game Development',
    blurb: 'The core of what I build every day.',
    skills: [
      'PixiJS',
      'Phaser',
      'TypeScript',
      'JavaScript',
      'WebGL',
      'Canvas',
      'Game Architecture',
      'Animation Systems',
      'Slot Game Development',
    ],
    accent: 'text-accent',
  },
  {
    id: 'frontend',
    title: 'Frontend',
    blurb: 'Interfaces and interactive layers.',
    skills: ['React', 'Tailwind CSS', 'Three.js', 'HTML', 'CSS'],
    accent: 'text-cyan',
  },
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'APIs and services behind the scenes.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    accent: 'text-blue',
  },
  {
    id: 'tools',
    title: 'Tools',
    blurb: 'The workflow I ship with.',
    skills: ['Git', 'Azure DevOps', 'Jenkins', 'SonarQube', 'Postman', 'SVN'],
    accent: 'text-muted',
  },
]

export const marqueeTech = [
  'PIXIJS',
  'TYPESCRIPT',
  'WEBGL',
  'PHASER',
  'GAME ARCHITECTURE',
  'SLOT GAMES',
  'REEL SYSTEMS',
  'ANIMATION SYSTEMS',
  'REACT',
  'NODE.JS',
  'PERFORMANCE',
  'INTERACTIVE WEB',
]
