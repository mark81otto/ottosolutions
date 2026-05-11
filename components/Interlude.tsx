export default function Interlude() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center text-center px-10 py-24 overflow-hidden">
      {/* Gradient bg */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg,#f0f4ff 0%,#fafafa 40%,#f5f0ff 100%)' }}
      />
      {/* Blobs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full float-blob-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(0,87,255,0.12),transparent 70%)',
          top: '-100px', right: '-150px', filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full float-blob-2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(120,40,255,0.08),transparent 70%)',
          bottom: '-80px', left: '-80px', filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10">
        <h2
          className="font-serif font-normal text-ink mb-8"
          style={{ fontSize: 'clamp(3rem,8vw,7rem)', letterSpacing: '-3px', lineHeight: 0.95 }}
        >
          Von <em className="text-[#0057ff]">Valencia</em><br />für die Welt.
        </h2>
        <p className="text-[1.1rem] font-light text-mid max-w-[520px] mx-auto mb-12 leading-[1.7]">
          Als spanische SL entwickeln wir für Kunden in Deutschland, Spanien und ganz Europa &mdash; remote, pünktlich, auf drei Sprachen.
        </p>
        <a
          href="#about"
          className="inline-block text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:opacity-85 transition-opacity"
        >
          Mehr über uns
        </a>
      </div>
    </div>
  )
}
