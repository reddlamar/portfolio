export interface Profile {
  name: string
  title: string
  summary: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
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

export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface Project {
  name: string
  description: string
  status: ProjectStatus
  badge?: string
  tags: string[]
  icon?: string
  screenshots?: ProjectScreenshot[]
  links: ProjectLink[]
}

export type Store = 'app-store'

export interface ProjectLink {
  label: string
  href?: string
  store?: Store
  comingSoon?: boolean
}

export interface EducationEntry {
  institution: string
  credential: string
}

export interface ContactLink {
  label: string
  href: string
}
