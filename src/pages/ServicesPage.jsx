import serviceOneImage from '../assets/legacy/services/services-2-1.jpg'
import serviceTwoImage from '../assets/legacy/services/services-2-2.jpg'
import serviceThreeImage from '../assets/legacy/services/services-2-3.jpg'
import serviceFourImage from '../assets/legacy/services/services-2-4.jpg'
import serviceFiveImage from '../assets/legacy/services/services-2-5.jpg'
import LegacyPageHeader from '../components/LegacyPageHeader'

const serviceBlocks = [
  {
    id: '01',
    title: 'Sparkling Home Solutions',
    summary:
      'Expert cleaning services to keep your home fresh, tidy, and sparkling clean.',
    image: serviceOneImage,
  },
  {
    id: '02',
    title: 'Pristine Office Cleaning',
    summary:
      'Professional cleaning tailored for offices to maintain a clean and productive workspace.',
    image: serviceTwoImage,
  },
  {
    id: '03',
    title: 'Deep Clean Experts',
    summary:
      'Specialized deep cleaning for homes or businesses, including hard-to-reach places.',
    image: serviceThreeImage,
  },
  {
    id: '04',
    title: 'Hygiene Space Services',
    summary:
      'Comprehensive cleaning solutions to ensure sanitized and spotless environments.',
    image: serviceFourImage,
  },
  {
    id: '05',
    title: 'Eco-Friendly Cleaning',
    summary:
      'Sustainable cleaning services using green products for a healthier home and planet.',
    image: serviceFiveImage,
  },
]

const processCards = [
  {
    title: 'Booking Made Easy in Minutes',
    summary:
      'Enjoy a hassle-free booking process with our user-friendly flow and rapid confirmation.',
  },
  {
    title: 'Thorough Cleaning Tailored for You',
    summary:
      'Each visit is customized around your space, schedule, and quality expectations.',
  },
  {
    title: 'Detail-First Quality Review',
    summary:
      'Before completion, every room goes through a detail check to ensure consistency.',
  },
  {
    title: 'Reliable Ongoing Support',
    summary:
      'Need adjustments or recurring plans? Support stays available after every service.',
  },
]

const serviceKeywords = [
  'Organizing',
  'Sanitizing',
  'Mopping',
  'Dusting',
  'Vacuuming',
  'Polishing',
]

export default function ServicesPage() {
  return (
    <main>
      <LegacyPageHeader title="Services" breadcrumb="Services" />

      <section className="shell legacy-services-section">
        <div className="legacy-section-head">
          <p className="eyebrow">Our Services</p>
          <h2>Explore the Full Range of Services We Offer to Meet Your Needs</h2>
        </div>
        <div className="legacy-services-list">
          {serviceBlocks.map((service) => (
            <article key={service.id} className="legacy-service-card">
              <img src={service.image} alt={service.title} />
              <div>
                <p className="legacy-service-count">{service.id}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-keywords-strip">
        <div className="shell">
          <div className="legacy-keywords-row">
            {serviceKeywords.map((keyword) => (
              <p key={keyword}>{keyword}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="shell legacy-process-section">
        <div className="legacy-section-head">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Our Seamless Cleaning Process From Start to Sparkle Service</h2>
        </div>
        <div className="legacy-process-grid">
          {processCards.map((card) => (
            <article key={card.title} className="legacy-process-card">
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
