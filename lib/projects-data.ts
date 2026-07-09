export type ProjectScreen = {
  title: string
  description: string
  image: string
}

export type Challenge = {
  title: string
  challenge: string
  solution: string
}

export type Project = {
  slug: string
  name: string
  nameAccentIndex: number // characters of white part before accent
  status: string
  tagline: string
  subtitle: string
  cardDescription: string
  buildFocus?: string
  curiosityHook?: string
  description: string
  image: string
  imageAlt: string
  featureChips: string[]
  techChips: string[]
  liveUrl: string
  githubUrl: string
  info: {
    role: string
    timeline: string
    status: string
    type: string
  }
  techStack: { group: string; items: string[] }[]
  problem: string[]
  role: string[]
  features: { title: string; description: string }[]
  screens: ProjectScreen[]
  architecture: { name: string; description: string }[]
  integrations?: { name: string; description: string }[]
  challenges: Challenge[]
  ctaTitle: string
  ctaDescription: string
}

export const projects: Project[] = [
  {
    slug: 'splitfin',
    name: 'SplitFin',
    nameAccentIndex: 5,
    status: 'In Development',
    tagline: 'One place to understand money, shared expenses and what happens next.',
    subtitle: 'Smart finance tracking & expense splitting',
    cardDescription:
      'SplitFin is a finance product I\'m building to bring personal spending and shared expenses into one connected experience. Instead of treating transactions, categories, bill splits and settlements as isolated tools, the product is designed around the way money actually moves between people, accounts and everyday decisions.',
    buildFocus: 'The interesting challenge is not a single dashboard — it is keeping transaction data, category views, account state and shared-expense workflows consistent as the product grows. I\'m shaping the experience around reusable feature modules, predictable data flows and responsive interfaces that stay clear across desktop and mobile.',
    curiosityHook: 'Currently exploring smarter bill capture, duplicate-aware transaction flows and clearer settlement experiences.',
    description:
      'SplitFin is a personal finance and shared expense management app that helps users track income and expenses, split bills with friends or groups, scan bills, and settle up easily.',
    image: '/images/splitfin-preview.png',
    imageAlt:
      'SplitFin app shown on a phone with a finance dashboard behind it',
    featureChips: [
      'Expense Tracking',
      'Split Expenses',
      'Bill Scanner',
      'Group Settlements',
      'Analytics',
      'Categories',
    ],
    techChips: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/bhanurx100',
    info: {
      role: 'Full Stack Developer',
      timeline: 'Dec 2023 – Present',
      status: 'In Active Development',
      type: 'Personal Project',
    },
    techStack: [
      { group: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
      { group: 'State & Data', items: ['Zustand', 'TanStack Query'] },
      { group: 'Backend', items: ['Next.js API Routes', 'Node.js'] },
      { group: 'Database & ORM', items: ['PostgreSQL', 'Prisma'] },
      { group: 'Tools & Services', items: ['Git & GitHub', 'Vercel'] },
    ],
    problem: [
      'Managing personal finances and shared expenses are often two separate workflows. Users need a simple way to track their money, split bills fairly, and settle up without the hassle of multiple apps.',
    ],
    role: [
      'Product Thinking & Planning',
      'Full Stack Development',
      'UI/UX Design & Implementation',
      'Database Design & API Development',
    ],
    features: [
      {
        title: 'Expense Tracking',
        description: 'Track income and expenses with categories & accounts.',
      },
      {
        title: 'Split Expenses',
        description: 'Split bills with friends or groups with fair calculations.',
      },
      {
        title: 'Bill Scanner',
        description: 'Scan bills and detect items to add or split instantly.',
      },
      {
        title: 'Settle Up',
        description: 'See who owes what and settle up seamlessly.',
      },
      {
        title: 'Analytics',
        description: 'Visualize spending patterns and insights with charts.',
      },
    ],
    screens: [
      {
        title: 'Dashboard',
        description: 'Overview of balances, groups and recent activity.',
        image: '/images/splitfin-dashboard.png',
      },
      {
        title: 'Transactions',
        description: 'View and filter all your income and expenses.',
        image: '/images/splitfin-transactions.png',
      },
      {
        title: 'Add Transaction',
        description: 'Add income or expense with categories.',
        image: '/images/splitfin-add-transaction.png',
      },
      {
        title: 'Split Expense',
        description: 'Create or join a group and split expenses.',
        image: '/images/splitfin-split-expense.png',
      },
      {
        title: 'Bill Scanner',
        description: 'Scan any bill and extract items automatically.',
        image: '/images/splitfin-bill-scanner.png',
      },
    ],
    architecture: [
      { name: 'Next.js', description: 'Frontend (App Router)' },
      { name: 'API Routes', description: 'Backend Layer' },
      { name: 'Prisma ORM', description: 'Database Client' },
      { name: 'Zustand', description: 'State Management' },
      { name: 'PostgreSQL', description: 'Database' },
      { name: 'TanStack Query', description: 'Server State' },
    ],
    challenges: [
      {
        title: 'Accurate Split Calculations',
        challenge:
          'Handling complex split scenarios with multiple people and uneven amounts.',
        solution:
          'Built a robust calculation engine and tested with multiple edge cases.',
      },
      {
        title: 'Bill Scanning & Duplicate Detection',
        challenge: 'Avoiding duplicate expenses when scanning similar bills.',
        solution:
          'Implemented smart matching using text and amount similarity.',
      },
      {
        title: 'Keeping Finance & Split Domains Separate',
        challenge: 'Maintaining clean code structure as the app grows.',
        solution: 'Feature-based architecture with clear domain boundaries.',
      },
    ],
    ctaTitle: 'View more projects on GitHub',
    ctaDescription: 'Explore other projects I\u2019ve built.',
  },
  {
    slug: 'stayease',
    name: 'StayEase',
    nameAccentIndex: 4,
    status: 'In Development',
    tagline: 'Designing the journey from "Where should I stay?" to "Booked."',
    subtitle: 'Modern hotel booking experience',
    cardDescription:
      'StayEase explores a complete accommodation discovery and booking journey — helping travelers move from broad search to confident selection without losing context along the way. The experience brings property discovery, comparison, stay details and booking decisions into a responsive product flow across desktop and mobile.',
    buildFocus: 'The core challenge is maintaining a coherent experience while search criteria, filters, property choices and booking state keep changing. I designed the interface around reusable discovery components, responsive content hierarchy and interaction patterns that remain understandable from wide desktop layouts to narrow mobile screens.',
    curiosityHook: 'A closer look at how search, comparison and booking decisions can feel like one continuous product journey.',
    description:
      'A modern hotel booking platform that combines hotel discovery, AI-assisted search, enriched hotel details from multiple providers, secure booking, and owner property management in one seamless experience.',
    image: '/images/stayease-preview.png',
    imageAlt:
      'StayEase hotel booking site on a laptop with a mobile hotel detail view',
    featureChips: [
      'Property Discovery',
      'Search & Filters',
      'Stay Comparison',
      'Booking Flow',
      'Responsive UI',
      'Account Experience',
    ],
    techChips: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/bhanurx100',
    info: {
      role: 'Full Stack Developer',
      timeline: '2026 – Present',
      status: 'Active Development',
      type: 'Personal Project',
    },
    techStack: [
      {
        group: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'React Query'],
      },
      { group: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Mongoose'] },
      {
        group: 'APIs',
        items: ['Booking.com RapidAPI', 'Google Maps', 'Tripadvisor API', 'Stripe'],
      },
      { group: 'Tools', items: ['Cloudinary', 'JWT', 'Git', 'Vercel', 'Render'] },
    ],
    problem: [
      'Modern hotel booking platforms often focus only on searching and booking accommodations. Property owners need separate tools to manage listings, while travelers switch between multiple services to compare hotels, view reviews, maps, amenities, and complete bookings.',
      'StayEase aims to bring hotel discovery, booking, enriched hotel information, AI-assisted search, and property management into one unified platform.',
    ],
    role: [
      'Product Planning',
      'Full Stack Development',
      'UI/UX Design',
      'API Integration',
      'Database Design',
      'Authentication & Authorization',
      'AI Chatbot Integration',
      'External Data Aggregation',
      'Performance Optimization',
    ],
    features: [
      {
        title: 'AI Hotel Search',
        description:
          'Search hotels using natural language with an AI-powered assistant.',
      },
      {
        title: 'Smart Hotel Discovery',
        description:
          'Search hotels using destination, price, facilities, ratings, and filters.',
      },
      {
        title: 'Rich Hotel Details',
        description:
          'Hotel information enriched using Booking.com, Google Maps, Tripadvisor, and external providers.',
      },
      {
        title: 'Secure Booking',
        description:
          'Complete hotel booking flow with authentication and payment integration.',
      },
      {
        title: 'Owner Property Management',
        description: 'Hotel owners can create, edit, and manage hotel listings.',
      },
      {
        title: 'Interactive Maps',
        description:
          'View hotel locations, nearby attractions, and local places using Google Maps.',
      },
    ],
    screens: [
      {
        title: '1. Home Page',
        description: 'Search hotels and discover featured destinations.',
        image: '/images/stayease-home.png',
      },
      {
        title: '2. Search Results',
        description: 'Advanced filters with hotel listings.',
        image: '/images/stayease-search.png',
      },
      {
        title: '3. Hotel Details',
        description: 'Gallery, reviews, rooms, maps, amenities, booking panel.',
        image: '/images/stayease-details.png',
      },
      {
        title: '4. Booking',
        description: 'Guest information and payment flow.',
        image: '/images/stayease-booking.png',
      },
      {
        title: '5. My Bookings',
        description: 'Track current and previous bookings.',
        image: '/images/stayease-bookings.png',
      },
      {
        title: '6. Owner Dashboard',
        description:
          'Total hotels, bookings, revenue summary and manage listings.',
        image: '/images/stayease-owner.png',
      },
    ],
    architecture: [
      { name: 'React + TypeScript', description: 'Frontend' },
      { name: 'React Router', description: 'Routing' },
      { name: 'React Query', description: 'Server State' },
      { name: 'REST API', description: 'API Layer' },
      { name: 'Node.js + Express', description: 'Backend' },
      { name: 'MongoDB', description: 'Database' },
    ],
    integrations: [
      {
        name: 'Booking.com API',
        description: 'Live hotel inventory and hotel details.',
      },
      {
        name: 'Google Maps',
        description: 'Maps, coordinates, nearby attractions.',
      },
      { name: 'Tripadvisor', description: 'Hotel reviews and ratings.' },
      { name: 'Stripe', description: 'Payment processing.' },
      { name: 'Cloudinary', description: 'Hotel image uploads.' },
    ],
    challenges: [
      {
        title: 'Aggregating Multiple APIs',
        challenge: 'Hotel data comes from multiple providers.',
        solution: 'Unified aggregation layer with caching.',
      },
      {
        title: 'Hotel Search Performance',
        challenge: 'Multiple filters and external data slow searches.',
        solution: 'Optimized APIs with pagination and caching.',
      },
      {
        title: 'Authentication Across Browsers',
        challenge: 'Cookie authentication can fail in some browser configurations.',
        solution: 'JWT with cookie + bearer token support.',
      },
      {
        title: 'Rich Hotel Experience',
        challenge: 'Single source data is incomplete.',
        solution: 'Combined data from multiple providers.',
      },
    ],
    ctaTitle: 'Explore StayEase on GitHub',
    ctaDescription:
      'See the source code, architecture, and ongoing development of the platform.',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
