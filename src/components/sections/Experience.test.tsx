import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'
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
})
