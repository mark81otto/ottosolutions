'use client'
import { useState, useTransition } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

const langs = ['de', 'en', 'es'] as const

export default function Nav() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const switchLang = (l: string) => {
    setOpen(false)
    startTransition(() => router.replace(pathname, { locale: l }))
  }

  const linkLabels = [t('services'), t('portfolio'), t('about'), t('contact')]
  const hrefs = ['#services', '#portfolio', '#about', '#contact']

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[900] h-[58px] flex items-center justify-between px-5 md:px-10 glass border-b border-black/[0.07]">
        <a href="#" className="no-underline flex items-center" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Otto Solutions SL" style={{ height: 32, width: 'auto' }} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex">
          {linkLabels.map((label, i) => (
            <a
              key={i}
              href={hrefs[i]}
              className="text-[0.78rem] font-light text-mid no-underline px-[1.1rem] leading-[58px] hover:text-ink transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop lang switcher */}
          <div className="hidden md:flex gap-0.5">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                disabled={isPending}
                className={`text-[0.7rem] font-sans px-[9px] py-1 rounded transition-all border-none cursor-pointer disabled:opacity-50 ${
                  locale === l ? 'text-ink font-medium' : 'text-mid bg-transparent'
                }`}
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-block text-[0.78rem] font-medium px-[18px] py-2 bg-ink text-white rounded-full no-underline hover:opacity-80 transition-opacity"
          >
            {t('cta')}
          </a>

          {/* Hamburger button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-1 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[899] md:hidden flex flex-col pt-[58px]"
          style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
        >
          <div className="flex flex-col h-full px-8 pt-8 pb-10">
            {/* Nav links */}
            <nav className="flex flex-col flex-1">
              {linkLabels.map((label, i) => (
                <a
                  key={i}
                  href={hrefs[i]}
                  onClick={() => setOpen(false)}
                  className="font-serif font-normal text-ink no-underline py-4 text-[1.75rem] border-b border-black/[0.06] hover:text-mid transition-colors tracking-[-0.5px]"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Bottom: lang + CTA */}
            <div className="mt-8">
              <div className="flex gap-2 mb-5">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLang(l)}
                    disabled={isPending}
                    className={`text-[0.78rem] font-sans px-5 py-2 rounded-full border transition-all disabled:opacity-50 cursor-pointer ${
                      locale === l
                        ? 'bg-ink text-white border-ink'
                        : 'text-mid border-black/[0.12] bg-transparent'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center text-[0.9rem] font-medium py-4 bg-ink text-white rounded-2xl no-underline min-h-[44px] flex items-center justify-center"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
