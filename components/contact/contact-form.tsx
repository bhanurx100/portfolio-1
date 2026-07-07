'use client'

import { useState } from 'react'
import { Lock, Mail, RotateCcw, Send } from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')
    try {
      // Configurable form endpoint — replace with your own backend or form service.
      const formData = new FormData(form)
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: formData,
        })
        if (!res.ok) throw new Error('Failed to send')
      } else {
        // Fall back to a mailto draft so the message is never silently lost.
        const name = formData.get('name')
        const subject = formData.get('subject')
        const message = formData.get('message')
        window.location.href = `mailto:bhanupprasad.rx100@gmail.com?subject=${encodeURIComponent(
          String(subject ?? ''),
        )}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="surface-card flex flex-col gap-6 p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <span className="border-primary/30 bg-primary/10 text-primary inline-flex size-13 shrink-0 items-center justify-center rounded-full border">
          <Mail className="size-5" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xl font-bold sm:text-2xl">Send me a message</h2>
          <p className="text-muted-foreground text-sm">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="border-input bg-secondary/40 placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-lg border px-4 py-3 text-sm outline-none focus-visible:ring-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="border-input bg-secondary/40 placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-lg border px-4 py-3 text-sm outline-none focus-visible:ring-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="What's this about?"
            className="border-input bg-secondary/40 placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-lg border px-4 py-3 text-sm outline-none focus-visible:ring-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            className="border-input bg-secondary/40 placeholder:text-muted-foreground focus-visible:ring-ring w-full resize-y rounded-lg border px-4 py-3 text-sm outline-none focus-visible:ring-2"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="size-4" aria-hidden="true" />
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          <button
            type="reset"
            onClick={() => setStatus('idle')}
            className="border-border hover:border-primary/40 inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Reset
          </button>
        </div>

        {status === 'success' && (
          <p role="status" className="text-success text-sm">
            Thanks for reaching out! Your message is on its way.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="text-destructive text-sm">
            Something went wrong. Please try again or email me directly.
          </p>
        )}

        <p className="text-muted-foreground flex items-center gap-2 text-sm">
          <Lock className="size-3.5" aria-hidden="true" />
          Your information is safe with me. I&apos;ll never share your details.
        </p>
      </form>
    </div>
  )
}
