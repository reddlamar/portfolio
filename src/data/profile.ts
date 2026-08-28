import type { ContactLink, Profile } from '../types'

export const profile: Profile = {
  name: 'Lamar Redd',
  title: 'Front-End Software Engineer',
  summary:
    'Highly skilled Front-End Software Engineer with 12 years of experience designing, developing, and optimizing high-performance web and mobile applications. Expert in JavaScript, TypeScript, React, and React Native, paired with strong back-end foundational knowledge.',
  email: 'reddlamar1@gmail.com',
  phone: '916.767.9769',
  location: 'California',
  github: 'https://github.com/reddlamar',
}

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Phone', href: `tel:${profile.phone.replace(/\./g, '-')}` },
  { label: 'GitHub', href: profile.github },
]
