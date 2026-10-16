export interface HeaderScrollState {
  visible: boolean
  referenceY: number
}

export function nextHeaderScrollState(
  previous: HeaderScrollState,
  scrollY: number,
  headerHeight: number,
): HeaderScrollState {
  const y = Math.max(0, scrollY)
  if (y <= headerHeight) return { visible: true, referenceY: y }
  if (Math.abs(y - previous.referenceY) < 12) return previous
  return { visible: y < previous.referenceY, referenceY: y }
}
