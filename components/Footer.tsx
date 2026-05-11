'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-ink py-10 px-10 flex justify-between items-center border-t border-white/[0.05]">
      <div>
        <img src="/logo.png" alt="Otto Solutions SL" style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.4 }} />
      </div>
      <div className="text-[0.7rem] text-white/18">© 2025 Otto Solutions SL · Valencia, España</div>
      <nav className="flex gap-8">
        {[t('imprint'), t('privacy'), t('legal')].map((l) => (
          <a key={l} href="#" className="text-[0.7rem] text-white/22 no-underline hover:text-white/50 transition-colors">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  )
}
