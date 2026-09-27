import { SITE } from '../lib/site'

export type SocialId = 'github' | 'linkedin' | 'techTube' | 'email'

export interface SocialLink {
  id: SocialId
  label: string
  handle: string
  href: string
  external: boolean
}

export function mailtoHref(subject = 'Hello Rajveer'): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@rajveer97',
    href: 'https://github.com/rajveer97',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'in/rajveerpandey',
    href: 'https://www.linkedin.com/in/rajveerpandey/',
    external: true,
  },
  {
    id: 'techTube',
    label: 'TechTube',
    handle: 'techtube.co.in',
    href: 'https://www.techtube.co.in/',
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    handle: SITE.email,
    href: mailtoHref(),
    external: false,
  },
]
