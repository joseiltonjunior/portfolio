import { useEffect, useRef, useState } from 'react'
import { HeaderScrollState, nextHeaderScrollState } from './scrollState'

export function useScrollHeader() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const header = ref.current
    if (!header) return
    const page = header.parentElement
    let height = header.getBoundingClientRect().height
    let state: HeaderScrollState = { visible: true, referenceY: window.scrollY }
    let frame = 0

    const measure = () => {
      height = header.getBoundingClientRect().height
      page?.style.setProperty('--v2-header-height', `${height}px`)
    }
    const update = () => {
      frame = 0
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      const next = nextHeaderScrollState(
        state,
        Math.min(window.scrollY, maxScroll),
        height,
      )
      if (next.visible !== state.visible) setVisible(next.visible)
      state = next
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(measure)
    measure()
    resizeObserver?.observe(header)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver?.disconnect()
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
      page?.style.removeProperty('--v2-header-height')
    }
  }, [])

  return { ref, visible }
}
