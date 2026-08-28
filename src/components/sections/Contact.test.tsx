import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import type { ContactLink } from '../../types'

const links: ContactLink[] = [
  { label: 'Email', href: 'mailto:jane@example.com' },
  { label: 'GitHub', href: 'https://github.com/janedev' },
]

describe('Contact', () => {
  it('renders a link for each contact method with the correct href', () => {
    render(<Contact links={links} />)
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:jane@example.com',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/janedev',
    )
  })
})
