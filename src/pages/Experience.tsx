import { experience, profile } from '@/data/content'
import { Kicker, Byline, PullQuote, SectionBanner, Ornament } from '@/components/newspaper/bits'

export default function Experience() {
  return (
    <main className="page-in mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
      <SectionBanner title="Career" sub="Professional Experience, Verified" />

      {experience.map((job, idx) => (
        <article key={job.org} className={idx > 0 ? 'mt-12' : 'mt-8'}>
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Story */}
            <div className="lg:col-span-8 lg:border-r lg:border-[var(--rule)] lg:pr-8">
              <div className="flex items-center gap-3">
                <Kicker red={job.current}>{job.dateline}</Kicker>
                {job.current && (
                  <span className="f-mono border border-[var(--accent-red)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] accent-red">
                    Developing
                  </span>
                )}
              </div>
              <h3 className="f-display mt-2 text-3xl font-black leading-tight ink sm:text-4xl">
                {job.headline}
              </h3>
              <p className="f-body mt-2 text-lg italic ink-soft">
                {job.role} at {job.org}
              </p>
              <Byline author={profile.name} role={job.period} />

              <div className="mt-5 sm:columns-2 sm:gap-8">
                <p className="news-copy dropcap text-[15px] ink">
                  {job.bullets[0]}
                </p>
                {job.bullets.slice(1).map((b) => (
                  <p key={b.slice(0, 24)} className="news-copy mt-4 text-[15px] ink sm:mt-0 sm:mb-4">
                    {b}
                  </p>
                ))}
              </div>
            </div>

            {/* Fact file rail */}
            <aside className="lg:col-span-4">
              <div className="frame-box p-4">
                <p className="f-display text-center text-lg font-black uppercase ink">Fact File</p>
                <dl className="f-mono mt-3 space-y-2 text-[11px] uppercase tracking-wider ink-soft">
                  <div className="border-b border-dotted border-[var(--rule)] pb-1">
                    <dt className="ink-faint">Position</dt>
                    <dd className="ink">{job.role}</dd>
                  </div>
                  <div className="border-b border-dotted border-[var(--rule)] pb-1">
                    <dt className="ink-faint">Organization</dt>
                    <dd className="ink">{job.org}</dd>
                  </div>
                  <div>
                    <dt className="ink-faint">Term of service</dt>
                    <dd className="ink">{job.period}</dd>
                  </div>
                </dl>
              </div>

              <PullQuote>
                {job.current
                  ? 'High performance and a seamless user experience — that is the whole assignment.'
                  : 'Four months, two stacks, one Agile newsroom of a team.'}
              </PullQuote>
            </aside>
          </div>
          {idx < experience.length - 1 && <Ornament />}
        </article>
      ))}

      <p className="f-mono mt-10 border-t border-[var(--rule)] pt-4 text-center text-[10px] uppercase tracking-[0.25em] ink-faint">
        End of the Career section &mdash; earlier records sealed by the university registrar
      </p>
    </main>
  )
}
