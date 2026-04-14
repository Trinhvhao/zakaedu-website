import { useEffect, useState } from 'react'

export default function TypedHeadline({ phrases, speed = 80, pause = 1200 }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!phrases?.length) return undefined

    const current = phrases[phraseIndex]

    let timeout
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((prev) => prev + 1), speed)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((prev) => prev - 1), speed / 2)
    } else {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases, pause, speed])

  if (!phrases?.length) return null

  return (
    <span className="typed-inline">
      {phrases[phraseIndex].slice(0, charIndex)}
      <b>|</b>
    </span>
  )
}
