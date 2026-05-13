'use client'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const t = useTranslations('Hero')
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      gsap.set('.hero-word-inner', { y: '120%' })
      gsap.set('.hero-sub-animated', { opacity: 0, y: 20 })
      gsap.set('.hero-cta-animated', { opacity: 0, y: 20 })
      gsap.set('.hero-scroll-animated', { opacity: 0 })

      const tl = gsap.timeline({ delay: 0.2 })
      tl.to('.hero-word-inner', {
        y: '0%',
        duration: 1.2,
        stagger: 0.12,
        ease: 'power4.out',
      })
        .to('.hero-sub-animated', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .to('.hero-cta-animated', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .to('.hero-scroll-animated', { opacity: 1, duration: 0.6 }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center text-center px-4 sm:px-8 pt-20 pb-24 bg-white overflow-hidden"
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-72 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(61,238,219,0.04) 0%, transparent 70%)' }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
        <h1
          className="font-serif font-normal leading-[1.05] tracking-[-3px] text-ink mb-8 sm:mb-10"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          <span className="hero-word-wrap">
            <span className="hero-word-inner">{t('h1Line1')}</span>
          </span>
          <br />
          <span className="hero-word-wrap">
            <span
              className="hero-word-inner"
              style={{
                background: 'var(--gradient-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}
            >
              {t('h1Line2')}
            </span>
          </span>
          <br />
          <span className="hero-word-wrap">
            <span
              className="hero-word-inner"
              style={{
                background: 'linear-gradient(135deg, #6E5DDD 0%, #3DEEDB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}
            >
              {t('h1Line3')}
            </span>
          </span>
        </h1>

        <p
          className="hero-sub-animated font-light text-mid leading-[1.7] max-w-[480px] mx-auto mb-8 sm:mb-10 tracking-[-0.2px]"
          style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)' }}
        >
          {t('sub')}
        </p>

        <div className="hero-cta-animated flex flex-col sm:flex-row gap-3 sm:gap-3.5 items-center justify-center w-full sm:w-auto">
          <MagneticButton
            href="#portfolio"
            className="w-full sm:w-auto text-center text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(110,93,221,0.25)] transition-all min-h-[44px] flex items-center justify-center"
          >
            {t('ctaPrimary')}
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="text-[0.875rem] font-normal no-underline inline-flex items-center gap-1 hover:gap-2.5 transition-all min-h-[44px]"
            style={{ color: 'var(--purple)' }}
          >
            {t('ctaSecondary')} ›
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-animated absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="text-[0.65rem] text-mid tracking-[0.1em] uppercase">{t('scroll')}</span>
        <div className="w-px h-12 bg-black/[0.07] relative overflow-hidden">
          <div className="scroll-line-fill" />
        </div>
      </div>
    </section>
  )
}
