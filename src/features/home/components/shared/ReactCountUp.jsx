import { useEffect, useRef, useState } from 'react'

export default function ReactCountUp({ end, duration = 1400, className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!ref.current || started) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setStarted(true)
          observer.disconnect()
        })
      },
      { threshold: 0.35 },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()
    const from = 0

    let raf = 0

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - (1 - progress) * (1 - progress)
      const next = Math.round(from + (end - from) * eased)
      setValue(next)

      if (progress < 1) {
        raf = window.requestAnimationFrame(step)
      }
    }

    raf = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(raf)
  }, [duration, end, started])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
