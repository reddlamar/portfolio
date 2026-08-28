import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the title as a heading', () => {
    render(<SectionHeading title="Experience" />)
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
  })

  it('renders an optional eyebrow label above the title', () => {
    render(<SectionHeading eyebrow="Work" title="Experience" />)
    expect(screen.getByText('Work')).toBeInTheDocument()
  })
})
