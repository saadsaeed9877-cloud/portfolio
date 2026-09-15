import type { ReactNode } from 'react'

/** Small uppercase label above a headline — the newspaper "kicker". */
export function Kicker({ children, red }: { children: ReactNode; red?: boolean }) {
  return (
    <p
      className={`f-mono text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-[11px] ${
        red ? 'accent-red' : 'ink-soft'
      }`}
    >
      {children}
    </p>
  )
}

/** Big section banner between double rules, e.g. "CAREER". */
export function SectionBanner({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="rule-double mt-2 pt-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--rule)] pb-3">
        <h2 className="f-display text-3xl font-black uppercase tracking-tight ink sm:text-4xl">
          {title}
        </h2>
        {sub && (
          <p className="f-mono text-[10px] uppercase tracking-[0.25em] ink-faint sm:text-[11px]">
            {sub}
          </p>
        )}
      </div>
    </div>
  )
}

/** Byline + dateline row under a headline. */
export function Byline({ author, role }: { author: string; role?: string }) {
  return (
    <p className="f-mono mt-2 text-[10px] uppercase tracking-[0.18em] ink-faint sm:text-[11px]">
      By <span className="ink font-semibold">{author}</span>
      {role ? ` · ${role}` : ''}
    </p>
  )
}

/** Pull quote styled like a newspaper breakout box. */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-6 border-y-2 border-[var(--rule)] py-4 text-center">
      <p className="f-display text-xl italic leading-snug ink sm:text-2xl">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  )
}

/** Ornamental separator. */
export function Ornament() {
  return (
    <div className="my-8 flex items-center justify-center gap-4" aria-hidden>
      <span className="h-px w-16 bg-[var(--rule)]" />
      <span className="f-display text-lg ink">&#10087;</span>
      <span className="h-px w-16 bg-[var(--rule)]" />
    </div>
  )
}
