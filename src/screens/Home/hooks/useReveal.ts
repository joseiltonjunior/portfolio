import { RefObject, useEffect } from 'react'

export function useReveal(root: RefObject<HTMLElement>) {
  useEffect(() => {
    const page = root.current
    if (!page || !('IntersectionObserver' in window)) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = Array.from(
      page.querySelectorAll<HTMLElement>('[data-reveal]'),
    )
    let observer: IntersectionObserver | undefined

    const reveal = (element: HTMLElement) => {
      element.dataset.revealState = 'visible'
      observer?.unobserve(element)
    }
    const configure = () => {
      observer?.disconnect()
      if (preference.matches) {
        elements.forEach((element) =>
          element.removeAttribute('data-reveal-state'),
        )
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement)
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
      )

      elements.forEach((element) => {
        if (element.dataset.revealState === 'visible') return
        if (element.getBoundingClientRect().top < window.innerHeight - 32) {
          reveal(element)
        } else {
          element.dataset.revealState = 'pending'
          observer?.observe(element)
        }
      })
    }
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const element = event.target.closest<HTMLElement>('[data-reveal]')
      if (element) reveal(element)
    }

    configure()
    preference.addEventListener('change', configure)
    page.addEventListener('focusin', onFocus)
    return () => {
      observer?.disconnect()
      preference.removeEventListener('change', configure)
      page.removeEventListener('focusin', onFocus)
      elements.forEach((element) =>
        element.removeAttribute('data-reveal-state'),
      )
    }
  }, [root])
}
