'use client'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return
      started.current = true
      const step = Math.max(1, Math.ceil(target / 36))
      let cur = 0
      const id = setInterval(() => {
        cur = Math.min(cur + step, target)
        setVal(cur)
        if (cur >= target) clearInterval(id)
      }, 38)
    }, { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function GlassStats() {
  const t = useTranslations('Stats')

  const stats = [
    { n: 30,  suffix: '+', label: t('label1') },
    { n: 2,   suffix: '',  label: t('label2') },
    { n: 100, suffix: '%', label: t('label3') },
    { n: 3,   suffix: '',  label: t('label4') },
  ]

  return (
    <div className="relative overflow-hidden py-20 md:py-32 px-5 md:px-10 flex items-center min-h-[60vh]">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg,#0a0a0f 0%,#111122 50%,#0a0a0f 100%)' }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full float-blob-1 pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(61,201,240,0.30),transparent 60%)',
          top: '-100px', right: 0, filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full float-blob-2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle,rgba(110,93,221,0.22),transparent 60%)',
          bottom: '-50px', left: '100px', filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 w-full">
        <span className="block text-[0.72rem] tracking-[0.08em] uppercase text-white/30 mb-5">{t('tag')}</span>
        <h2
          className="font-serif font-normal text-white mb-10 md:mb-20"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', letterSpacing: '-2px', lineHeight: 1.02 }}
        >
          {t('h2Line1')} <em className="text-white/40">{t('h2Highlight')}</em>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div key={i} className="glass-dark rounded-2xl p-6 md:p-10 hover:-translate-y-1 transition-transform">
              <div
                className="font-serif font-normal text-white leading-none mb-3"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '-3px' }}
              >
                <Counter target={s.n} suffix={s.suffix} />
              </div>
              <div className="text-[0.78rem] font-light text-white/35 leading-relaxed whitespace-pre-line">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
