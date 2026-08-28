import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it("renders the given name and the current year in the copyright line", () => {
    render(<Footer name="Jane Dev" year={2026} />)
    expect(screen.getByText(/2026 Jane Dev/)).toBeInTheDocument()
  })
})
