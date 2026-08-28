import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders the provided label text', () => {
    render(<Badge>Coming Soon</Badge>)
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
  })
})
