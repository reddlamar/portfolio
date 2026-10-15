import { yearsSince } from './yearsSince'

const june2013 = { year: 2013, month: 6 }

describe('yearsSince', () => {
  it('counts a full year once the start month arrives', () => {
    expect(yearsSince(june2013, new Date(2026, 5, 1))).toBe(13)
  })

  it('does not count a year until the start month arrives', () => {
    expect(yearsSince(june2013, new Date(2026, 4, 31))).toBe(12)
  })

  it('stays at the same count through the rest of the year', () => {
    expect(yearsSince(june2013, new Date(2026, 9, 15))).toBe(13)
    expect(yearsSince(june2013, new Date(2027, 4, 31))).toBe(13)
  })

  it('rolls over to the next year in the start month', () => {
    expect(yearsSince(june2013, new Date(2027, 5, 1))).toBe(14)
  })

  it('is zero for a start date in the future', () => {
    expect(yearsSince({ year: 2030, month: 1 }, new Date(2026, 9, 15))).toBe(0)
  })

  it('uses the current date by default', () => {
    const now = new Date()
    expect(yearsSince({ year: now.getFullYear(), month: now.getMonth() + 1 })).toBe(0)
  })
})
