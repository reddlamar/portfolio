import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'
import { brand } from '../../data/brand'

describe('Nav', () => {
  it('renders a link for every section', () => {
    render(<Nav />)
    ;['Skills', 'Experience', 'Projects', 'Education', 'Contact'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label.toLowerCase()}`,
      )
    })
  })

  it('shows the brand name as a logo link back to the top', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: brand.name })).toHaveAttribute('href', '#home')
  })
})
