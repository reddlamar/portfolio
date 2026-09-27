import { render, screen } from '@testing-library/react'
import { ComingSoonBadge } from './ComingSoonBadge'

describe('ComingSoonBadge', () => {
  it('stacks the label above "Coming Soon" in one badge', () => {
    render(<ComingSoonBadge label="Android" />)
    const label = screen.getByText('Android')
    const comingSoon = screen.getByText('Coming Soon')
    expect(label.parentElement).toBe(comingSoon.parentElement)
    expect(label.compareDocumentPosition(comingSoon)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })
})
