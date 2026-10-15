import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'
import { experience } from '../../data/experience'
import type { ExperienceEntry } from '../../types'

const jobs: ExperienceEntry[] = [
  {
    company: 'Acme Corp',
    role: 'Front-End Engineer',
    location: 'Remote',
    start: 'Jan 2020',
    end: 'Present',
    description: 'Built things.',
    achievements: ['Shipped feature A', 'Shipped feature B'],
  },
  {
    company: 'Beta LLC',
    role: 'Web Developer',
    location: 'NYC',
    start: 'Jan 2018',
    end: 'Dec 2019',
    description: 'Built other things.',
    achievements: ['Shipped feature C'],
  },
]

const consulting: ExperienceEntry = {
  company: 'Consulting Co',
  role: 'Software Engineer Consultant',
  location: 'Remote',
  start: 'Jan 2024',
  end: 'Aug 2026',
  description: 'Places engineers on client projects.',
  achievements: [],
  engagements: [
    {
      company: 'Client Inc',
      role: 'Front-End Engineer (Contract)',
      location: 'Remote',
      start: 'Jul 2024',
      end: 'Aug 2026',
      description: 'A lender.',
      achievements: ['Shipped client feature'],
    },
  ],
}

describe('Experience', () => {
  it('renders one entry per job, in order', () => {
    render(<Experience jobs={jobs} />)
    const companies = screen.getAllByRole('heading', { level: 3 }).map((el) => el.textContent)
    expect(companies).toEqual(['Acme Corp', 'Beta LLC'])
  })

  it('renders the role, dates, and achievements for each job', () => {
    render(<Experience jobs={jobs} />)
    expect(screen.getByText('Front-End Engineer')).toBeInTheDocument()
    expect(screen.getByText('Jan 2020 – Present')).toBeInTheDocument()
    expect(screen.getByText('Shipped feature A')).toBeInTheDocument()
    expect(screen.getByText('Shipped feature C')).toBeInTheDocument()
  })

  it('omits the description when a job has none', () => {
    render(<Experience jobs={[{ ...jobs[1], description: undefined }]} />)
    // The role is followed directly by the bullet list, with no empty paragraph between.
    expect(screen.getByText('Web Developer').nextElementSibling?.tagName).toBe('UL')
  })

  it('omits the bullet list when a job has no achievements', () => {
    render(<Experience jobs={[{ ...jobs[0], achievements: [] }]} />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('renders a nested engagement as a sub-heading under its parent job', () => {
    render(<Experience jobs={[consulting, jobs[1]]} />)
    const headings = screen.getAllByRole('heading').map((el) => el.textContent)
    expect(headings).toEqual(['Experience', 'Consulting Co', 'Client Inc', 'Beta LLC'])
    expect(screen.getByRole('heading', { level: 4, name: 'Client Inc' })).toBeInTheDocument()
  })

  it('keeps top-level jobs as the only level-3 headings', () => {
    render(<Experience jobs={[consulting, jobs[1]]} />)
    const companies = screen.getAllByRole('heading', { level: 3 }).map((el) => el.textContent)
    expect(companies).toEqual(['Consulting Co', 'Beta LLC'])
  })

  it("renders the engagement's own role, dates, description, and bullets", () => {
    render(<Experience jobs={[consulting]} />)
    expect(screen.getByText('Front-End Engineer (Contract)')).toBeInTheDocument()
    expect(screen.getByText('Jul 2024 – Aug 2026')).toBeInTheDocument()
    expect(screen.getByText('A lender.')).toBeInTheDocument()
    expect(screen.getByText('Shipped client feature')).toBeInTheDocument()
  })
})

describe('Experience with the resume data', () => {
  it('leads with Sunlit Studio and nests Freedom Mortgage under Tech Consulting', () => {
    render(<Experience jobs={experience} />)
    const headings = screen.getAllByRole('heading').map((el) => el.textContent)
    expect(headings).toEqual([
      'Experience',
      'Sunlit Studio',
      'Tech Consulting',
      'Freedom Mortgage',
      'Robot Cache',
      'Cofebe',
      'LinQuest',
      '6th Street Consulting',
    ])
    expect(screen.getByRole('heading', { level: 4, name: 'Freedom Mortgage' })).toBeInTheDocument()
  })

  it('shows Sunlit Studio as a current founder role', () => {
    render(<Experience jobs={experience} />)
    expect(screen.getByText('Founder & Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('September 2026 – Present')).toBeInTheDocument()
  })

  it('shows the consultant and contract roles', () => {
    render(<Experience jobs={experience} />)
    expect(screen.getByText('Software Engineer Consultant')).toBeInTheDocument()
    expect(screen.getByText('Front-End Software Engineer (Contract)')).toBeInTheDocument()
  })
})
