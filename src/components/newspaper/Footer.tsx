import { Link } from 'react-router'
import { navSections, profile } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
      <div className="rule-thick pt-4">
        <div className="grid gap-8 border-b border-[var(--rule)] pb-8 md:grid-cols-3">
          <div>
            <p className="f-display text-2xl font-black ink">{profile.paper}</p>
            <p className="f-mono mt-2 text-[10px] uppercase tracking-[0.25em] ink-faint">
              {profile.motto}
            </p>
            <p className="news-copy mt-3 max-w-xs text-sm ink-soft">
              An independent publication chronicling one engineer&rsquo;s work across the full
              stack. Printed on pixels, set in serif, delivered daily.
            </p>
          </div>
          <div>
            <p className="f-mono text-[10px] font-semibold uppercase tracking-[0.25em] ink">
              Sections
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {navSections.map((s) => (
                <li key={s.path}>
                  <Link className="ink-link" to={s.path}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="f-mono text-[10px] font-semibold uppercase tracking-[0.25em] ink">
              Correspondence
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a className="ink-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a className="ink-link" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </li>
              <li className="ink-faint">{profile.location}</li>
            </ul>
          </div>
        </div>
        <p className="f-mono mt-4 text-center text-[10px] uppercase tracking-[0.22em] ink-faint">
          &copy; {year} {profile.name} &middot; All rights reserved &middot; Set by hand in React
          &amp; Tailwind
        </p>
      </div>
    </footer>
  )
}
