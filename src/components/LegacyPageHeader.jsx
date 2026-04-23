import { Link } from 'react-router-dom'
import pageHeaderBg from '../assets/legacy/backgrounds/page-header-bg.jpg'
import pageHeaderImage from '../assets/legacy/resources/page-header-img-1.jpg'

export default function LegacyPageHeader({ title, breadcrumb }) {
  return (
    <section className="legacy-page-header">
      <div
        className="legacy-page-header-bg"
        style={{ backgroundImage: `url(${pageHeaderBg})` }}
      />
      <div className="legacy-page-header-overlay" />
      <div className="shell legacy-page-header-inner">
        <div className="legacy-page-header-copy">
          <p className="legacy-page-header-kicker">Freshflow Cleaning</p>
          <h1>{title}</h1>
          <div className="legacy-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <p>{breadcrumb}</p>
          </div>
        </div>
        <div className="legacy-page-header-media">
          <img src={pageHeaderImage} alt="Cleaning team" />
        </div>
      </div>
      <div className="legacy-page-header-social">
        <a href="#">LinkedIn</a>
        <a href="#">Pinterest</a>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
      </div>
    </section>
  )
}