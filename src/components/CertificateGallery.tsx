import { useState } from 'react'
import { certificates, type Certificate } from '@/data/content'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  function openCertificate(cert: Certificate) {
    setSelectedCert(cert)
    setIsOpen(true)
  }

  function closeCertificate() {
    setIsOpen(false)
    setSelectedCert(null)
  }

  function downloadCertificate(cert: Certificate) {
    const link = document.createElement('a')
    link.href = cert.file
    link.download = `${cert.issuer}-${cert.title.split(':')[0]}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Certificate Cards Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.file}
            className="teaser group cursor-pointer rounded-sm border border-[var(--rule)] bg-[#faf6ec] p-4 transition-all hover:shadow-md"
            onClick={() => openCertificate(cert)}
          >
            {/* Certificate Icon */}
            <div className="mb-3 flex h-12 w-12 items-center justify-center border border-[var(--rule)] bg-[var(--paper)]">
              <span className="f-display text-xl font-black accent-red">📜</span>
            </div>

            {/* Certificate Content */}
            <div>
              <p className="f-mono mb-1 text-[9px] uppercase tracking-[0.2em] ink-faint">
                {cert.issuer}
              </p>
              <h4 className="teaser-head f-display text-sm font-bold leading-tight ink">
                {cert.title}
              </h4>
            </div>

            {/* Hover Action */}
            <div className="mt-3 flex items-center justify-between">
              <span className="f-mono text-[10px] uppercase tracking-[0.15em] ink-faint">
                Click to view
              </span>
              <span className="text-lg ink">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl border border-[var(--rule)] bg-[var(--paper)]">
          <DialogHeader className="border-b border-[var(--rule)] pb-4">
            <DialogTitle className="f-display text-2xl font-black ink">
              {selectedCert?.title}
            </DialogTitle>
            <p className="f-mono mt-1 text-[10px] uppercase tracking-[0.2em] ink-faint">
              Issued by {selectedCert?.issuer}
            </p>
          </DialogHeader>

          {/* PDF Viewer */}
          <div className="my-6 bg-white">
            {selectedCert && (
              <iframe
                src={selectedCert.file}
                className="h-[500px] w-full border border-[var(--rule)]"
                title={selectedCert.title}
                loading="lazy"
              />
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 border-t border-[var(--rule)] pt-4">
            <a
              href={selectedCert?.file}
              target="_blank"
              rel="noopener noreferrer"
              className="f-mono inline-block flex-1 border-2 border-[var(--rule)] bg-[var(--ink)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--paper)] transition-all hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)]"
            >
              Open in New Tab
            </a>
            <button
              onClick={() => selectedCert && downloadCertificate(selectedCert)}
              className="f-mono inline-block flex-1 border-2 border-[var(--rule)] bg-[var(--paper)] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--ink)] transition-all hover:bg-[var(--accent-red)] hover:border-[var(--accent-red)] hover:text-[var(--paper)]"
            >
              Download PDF
            </button>
            <button
              onClick={closeCertificate}
              className="f-mono inline-block border-2 border-[var(--rule)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all hover:bg-[var(--rule)] hover:text-[var(--paper)]"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
