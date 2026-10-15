import type { MonthYear } from '../types'

// Whole years elapsed since the start month. A year counts once its start month arrives.
export function yearsSince({ year, month }: MonthYear, now: Date = new Date()): number {
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
  return Math.max(0, Math.floor(months / 12))
}
