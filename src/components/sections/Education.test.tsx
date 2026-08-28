import { render, screen } from '@testing-library/react'
import { Education } from './Education'
import type { EducationEntry } from '../../types'

const items: EducationEntry[] = [
  { institution: 'Some University', credential: 'B.S. in Computer Science' },
  { institution: 'Some Bootcamp', credential: 'Certificate' },
]

describe('Education', () => {
  it('renders each institution and credential', () => {
    render(<Education items={items} />)
    expect(screen.getByText('Some University')).toBeInTheDocument()
    expect(screen.getByText('B.S. in Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Some Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Certificate')).toBeInTheDocument()
  })
})
