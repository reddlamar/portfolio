import { brand, brands, splitBrandName } from './brand'

describe('splitBrandName', () => {
  it('splits the first word from the rest', () => {
    expect(splitBrandName('Sunlit Studio')).toEqual({ first: 'Sunlit', rest: 'Studio' })
  })

  it('handles a one-word name', () => {
    expect(splitBrandName('Sunlit')).toEqual({ first: 'Sunlit', rest: '' })
  })
})

describe('brands', () => {
  it('gives every brand a name, mark, favicon file, title and description', () => {
    Object.values(brands).forEach((b) => {
      expect(b.name).toBeTruthy()
      expect(['monogram', 'sun']).toContain(b.mark)
      expect(b.favicon).toMatch(/\.svg$/)
      expect(b.title).toContain(b.name)
      expect(b.description).toContain(b.name)
    })
  })

  it('activates one of the defined brands', () => {
    expect(Object.values(brands)).toContain(brand)
  })
})
