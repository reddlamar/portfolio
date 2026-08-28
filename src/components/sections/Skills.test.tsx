import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
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
