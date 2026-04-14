import { galleryItems } from '../data/migrationData'

export default function GalleryPage() {
  return (
    <main className="shell page-wrap">
      <p className="eyebrow">Gallery</p>
      <h1>Gallery route prepared for interactive filters</h1>
      <p className="page-copy">
        This route uses React-rendered gallery items and is ready for media APIs.
      </p>
      <section className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <h3>{item.title}</h3>
            <small className="meta-tag">{item.type}</small>
          </article>
        ))}
      </section>
    </main>
  )
}
