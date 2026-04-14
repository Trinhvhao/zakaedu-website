import { useMemo, useState } from 'react'

export default function FeatureFilterGrid({ items }) {
  const [active, setActive] = useState('all')

  const categories = useMemo(() => {
    const unique = new Set(items.map((item) => item.category))
    return ['all', ...unique]
  }, [items])

  const visible = useMemo(() => {
    if (active === 'all') return items
    return items.filter((item) => item.category === active)
  }, [active, items])

  return (
    <section className="widget-card">
      <div className="widget-head">
        <h3>React filter replacement</h3>
        <span>Legacy Isotope {'->'} React state filter</span>
      </div>
      <div className="filter-pills">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? 'active' : ''}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="filter-grid">
        {visible.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <small>{item.category}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}
