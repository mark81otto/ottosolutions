'use client'
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

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
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          ref={txtRef}
          className="font-serif font-normal text-ink whitespace-nowrap px-10 will-change-transform transition-none"
          style={{ fontSize: 'clamp(5rem, 14vw, 13rem)', letterSpacing: '-5px', lineHeight: 0.9 }}
        >
          {t('main')}&nbsp;<em className="text-[#0057ff]">{t('highlight')}</em>
        </div>
      </div>
    </div>
  )
}
