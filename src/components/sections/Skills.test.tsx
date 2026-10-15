import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { skills } from '../../data/skills'
import type { SkillGroup } from '../../types'

const groups: SkillGroup[] = [
  { category: 'Front-End', items: ['React', 'TypeScript'] },
  { category: 'Back-End', items: ['Python'] },
]

describe('Skills', () => {
  it('renders every category heading', () => {
    render(<Skills groups={groups} />)
    expect(screen.getByText('Front-End')).toBeInTheDocument()
    expect(screen.getByText('Back-End')).toBeInTheDocument()
  })

  it('renders every skill item within its category', () => {
    render(<Skills groups={groups} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
  })
})

describe('Skills with the resume data', () => {
  it('lists the resume skill categories in order', () => {
    render(<Skills groups={skills} />)
    const categories = screen.getAllByRole('heading', { level: 3 }).map((el) => el.textContent)
    expect(categories).toEqual([
      'Front-End',
      'Mobile',
      'UI Libraries',
      'State & Data',
      'Back-End & Databases',
      'Payments & Integrations',
      'Tools & Practices',
    ])
  })

  it('shows the new mobile and payments skills', () => {
    render(<Skills groups={skills} />)
    expect(screen.getByText('iOS App Store release')).toBeInTheDocument()
    expect(screen.getByText('PayPal API')).toBeInTheDocument()
    expect(screen.getByText('Postgres')).toBeInTheDocument()
  })

  it('no longer shows skills the resume dropped', () => {
    render(<Skills groups={skills} />)
    expect(screen.queryByText('SharePoint Designer')).not.toBeInTheDocument()
    expect(screen.queryByText('Sprint Planning')).not.toBeInTheDocument()
  })
})
