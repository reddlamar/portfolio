import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import type { Profile } from '../../types'

const profile: Profile = {
  name: 'Jane Dev',
  title: 'Front-End Software Engineer',
  summary: 'A summary of Jane.',
  email: 'jane@example.com',
  phone: '555-555-5555',
  location: 'Remote',
  github: 'https://github.com/janedev',
}

describe('Hero', () => {
  it("renders the profile's name, title, and summary", () => {
    render(<Hero profile={profile} />)
    expect(screen.getByRole('heading', { name: 'Jane Dev' })).toBeInTheDocument()
    expect(screen.getByText('Front-End Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('A summary of Jane.')).toBeInTheDocument()
  })

  it('renders a call-to-action link to the contact section', () => {
    render(<Hero profile={profile} />)
    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
