import { useEffect, useMemo, useState } from 'react'

export default function ReactTypedText({ phrases, className = '' }) {
  const words = useMemo(
    () => phrases.filter((item) => typeof item === 'string' && item.trim().length > 0),
    [phrases],
  )

  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex % words.length]

    const atWordEnd = charIndex === currentWord.length
    const atWordStart = charIndex === 0

    const waitMs = atWordEnd && !isDeleting ? 850 : isDeleting ? 40 : 70

    const timer = window.setTimeout(() => {
      if (!isDeleting && atWordEnd) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && atWordStart) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        return
      }

      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1))
    }, waitMs)

    return () => {
      window.clearTimeout(timer)
    }
  }, [charIndex, isDeleting, wordIndex, words])

  if (words.length === 0) {
    return <span className={className} />
  }

  const current = words[wordIndex % words.length]
  const text = current.slice(0, charIndex)

  return (
    <span className={className}>
      {text}
      <span className="react-typed-cursor" aria-hidden="true">
        |
      </span>
    </span>
  )
}
