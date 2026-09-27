export type SystemNodeId = 'graphics' | 'game' | 'api' | 'data' | 'ai'

export interface SystemNodeSpec {
  id: SystemNodeId
  label: string
  glyph: 'diamond' | 'seven' | 'bar' | 'circle' | 'triangle'
  color: number
  fx: number
  fy: number
  /** Narrow-viewport position override, used when the card is too small for the default layout. */
  fxSm?: number
  fySm?: number
  description: string
  technologies: string[]
}

export interface SystemEdge {
  from: SystemNodeId
  to: SystemNodeId
}

export const systemNodes: SystemNodeSpec[] = [
  {
    id: 'graphics',
    label: 'GRAPHICS',
    glyph: 'diamond',
    color: 0x22d3ee,
    fx: 0.5,
    fy: 0.48,
    fxSm: 0.5,
    fySm: 0.5,
    description: 'Rendering pipelines, animation systems, layout and frame budgets in the browser.',
    technologies: ['PixiJS', 'WebGL', 'TypeScript'],
  },
  {
    id: 'game',
    label: 'GAME SYSTEMS',
    glyph: 'seven',
    color: 0xfbbf24,
    fx: 0.2,
    fy: 0.66,
    fxSm: 0.17,
    fySm: 0.5,
    description: 'Reusable game systems: mechanics, state machines and reel logic.',
    technologies: ['Game Architecture', 'State Management', 'PixiJS'],
  },
  {
    id: 'api',
    label: 'API',
    glyph: 'bar',
    color: 0x8b5cf6,
    fx: 0.8,
    fy: 0.66,
    fxSm: 0.83,
    fySm: 0.5,
    description: 'REST services, request handling and clear service boundaries.',
    technologies: ['Node.js', 'Express', 'REST', 'Go'],
  },
  {
    id: 'data',
    label: 'DATA',
    glyph: 'circle',
    color: 0x3b82f6,
    fx: 0.36,
    fy: 0.8,
    fxSm: 0.32,
    fySm: 0.7,
    description: 'Schemas, queries, persistence and the decisions behind stored state.',
    technologies: ['MongoDB', 'PostgreSQL'],
  },
  {
    id: 'ai',
    label: 'AI WORKFLOW',
    glyph: 'triangle',
    color: 0xffffff,
    fx: 0.64,
    fy: 0.8,
    fxSm: 0.68,
    fySm: 0.7,
    description: 'AI-assisted exploration, testing, debugging and review — human owned.',
    technologies: ['AI Assistants', 'Test Generation', 'Review'],
  },
]

export const systemEdges: SystemEdge[] = [
  { from: 'graphics', to: 'game' },
  { from: 'graphics', to: 'api' },
  { from: 'game', to: 'api' },
  { from: 'game', to: 'data' },
  { from: 'api', to: 'data' },
  { from: 'api', to: 'ai' },
  { from: 'graphics', to: 'ai' },
]
