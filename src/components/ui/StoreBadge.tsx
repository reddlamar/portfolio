import type { Store } from '../../types'
import appStoreBadge from '../../assets/app-store-badge.svg'

interface StoreBadgeProps {
  store: Store
}

// Official, unmodified artwork from Apple's marketing tools. Apple's guidelines
// require a minimum onscreen height of 40px, so the badge renders at exactly that.
const badges: Record<Store, { src: string; alt: string }> = {
  'app-store': { src: appStoreBadge, alt: 'Download on the App Store' },
}

export function StoreBadge({ store }: StoreBadgeProps) {
  const { src, alt } = badges[store]
  return <img src={src} alt={alt} height={40} className="h-10 w-auto" />
}
