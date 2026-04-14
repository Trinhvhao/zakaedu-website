export const LEGACY_LINKS = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
  },
]

export const LEGACY_STYLES = [
  '/legacy/assets/css/assets/css/bootstrap.min.css',
  '/legacy/assets/css/assets/css/custom-animate.css',
  '/legacy/assets/css/assets/css/font-awesome-all.css',
  '/legacy/assets/css/assets/css/flaticon.css',
  '/legacy/assets/css/assets/css/module-css/banner.css',
  '/legacy/assets/css/assets/css/module-css/newsletter.css',
  '/legacy/assets/css/assets/css/module-css/footer.css',
  '/legacy/assets/css/assets/css/module-css/sliding-text.css',
  '/legacy/assets/css/assets/css/module-css/counter.css',
  '/legacy/assets/css/assets/css/module-css/before-and-after.css',
  '/legacy/assets/css/assets/css/module-css/why-choose.css',
  '/legacy/assets/css/assets/css/module-css/office-location.css',
  '/legacy/assets/css/assets/css/module-css/brand.css',
  '/legacy/assets/css/assets/css/module-css/services.css',
  '/legacy/assets/css/assets/css/module-css/project.css',
  '/legacy/assets/css/assets/css/module-css/team.css',
  '/legacy/assets/css/assets/css/module-css/testimonial.css',
  '/legacy/assets/css/assets/css/module-css/pricing.css',
  '/legacy/assets/css/assets/css/module-css/about.css',
  '/legacy/assets/css/assets/css/module-css/contact.css',
  '/legacy/assets/css/assets/css/module-css/blog.css',
  '/legacy/assets/css/assets/css/style.css',
  '/legacy/assets/css/assets/css/responsive.css',
]

export const LEGACY_SCRIPTS = [
  // Home is now fully controlled by React hooks/components.
  // Keep this empty to avoid legacy DOM mutations from script plugins.
]

export const LEGACY_ROUTE_MAP = {
  '/legacy/pages/index/index.html': '/home',
  '/legacy/pages/index-one-page/index.html': '/home',
  '/legacy/pages/index-dark/index.html': '/home',
  '/legacy/pages/about/index.html': '/about',
  '/legacy/pages/faq/index.html': '/contact',
  '/legacy/pages/services/index.html': '/services',
  '/legacy/pages/office-cleaning/index.html': '/services',
  '/legacy/pages/commercial-cleaning/index.html': '/services',
  '/legacy/pages/deep-cleaning/index.html': '/services',
  '/legacy/pages/residential-cleaning/index.html': '/services',
  '/legacy/pages/sanitizing-mopping/index.html': '/services',
  '/legacy/pages/contact/index.html': '/contact',
  '/legacy/pages/blog/index.html': '/blog',
  '/legacy/pages/blog-details/index.html': '/blog',
  '/legacy/pages/testimonials/index.html': '/blog',
  '/legacy/pages/cart/index.html': '/cart',
  '/legacy/pages/checkout/index.html': '/checkout',
  '/legacy/pages/login/index.html': '/login',
  '/legacy/pages/sign-up/index.html': '/register',
  '/legacy/pages/register/index.html': '/register',
  '/legacy/pages/team/index.html': '/team',
  '/legacy/pages/team-details/index.html': '/team',
  '/legacy/pages/pricing/index.html': '/pricing',
  '/legacy/pages/projects/index.html': '/portfolio',
  '/legacy/pages/project-details/index.html': '/portfolio',
  '/legacy/pages/gallery/index.html': '/gallery',
}
