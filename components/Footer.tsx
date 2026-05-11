'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="bg-ink py-10 px-5 md:px-10 flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between md:items-center border-t border-white/[0.05]">
      <div className="flex justify-center md:justify-start">
        <img src="/logo.png" alt="Otto Solutions SL" style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.4 }} />
      </div>
      <div className="text-[0.7rem] text-white/18 text-center">© 2025 Otto Solutions SL · Valencia, España</div>
      <nav className="flex flex-wrap gap-5 md:gap-8 justify-center md:justify-end">
        {[t('imprint'), t('privacy'), t('legal')].map((l) => (
          <a key={l} href="#" className="text-[0.7rem] text-white/22 no-underline hover:text-white/50 transition-colors">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  )
}
