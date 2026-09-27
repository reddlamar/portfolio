interface ComingSoonBadgeProps {
  label: string
}

// Sized and colored to sit alongside Apple's App Store badge: 40px tall,
// black fill, and the same #a6a6a6 border as the official artwork.
export function ComingSoonBadge({ label }: ComingSoonBadgeProps) {
  return (
    <span className="inline-flex h-10 flex-col justify-center rounded-lg border border-store-border bg-black px-3 text-white">
      <span className="text-base leading-tight font-semibold">{label}</span>
      <span className="text-[10px] leading-tight">Coming Soon</span>
    </span>
  )
}
