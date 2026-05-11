'use client'
import { useTranslations } from 'next-intl'

export default function Interlude() {
  const t = useTranslations('Interlude')

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center text-center px-5 md:px-10 py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg,#f0fdfa 0%,#fafafa 40%,#f3f0ff 100%)' }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full float-blob-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(61,238,219,0.20),transparent 70%)',
          top: '-100px', right: '-150px', filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full float-blob-2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(110,93,221,0.14),transparent 70%)',
          bottom: '-80px', left: '-80px', filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10">
        <h2
          className="font-serif font-normal text-ink mb-8"
          style={{ fontSize: 'clamp(2rem, 8vw, 7rem)', letterSpacing: '-3px', lineHeight: 0.95 }}
        >
          {t('h2Line1')} <em style={{
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
          }}>{t('h2Highlight')}</em><br />{t('h2Line2')}
        </h2>
        <p className="text-[1rem] md:text-[1.1rem] font-light text-mid max-w-[520px] mx-auto mb-10 md:mb-12 leading-[1.7]">
          {t('sub')}
        </p>
        <a
          href="#about"
          className="inline-block text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:opacity-85 transition-opacity min-h-[44px] flex items-center"
        >
          {t('cta')}
        </a>
      </div>
    </div>
  )
}
