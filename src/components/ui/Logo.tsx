import { brand, splitBrandName } from '../../data/brand'

interface LogoProps {
  tone?: 'light' | 'dark'
  className?: string
}

function Mark({ kind }: { kind: 'monogram' | 'sun' }) {
  if (kind === 'sun') {
    return (
      <svg viewBox="0 0 64 36" className="h-7 w-auto" aria-hidden="true">
        <path d="M2 34a30 30 0 0 1 60 0Z" className="fill-sun" />
        <path
          d="M19 15.5 27.5 21 19 26.5"
          className="stroke-navy-950"
          fill="none"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M33 27h11" className="stroke-navy-950" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    )
  }

  // Interlocked LR: the foot of the L runs into the stem of the R, so they share a stroke.
  return (
    <svg
      viewBox="0 0 50 40"
      className="h-7 w-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      aria-hidden="true"
    >
      <path d="M6 1v33h20V4h9a9.5 9.5 0 0 1 0 19h-9" />
      <path d="M33.5 23 45 36" />
    </svg>
  )
}

export function Logo({ tone = 'light', className = '' }: LogoProps) {
  const { first, rest } = splitBrandName(brand.name)
  const color = tone === 'dark' ? 'text-white' : 'text-ink'

  return (
    <span className={`inline-flex items-center gap-2.5 ${color} ${className}`}>
      <Mark kind={brand.mark} />
      <span className="text-lg tracking-tight">
        <span className="font-bold">{first}</span>
        {rest && <span className="font-light"> {rest}</span>}
      </span>
    </span>
  )
}
