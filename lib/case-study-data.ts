export const caseStudyData = {
  splitfin: {
    hero: {
      eyebrow: 'FEATURED PROJECT',
      name: 'SplitFin',
      headline: 'Track. Split. Settle.',
      headlineHighlight: 'All in one place.',
      description: 'SplitFin connects personal finance tracking and shared expenses in one workflow — so users can track spending, split costs, scan bills and settle balances without moving between separate apps.',
      liveUrl: 'https://spend-wise-tawny.vercel.app/accounts',
      githubUrl: 'https://github.com/bhanurx100',
      previewImage: '/images/splitfin-preview.png',
      previewAlt: 'SplitFin dashboard showing finance tracking and shared expense management',
      metadata: {
        role: 'Frontend-focused Full Stack',
        status: 'In Development',
        stack: 'Next.js · TypeScript · PostgreSQL',
      },
    },
    productStory: {
      eyebrow: 'WHY SPLITFIN',
      headline: 'Personal money and shared expenses should not feel like separate worlds.',
      description: 'Most finance apps track personal spending. Most split apps track who owes whom. SplitFin connects both workflows so a shared dinner, trip or household bill can remain part of the user\'s wider financial picture.',
      audience: 'Individuals · Friends · Roommates · Groups',
      ownership: 'Product thinking · UI/UX engineering · Frontend architecture · API integration',
      workflow: [
        {
          step: 'TRACK',
          description: 'Record income, expenses, accounts and categories.',
          accent: 'violet',
        },
        {
          step: 'SPLIT',
          description: 'Turn a transaction into a shared expense.',
          accent: 'cyan',
        },
        {
          step: 'SETTLE',
          description: 'Keep balances clear across people and groups.',
          accent: 'green',
        },
        {
          step: 'UNDERSTAND',
          description: 'See spending patterns and financial context.',
          accent: 'amber',
        },
      ],
    },
    productExperience: {
      eyebrow: 'PRODUCT EXPERIENCE',
      headline: 'See how the workflow comes together.',
      featuredScreen: {
        image: '/images/splitfin-dashboard.png',
        title: 'Financial overview',
        description: 'Balances, spending, recent activity and shared expense context in one place.',
      },
      screens: [
        {
          image: '/images/splitfin-transactions.png',
          title: 'TRANSACTIONS',
          description: 'Review and filter financial activity.',
        },
        {
          image: '/images/splitfin-add-transaction.png',
          title: 'ADD TRANSACTION',
          description: 'Capture income or expenses with structured context.',
        },
        {
          image: '/images/splitfin-split-expense.png',
          title: 'SPLIT EXPENSE',
          description: 'Choose participants, payer and split method.',
        },
        {
          image: '/images/splitfin-bill-scanner.png',
          title: 'BILL SCANNER',
          description: 'Turn receipt data into a reviewable expense flow.',
        },
      ],
    },
    architecture: {
      eyebrow: 'HOW IT\'S BUILT',
      headline: 'A simple structure designed to grow with the product.',
      stack: {
        frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        dataState: ['TanStack Query', 'Zustand'],
        backend: ['Next.js API Routes', 'Node.js'],
        data: ['Prisma', 'PostgreSQL'],
      },
      flow: ['UI', 'Feature Logic', 'Query / Mutation Layer', 'API Routes', 'Server Services', 'Prisma', 'PostgreSQL'],
      flowNote: 'UI stays focused on interaction while feature logic, server workflows and persistence remain easier to reason about independently.',
      folderStructure: `src/
├── app/
├── components/
├── features/
│   ├── transactions/
│   ├── accounts/
│   ├── categories/
│   └── splitpay/
├── server/
│   ├── services/
│   ├── repositories/
│   └── queries/
├── hooks/
├── store/
├── lib/
└── types/`,
      folderNote: 'EVOLVING FEATURE-BASED STRUCTURE',
      principles: [
        { title: 'Feature ownership', description: 'Keep domain behavior near the feature.' },
        { title: 'Thin pages', description: 'Pages compose instead of owning business logic.' },
        { title: 'Server separation', description: 'Persistence stays outside presentation UI.' },
      ],
    },
    challenges: [
      {
        title: 'SPLIT CALCULATIONS',
        description: 'Shared expenses become complex when participants use equal, exact or percentage-based allocations.',
        approach: 'Pure calculation logic · validation · rounding safety',
        status: 'In Progress',
      },
      {
        title: 'BILL CAPTURE WITHOUT DUPLICATES',
        description: 'A scanned receipt can overlap with an existing manual transaction or shared expense.',
        approach: 'Normalization · similarity checks · user confirmation',
        status: 'Planned',
      },
      {
        title: 'KEEPING FINANCE AND SPLITS CONNECTED — NOT COUPLED',
        description: 'A transaction records money movement, while a split records how cost is shared between people.',
        approach: 'Separate domains · explicit references · controlled synchronization',
        status: 'Built',
      },
    ],
    roadmap: [
      {
        phase: 'PHASE 1',
        name: 'FOUNDATION',
        status: 'Built',
        scope: ['transactions', 'accounts', 'categories', 'dashboard'],
      },
      {
        phase: 'PHASE 2',
        name: 'SHARED MONEY',
        status: 'In Progress',
        scope: ['split workflows', 'groups', 'balances', 'settlements'],
      },
      {
        phase: 'PHASE 3',
        name: 'AUTOMATION',
        status: 'Planned',
        scope: ['scanner refinement', 'duplicate detection', 'recurring expenses'],
      },
      {
        phase: 'PHASE 4',
        name: 'CONNECTED FINANCE',
        status: 'Future',
        scope: ['secure bank integrations', 'smarter insights', 'multi-currency'],
      },
    ],
    cta: {
      headline: 'Interested in how I build real product workflows?',
      description: 'I\'m open to frontend and full-stack opportunities where thoughtful interfaces and maintainable product architecture matter.',
      primaryLabel: 'Get In Touch',
      primaryUrl: '#contact',
      secondaryLabel: 'Explore More Projects',
      secondaryUrl: '/projects',
    },
  },
  stayease: {
    hero: {
      eyebrow: 'PRODUCT CASE STUDY',
      name: 'StayEase',
      headline: 'One platform.',
      headlineHighlight: 'Every stay. Every role.',
      description: 'StayEase is evolving from a hotel booking experience into a unified stay and property platform — connecting travelers, property owners and platform operations through role-based workflows.',
      liveUrl: 'https://stayease-hotel-booking-platform.vercel.app/',
      githubUrl: 'https://github.com/bhanurx100',
      previewImage: '/images/stayease-preview.png',
      previewAlt: 'StayEase hotel booking platform showing discovery and booking interface',
      metadata: {
        role: 'Full-Stack Product',
        status: 'In Development',
        stack: 'Next.js · TypeScript · PostgreSQL',
      },
    },
    productStory: {
      eyebrow: 'WHY STAYEASE',
      headline: 'A stay connects more',
      headlineHighlight: 'than one user.',
      description: 'Travelers want a simple way to discover and manage stays. Property owners need control over listings, availability and bookings. Platform teams need visibility across the system. StayEase brings these workflows into one connected product.',
      audience: 'Travelers · Property Owners · Platform Operations',
      ownership: 'Product planning · Full-stack development · UI engineering · API integration',
      roleCards: [
        {
          number: '01',
          title: 'Traveler Experience',
          description: 'Find the right stay and manage the journey from discovery to booking.',
          items: ['Search and compare stays', 'Review property details', 'Manage bookings'],
          accent: 'violet',
        },
        {
          number: '02',
          title: 'Owner Operations',
          description: 'Manage properties, availability and reservations from one operational workspace.',
          items: ['Manage listings', 'Control availability', 'Track reservations'],
          accent: 'green',
        },
        {
          number: '03',
          title: 'Platform Control',
          description: 'Maintain visibility across users, properties and activity as the platform grows.',
          items: ['Oversee users and properties', 'Monitor platform activity', 'Support trust and operations'],
          accent: 'amber',
        },
      ],
    },
    productExperience: {
      eyebrow: 'PRODUCT EXPERIENCE',
      headline: 'See how the platform comes together.',
      featuredScreen: {
        image: '/images/stayease-details.png',
        title: 'Stay discovery',
        description: 'Rich property details, reviews, maps and booking context in one view.',
      },
      screens: [
        {
          image: '/images/stayease-home.png',
          title: 'HOME',
          description: 'Search hotels and discover featured destinations.',
        },
        {
          image: '/images/stayease-search.png',
          title: 'SEARCH RESULTS',
          description: 'Advanced filters with hotel listings.',
        },
        {
          image: '/images/stayease-booking.png',
          title: 'BOOKING',
          description: 'Guest information and payment flow.',
        },
        {
          image: '/images/stayease-bookings.png',
          title: 'MY BOOKINGS',
          description: 'Track current and previous bookings.',
        },
        {
          image: '/images/stayease-owner.png',
          title: 'OWNER DASHBOARD',
          description: 'Total hotels, bookings, revenue summary and manage listings.',
        },
      ],
    },
    architecture: {
      eyebrow: 'HOW IT\'S BUILT',
      headline: 'Role-based modules designed for platform growth.',
      stack: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
        dataState: ['React Query'],
        backend: ['Node.js', 'Express'],
        data: ['MongoDB', 'Mongoose'],
      },
      flow: ['Presentation', 'Role-Based Product Modules', 'Booking / Property Workflows', 'API Layer', 'Data Access', 'Database'],
      flowNote: 'Shared foundations with role-aware navigation keep the platform unified while allowing isolated workflows.',
      folderStructure: `src/
├── app/
│   ├── traveler/
│   ├── owner/
│   └── admin/
├── features/
│   ├── properties/
│   ├── bookings/
│   ├── availability/
│   └── users/
├── server/
├── components/
├── lib/
└── types/`,
      folderNote: 'TARGET ROLE-BASED STRUCTURE',
      principles: [
        { title: 'Role isolation', description: 'Each role has its own navigation and workflows.' },
        { title: 'Shared foundations', description: 'Common components and utilities across roles.' },
        { title: 'API abstraction', description: 'Unified data layer serving all role interfaces.' },
      ],
    },
    challenges: [
      {
        title: 'ROLE-BASED PRODUCT EXPERIENCE',
        description: 'Travelers, owners and admins need different workflows without turning the product into three disconnected applications.',
        approach: 'Shared foundations · role-aware navigation · isolated modules',
        status: 'In Progress',
      },
      {
        title: 'AVAILABILITY AND BOOKING CONSISTENCY',
        description: 'Property availability, booking state and inventory need to stay aligned as users move through the booking flow.',
        approach: 'Clear booking states · validated transitions · centralized availability logic',
        status: 'Built',
      },
      {
        title: 'GROWING BEYOND HOTELS',
        description: 'A platform designed only around hotels becomes difficult to extend to PGs, rentals, homestays and apartments.',
        approach: 'Flexible property model · shared core · type-specific capabilities',
        status: 'Planned',
      },
    ],
    roadmap: [
      {
        phase: 'PHASE 1',
        name: 'BOOKING FOUNDATION',
        status: 'Built',
        scope: ['discovery', 'property browsing', 'booking flow', 'authentication'],
      },
      {
        phase: 'PHASE 2',
        name: 'MOWNER OPERATIONS',
        status: 'In Progress',
        scope: ['owner dashboard', 'property management', 'availability', 'booking management'],
      },
      {
        phase: 'PHASE 3',
        name: 'MULTI-PROPERTY GROWTH',
        status: 'Planned',
        scope: ['PGs', 'rentals', 'homestays', 'operational modules'],
      },
      {
        phase: 'PHASE 4',
        name: 'PLATFORM INTELLIGENCE',
        status: 'Future',
        scope: ['AI assistance', 'smarter pricing', 'analytics', 'integrations'],
      },
    ],
    cta: {
      headline: 'Building beyond screens — toward complete product systems.',
      description: 'I enjoy turning complex workflows into interfaces and architectures that remain understandable as products grow.',
      primaryLabel: 'Get In Touch',
      primaryUrl: '#contact',
      secondaryLabel: 'Explore More Projects',
      secondaryUrl: '/projects',
    },
  },
}
