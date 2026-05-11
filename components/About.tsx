const chips = ['Swift', 'Kotlin', 'Next.js', 'React Native', 'D365', 'Azure', 'TypeScript']

export default function About() {
  return (
    <section id="about" className="py-40 px-10 bg-[#f9f8f6]">
      <div className="grid grid-cols-2 gap-32 items-start">
        {/* Left */}
        <div>
          <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">Über uns</span>
          <h2
            className="font-serif font-normal text-ink mb-8"
            style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
          >
            Wir sind<br />Otto Solutions.
          </h2>
          <p className="text-[0.95rem] font-light text-mid leading-[1.85] mb-4">
            Als spanische SL mit Sitz in Valencia entwickeln wir digitale Produkte für Kunden in Deutschland, Spanien und ganz Europa &mdash; auf Augenhöhe, mit echtem Qualitätsanspruch.
          </p>
          <p className="text-[0.95rem] font-light text-mid leading-[1.85]">
            Wir sprechen fließend Deutsch, Englisch und Spanisch und liefern Projekte pünktlich, im Budget und mit Leidenschaft.
          </p>

          {/* Facts table */}
          <div className="mt-12 border-t border-black/[0.07]">
            {[
              ['Rechtsform', 'Sociedad Limitada (SL)'],
              ['Standort', 'Valencia, España'],
              ['Sprachen', 'Deutsch · Englisch · Spanisch'],
              ['Fokus', 'Mobile · Web · Dynamics 365'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-[1.1rem] border-b border-black/[0.07] text-[0.875rem]">
                <span className="text-mid font-light">{k}</span>
                <span className="text-ink font-normal">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: glass profile card */}
        <div>
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg,rgba(0,87,255,0.05) 0%,rgba(100,0,255,0.03) 100%)',
              border: '1px solid rgba(0,87,255,0.12)',
            }}
          >
            {/* Top-right glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(0,87,255,0.12),transparent 70%)',
              }}
            />

            {/* Avatar */}
            <div className="w-[54px] h-[54px] rounded-full bg-ink flex items-center justify-center font-serif italic text-white mb-6">
              OS
            </div>

            <div className="font-serif text-[1.2rem] font-normal tracking-[-0.4px] text-ink mb-0.5">Otto Solutions SL</div>
            <div className="text-[0.75rem] text-mid mb-6">Founder & Lead Developer</div>
            <p className="text-[0.875rem] font-light text-mid leading-[1.8] mb-8">
              Wir bauen digitale Produkte mit Fokus auf sauberen Code, durchdachtes Design und messbaren Business-Impact. Kein Outsourcing, kein Copy-paste.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {chips.map((c) => (
                <span key={c} className="text-[0.68rem] text-ink bg-white border border-black/[0.07] rounded-full px-3.5 py-1.5">
                  {c}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-8 pt-8 border-t border-black/[0.07]">
              <div className="w-[7px] h-[7px] rounded-full bg-[#30d158] flex-shrink-0" />
              <span className="text-[0.78rem] text-mid">Valencia, España &mdash; verfügbar für neue Projekte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
