const principles = [
  'Do not break legacy clone while React routes are incomplete.',
  'Keep each phase buildable before moving to the next scope.',
  'Use shared data modules to avoid duplicated page content.',
]

const checklist = [
  'Shared layout moved to React component tree',
  'Core routes now behind BrowserRouter',
  'Data-first content blocks replacing static HTML chunks',
]

export default function AboutPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">About</p>
      <h1>Migration architecture focuses on stability before feature parity</h1>
      <p className="page-copy">
        This project started from a static multi-page clone. The React version now
        keeps a shared header, footer, and route structure to support scalable
        migration without breaking legacy content.
      </p>

      <section className="content-card-grid">
        <article className="content-card">
          <h3>Operating principles</h3>
          <ul className="bullet-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card">
          <h3>Current implementation checklist</h3>
          <ul className="bullet-list">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}
