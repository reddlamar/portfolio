export interface Profile {
  name: string
  title: string
  summary: string
  email: string
  phone: string
  location: string
  github: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  location: string
  start: string
  end: string
  description: string
  achievements: string[]
}

export type ProjectStatus = 'live' | 'in-review'

export interface Project {
  name: string
  description: string
  status: ProjectStatus
  badge?: string
  tags: string[]
  links: {
    label: string
    href: string
  }[]
}

export interface EducationEntry {
  institution: string
  credential: string
}

export interface ContactLink {
  label: string
  href: string
}
