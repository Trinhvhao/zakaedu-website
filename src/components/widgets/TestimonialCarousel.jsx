import { useMemo, useState } from 'react'

export default function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0)

  const item = useMemo(() => {
    if (!items?.length) return null
    return items[index]
  }, [index, items])

  if (!item) return null

  const next = () => setIndex((prev) => (prev + 1) % items.length)
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <section className="widget-card">
      <div className="widget-head">
        <h3>React carousel replacement</h3>
        <span>Legacy Owl Carousel {'->'} React state</span>
      </div>
      <article className="quote-block">
        <p>{item.quote}</p>
        <div>
          <strong>{item.name}</strong>
          <small>{item.role}</small>
        </div>
      </article>
      <div className="widget-nav">
        <button onClick={prev} type="button">
          Prev
        </button>
        <button onClick={next} type="button">
          Next
        </button>
      </div>
    </section>
  )
}
