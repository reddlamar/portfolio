// Everything the site shows as its brand lives here. To switch the active brand, change the
// one `brand = brands.…` line at the bottom: the nav logo, footer, page title, meta description
// and favicon all follow.
export interface Brand {
  name: string
  // Which mark the Logo component draws next to the name.
  mark: 'monogram' | 'sun'
  // A file in /public.
  favicon: string
  title: string
  description: string
}

export const brands = {
  // Lamar Redd, with the interlocked LR monogram.
  personal: {
    name: 'Lamar Redd',
    mark: 'monogram',
    favicon: 'favicon-lr.svg',
    title: 'Lamar Redd | Front-End Software Engineer',
    description:
      'Lamar Redd — Front-End Software Engineer specializing in React, React Native, and TypeScript.',
  },
  // Sunlit Studio. Not active until the business name is registered and cleared.
  studio: {
    name: 'Sunlit Studio',
    mark: 'sun',
    favicon: 'favicon-sun.svg',
    title: 'Sunlit Studio | Lamar Redd, Front-End Software Engineer',
    description:
      'Sunlit Studio — Front-End Software Engineer Lamar Redd, specializing in React, React Native, and TypeScript.',
  },
} satisfies Record<string, Brand>

export const brand: Brand = brands.personal

// The wordmark sets the first word bold and the rest lighter.
export const splitBrandName = (name: string) => {
  const [first, ...rest] = name.trim().split(/\s+/)
  return { first, rest: rest.join(' ') }
}
