import { useState } from 'react'
import HomeFooter from './layout/HomeFooter'
import HomeHeader from './layout/HomeHeader'
import HomeMobileNav from './overlays/HomeMobileNav'
import HomePreloader from './overlays/HomePreloader'
import HomeScrollTop from './overlays/HomeScrollTop'
import HomeSearchPopup from './overlays/HomeSearchPopup'
import AboutSection from './sections/AboutSection'
import BannerSection from './sections/BannerSection'
import BeforeAfterSection from './sections/BeforeAfterSection'
import BlogSection from './sections/BlogSection'
import BrandSection from './sections/BrandSection'
import ContactSection from './sections/ContactSection'
import CounterSection from './sections/CounterSection'
import GallerySection from './sections/GallerySection'
import NewsletterSection from './sections/NewsletterSection'
import OfficeLocationSection from './sections/OfficeLocationSection'
import PricingSection from './sections/PricingSection'
import ProjectSection from './sections/ProjectSection'
import ServicesSection from './sections/ServicesSection'
import SlidingTextOneSection from './sections/SlidingTextOneSection'
import SlidingTextTwoSection from './sections/SlidingTextTwoSection'
import TeamSection from './sections/TeamSection'
import TestimonialSection from './sections/TestimonialSection'
import WhyChooseSection from './sections/WhyChooseSection'
import VideoModal from './shared/VideoModal'

export default function LegacyHomeMarkup() {
  const [activeVideoUrl, setActiveVideoUrl] = useState('')

  return (
    <>
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />

      <div className="page-wrapper">
        <HomeHeader />
        <BannerSection />
        <SlidingTextOneSection />
        <AboutSection onOpenVideo={setActiveVideoUrl} />
        <ServicesSection />
        <SlidingTextTwoSection />
        <CounterSection />
        <BeforeAfterSection />
        <WhyChooseSection onOpenVideo={setActiveVideoUrl} />
        <ProjectSection />
        <TeamSection />
        <ContactSection />
        <TestimonialSection />
        <BrandSection />
        <OfficeLocationSection />
        <PricingSection />
        <GallerySection />
        <BlogSection />
        <NewsletterSection />
        <HomeFooter />
      </div>

      <HomeMobileNav />
      <HomeSearchPopup />
      <HomeScrollTop />
      <HomePreloader />
      <VideoModal videoUrl={activeVideoUrl} onClose={() => setActiveVideoUrl('')} />
    </>
  )
}
