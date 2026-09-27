export const SITE = {
  name: 'Rajveer Pandey',
  firstName: 'Rajveer',
  lastName: 'Pandey',
  displayName: 'RAJVEER',
  title: 'Game / Graphics Engineer',
  roles: ['Game / Graphics Engineer', 'Backend Engineer', 'AI-Assisted Software Engineer'],
  alternativeTitle: 'Game / Graphics Engineer • Backend Engineer • AI-Assisted Software Engineer',
  tagline:
    'I build real-time interactive systems where graphics, game logic, APIs and AI-assisted engineering work together — from the render loop to the backend.',
  email: 'ramkumarpandey243@gmail.com',
  canonicalUrl: 'https://rajveer97.github.io/pixijs-portfolio/',
  resumePath: `${import.meta.env.BASE_URL}Resume.pdf`,
  introFlagKey: 'rp_intro_seen_v3',
  seoDescription:
    'Rajveer Pandey is a Game and Graphics Engineer building real-time browser systems with PixiJS, TypeScript and WebGL, with expanding experience in backend APIs, Go and AI-assisted engineering.',
} as const

export const SITE_URL = SITE.canonicalUrl
