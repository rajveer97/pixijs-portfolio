export type ProjectCategory = 'Game Engineering' | 'Full Stack' | 'Backend' | 'Civic Technology'

export type ProjectVisualVariant = 'game-engine' | 'techtube' | 'trading' | 'civic'

export interface ProjectLens {
  label: string
  points: string[]
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  technologies: string[]
  description: string
  highlights: string[]
  /** Engineering lens: what the problem was, how it is structured, what it required. */
  lens?: ProjectLens[]
  visual: ProjectVisualVariant
  /** Rendered as a full-width hero card on desktop. */
  featured?: boolean
  /** Placeholder entry — details are intentionally not invented. */
  placeholder?: boolean
  /** Shown instead of a link when the project has no public URL. */
  note?: string
  url?: string
  github?: string
  cta?: string
  /** In-page anchor used when a project has no public URL. */
  ctaHref?: string
  label?: string
}

export const projects: Project[] = [
  {
    id: 'game-engine',
    title: 'Game / Slot Engine',
    category: 'Game Engineering',
    technologies: ['TypeScript', 'PixiJS', 'WebGL', 'Phaser'],
    description:
      'A reusable browser game engine for slot games: reel and symbol systems, animation controllers, asset pipelines, responsive layout and a public API that games are built on. Developed through professional slot game work — production code stays private.',
    lens: [
      {
        label: 'Problem',
        points: [
          'Every title re-solved the same infrastructure: reels, symbols, animation, assets and layout',
          'Duplicated systems made fixes slow and regressions predictable',
        ],
      },
      {
        label: 'Architecture',
        points: [
          'A reusable systems layer underneath the game layer',
          'A narrow public API so games never touch renderer internals',
          'Centralized asset, layout and animation management',
        ],
      },
      {
        label: 'Engineering',
        points: [
          'Feature-based modules with event-driven state',
          'Pooling, batching and texture strategy for stable frame budgets',
          'Developer tooling that makes the systems inspectable',
        ],
      },
    ],
    highlights: [
      'Reel system',
      'Symbol system',
      'Animation system',
      'Asset pipeline',
      'Responsive layout',
      'Developer tools',
    ],
    visual: 'game-engine',
    featured: true,
    cta: 'Read the case study',
    ctaHref: '#engineering',
  },
  {
    id: 'techtube',
    title: 'TechTube',
    category: 'Full Stack',
    technologies: ['React', 'TypeScript', 'Golang', 'REST APIs', 'MongoDB'],
    description:
      'A developer-focused learning and discovery platform: curated programming tutorials, interview preparation and learning resources, organized around skills, roles and career goals.',
    lens: [
      {
        label: 'Product',
        points: [
          'Discover tutorials by skill, role and career goal',
          'Curated content with search, ratings and progress tracking',
        ],
      },
      {
        label: 'Engineering',
        points: [
          'Interface, backend services and data model built together',
          'RESTful APIs with MongoDB',
          'Automated build and deploy for repeatable releases',
        ],
      },
      {
        label: 'Architecture',
        points: [
          'Client to API to data with consistent contracts',
          'Iterated on real usage rather than assumptions',
        ],
      },
    ],
    highlights: [
      'Skill & role discovery',
      'Search & curation',
      'Ratings, comments & progress',
      'Auth & profiles',
      'RESTful APIs with MongoDB',
    ],
    visual: 'techtube',
    url: 'https://www.techtube.co.in/',
    github: 'https://github.com/rajveer97/techtube',
    cta: 'Live project',
  },
  {
    id: 'trading-platform',
    title: 'Trading / Engineering Platform',
    category: 'Backend',
    technologies: [],
    description:
      'A personal engineering project exploring market data, analytics and backend APIs. Details are being prepared — this entry is a placeholder until the real architecture is ready to publish.',
    highlights: [],
    visual: 'trading',
    placeholder: true,
    label: 'Placeholder',
    note: 'Placeholder — real project details to be added',
    /*
      Replace the fields below with the real project once it is documented.
      Nothing above this comment is invented: no users, traffic, returns or
      architecture claims are made for a project that is not published yet.
    */
    // technologies: ['Go', 'PostgreSQL', 'REST APIs'],
    // lens: [
    //   { label: 'Problem', points: ['...'] },
    //   { label: 'Architecture', points: ['...'] },
    //   { label: 'Engineering', points: ['...'] },
    // ],
    // highlights: ['...'],
    // github: 'https://github.com/rajveer97/...',
  },
  {
    id: 'we-the-people',
    title: 'We, the People of India',
    category: 'Civic Technology',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    description:
      'A personal concept platform for civic transparency: helping citizens discover government schemes, share public opinion on them, and understand how representatives have performed. A self-directed full-stack exercise, not a commissioned product.',
    highlights: [
      'Government scheme discovery',
      'Public opinion & feedback',
      'Representative scorecards',
      'Issue reporting',
      'Data visualization',
    ],
    visual: 'civic',
    label: 'Concept Project',
    note: 'Personal concept project — no public repository',
  },
]
