import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/migrationData'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main className="shell page-wrap">
        <p className="eyebrow">Blog detail</p>
        <h1>Article not found</h1>
        <p className="page-copy">
          The requested article has not been migrated yet.
        </p>
        <p>
          <Link to="/not-found">Open migration fallback</Link>
        </p>
      </main>
    )
  }

  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Blog detail</p>
      <h1>{post.title}</h1>
      <p className="page-copy">
        {post.excerpt} This detail route is now fully data-driven and ready for
        markdown or CMS integration.
      </p>
      <article className="content-card">
        <h3>Migration status</h3>
        <p>
          Detail route is connected to shared data module and no longer depends on
          slug-to-title conversion fallback.
        </p>
      </article>
      <p>
        <Link to="/blog">Back to blog list</Link>
      </p>
    </main>
  )
}
