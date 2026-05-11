export default function Footer() {
  return (
    <footer className="bg-ink py-10 px-10 flex justify-between items-center border-t border-white/[0.05]">
      <div className="font-serif italic text-[1rem] text-white/25">Otto Solutions SL</div>
      <div className="text-[0.7rem] text-white/18">© 2025 Otto Solutions SL · Valencia, España</div>
      <nav className="flex gap-8">
        {['Impressum', 'Datenschutz', 'Aviso Legal'].map((l) => (
          <a key={l} href="#" className="text-[0.7rem] text-white/22 no-underline hover:text-white/50 transition-colors">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  )
}
