'use client'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTransition } from 'react'

const langs = ['de', 'en', 'es'] as const

export default function Nav() {
  const t = useTranslations('Nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLang = (l: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: l })
    })
  }

  const linkLabels = [t('services'), t('portfolio'), t('about'), t('contact')]
  const hrefs = ['#services', '#portfolio', '#about', '#contact']

  return (
    <nav className="fixed inset-x-0 top-0 z-[900] h-[58px] flex items-center justify-between px-10 glass border-b border-black/[0.07]">
      <a href="#" className="no-underline flex items-center">
        <img src="/logo.png" alt="Otto Solutions SL" style={{ height: 32, width: 'auto' }} />
      </a>

      <div className="flex">
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

      <div className="flex items-center gap-2.5">
        <div className="flex gap-0.5">
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
        <a
          href="#contact"
          className="text-[0.78rem] font-medium px-[18px] py-2 bg-ink text-white rounded-full no-underline hover:opacity-80 transition-opacity"
        >
          {t('cta')}
        </a>
      </div>
    </nav>
  )
}
