import { pricingPlans } from '../data/migrationData'

export default function PricingPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Pricing</p>
      <h1>Pricing matrix migrated to React components</h1>
      <p className="page-copy">
        Legacy pricing blocks have been transformed into reusable plan cards.
      </p>
      <section className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price-pill">{plan.price}</p>
            <p>{plan.target}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  )
}
