'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 pt-[58px] bg-white overflow-hidden">
      {/* Animated gradient blob */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blob-pulse pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(0,87,255,0.07), rgba(0,87,255,0.02) 50%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Eyebrow */}
      <span
        className="text-[0.75rem] text-mid tracking-[0.04em] mb-10 relative z-10"
        style={{ animation: 'up 0.9s 0.1s cubic-bezier(.22,1,.36,1) both' }}
      >
        Otto Solutions SL &mdash; Valencia, España
      </span>

      {/* Headline */}
      <h1
        className="font-serif font-normal leading-[0.92] tracking-[-4px] text-ink relative z-10 mb-8"
        style={{
          fontSize: 'clamp(5rem, 13vw, 11rem)',
          animation: 'up 1s 0.2s cubic-bezier(.22,1,.36,1) both',
        }}
      >
        Apps.<br />
        <em className="text-[#0057ff]">Websites.</em><br />
        Dynamics.
      </h1>

      {/* Subline */}
      <p
        className="font-light text-mid leading-[1.7] max-w-[480px] mx-auto mb-10 tracking-[-0.2px] relative z-10"
        style={{
          fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
          animation: 'up 1s 0.35s cubic-bezier(.22,1,.36,1) both',
        }}
      >
        Digitale Produkte die wirklich funktionieren &mdash; für iOS, Android, Web und Microsoft Dynamics&nbsp;365.
      </p>

      {/* CTAs */}
      <div
        className="flex gap-3.5 justify-center relative z-10"
        style={{ animation: 'up 1s 0.45s cubic-bezier(.22,1,.36,1) both' }}
      >
        <a
          href="#portfolio"
          className="text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(10,10,15,0.15)] transition-all"
        >
          Portfolio ansehen
        </a>
        <a
          href="#contact"
          className="text-[0.875rem] font-normal text-[#0057ff] no-underline inline-flex items-center gap-1 hover:gap-2.5 transition-all"
        >
          Projekt anfragen ›
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        style={{ animation: 'up 1s 1.2s ease both' }}
      >
        <span className="text-[0.65rem] text-mid tracking-[0.1em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-black/[0.07] relative overflow-hidden">
          <div className="scroll-line-fill" />
        </div>
      </div>

      <style>{`
        @keyframes up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  )
}
