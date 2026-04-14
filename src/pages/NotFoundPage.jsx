import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Route is not migrated yet</h1>
      <p>
        This path does not exist in React right now. Use Home and continue migration
        by phase.
      </p>
      <Link to="/home">Go to Home</Link>
    </main>
  )
}
