import type { ContactLink, MonthYear, Profile } from '../types'
import { yearsSince } from '../utils/yearsSince'

// When the career began (6th Street Consulting). The years in the summary count up from here.
export const careerStart: MonthYear = { year: 2013, month: 6 }

export const buildSummary = (years: number) =>
  `Highly skilled Front-End Software Engineer with ${years} years of experience designing, developing, and optimizing high-performance web and mobile applications. Expert in JavaScript, TypeScript, React, and React Native, paired with strong back-end foundational knowledge.`

export const profile: Profile = {
  name: 'Lamar Redd',
  title: 'Front-End Software Engineer',
  summary: buildSummary(yearsSince(careerStart)),
  email: 'reddlamar1@gmail.com',
  phone: '916.767.9769',
  location: 'California',
  github: 'https://github.com/reddlamar',
  linkedin: 'https://www.linkedin.com/in/lamar-redd-198373298/',
}

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Phone', href: `tel:${profile.phone.replace(/\./g, '-')}` },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
]
