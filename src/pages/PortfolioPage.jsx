import { portfolioItems } from '../data/migrationData'

export default function PortfolioPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Portfolio</p>
      <h1>Portfolio route migrated and data-driven</h1>
      <p className="page-copy">
        Project cards now come from a shared data source and can be wired to API
        content in the next phase.
      </p>
      <section className="content-card-grid">
        {portfolioItems.map((item) => (
          <article key={item.title} className="content-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <small className="meta-tag">{item.category}</small>
          </article>
        ))}
      </section>
    </main>
  )
}
