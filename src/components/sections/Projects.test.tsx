import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import type { Project } from '../../types'

const inReviewProject: Project = {
  name: 'Sunlit Math',
  description: 'A math game for kids.',
  status: 'in-review',
  badge: 'Coming Soon on the App Store',
  tags: ['React Native'],
  icon: '/icon.png',
  screenshots: [
    { src: '/home.png', alt: 'Sunlit Math home screen' },
    { src: '/game.png', alt: 'Sunlit Math gameplay screen' },
  ],
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

  it('renders the app icon when provided', () => {
    render(<Projects items={[inReviewProject]} />)
    expect(screen.getByRole('img', { name: 'Sunlit Math app icon' })).toHaveAttribute(
      'src',
      '/icon.png',
    )
  })

  it('does not render an icon when none is provided', () => {
    render(<Projects items={[liveProject]} />)
    expect(screen.queryByRole('img', { name: /app icon/ })).not.toBeInTheDocument()
  })

  it('renders every screenshot with its alt text', () => {
    render(<Projects items={[inReviewProject]} />)
    expect(screen.getByRole('img', { name: 'Sunlit Math home screen' })).toHaveAttribute(
      'src',
      '/home.png',
    )
    expect(screen.getByRole('img', { name: 'Sunlit Math gameplay screen' })).toHaveAttribute(
      'src',
      '/game.png',
    )
  })
})
