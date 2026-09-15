import { projects, profile } from '@/data/content'
import { Kicker, Byline, SectionBanner, Ornament } from '@/components/newspaper/bits'

export default function Projects() {
  return (
    <main className="page-in mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
      <SectionBanner title="Projects" sub="Technology & Research Desk" />

      {projects.map((p, idx) => (
        <article key={p.name} className={idx > 0 ? 'mt-12' : 'mt-8'}>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:border-r lg:border-[var(--rule)] lg:pr-8">
              <Kicker red={idx === 0}>{p.kicker}</Kicker>
              <h3 className="f-display mt-2 text-3xl font-black leading-tight ink sm:text-4xl">
                {p.headline}
              </h3>
              <p className="f-body mt-2 text-lg italic leading-relaxed ink-soft">{p.standfirst}</p>
              <Byline author={profile.name} role="Project Correspondent" />

              <div className="mt-5 sm:columns-2 sm:gap-8">
                <p className="news-copy dropcap text-[15px] ink">{p.body[0]}</p>
                {p.body.slice(1).map((para) => (
                  <p key={para.slice(0, 24)} className="news-copy mt-4 text-[15px] ink sm:mt-0 sm:mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="frame-box p-4">
                <p className="f-display text-center text-lg font-black uppercase ink">
                  Specifications
                </p>
                <p className="f-mono mt-1 text-center text-[10px] uppercase tracking-[0.2em] ink-faint">
                  {p.name}
                </p>
                <ul className="f-mono mt-3 space-y-1.5 text-[11px] uppercase tracking-wider ink">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 border-b border-dotted border-[var(--rule)] pb-1 last:border-0"
                    >
                      <span aria-hidden className="accent-red">&#9642;</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-mono inline-block w-full border-2 border-[var(--rule)] bg-[var(--ink)] px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--paper)] transition-all hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)]"
                >
                  View on GitHub →
                </a>
              </div>
              <p className="news-copy mt-4 text-sm italic ink-soft">
                Filed from the workbench: this project shipped working software, not vaporware.
              </p>
            </aside>
          </div>
          {idx < projects.length - 1 && <Ornament />}
        </article>
      ))}

      <p className="f-mono mt-10 border-t border-[var(--rule)] pt-4 text-center text-[10px] uppercase tracking-[0.25em] ink-faint">
        More stories always in production &mdash; the presses never stop
      </p>
    </main>
  )
}
