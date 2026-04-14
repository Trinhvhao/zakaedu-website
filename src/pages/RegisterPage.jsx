import { Link } from 'react-router-dom'
import LegacyPageHeader from '../components/LegacyPageHeader'

export default function RegisterPage() {
  return (
    <main>
      <LegacyPageHeader title="Sign Up" breadcrumb="Create your account" />

      <section className="shell legacy-auth-section">
        <article className="legacy-auth-card">
          <div className="legacy-auth-title">
            <p className="eyebrow">Create Account</p>
            <h2>Register Here</h2>
          </div>

          <form className="legacy-auth-form">
            <label>
              <span>Full Name</span>
              <input type="text" name="fullName" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                required
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                required
              />
            </label>

            <button type="submit">Create Account</button>
          </form>

          <p className="legacy-auth-footer">
            Already registered? <Link to="/login">Sign in</Link>
          </p>
        </article>
      </section>
    </main>
  )
}
