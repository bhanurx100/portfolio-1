'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react';
import { Chips } from '@/components/shared/chips';
import { GithubCTA } from '@/components/shared/github-cta';

export default function SplitFinPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <div className="mb-6">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Featured Project</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-5 text-pretty">
                Split<span className="text-accent">Fin</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">Track. Split. Settle. All in one place.</p>
              <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                SplitFin is a personal finance and shared expense management app that helps users track income and expenses, split bills with friends or groups, scan bills, and settle up easily. All in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://splitfin.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
                <a
                  href="https://github.com/bhanurx100/splitfin"
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
                src="/images/splitfin-preview.png"
                alt="SplitFin Preview"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-foreground/80 leading-relaxed">
              Managing personal finances and shared expenses are often two separate workflows. Users need a simple way to track their income, split bills fairly, and settle up without the hassle of multiple apps.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">My Role</h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>Product Thinking & Planning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>Full Stack Development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>UI/UX Design & Implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✓</span>
                <span>Database Design & API Development</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '📊',
                title: 'Expense Tracking',
                description: 'Track income and expenses with categories & accounts.'
              },
              {
                icon: '👥',
                title: 'Split Expenses',
                description: 'Split bills with friends or groups with fair calculations.'
              },
              {
                icon: '📸',
                title: 'Bill Scanner',
                description: 'Scan any bill and extract items to add or split instantly.'
              },
              {
                icon: '👫',
                title: 'Group Settlements',
                description: 'Manage group expenses and settle up easily.'
              },
              {
                icon: '📈',
                title: 'Analytics',
                description: 'Visualize spending patterns and insights with charts.'
              },
              {
                icon: '🏷️',
                title: 'Categories',
                description: 'Organize expenses with custom categories and budgets.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Screens */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { src: '/images/splitfin-dashboard.png', label: 'Dashboard' },
              { src: '/images/splitfin-transactions.png', label: 'Transactions' },
              { src: '/images/splitfin-add-transaction.png', label: 'Add Transaction' },
              { src: '/images/splitfin-split-expense.png', label: 'Split Expense' },
              { src: '/images/splitfin-bill-scanner.png', label: 'Bill Scanner' }
            ].map((screen, i) => (
              <div key={i} className="rounded-lg overflow-hidden bg-secondary/10 border border-border/30">
                <Image
                  src={screen.src}
                  alt={screen.label}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-3 text-center">
                  <p className="text-sm font-medium">{screen.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tech Architecture</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg mb-3">Frontend</h3>
              <Chips skills={['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma']} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Backend</h3>
              <Chips skills={['Next.js API Routes', 'Node.js', 'PostgreSQL']} />
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Accurate Split Calculations',
                description: 'Managing complex split calculations with multiple people and uneven amounts.'
              },
              {
                title: 'Bill Scanning & Duplicate Detection',
                description: 'Avoiding duplicate expenses when scanning bills across multiple users.'
              },
              {
                title: 'Keeping Finance & Split Domains Separate',
                description: 'Maintaining clean code structure as the app grows with feature-based architecture.'
              }
            ].map((challenge, i) => (
              <div key={i} className="p-5 rounded-lg bg-secondary/20 border border-border/30">
                <h3 className="font-semibold text-lg mb-1.5 flex items-center gap-2">
                  <span className="text-accent">●</span>
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <GithubCTA title="View on GitHub" href="https://github.com/bhanurx100/splitfin" />
      </div>
    </div>
  );
}