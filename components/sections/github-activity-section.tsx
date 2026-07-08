'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from 'lucide-react'
import { githubUsername, siteConfig } from '@/lib/site-config'

type Contribution = { date: string; count: number; level: number }

type Week = (Contribution | null)[]

function getToday(): Date {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    return now
}

function buildWeeks(contributions: Contribution[]): Week[] {
    const today = getToday()
    const sorted = [...contributions].sort((a, b) => a.date.localeCompare(b.date))
    if (sorted.length === 0) return []

    // Filter out any dates after today
    const validContributions = sorted.filter(c => {
        const cDate = new Date(c.date)
        cDate.setHours(0, 0, 0, 0)
        return cDate <= today
    })

    if (validContributions.length === 0) return []

    const firstDow = new Date(`${validContributions[0].date}T00:00:00`).getDay()
    const padded: (Contribution | null)[] = [
        ...Array.from({ length: firstDow }, () => null),
        ...validContributions,
    ]
    while (padded.length % 7 !== 0) padded.push(null)

    const weeks: Week[] = []
    for (let i = 0; i < padded.length; i += 7) {
        weeks.push(padded.slice(i, i + 7))
    }
    return weeks
}

const levelStyles: Record<number, string> = {
    0: 'bg-[#15131B]',
    1: 'bg-[#2A1626]',
    2: 'bg-[#54203F]',
    3: 'bg-[#8F2D68]',
    4: 'bg-[#D9469A]',
}

function ContributionGraph({ contributions, total, earliestDate }: { contributions: Contribution[], total: number, earliestDate: string }) {
    const viewportRef = useRef<HTMLDivElement>(null)
    const didInitialScroll = useRef(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const weeks = buildWeeks(contributions)
    const today = getToday()
    const cellSize = 11
    const gap = 3
    const weekPitch = cellSize + gap
    const visibleWeeks = 53
    const targetWidth = visibleWeeks * weekPitch - gap

    useEffect(() => {
        if (viewportRef.current && !didInitialScroll.current && weeks.length > 0) {
            requestAnimationFrame(() => {
                if (viewportRef.current) {
                    viewportRef.current.scrollLeft = viewportRef.current.scrollWidth - viewportRef.current.clientWidth
                    didInitialScroll.current = true
                }
            })
        }
    }, [weeks.length])

    const handleScroll = () => {
        if (viewportRef.current) {
            setCanScrollLeft(viewportRef.current.scrollLeft > 0)
            setCanScrollRight(
                viewportRef.current.scrollLeft < viewportRef.current.scrollWidth - viewportRef.current.clientWidth
            )
        }
    }

    const scrollToLatest = () => {
        if (viewportRef.current) {
            viewportRef.current.scrollTo({
                left: viewportRef.current.scrollWidth - viewportRef.current.clientWidth,
                behavior: 'smooth',
            })
        }
    }

    const scrollLeftHalf = () => {
        if (viewportRef.current) {
            viewportRef.current.scrollBy({ left: -viewportRef.current.clientWidth / 2, behavior: 'smooth' })
        }
    }

    // Generate month labels
    const monthLabels: { weekIndex: number; label: string }[] = []
    const seenMonths = new Set<string>()

    weeks.forEach((week, wi) => {
        week.forEach((day) => {
            if (day) {
                const date = new Date(day.date)
                const month = date.toLocaleString('default', { month: 'short' })
                const monthKey = `${date.getFullYear()}-${month}`
                if (!seenMonths.has(monthKey)) {
                    seenMonths.add(monthKey)
                    monthLabels.push({ weekIndex: wi, label: month })
                }
            }
        })
    })

    const earliestDateObj = new Date(earliestDate)
    const formattedEarliest = earliestDateObj.toLocaleString('default', { month: 'short', year: 'numeric' })

    return (
        <div className="flex flex-col gap-4">
            {/* Viewport with fixed width */}
            <div className="relative" style={{ width: 'min(100%, max-content)', maxWidth: `${targetWidth}px` }}>
                <div
                    ref={viewportRef}
                    role="img"
                    aria-label={`GitHub contribution graph: ${total.toLocaleString()} contributions since ${formattedEarliest}`}
                    className="overflow-x-auto no-scrollbar"
                    onScroll={handleScroll}
                >
                    {/* Track with intrinsic width based on total weeks */}
                    <div className="flex flex-col gap-2" style={{ width: 'max-content', minWidth: 'max-content' }}>
                        {/* Month labels inside track */}
                        <div className="flex gap-[3px]">
                            {weeks.map((_, wi) => {
                                const label = monthLabels.find(l => l.weekIndex === wi)
                                return (
                                    <div
                                        key={`label-${wi}`}
                                        className="flex-shrink-0"
                                        style={{ width: `${cellSize}px` }}
                                    >
                                        {label && (
                                            <span className="text-muted-foreground/70 text-xs">
                                                {label.label}
                                            </span>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Week columns in track */}
                        <div className="flex gap-[3px]">
                            {weeks.map((week, wi) => (
                                <div
                                    key={`week-${wi}`}
                                    className="grid flex-shrink-0"
                                    style={{
                                        gridTemplateRows: `repeat(7, ${cellSize}px)`,
                                        gap: `${gap}px`,
                                        width: `${cellSize}px`,
                                        minWidth: `${cellSize}px`,
                                    }}
                                >
                                    {week.map((day, di) => {
                                        const isToday = day ? new Date(day.date).toDateString() === today.toDateString() : false
                                        return (
                                            <div
                                                key={`${wi}-${di}`}
                                                title={day ? `${day.count} contribution${day.count === 1 ? '' : 's'} · ${new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : undefined}
                                                className={`rounded-[2px] flex-shrink-0 ${day
                                                    ? levelStyles[day.level] ?? levelStyles[0]
                                                    : 'bg-transparent'
                                                    } ${isToday ? 'ring-1 ring-[#FF5FB7]/75' : ''}`}
                                                style={{
                                                    width: `${cellSize}px`,
                                                    height: `${cellSize}px`,
                                                    minWidth: `${cellSize}px`,
                                                    minHeight: `${cellSize}px`,
                                                    maxWidth: `${cellSize}px`,
                                                    maxHeight: `${cellSize}px`,
                                                }}
                                            />
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation controls outside cell grid */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-2">
                    <button
                        onClick={scrollLeftHalf}
                        disabled={!canScrollLeft}
                        className="bg-card/90 backdrop-blur-sm border-border/50 hover:border-[#D9469A]/50 disabled:opacity-30 disabled:hover:border-border/50 border rounded p-1.5 transition-all"
                        aria-label="Scroll to older history"
                    >
                        <ArrowLeft className="size-3.5 text-muted-foreground" aria-hidden="true" />
                    </button>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-2">
                    <button
                        onClick={scrollToLatest}
                        disabled={!canScrollRight}
                        className="bg-card/90 backdrop-blur-sm border-border/50 hover:border-[#D9469A]/50 disabled:opacity-30 disabled:hover:border-border/50 border rounded p-1.5 transition-all"
                        aria-label="Scroll to latest"
                    >
                        <ArrowRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Summary row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <p className="text-muted-foreground text-sm">
                        <span className="text-foreground font-semibold">{total.toLocaleString()}</span>{' '}
                        contributions since {formattedEarliest}
                    </p>
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#D9469A] inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                    >
                        <Code2 className="size-3" aria-hidden="true" />
                        View GitHub
                    </a>
                </div>
                <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((level) => (
                        <span
                            key={level}
                            aria-hidden="true"
                            className={`rounded-[2px] ${levelStyles[level]}`}
                            style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                        />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}

function ContributionsGraph() {
    const [contributions, setContributions] = useState<Contribution[]>([])
    const [total, setTotal] = useState(0)
    const [earliestDate, setEarliestDate] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const currentYear = new Date().getFullYear()
                const yearsToFetch = [currentYear, currentYear - 1, currentYear - 2]
                let allContributions: Contribution[] = []

                for (const year of yearsToFetch) {
                    try {
                        const res = await fetch(
                            `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${year}`,
                        )
                        if (res.ok) {
                            const data: { contributions: Contribution[] } = await res.json()
                            if (data.contributions?.length > 0) {
                                allContributions = [...allContributions, ...data.contributions]
                            }
                        }
                    } catch {
                        continue
                    }
                }

                if (allContributions.length === 0) throw new Error('No contribution data available')

                // Find earliest date from actual data (only from contributions with count > 0)
                const withActivity = allContributions.filter(c => c.count > 0)
                const sorted = [...withActivity].sort((a, b) => a.date.localeCompare(b.date))
                const earliest = sorted.length > 0 ? sorted[0].date : allContributions[0].date
                const totalContributions = allContributions.reduce((sum, c) => sum + c.count, 0)

                setContributions(allContributions)
                setTotal(totalContributions)
                setEarliestDate(earliest)
                setLoading(false)
            } catch {
                setError(true)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <ContributionsSkeleton />
    }

    if (error) {
        return (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
                <p className="text-muted-foreground text-sm">
                    Live contribution data couldn&apos;t be loaded right now.
                </p>
                <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D9469A] inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                    View activity directly on GitHub
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
            </div>
        )
    }

    return <ContributionGraph contributions={contributions} total={total} earliestDate={earliestDate} />
}

function ContributionsSkeleton() {
    const cellSize = 11
    const gap = 3
    const weekPitch = cellSize + gap
    const visibleWeeks = 53
    const targetWidth = visibleWeeks * weekPitch - gap

    return (
        <div className="flex flex-col gap-4" aria-hidden="true">
            <div className="relative" style={{ width: 'min(100%, max-content)', maxWidth: `${targetWidth}px` }}>
                <div className="overflow-x-auto no-scrollbar">
                    <div className="flex flex-col gap-2" style={{ width: 'max-content' }}>
                        <div className="flex gap-[3px]">
                            {Array.from({ length: visibleWeeks }, (_, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0"
                                    style={{ width: `${cellSize}px` }}
                                >
                                    <div className="h-3 w-8 bg-white/[0.04] rounded animate-pulse" />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-[3px]">
                            {Array.from({ length: visibleWeeks }, (_, wi) => (
                                <div
                                    key={wi}
                                    className="grid flex-shrink-0"
                                    style={{
                                        gridTemplateRows: `repeat(7, ${cellSize}px)`,
                                        gap: `${gap}px`,
                                        width: `${cellSize}px`,
                                        minWidth: `${cellSize}px`,
                                    }}
                                >
                                    {Array.from({ length: 7 }, (_, di) => (
                                        <div
                                            key={di}
                                            className="bg-white/[0.04] rounded-[2px] animate-pulse"
                                            style={{
                                                width: `${cellSize}px`,
                                                height: `${cellSize}px`,
                                                minWidth: `${cellSize}px`,
                                                minHeight: `${cellSize}px`,
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="h-4 w-32 bg-white/[0.04] rounded animate-pulse" />
                <div className="h-3 w-24 bg-white/[0.04] rounded animate-pulse" />
            </div>
        </div>
    )
}

export function GitHubActivitySection() {
    return (
        <section
            id="github"
            className="scroll-section mx-auto flex max-w-[1320px] flex-col gap-5 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
        >
            <div className="flex flex-col gap-3">
                <p className="eyebrow">BUILDING IN PUBLIC</p>
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                    Code is part of the <span className="text-primary">story</span>.
                </h2>
                <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
                    A live look at ongoing building, learning and iteration, straight from
                    GitHub.
                </p>
            </div>

            <div className="p-4 sm:p-5">
                <ContributionsGraph />
            </div>
        </section>
    )
}