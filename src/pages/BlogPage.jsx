import { Link } from 'react-router-dom'
import { blogPosts } from '../data/migrationData'

export default function BlogPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Blog</p>
      <h1>Blog listing rendered from structured React data</h1>
      <p className="page-copy">
        The previous static entries are now data-driven cards with route-based detail
        pages.
      </p>

      <section className="content-card-grid">
        {blogPosts.map((post) => (
          <article key={post.slug} className="content-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`}>Read article</Link>
          </article>
        ))}
      </section>
    </main>
  )
}
