import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'

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
})
