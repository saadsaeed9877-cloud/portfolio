import { Link } from 'react-router'
import { profile, experience, projects, skills } from '@/data/content'
import { Kicker, Byline, Ornament } from '@/components/newspaper/bits'

const teasers = [
  {
    to: '/experience',
    section: 'Career',
    head: 'From Ezitech Intern to Revnix Front-End Developer',
    blurb: 'The career desk traces a fast-moving trajectory through the MERN stack and Next.js.',
  },
  {
    to: '/projects',
    section: 'Projects',
    head: 'Machines That Triage Bugs, Portals That Publish',
    blurb: 'Two dispatches from the workbench: predictive research and a content platform.',
  },
  {
    to: '/education',
    section: 'Education & Skills',
    head: 'Degree Conferred; Classifieds Advertise a Full Toolkit',
    blurb: 'Four years of software engineering, three certifications, six skills on file.',
  },
  {
    to: '/contact',
    section: 'Letters',
    head: 'The Editor Welcomes Your Correspondence',
    blurb: 'Opportunities, collaborations, and questions — addressed to the newsroom.',
  },
]

export default function Home() {
  return (
    <main className="page-in mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
      {/* Lead headline */}
      <div className="mt-6 text-center">
        <Kicker red>Breaking &middot; Front Page</Kicker>
        <h2 className="f-display mx-auto mt-3 max-w-4xl text-4xl font-black leading-[1.05] ink sm:text-6xl">
          Local Graduate Ships the Full Stack, End to End
        </h2>
        <p className="f-body mx-auto mt-4 max-w-2xl text-lg italic leading-relaxed ink-soft">
          MERN stack developer builds responsive interfaces by day, scalable APIs by night &mdash;
          witnesses report a deep interest in impactful products.
        </p>
        <Byline author={profile.name} role={profile.role} />
      </div>

      <div className="rule-double mt-6" />

      {/* Front page columns */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Lead story */}
        <article className="lg:col-span-4 lg:border-r lg:border-[var(--rule)] lg:pr-8">
          <Kicker>The Lead Story</Kicker>
          <h3 className="f-display mt-2 text-2xl font-bold leading-tight ink">
            &ldquo;Energetic, solution-focused, quick to learn&rdquo;
          </h3>
          <p className="news-copy dropcap mt-4 text-[15px] ink">{profile.summary}</p>
          <p className="news-copy mt-4 text-[15px] ink">
            Now on staff at <span className="font-semibold">Revnix</span> as a Next.js front-end
            developer, Saeed builds content-driven websites wired to a company CMS &mdash; continuing
            a run that began with a web development internship at Ezitech in the autumn of 2024.
          </p>
          <p className="f-mono mt-4 text-[11px] uppercase tracking-[0.2em]">
            <Link className="ink-link" to="/experience">
              Continued on the Career page &rarr;
            </Link>
          </p>
        </article>

        {/* Portrait */}
        <figure className="lg:col-span-5">
          <div className="photo-frame max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <img
              src="/portrait-halftone.png"
              alt={`Halftone portrait of ${profile.name}`}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          <figcaption className="mt-3 border-b border-[var(--rule)] pb-3 text-center">
            <span className="f-mono text-[10px] uppercase tracking-[0.18em] ink-faint">
              Staff portrait, halftone plate No. 1 &mdash; {profile.name}, pictured with the
              newsroom&rsquo;s junior fact-checker.
            </span>
          </figcaption>

          {/* Latest wires */}
          <div className="mt-5">
            <p className="f-mono border-b border-[var(--rule)] pb-1 text-[10px] font-semibold uppercase tracking-[0.25em] ink">
              Latest Wires
            </p>
            <ul className="mt-3 space-y-3">
              <li className="text-sm leading-snug ink">
                <span className="f-mono mr-2 text-[10px] uppercase tracking-wider accent-red">
                  {experience[0].period}
                </span>
                Now developing responsive front-end applications with Next.js at Revnix.
              </li>
              <li className="text-sm leading-snug ink">
                <span className="f-mono mr-2 text-[10px] uppercase tracking-wider accent-red">
                  Archive
                </span>
                Final-year research taught machines to rank software bugs by severity.
              </li>
            </ul>
          </div>
        </figure>

        {/* Right rail */}
        <aside className="lg:col-span-3 lg:border-l lg:border-[var(--rule)] lg:pl-8">
          <div className="frame-box p-4">
            <p className="f-display text-center text-lg font-black uppercase tracking-wide ink">
              Vital Statistics
            </p>
            <dl className="f-mono mt-3 space-y-2 text-[11px] uppercase tracking-wider ink-soft">
              <div className="flex justify-between gap-2 border-b border-dotted border-[var(--rule)] pb-1">
                <dt>Beat</dt>
                <dd className="ink">Full Stack</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-dotted border-[var(--rule)] pb-1">
                <dt>Stack</dt>
                <dd className="ink">MERN + Next.js</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-dotted border-[var(--rule)] pb-1">
                <dt>Degree</dt>
                <dd className="ink">B.S. Soft. Eng.</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-dotted border-[var(--rule)] pb-1">
                <dt>Positions</dt>
                <dd className="ink">{experience.length} on record</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Skills filed</dt>
                <dd className="ink">{skills.length} classifieds</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <p className="f-mono border-b-2 border-[var(--rule)] pb-1 text-[10px] font-semibold uppercase tracking-[0.25em] ink">
              Inside This Edition
            </p>
            <ol className="mt-3 space-y-2.5">
              {teasers.map((t, i) => (
                <li key={t.to} className="text-sm">
                  <Link to={t.to} className="ink-link">
                    <span className="f-mono mr-1.5 text-[10px] ink-faint">A{i + 2}.</span>
                    {t.section}
                  </Link>
                  <span className="ink-faint"> &mdash; {t.head}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>

      <Ornament />

      {/* Section teasers */}
      <div className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
        {teasers.map((t) => (
          <Link key={t.to} to={t.to} className="teaser block bg-paper p-5">
            <p className="f-mono text-[10px] font-semibold uppercase tracking-[0.25em] accent-red">
              {t.section}
            </p>
            <h4 className="teaser-head f-display mt-2 text-lg font-bold leading-snug ink">
              {t.head}
            </h4>
            <p className="mt-2 text-sm leading-relaxed ink-soft">{t.blurb}</p>
            <p className="f-mono mt-3 text-[10px] uppercase tracking-[0.2em] ink-faint">
              Read the story &rarr;
            </p>
          </Link>
        ))}
      </div>

      <p className="f-mono mt-6 text-center text-[10px] uppercase tracking-[0.25em] ink-faint">
        Also in today&rsquo;s paper: {projects.map((p) => p.name).join(' · ')}
      </p>
    </main>
  )
}
