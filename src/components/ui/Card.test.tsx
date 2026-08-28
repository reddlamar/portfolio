import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders its children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>,
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })
})
