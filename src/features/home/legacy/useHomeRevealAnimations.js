import { useEffect } from 'react'

function getDuration(duration) {
  if (!duration) return '900ms'
  return /^\d+$/.test(duration) ? `${duration}ms` : duration
}

function getDelay(delay) {
  if (!delay) return '0ms'
  return /^\d+$/.test(delay) ? `${delay}ms` : delay
}

export function useHomeRevealAnimations(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined

    const nodes = Array.from(document.querySelectorAll('.legacy-home-page [data-reveal]'))
    if (!nodes.length) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    nodes.forEach((node) => {
      if (!(node instanceof HTMLElement)) return
      node.classList.add('react-reveal-item')
      const delay = node.dataset.revealDelay || node.dataset.wowDelay
      const duration = node.dataset.revealDuration || node.dataset.wowDuration
      node.style.setProperty('--reveal-delay', getDelay(delay))
      node.style.setProperty('--reveal-duration', getDuration(duration))
    })

    if (reducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return
        node.classList.add('react-reveal-visible')
      })
      return () => {
        nodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          node.classList.remove('react-reveal-item', 'react-reveal-visible')
          node.style.removeProperty('--reveal-delay')
          node.style.removeProperty('--reveal-duration')
        })
      }
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target
          if (!(target instanceof HTMLElement)) return
          target.classList.add('react-reveal-visible')
          currentObserver.unobserve(target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    nodes.forEach((node) => {
      if (!(node instanceof HTMLElement)) return
      observer.observe(node)
    })

    return () => {
      observer.disconnect()
      nodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return
        node.classList.remove('react-reveal-item', 'react-reveal-visible')
        node.style.removeProperty('--reveal-delay')
        node.style.removeProperty('--reveal-duration')
      })
    }
  }, [enabled])
}