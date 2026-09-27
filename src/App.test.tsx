import { render, screen } from '@testing-library/react'
import App from './App'
import { profile } from './data/profile'

describe('App', () => {
  it('renders every top-level section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education & Certificates' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('credits Apple trademarks because the App Store badge is shown', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: 'Download on the App Store' })).toBeInTheDocument()
    expect(
      screen.getByText(/Apple and the Apple logo are trademarks of Apple Inc\./),
    ).toBeInTheDocument()
    expect(screen.getByText(/App Store is a service mark of Apple Inc\./)).toBeInTheDocument()
  })
})
