import { education, profile, skills } from '@/data/content'
import { Kicker, Byline, SectionBanner, Ornament } from '@/components/newspaper/bits'
import CertificateGallery from '@/components/CertificateGallery'

export default function Education() {
  return (
    <main className="page-in mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
      <SectionBanner title="Education & Skills" sub="Credentials, Certifications & Classifieds" />

      {/* Degree story */}
      <article className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:border-r lg:border-[var(--rule)] lg:pr-8">
          <Kicker red>Commencement Bulletin</Kicker>
          <h3 className="f-display mt-2 text-3xl font-black leading-tight ink sm:text-4xl">
            Degree Conferred: Software Engineering, Class of 2025
          </h3>
          <p className="f-body mt-2 text-lg italic ink-soft">{education.period}</p>
          <Byline author={profile.name} role="Graduate" />

          <div className="mt-5 sm:columns-2 sm:gap-8">
            <p className="news-copy dropcap text-[15px] ink">{education.points[0]}</p>
            <p className="news-copy mt-4 text-[15px] ink sm:mt-0">{education.points[1]}</p>
          </div>

          <div className="mt-6">
            <p className="f-mono border-b border-[var(--rule)] pb-1 text-[10px] font-semibold uppercase tracking-[0.25em] ink">
              Coursework on the Record
            </p>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 text-sm ink sm:grid-cols-2">
              {education.coursework.map((c) => (
                <li key={c} className="flex items-baseline gap-2">
                  <span aria-hidden className="accent-red">&#10087;</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education sidebar */}
        <aside className="lg:col-span-4">
          <div className="frame-box p-4">
            <p className="f-display text-center text-lg font-black uppercase ink">Statistics</p>
            <p className="f-mono mt-1 text-center text-[10px] uppercase tracking-[0.2em] ink-faint">
              Degree & coursework
            </p>
            <dl className="f-mono mt-3 space-y-2 text-[11px] uppercase tracking-wider ink-soft">
              <div className="flex justify-between gap-2 border-b border-dotted border-[var(--rule)] pb-1">
                <dt>Institution</dt>
                <dd className="ink">University of Haripur</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-dotted border-[var(--rule)] pb-1">
                <dt>Degree</dt>
                <dd className="ink">B.S. Soft. Eng.</dd>
              </div>
              <div className="flex justify-between gap-2 pb-1">
                <dt>Status</dt>
                <dd className="ink">Conferred 2025</dd>
              </div>
            </dl>
          </div>
        </aside>
      </article>

      <Ornament />

      {/* Certificate Gallery Section */}
      <section>
        <div className="text-center">
          <p className="f-mono text-[10px] font-semibold uppercase tracking-[0.3em] ink-faint">
            Verified Credentials
          </p>
          <h3 className="f-display mt-1 text-3xl font-black uppercase ink sm:text-4xl">
            Certifications on File
          </h3>
          <p className="f-body mt-2 text-sm italic ink-soft">
            Three certifications from Udemy. Click any to view and download.
          </p>
        </div>

        <CertificateGallery />
      </section>

      <Ornament />

      {/* Skills as classified ads */}
      <section>
        <div className="text-center">
          <p className="f-mono text-[10px] font-semibold uppercase tracking-[0.3em] ink-faint">
            Public Notice
          </p>
          <h3 className="f-display mt-1 text-3xl font-black uppercase ink sm:text-4xl">
            The Classifieds
          </h3>
          <p className="f-body mt-2 text-sm italic ink-soft">
            Six skills advertise their services. All inquiries answered promptly.
          </p>
        </div>

        <div className="mt-6 grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div key={s.name} className="classified bg-paper p-4">
              <p className="f-mono text-[9px] uppercase tracking-[0.25em] ink-faint">
                Notice No. {String(i + 1).padStart(3, '0')}
              </p>
              <p className="f-display mt-1 text-lg font-bold uppercase leading-tight ink">
                {s.name}
              </p>
              <p className="news-copy mt-1.5 text-[13px] ink-soft">{s.note}.</p>
            </div>
          ))}
        </div>
      </section>

      <p className="f-mono mt-10 border-t border-[var(--rule)] pt-4 text-center text-[10px] uppercase tracking-[0.25em] ink-faint">
        Transcripts and certificates available upon written request
      </p>
    </main>
  )
}
