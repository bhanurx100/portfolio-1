'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/shared/section-header';
import { Chips } from '@/components/shared/chips';
import { GithubCTA } from '@/components/shared/github-cta';

export default function StayEasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <div className="mb-8">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Featured Project</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty">
                Stay<span className="text-accent">Ease</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">Discover. Book. Manage. Travel Smarter.</p>
              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                StayEase is a modern hotel booking platform that combines hotel discovery, AI-assisted search, enriched hotel details from multiple providers, secure booking, and owner property management in one seamless experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://stayease.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
                <a
                  href="https://github.com/bhanurx100/stayease"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-accent/10 transition inline-flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/stayease-preview.png"
                alt="StayEase Preview"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-foreground/80 leading-relaxed">
              Modern hotel booking platforms usually focus only on searching and booking accommodations. Property owners often need tools to manage hotel listings, bookings, reviews, maps, amenities, and complete bookings. StayEase aims to bring hotel discovery, booking, enriched hotel information from multiple providers, secure booking flow with authentication and payment integration, and property management into a unified platform.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">My Role</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>Product Planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>Full Stack Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>API Integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>Database Design</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'AI Hotel Search',
                description: 'Search hotels using natural language with AI-powered search.'
              },
              {
                icon: '🏨',
                title: 'Rich Hotel Details',
                description: 'Hotel information enriched using Booking.com, Google Maps, Tripadvisor.'
              },
              {
                icon: '🛡️',
                title: 'Secure Booking',
                description: 'Complete hotel booking flow with authentication and payment integration.'
              },
              {
                icon: '👤',
                title: 'User Accounts',
                description: 'User accounts to track bookings, wishlist, and manage preferences.'
              },
              {
                icon: '📱',
                title: 'Responsive UI',
                description: 'Fully responsive design that works on all devices and screen sizes.'
              },
              {
                icon: '🏪',
                title: 'Owner Property Management',
                description: 'Hotel owners can create, edit, and manage their hotel listings.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-5 rounded-lg bg-secondary/20 border border-border/30">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-base mb-1.5">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Screens */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/stayease-home.png', label: 'Home Page' },
              { src: '/images/stayease-search.png', label: 'Search Results' },
              { src: '/images/stayease-details.png', label: 'Hotel Details' },
              { src: '/images/stayease-booking.png', label: 'Booking' },
              { src: '/images/stayease-bookings.png', label: 'My Bookings' },
              { src: '/images/stayease-owner.png', label: 'Owner Dashboard' }
            ].map((screen, i) => (
              <div key={i} className="rounded-lg overflow-hidden bg-secondary/10 border border-border/30">
                <Image
                  src={screen.src}
                  alt={screen.label}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-4 text-center">
                  <p className="text-sm font-medium">{screen.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tech Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-4">Frontend</h3>
              <Chips skills={['React', 'TypeScript', 'Tailwind CSS']} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Backend</h3>
              <Chips skills={['Node.js', 'Express', 'MongoDB']} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">External APIs</h3>
              <Chips skills={['Booking.com RapidAPI', 'Google Maps', 'Tripadvisor API', 'Stripe']} />
            </div>
          </div>
        </div>

        {/* External Integrations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">External Integrations</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: '📦',
                title: 'Booking.com RapidAPI',
                description: 'Live hotel inventory and hotel details.'
              },
              {
                icon: '🗺️',
                title: 'Google Maps',
                description: 'Maps, coordinates for nearby attractions.'
              },
              {
                icon: '⭐',
                title: 'Tripadvisor API',
                description: 'Hotel reviews and ratings.'
              },
              {
                icon: '💳',
                title: 'Stripe Payments',
                description: 'Secure payment processing for bookings.'
              },
              {
                icon: '☁️',
                title: 'Cloudinary Images',
                description: 'Hotel image uploads and optimization.'
              },
              {
                icon: '🔐',
                title: 'JWT Authentication',
                description: 'Secure user authentication and authorization.'
              }
            ].map((integration, i) => (
              <div key={i} className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                <div className="text-2xl mb-2">{integration.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{integration.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Challenges & Solutions</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Challenge: Hotel data comes from multiple providers with different data All',
                description: 'Solution: Built robust data aggregation and deduplication logic to normalize data from different providers.'
              },
              {
                title: 'Challenge: Hotel search performance with large data sets',
                description: 'Solution: Optimized APIs with pagination and caching to provide instant hotel searches.'
              },
              {
                title: 'Challenge: Single source of data is incomplete',
                description: 'Solution: Combined data from multiple sources (Booking.com, Google Maps, Tripadvisor) to provide a rich hotel experience for users.'
              }
            ].map((challenge, i) => (
              <div key={i} className="p-6 rounded-lg bg-secondary/20 border border-border/30">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-accent">●</span>
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <GithubCTA title="View on GitHub" href="https://github.com/bhanurx100/stayease" />
      </div>
    </div>
  );
}
