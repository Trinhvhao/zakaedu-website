export const migrationStats = {
  legacyHtmlPages: 48,
  migratedReactPages: 15,
  finishedPhases: 9,
  buildPassRate: '100%',
}

export const routeRollout = [
  { title: 'Home', path: '/home', status: 'migrated' },
  { title: 'About', path: '/about', status: 'migrated' },
  { title: 'Services', path: '/services', status: 'migrated' },
  { title: 'Contact', path: '/contact', status: 'migrated' },
  { title: 'Blog', path: '/blog', status: 'migrated' },
  { title: 'Blog Detail', path: '/blog/:slug', status: 'migrated' },
  { title: '404', path: '/not-found', status: 'migrated' },
  { title: 'Portfolio', path: '/portfolio', status: 'migrated' },
  { title: 'Team', path: '/team', status: 'migrated' },
  { title: 'Pricing', path: '/pricing', status: 'migrated' },
  { title: 'Gallery', path: '/gallery', status: 'migrated' },
  { title: 'Cart', path: '/cart', status: 'migrated' },
  { title: 'Checkout', path: '/checkout', status: 'migrated' },
  { title: 'Login', path: '/login', status: 'migrated' },
  { title: 'Register', path: '/register', status: 'migrated' },
]

export const migrationPhases = [
  {
    id: '01',
    title: 'Cleanup Legacy',
    result: 'index2/index3 folders removed and dead links replaced',
    state: 'done',
  },
  {
    id: '02',
    title: 'React Baseline',
    result: 'Vite + React initialized with successful production build',
    state: 'done',
  },
  {
    id: '03',
    title: 'Route Foundation',
    result: 'Router and not-found handling moved to React',
    state: 'done',
  },
  {
    id: '04',
    title: 'Core Page Migration',
    result: 'About, Services, Contact and Blog routes migrated',
    state: 'done',
  },
  {
    id: '05',
    title: 'Home UX Upgrade',
    result: 'Home page upgraded to structured legacy-like sections',
    state: 'done',
  },
  {
    id: '06',
    title: 'Core UX Enhancement',
    result: 'About, Contact and Blog detail improved with richer structure',
    state: 'done',
  },
  {
    id: '07',
    title: 'Widget Replacement',
    result: 'Replace jQuery widgets with React-native alternatives',
    state: 'done',
  },
  {
    id: '08',
    title: 'Batch Page Migration',
    result: 'Portfolio, Team, Pricing and Gallery moved to React routes',
    state: 'done',
  },
  {
    id: '09',
    title: 'Checkout and SEO',
    result: 'Cart/Checkout/Auth routes plus metadata and sitemap',
    state: 'done',
  },
]

export const typedPhrases = [
  'office cleaning',
  'deep cleaning',
  'sanitizing and mopping',
]

export const testimonialSlides = [
  {
    name: 'Operations Lead - Lotus Tower',
    role: 'Commercial client',
    quote:
      'React migration now lets us iterate faster without touching duplicated static HTML templates.',
  },
  {
    name: 'QA Coordinator - Studio Clean',
    role: 'Internal reviewer',
    quote:
      'Build-gated phases have kept every release stable while replacing old jQuery widgets.',
  },
  {
    name: 'Project Owner - Freshflow',
    role: 'Stakeholder',
    quote:
      'The new data-driven pages are easier to maintain and ready for backend integration.',
  },
]

export const filterWidgetItems = [
  { title: 'Hero slider block', category: 'home' },
  { title: 'Service card section', category: 'service' },
  { title: 'Project gallery', category: 'portfolio' },
  { title: 'Team member cards', category: 'team' },
  { title: 'Pricing matrix', category: 'pricing' },
  { title: 'Testimonial lane', category: 'home' },
]

export const demoCards = [
  {
    title: 'Home Page 01',
    description: 'Primary multi-section landing with broad service coverage.',
    tags: ['Multi page', 'Main variant'],
  },
  {
    title: 'Home One Page',
    description: 'Compact one-page flow for quick campaign launches.',
    tags: ['One page', 'Fast launch'],
  },
  {
    title: 'Home Dark',
    description: 'Dark presentation option used for alternate branding.',
    tags: ['Dark mode', 'Alt visual'],
  },
]

export const legacyCoverage = [
  { label: 'Service pages', value: 8 },
  { label: 'Shop and product pages', value: 7 },
  { label: 'Blog pages', value: 5 },
  { label: 'Auth and policy pages', value: 6 },
]

export const nextBatchTargets = [
  'Project detail dynamic routes',
  'API integration for forms and checkout',
  'Accessibility pass and keyboard QA',
  'Image optimization and performance budgets',
]

export const serviceCatalog = [
  {
    name: 'Residential Cleaning',
    summary: 'Routine home care with predictable weekly service windows.',
  },
  {
    name: 'Commercial Cleaning',
    summary: 'Large-floor office cleaning and shift-based sanitization.',
  },
  {
    name: 'Deep Cleaning',
    summary: 'Full-zone deep treatment before events or seasonal reset.',
  },
  {
    name: 'Sanitizing and Mopping',
    summary: 'Targeted hygiene protocol for high-contact surfaces.',
  },
]

export const blogPosts = [
  {
    slug: 'cleaning-routine-for-offices',
    title: 'Office cleaning routine for high-traffic teams',
    excerpt:
      'A practical weekly checklist adapted from the legacy template content.',
  },
  {
    slug: 'deep-cleaning-before-events',
    title: 'When to run deep cleaning before events',
    excerpt:
      'How to stage pre-event sanitation with predictable cost and effort.',
  },
  {
    slug: 'how-to-balance-cost-and-hygiene',
    title: 'How to balance cleaning cost and hygiene outcomes',
    excerpt:
      'Trade-offs and planning patterns for teams scaling service contracts.',
  },
]

export const portfolioItems = [
  {
    title: 'Office Sanitization Program',
    category: 'commercial',
    summary: 'Weekly sanitation cycle for a 12-floor business tower.',
  },
  {
    title: 'Apartment Deep Reset',
    category: 'residential',
    summary: 'Full deep-clean package for post-renovation handover.',
  },
  {
    title: 'Retail Hygiene Protocol',
    category: 'commercial',
    summary: 'Daily high-contact cleaning workflow for retail chains.',
  },
]

export const teamMembers = [
  {
    name: 'Nguyen Minh Khoa',
    role: 'Operations Manager',
    focus: 'Service quality and delivery consistency',
  },
  {
    name: 'Tran Bao Han',
    role: 'Customer Success Lead',
    focus: 'Retention and issue resolution',
  },
  {
    name: 'Le Quoc Viet',
    role: 'Field Supervisor',
    focus: 'On-site team coordination and safety',
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$49/mo',
    target: 'Small offices and home teams',
    features: ['Weekly cleaning', 'Basic sanitation', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$119/mo',
    target: 'Growing commercial clients',
    features: ['Bi-weekly deep clean', 'Priority scheduling', 'Phone support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    target: 'Large buildings and chains',
    features: ['Dedicated supervisor', 'Custom SLAs', '24/7 escalation'],
  },
]

export const galleryItems = [
  {
    title: 'Lobby detail pass',
    type: 'commercial',
  },
  {
    title: 'Kitchen deep treatment',
    type: 'residential',
  },
  {
    title: 'Open office disinfect cycle',
    type: 'commercial',
  },
  {
    title: 'Bedroom air-safe cleaning',
    type: 'residential',
  },
]
