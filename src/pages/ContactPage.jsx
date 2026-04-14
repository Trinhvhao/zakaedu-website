const officeCards = [
  {
    title: 'Sales Desk',
    detail: 'sales@freshflow.local',
  },
  {
    title: 'Support',
    detail: '+84 28 1234 5678',
  },
  {
    title: 'Office',
    detail: 'District 1, Ho Chi Minh City',
  },
]

export default function ContactPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Contact</p>
      <h1>Contact workflow prepared for API integration</h1>
      <p className="page-copy">
        Static form markup has been replaced with a reusable React-friendly layout.
      </p>

      <section className="contact-grid">
        {officeCards.map((item) => (
          <article key={item.title} className="contact-mini-card">
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="contact-panel">
        <form>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Describe your request" />
          </label>
          <small>Phase note: submit handler will be connected after backend API contract.</small>
          <button type="button">Send</button>
        </form>
      </section>
    </main>
  )
}
