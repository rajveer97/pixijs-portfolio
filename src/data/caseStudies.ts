export interface CaseStudy {
  id: string
  index: string
  title: string
  subtitle: string
  problem: string
  approach: string
  nodes: string[]
  nodesNote?: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'reel-engine',
    index: '01',
    title: 'Reel Engine',
    subtitle: 'A reusable core for slot gameplay',
    problem:
      'Managing multiple reels, symbols, animations and game states in one reusable architecture that different games can share without rewriting the core.',
    approach:
      'Split the system into a layered hierarchy where each layer owns one responsibility — the Game composes the whole scene, the Reel Manager owns all reels, each Reel owns its symbols, and the Animation Controller keeps every transition independent and cancelable.',
    nodes: ['Game', 'Reel Manager', 'Reel', 'Symbol', 'Animation Controller'],
    nodesNote: 'Ownership flows downward; state and events flow upward.',
    tags: ['Architecture', 'Reels', 'State'],
  },
  {
    id: 'asset-loading',
    index: '02',
    title: 'Asset Loading',
    subtitle: 'Predictable, observable loading',
    problem:
      'Games load dozens of textures, spritesheets, sounds and fonts — unmanaged loading leads to blank screens, broken progress and memory pressure.',
    approach:
      'Centralize loading through a pipeline that batches requests, reports progress, caches resources by key and unloads textures that are no longer in use.',
    nodes: ['Boot Screen', 'Manifest', 'Loader', 'Resource Cache', 'Game Systems'],
    nodesNote: 'Every asset is requested once, tracked, and released when unused.',
    tags: ['Assets', 'Performance', 'UX'],
  },
  {
    id: 'responsive-layout',
    index: '03',
    title: 'Responsive Game Layout',
    subtitle: 'One layout, every screen size',
    problem:
      'A slot game must look right from a 320px mobile screen to a desktop monitor — naive scaling breaks aspect ratio, hit areas and readability.',
    approach:
      'Compute a unified scale from a virtual design resolution, anchor containers to safe areas, and re-measure on resize and orientation change so the scene scales without distortion.',
    nodes: ['Viewport', 'Layout Manager', 'Scaler', 'Containers', 'Symbols & UI'],
    nodesNote: 'Design resolution is fixed; runtime resolution adapts.',
    tags: ['Responsive', 'PixiJS', 'Mobile'],
  },
  {
    id: 'animation-architecture',
    index: '04',
    title: 'Animation Architecture',
    subtitle: 'Cancelable, composable animation',
    problem:
      'Win animations, symbol reveals and UI transitions overlap constantly — competing tweens cause jumps, races and frame drops.',
    approach:
      'Route every visual change through a small animation system with priorities, lifetimes and cleanup, so any animation can be interrupted cleanly without leaving the scene in a broken state.',
    nodes: ['Animation Controller', 'Animations', 'Transitions', 'Timeline', 'Scene'],
    nodesNote: 'Every animation is cancelable and owned by the controller.',
    tags: ['Animation', 'Systems', 'PixiJS'],
  },
]
