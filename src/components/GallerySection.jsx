import { useEffect } from 'react'

const galleryImages = [
  { id: 1, src: '/legacy/assets/images/gallery/gallery-page-1-1.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 2, src: '/legacy/assets/images/gallery/gallery-page-1-2.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 3, src: '/legacy/assets/images/gallery/gallery-page-1-3.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 4, src: '/legacy/assets/images/gallery/gallery-page-1-4.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 5, src: '/legacy/assets/images/gallery/gallery-page-1-5.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 6, src: '/legacy/assets/images/gallery/gallery-page-1-6.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 7, src: '/legacy/assets/images/gallery/gallery-page-1-7.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
  { id: 8, src: '/legacy/assets/images/gallery/gallery-page-1-8.jpg', colClass: 'col-xl-6 col-lg-6 col-md-6' },
  { id: 9, src: '/legacy/assets/images/gallery/gallery-page-1-9.jpg', colClass: 'col-xl-3 col-lg-6 col-md-6' },
]

export default function GallerySection() {
  useEffect(() => {
    // Initialize masonry layout if needed
    const initMasonry = () => {
      const grid = document.querySelector('.masonary-layout')
      if (grid && window.jQuery && window.jQuery.fn.isotope) {
        window.jQuery(grid).isotope({
          itemSelector: '.col-xl-3, .col-xl-6',
          layoutMode: 'masonry'
        })
      }
    }

    // Delay to ensure images are loaded
    const timer = setTimeout(initMasonry, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleImageClick = (e, src) => {
    e.preventDefault()
    // Image popup functionality can be added here
    console.log('Open image:', src)
  }

  return (
    <section className="gallery-page">
      <div className="container">
        <div className="row">
          {galleryImages.map((image) => (
            <div key={image.id} className={image.colClass}>
              <div className="gallery-page__single">
                <div className="gallery-page__img">
                  <div className="gallery-page__img-box">
                    <img src={image.src} alt={`Gallery ${image.id}`} />
                  </div>
                  <div className="gallery-page__icon">
                    <a 
                      className="img-popup" 
                      href={image.src}
                      onClick={(e) => handleImageClick(e, image.src)}
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
