import { render, screen } from '@testing-library/react'
import { StoreBadge } from './StoreBadge'

describe('StoreBadge', () => {
  it('renders the official App Store badge artwork', () => {
    render(<StoreBadge store="app-store" />)
    expect(screen.getByRole('img', { name: 'Download on the App Store' })).toHaveAttribute(
      'src',
      expect.stringContaining('app-store-badge.svg'),
    )
  })

  it('renders at the 40px minimum onscreen height from Apple’s guidelines', () => {
    render(<StoreBadge store="app-store" />)
    expect(screen.getByRole('img', { name: 'Download on the App Store' })).toHaveAttribute(
      'height',
      '40',
    )
  })
})
