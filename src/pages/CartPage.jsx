import { Link } from 'react-router-dom'

const items = [
  { id: 'clean-weekly', name: 'Weekly Cleaning Plan', qty: 1, price: 49 },
  { id: 'sanitize-boost', name: 'Sanitizing Add-on', qty: 2, price: 15 },
]

export default function CartPage() {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0)
  const vat = subtotal * 0.1
  const total = subtotal + vat

  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Cart</p>
      <h1>Cart route migrated for checkout flow</h1>
      <p className="page-copy">
        This screen replaces legacy cart HTML and keeps pricing data inside React
        state-ready structures.
      </p>

      <section className="order-grid">
        <article className="order-card">
          <h3>Selected services</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <small>
                  {item.qty} x ${item.price}
                </small>
              </li>
            ))}
          </ul>
        </article>
        <aside className="summary-card">
          <h3>Summary</h3>
          <p>
            <span>Subtotal</span>
            <b>${subtotal.toFixed(2)}</b>
          </p>
          <p>
            <span>VAT 10%</span>
            <b>${vat.toFixed(2)}</b>
          </p>
          <p className="total-row">
            <span>Total</span>
            <b>${total.toFixed(2)}</b>
          </p>
          <Link to="/checkout">Continue to checkout</Link>
        </aside>
      </section>
    </main>
  )
}
