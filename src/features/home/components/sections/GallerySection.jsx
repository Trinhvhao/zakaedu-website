import './GallerySection.css'

const galleryImages = [
  { id: 1, src: '/legacy/assets/images/gallery/gallery-page-1-1.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 2, src: '/legacy/assets/images/gallery/gallery-page-1-2.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 3, src: '/legacy/assets/images/gallery/gallery-page-1-3.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 4, src: '/legacy/assets/images/gallery/gallery-page-1-4.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 5, src: '/legacy/assets/images/gallery/gallery-page-1-5.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 6, src: '/legacy/assets/images/gallery/gallery-page-1-6.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 7, src: '/legacy/assets/images/gallery/gallery-page-1-7.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
  { id: 8, src: '/legacy/assets/images/gallery/gallery-page-1-8.png', colClass: 'col-xl-3 col-lg-4 col-md-6 col-sm-6' },
]

export default function GallerySection() {
  return (
    <section className="gallery-page" id="gallery">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Gallery</span>
          </div>
          <h2 className="section-title__title">Hình ảnh hoạt động</h2>
        </div>
        <div className="row g-3">
          {galleryImages.map((image) => (
            <div key={image.id} className={image.colClass}>
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <div className="gallery-page__img-box">
                    <img src={image.src} alt={`Gallery ${image.id}`} loading="lazy" />
                  </div>
                  <div className="gallery-page__icon">
                    <a 
                      className="img-popup" 
                      href={image.src}
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="icon-plus"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
