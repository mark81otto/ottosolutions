'use client'
import { useTranslations } from 'next-intl'
import InteractiveGrid from './InteractiveGrid'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-4 sm:px-8 pt-[58px] bg-white overflow-hidden">
      {/* Interactive grid background */}
      <InteractiveGrid />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 pointer-events-none">
        {/* Spotlight behind text */}
        <div
          className="flex flex-col items-center py-12 sm:py-20 px-4 sm:px-12"
          style={{
            background: 'radial-gradient(ellipse 70% 65% at 50% 48%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 42%, transparent 72%)',
          }}
        >
          <h1
            className="font-serif font-normal leading-[1.05] tracking-[-4px] text-ink mb-10 sm:mb-12"
            style={{
              fontSize: 'clamp(3.5rem, 14vw, 11rem)',
              animation: 'up 1s 0.2s cubic-bezier(.22,1,.36,1) both',
              textShadow: '0 0 40px rgba(255,255,255,0.7)',
            }}
          >
            {t('h1Line1')}<br />
            <em style={{
              background: 'var(--gradient-brand)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>{t('h1Line2')}</em>
          </h1>

          <p
            className="font-light text-mid leading-[1.7] max-w-[480px] mx-auto mb-8 sm:mb-10 tracking-[-0.2px]"
            style={{
              fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
              animation: 'up 1s 0.35s cubic-bezier(.22,1,.36,1) both',
              textShadow: '0 0 24px rgba(255,255,255,0.6)',
            }}
          >
            {t('sub')}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 items-center justify-center pointer-events-auto w-full sm:w-auto"
            style={{ animation: 'up 1s 0.45s cubic-bezier(.22,1,.36,1) both' }}
          >
            <a
              href="#portfolio"
              className="w-full sm:w-auto text-center text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(110,93,221,0.25)] transition-all min-h-[44px] flex items-center justify-center"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#contact"
              className="text-[0.875rem] font-normal no-underline inline-flex items-center gap-1 hover:gap-2.5 transition-all min-h-[44px]"
              style={{ color: 'var(--purple)' }}
            >
              {t('ctaSecondary')} ›
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="flex flex-col items-center gap-1.5 pb-8 z-10"
        style={{ animation: 'up 1s 1.2s ease both' }}
      >
        <span className="text-[0.65rem] text-mid tracking-[0.1em] uppercase">{t('scroll')}</span>
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
