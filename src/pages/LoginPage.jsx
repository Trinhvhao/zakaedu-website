import { Link } from 'react-router-dom'
import LegacyPageHeader from '../components/LegacyPageHeader'

export default function LoginPage() {
  return (
    <main>
      <LegacyPageHeader title="Login" breadcrumb="Login to your account" />

      <section className="shell legacy-auth-section">
        <article className="legacy-auth-card">
          <div className="legacy-auth-title">
            <p className="eyebrow">Account Access</p>
            <h2>Login Here</h2>
          </div>

          <form className="legacy-auth-form">
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Email..." required />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Password..."
                required
              />
            </label>

            <div className="legacy-auth-meta">
              <label className="legacy-auth-remember">
                <input type="checkbox" name="remember" defaultChecked />
                <span>Remember me</span>
              </label>
              <a href="#">Forget password?</a>
            </div>

            <button type="submit">Login Here</button>
          </form>

          <p className="legacy-auth-footer">
            Not registered yet? <Link to="/register">Create an Account</Link>
          </p>
        </article>
      </section>
    </main>
  )
}
