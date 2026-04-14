import { useEffect } from 'react'

export function useHomeTitleReveal() {
  useEffect(() => {
    const titles = Array.from(
      document.querySelectorAll('.legacy-home-page .sec-title-animation .title-animation'),
    )

    if (!titles.length) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    titles.forEach((title, index) => {
      if (!(title instanceof HTMLElement)) return
      title.classList.add('react-title-reveal')
      title.style.setProperty('--title-delay', `${index * 80}ms`)
    })

    if (reducedMotion || !('IntersectionObserver' in window)) {
      titles.forEach((title) => {
        if (!(title instanceof HTMLElement)) return
        title.classList.add('react-title-visible')
      })

      return () => {
        titles.forEach((title) => {
          if (!(title instanceof HTMLElement)) return
          title.classList.remove('react-title-reveal', 'react-title-visible')
          title.style.removeProperty('--title-delay')
        })
      }
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target
          if (!(target instanceof HTMLElement)) return
          target.classList.add('react-title-visible')
          currentObserver.unobserve(target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    titles.forEach((title) => {
      if (!(title instanceof HTMLElement)) return
      observer.observe(title)
    })

    return () => {
      observer.disconnect()
      titles.forEach((title) => {
        if (!(title instanceof HTMLElement)) return
        title.classList.remove('react-title-reveal', 'react-title-visible')
        title.style.removeProperty('--title-delay')
      })
    }
  }, [])
}