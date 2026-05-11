'use client'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedCode from './AnimatedCode'

export default function StickyText() {
  const t = useTranslations('StickyText')
  const txtRef = useRef<HTMLDivElement>(null)
  const secRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!txtRef.current || !secRef.current) return
      const r = secRef.current.getBoundingClientRect()
      const prog = Math.max(0, Math.min(1, -r.top / (r.height - window.innerHeight)))
      txtRef.current.style.transform = `translateX(${(prog - 0.5) * -200}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={secRef} style={{ height: '250vh' }}>
      <div
        className="sticky top-0 h-screen flex items-center overflow-hidden relative bg-white"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        }}
      >
        <AnimatedCode />
        <div
          ref={txtRef}
          className="font-serif font-normal text-ink whitespace-nowrap px-10 will-change-transform transition-none relative z-10"
          style={{
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            letterSpacing: '-5px',
            lineHeight: 0.9,
            textShadow: '0 0 60px rgba(255,255,255,0.95), 0 0 28px rgba(255,255,255,0.85)',
          }}
        >
          {t('main')}&nbsp;<em className="text-[#6E5DDD]">{t('highlight')}</em>
        </div>
      </div>
    </div>
  )
}
