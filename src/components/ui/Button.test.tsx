import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders as a link with the given href and label', () => {
    render(<Button href="#contact">Get in touch</Button>)
    const link = screen.getByRole('link', { name: 'Get in touch' })
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('opens external links in a new tab', () => {
    render(
      <Button href="https://github.com/reddlamar" external>
        GitHub
      </Button>,
    )
    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })
})
