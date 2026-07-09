'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Mail, RotateCcw, Send } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
})

type ContactFormData = z.infer<typeof contactSchema>

type Status = 'idle' | 'submitting' | 'success' | 'error'

const fieldClass =
  'border-input bg-secondary/40 placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-primary/25 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all focus-visible:ring-4'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed to send')

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="border-border/60 flex flex-col gap-6 rounded-[22px] border bg-white/[0.015] p-6 sm:p-8">
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

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            {...register('name')}
            type="text"
            placeholder="Enter your name"
            aria-invalid={!!errors.name}
            className={fieldClass}
          />
          {errors.name && (
            <p role="alert" className="text-destructive text-xs">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            aria-invalid={!!errors.email}
            className={fieldClass}
          />
          {errors.email && (
            <p role="alert" className="text-destructive text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            {...register('subject')}
            type="text"
            placeholder="What's this about?"
            aria-invalid={!!errors.subject}
            className={fieldClass}
          />
          {errors.subject && (
            <p role="alert" className="text-destructive text-xs">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            aria-invalid={!!errors.message}
            className={`${fieldClass} min-h-[150px] resize-y`}
          />
          {errors.message && (
            <p role="alert" className="text-destructive text-xs">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/40 inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === 'submitting' ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="size-4" aria-hidden="true" />
            )}
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          <button
            type="button"
            onClick={() => {
              reset()
              setStatus('idle')
            }}
            className="border-border hover:border-primary/40 text-muted-foreground hover:text-foreground inline-flex h-12 items-center justify-center gap-2 rounded-lg border px-6 text-sm font-medium transition-colors"
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

        <p className="text-muted-foreground flex items-center gap-2 text-xs">
          Your information is safe with me. I&apos;ll never share your details.
        </p>
      </form>
    </div>
  )
}