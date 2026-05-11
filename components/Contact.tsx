export default function Contact() {
  return (
    <section id="contact" className="py-40 px-10 bg-white">
      <div className="grid grid-cols-2 gap-32 items-start">
        {/* Left */}
        <div>
          <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">Kontakt</span>
          <h2
            className="font-serif font-normal text-ink mb-6"
            style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
          >
            Lass uns<br /><em className="text-mid">reden.</em>
          </h2>
          <p className="text-[0.95rem] font-light text-mid leading-[1.8] mb-12">
            Ob kleines MVP oder großes Enterprise-Projekt &mdash; wir hören zu und machen daraus etwas, das wirklich funktioniert.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { ico: '📍', label: 'Standort', val: 'Valencia, España' },
              { ico: '✉️', label: 'E-Mail',   val: 'hallo@ottosolutions.es' },
              { ico: '📞', label: 'Telefon',  val: '+34 000 000 000' },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#f9f8f6] border border-black/[0.07] flex items-center justify-center text-[0.95rem] flex-shrink-0">
                  {r.ico}
                </div>
                <div className="text-[0.85rem] text-mid">
                  <strong className="text-ink font-medium block text-[0.78rem] mb-0.5">{r.label}</strong>
                  {r.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        {/* 
          TODO: connect to email backend
          Recommended: Resend (resend.com) + Next.js API route
          → Create app/api/contact/route.ts
          → POST to https://api.resend.com/emails
        */}
        <form className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text" placeholder="Vorname"
              className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(0,87,255,0.3)] focus:shadow-[0_0_0_4px_rgba(0,87,255,0.06)] focus:bg-white transition-all placeholder:text-mid"
            />
            <input
              type="text" placeholder="Nachname"
              className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(0,87,255,0.3)] focus:shadow-[0_0_0_4px_rgba(0,87,255,0.06)] focus:bg-white transition-all placeholder:text-mid"
            />
          </div>
          <input
            type="email" placeholder="E-Mail-Adresse"
            className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(0,87,255,0.3)] focus:shadow-[0_0_0_4px_rgba(0,87,255,0.06)] focus:bg-white transition-all placeholder:text-mid"
          />
          <select
            defaultValue=""
            className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-mid border border-transparent focus:border-[rgba(0,87,255,0.3)] focus:bg-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Leistung wählen…</option>
            <option value="ios">iOS / Android App</option>
            <option value="web">Website-Entwicklung</option>
            <option value="d365">Microsoft Dynamics 365</option>
            <option value="all">Komplettpaket</option>
            <option value="other">Sonstiges</option>
          </select>
          <textarea
            placeholder="Beschreib dein Projekt kurz…"
            rows={5}
            className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(0,87,255,0.3)] focus:shadow-[0_0_0_4px_rgba(0,87,255,0.06)] focus:bg-white transition-all placeholder:text-mid resize-none"
          />
          <button
            type="submit"
            className="font-sans font-medium text-[0.9rem] py-4 bg-ink text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-88 hover:-translate-y-0.5 transition-all group"
          >
            Anfrage absenden
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}
