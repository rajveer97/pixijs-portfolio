export interface CaseStudy {
  id: string
  index: string
  title: string
  subtitle: string
  domain: string
  problem: string
  approach: string
  nodes: string[]
  nodesNote: string
  decisions: string[]
  result: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'reusable-architecture',
    index: '01',
    title: 'Reusable PixiJS Architecture',
    subtitle: 'A game engine layer instead of repeated game code',
    domain: 'Game Engineering',
    problem:
      'Browser games at production scale need more than scenes. Every new title started by re-solving loading, layout, reel logic, animation and state — the same problems, repeatedly, in slightly different shapes.',
    approach:
      'I designed a reusable system layer underneath the game layer: assets, scenes, responsive layout, animation, state and a narrow public API. Games describe behaviour; the engine layer owns the plumbing.',
    nodes: ['Game Code', 'Public API', 'Systems Layer', 'PixiJS Renderer'],
    nodesNote: 'Game code depends on the public API — never on renderer internals.',
    decisions: [
      'Feature-based modules instead of deep class hierarchies',
      'A narrow public API so games cannot reach into engine internals',
      'Centralized asset, layout and animation management rather than per-scene setup',
      'Event-driven communication over shared mutable global state',
    ],
    result:
      'New games and features build on the same system layer instead of duplicating infrastructure, so the codebase stays maintainable as it grows. Production code stays private — these diagrams describe structure, not source.',
    tags: ['PixiJS', 'TypeScript', 'Game Architecture', 'Reusable Systems'],
  },
  {
    id: 'rendering-performance',
    index: '02',
    title: 'Rendering & Performance Optimization',
    subtitle: 'Treating the frame budget as a design constraint',
    domain: 'Game Engineering',
    problem:
      'Animation-heavy browser games stutter when asset and runtime cost grow: too many draw calls, unmanaged textures and effects competing for the same frame budget with no measurement behind them.',
    approach:
      'I profile first, then manage rendering as an explicit budget: object pooling, texture atlasing, batched sprites, delta-time-driven animation and no per-frame allocation in hot paths.',
    nodes: ['Profile & Measure', 'Pool & Batch', 'Texture Strategy', 'Stable Frame Budget'],
    nodesNote: 'Optimize from measurement, not from assumption.',
    decisions: [
      'Profile before optimizing — no speculative rewrites',
      'Object pooling for objects created every frame',
      'Texture atlasing to cut draw calls',
      'Animation driven by delta time rather than assumed frame counts',
    ],
    result:
      'Frame behavior became predictable under load and heavy animation scenes stopped competing for the same budget. Exact production frame timings stay internal and are not published here.',
    tags: ['WebGL', 'PixiJS', 'Profiling', 'Performance'],
  },
  {
    id: 'backend-apis',
    index: '03',
    title: 'Backend API & Data Modeling',
    subtitle: 'Clear contracts between client, service and data',
    domain: 'Backend Engineering',
    problem:
      'Interactive products need a backend that stays clear as features grow. When endpoints, validation and data shapes are decided ad hoc, a working prototype becomes expensive to extend.',
    approach:
      'I designed resource-oriented REST endpoints, kept validation and error handling consistent across the surface, and modelled data around how the product is actually queried rather than mirroring the UI.',
    nodes: ['Client', 'REST API', 'Validation Layer', 'Database'],
    nodesNote: 'One consistent contract between client, API and data layer.',
    decisions: [
      'Resource-oriented REST design with predictable status codes',
      'Validation at the boundary instead of scattered inside handlers',
      'Data models shaped by real access patterns',
      'Environment-based configuration kept out of the repository',
    ],
    result:
      'A backend I can reason about: new endpoints follow the same patterns and client features build against stable contracts. This is my expanding area, and where I am deliberately moving next.',
    tags: ['Node.js', 'Express', 'REST', 'MongoDB', 'Go (expanding)'],
  },
  {
    id: 'ai-workflow',
    index: '04',
    title: 'AI-Assisted Development Workflow',
    subtitle: 'An accelerator inside a human-owned engineering loop',
    domain: 'AI-Assisted Engineering',
    problem:
      'Building a system is more than writing code. Exploring approaches, writing tests, debugging and documenting all compete for the same limited time.',
    approach:
      'I treat AI as part of the engineering loop: architecture is decided by me first, then AI accelerates exploration, scaffolding, test generation, debugging and second-opinion review.',
    nodes: ['Human Architecture', 'AI-Assisted Build', 'Tests & Verification', 'Human Review'],
    nodesNote: 'AI accelerates the loop — it never owns the decision.',
    decisions: [
      'Architecture and design decided before any AI assistance',
      'AI output reviewed like any other code I write',
      'Tests verify real behavior instead of generated expectations',
      'Prompting treated as an engineering skill, not a shortcut',
    ],
    result:
      'Faster exploration and broader test coverage per unit of time, with unchanged accountability for what ships. The workflow is documented here in full rather than claimed as a metric.',
    tags: ['AI Tools', 'Testing', 'Code Review', 'Prompting'],
  },
  {
    id: 'full-stack',
    index: '05',
    title: 'Full-Stack Idea to Deployment',
    subtitle: 'Taking a product from concept to a live service',
    domain: 'Full-Stack Engineering',
    problem:
      'An idea only matters when it can reach users. Shipping end-to-end means the interface, the backend, the data and the deployment have to work together rather than separately.',
    approach:
      'I took TechTube from concept to a live product — interface, backend services, data model, build pipeline and deployment — iterating against what the real product demanded instead of assumptions.',
    nodes: ['Frontend Experience', 'Backend Services', 'Data Layer', 'Build & Deploy'],
    nodesNote: 'Idea to live product: interface, services, data and deployment.',
    decisions: [
      'Ship a working slice end-to-end before widening scope',
      'Keep the data model aligned with real product usage',
      'Automated build and deploy so releases stay repeatable',
      'Iterate on live feedback rather than assumptions',
    ],
    result:
      'A live product at techtube.co.in, built end-to-end from the frontend interface through backend services and deployment.',
    tags: ['React', 'Node.js', 'MongoDB', 'CI/CD', 'Deployment'],
  },
]
