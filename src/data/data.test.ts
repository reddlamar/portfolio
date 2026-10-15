import { experience } from './experience'
import { careerStart } from './profile'
import { skills } from './skills'
import type { ExperienceEntry } from '../types'

const flatten = (entries: ExperienceEntry[]): ExperienceEntry[] =>
  entries.flatMap((entry) => [entry, ...flatten(entry.engagements ?? [])])

describe('skills data', () => {
  it('has unique category names', () => {
    const categories = skills.map((group) => group.category)
    expect(new Set(categories).size).toBe(categories.length)
  })

  it('lists no skill more than once across categories', () => {
    const items = skills.flatMap((group) => group.items.map((item) => item.toLowerCase()))
    expect(new Set(items).size).toBe(items.length)
  })

  it('has at least one skill in every category', () => {
    skills.forEach((group) => expect(group.items.length).toBeGreaterThan(0))
  })
})

describe('experience data', () => {
  const entries = flatten(experience)

  it('has a unique company and start date per entry, since they form the React key', () => {
    const keys = entries.map((entry) => `${entry.company}-${entry.start}`)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it('begins the career at the earliest job, which is listed last', () => {
    const earliest = experience[experience.length - 1]
    const careerStartLabel = new Date(careerStart.year, careerStart.month - 1).toLocaleString(
      'en-US',
      { month: 'long', year: 'numeric' },
    )
    expect(careerStartLabel).toBe(earliest.start)
  })

  it('gives every entry a company, role, start, and end', () => {
    entries.forEach((entry) => {
      expect(entry.company).not.toBe('')
      expect(entry.role).not.toBe('')
      expect(entry.start).not.toBe('')
      expect(entry.end).not.toBe('')
    })
  })
})
