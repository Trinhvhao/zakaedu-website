export default function CheckoutPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Checkout</p>
      <h1>Checkout route is now React-based</h1>
      <p className="page-copy">
        Billing and order blocks are componentized and ready for payment API
        integration in a follow-up phase.
      </p>

      <section className="order-grid">
        <article className="order-card">
          <h3>Billing details</h3>
          <form className="checkout-form">
            <label>
              Full name
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Street, city" />
            </label>
            <label>
              Notes
              <textarea rows="3" placeholder="Order notes" />
            </label>
            <button type="button">Place order</button>
          </form>
        </article>
        <aside className="summary-card">
          <h3>Order summary</h3>
          <p>
            <span>Weekly Cleaning Plan</span>
            <b>$49.00</b>
          </p>
          <p>
            <span>Sanitizing Add-on</span>
            <b>$30.00</b>
          </p>
          <p className="total-row">
            <span>Total</span>
            <b>$86.90</b>
          </p>
        </aside>
      </section>
    </main>
  )
}
