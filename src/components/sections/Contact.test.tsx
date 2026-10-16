import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import type { ContactLink } from '../../types'

const links: ContactLink[] = [
  { label: 'Email', href: 'mailto:jane@example.com' },
  { label: 'GitHub', href: 'https://github.com/janedev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lamar-redd-198373298/' },
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
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/lamar-redd-198373298/',
    )
  })

  it('shows a decorative brand icon beside each link without changing its name', () => {
    render(<Contact links={links} />)
    ;['Email', 'GitHub', 'LinkedIn'].forEach((label) => {
      const link = screen.getByRole('link', { name: label })
      expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('shows where the business is based when a location is given', () => {
    render(<Contact links={links} location="Atlanta, GA" />)
    expect(screen.getByText('Based in Atlanta, GA')).toBeInTheDocument()
  })

  it('omits the location line when none is given', () => {
    render(<Contact links={links} />)
    expect(screen.queryByText(/Based in/)).not.toBeInTheDocument()
  })
})
