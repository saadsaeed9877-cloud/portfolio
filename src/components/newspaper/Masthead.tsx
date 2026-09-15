import { Link, NavLink } from 'react-router'
import { navSections, profile } from '@/data/content'

function todayLine() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Masthead() {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-6 sm:px-6">
      {/* Top line: date / edition / price */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rule)] pb-2 f-mono text-[10px] uppercase tracking-[0.18em] ink-soft sm:text-[11px]">
        <span>{todayLine()}</span>
        <span className="hidden sm:inline">Vol. IV &middot; No. 01 &middot; Portfolio Edition</span>
        <span className="stamp f-mono text-[9px] sm:text-[10px]">Price: One Hello</span>
      </div>

      {/* Paper nameplate */}
      <div className="py-5 text-center sm:py-7">
        <p className="f-mono text-[10px] uppercase tracking-[0.4em] ink-faint sm:text-xs">
          {profile.motto}
        </p>
        <Link to="/" aria-label="Go to front page">
          <h1 className="f-display mt-1 text-[13vw] font-black leading-none tracking-tight ink sm:text-7xl md:text-8xl">
            {profile.paper}
          </h1>
        </Link>
        <p className="f-mono mt-3 text-[10px] uppercase tracking-[0.28em] ink-soft sm:text-xs">
          {profile.name} &mdash; {profile.role} &middot; {profile.location}
        </p>
      </div>

      {/* Section navigation */}
      <nav className="rule-double pt-2 pb-3" aria-label="Sections">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 f-mono text-[11px] font-semibold uppercase sm:gap-x-9 sm:text-xs">
          {navSections.map((s) => (
            <li key={s.path}>
              <NavLink
                to={s.path}
                end={s.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {s.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
