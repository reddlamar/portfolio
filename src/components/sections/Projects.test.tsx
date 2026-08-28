import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import type { Project } from '../../types'

const inReviewProject: Project = {
  name: 'Sunlit Math',
  description: 'A math game for kids.',
  status: 'in-review',
  badge: 'Coming Soon on the App Store',
  tags: ['React Native'],
  links: [{ label: 'App Store (coming soon)', href: '#' }],
}

const liveProject: Project = {
  name: 'Live App',
  description: 'A shipped app.',
  status: 'live',
  tags: ['React'],
  links: [{ label: 'View live', href: 'https://example.com' }],
}

describe('Projects', () => {
  it('renders the project name, description, and tags', () => {
    render(<Projects items={[inReviewProject]} />)
    expect(screen.getByRole('heading', { name: 'Sunlit Math' })).toBeInTheDocument()
    expect(screen.getByText('A math game for kids.')).toBeInTheDocument()
    expect(screen.getByText('React Native')).toBeInTheDocument()
  })

  it('shows a status badge when the project is in review', () => {
    render(<Projects items={[inReviewProject]} />)
    expect(screen.getByText('Coming Soon on the App Store')).toBeInTheDocument()
  })

  it('does not show a badge for a live project without one', () => {
    render(<Projects items={[liveProject]} />)
    expect(screen.queryByText('Coming Soon on the App Store')).not.toBeInTheDocument()
  })

  it('renders a link for each project', () => {
    render(<Projects items={[liveProject]} />)
    expect(screen.getByRole('link', { name: 'View live' })).toHaveAttribute(
      'href',
      'https://example.com',
    )
  })
})
