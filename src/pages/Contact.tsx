import { useState, type FormEvent } from 'react'
import { profile } from '@/data/content'
import { SectionBanner } from '@/components/newspaper/bits'
import { sendEmail } from '@/lib/emailjs'
import { toast } from 'sonner'

const inputCls =
  'w-full border border-[var(--rule)] bg-[#faf6ec] px-3 py-2 f-body text-[15px] ink placeholder:text-[var(--ink-faint)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-red)] transition-all'

export default function Contact() {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [subject, setSubject] = useState('')
  const [letter, setLetter] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function dispatch(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !letter.trim()) {
      setError('The editor insists on a signature and a letter body before dispatch.')
      toast.error('Missing required fields', {
        description: 'Please provide your name and letter body.',
      })
      return
    }
    setError('')
    setIsSubmitting(true)

    const subj = subject.trim() || `Letter from ${name.trim()}`
    const letterBody = [
      `Dear ${profile.name},`,
      '',
      letter.trim(),
      '',
      `— ${name.trim()}${from.trim() ? ` (${from.trim()})` : ''}`,
    ].join('\n')

    // Send email via EmailJS
    const result = await sendEmail({
      to_email: profile.email,
      from_name: name.trim(),
      from_email: from.trim(),
      subject: subj,
      message: letterBody,
    })

    setIsSubmitting(false)

    if (result.success) {
      toast.success('Letter dispatched!', {
        description: result.message,
      })
      // Clear form
      setName('')
      setFrom('')
      setSubject('')
      setLetter('')
    } else {
      toast.error('Dispatch failed', {
        description: result.message,
      })
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = profile.email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    toast.success('Email copied to clipboard')
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="page-in mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
      <SectionBanner title="Letters" sub="To the Editor — Correspondence Invited" />

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Letter form */}
        <article className="lg:col-span-7 lg:border-r lg:border-[var(--rule)] lg:pr-8">
          <h3 className="f-display text-3xl font-black leading-tight ink">
            Write to the Newsroom
          </h3>
          <p className="news-copy mt-2 text-[15px] ink-soft">
            Opportunities, collaborations, and questions are read at the morning editorial meeting.
            Compose your letter below; it is dispatched through our mail service.
          </p>

          <form onSubmit={dispatch} className="mt-6 space-y-4" noValidate={false}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="f-mono mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ink">
                  Your name *
                </span>
                <input
                  className={inputCls}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Reader"
                  required
                  disabled={isSubmitting}
                />
              </label>
              <label className="block">
                <span className="f-mono mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ink">
                  Your email
                </span>
                <input
                  type="email"
                  className={inputCls}
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="jane@example.com"
                  disabled={isSubmitting}
                />
              </label>
            </div>
            <label className="block">
              <span className="f-mono mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ink">
                Subject
              </span>
              <input
                className={inputCls}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="A role, a project, a question…"
                disabled={isSubmitting}
              />
            </label>
            <label className="block">
              <span className="f-mono mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ink">
                Your letter *
              </span>
              <textarea
                className={`${inputCls} min-h-36 resize-y`}
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                placeholder="Dear Mr. Saeed, we read your front page with great interest…"
                required
                disabled={isSubmitting}
              />
            </label>

            {error && (
              <p className="f-mono border border-[var(--accent-red)] px-3 py-2 text-[11px] uppercase tracking-[0.15em] accent-red">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="f-mono w-full border-2 border-[var(--rule)] bg-[var(--ink)] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--paper)] transition-all hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Dispatching…' : 'Dispatch Letter →'}
            </button>
          </form>
        </article>

        {/* Direct lines */}
        <aside className="lg:col-span-5">
          <div className="frame-box p-5">
            <p className="f-display text-center text-lg font-black uppercase ink">Direct Lines</p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="border-b border-dotted border-[var(--rule)] pb-3">
                <p className="f-mono text-[10px] uppercase tracking-[0.25em] ink-faint">
                  Electronic mail
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <a className="ink-link font-semibold" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="f-mono border border-[var(--rule)] px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] ink transition-all hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                  >
                    {copied ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="border-b border-dotted border-[var(--rule)] pb-3">
                <p className="f-mono text-[10px] uppercase tracking-[0.25em] ink-faint">
                  Telephone
                </p>
                <a className="ink-link mt-1 inline-block font-semibold" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </div>
              <div>
                <p className="f-mono text-[10px] uppercase tracking-[0.25em] ink-faint">Bureau</p>
                <p className="mt-1 ink">{profile.location} &mdash; remote-friendly</p>
              </div>
            </div>
          </div>

          <div className="mt-6 border border-[var(--rule)] bg-[#faf6ec] p-4">
            <p className="f-mono text-[10px] font-semibold uppercase tracking-[0.25em] ink">
              Editorial Hours
            </p>
            <p className="news-copy mt-2 text-sm ink-soft">
              The editor replies to serious correspondence within one working day. Letters marked
              &ldquo;urgent&rdquo; jump the queue.
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}
