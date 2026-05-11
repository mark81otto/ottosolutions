'use client'
import { useRef, MouseEvent } from 'react'
import { useTranslations } from 'next-intl'

function TiltCard({ p, large }: { p: any; large: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent) => {
    if (!ref.current || !window.matchMedia('(hover: hover)').matches) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) translateY(-8px)`
    ref.current.style.boxShadow = `${-x * 20}px ${-y * 10 + 24}px 64px rgba(10,10,15,0.12)`
  }

  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = ''
    ref.current.style.boxShadow = ''
  }

  const accentRgb = (hex: string) => {
    if (hex === '#3DC9F0') return '61,201,240'
    if (hex === '#16a34a') return '22,163,74'
    if (hex === '#7c3aed') return '124,58,237'
    return '61,201,240'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`bg-white border border-black/[0.07] rounded-[20px] overflow-hidden transition-[box-shadow] duration-300 cursor-default col-span-1 ${large ? 'md:col-span-2' : ''}`}
      style={{ transitionProperty: 'box-shadow', transformStyle: 'preserve-3d' }}
    >
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: large ? '260px' : '200px', background: p.bg }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(10,10,15,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(10,10,15,.05) 1px,transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="relative z-10 rounded-[14px] p-5 w-[200px] sm:w-[220px]"
          style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        >
          <div className="h-[3px] rounded-full mb-2" style={{ background: p.accent, width: '80%', opacity: 0.8 }} />
          <div className="flex gap-2 items-center mb-2">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.accent }} />
            <div className="flex-1 h-[3px] rounded-full bg-black/[0.08]" />
          </div>
          <div className="flex gap-2 items-center mb-3">
            <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black/10" />
            <div className="h-[3px] rounded-full bg-black/[0.08] w-[60%]" />
          </div>
          <span
            className="inline-flex items-center gap-1 text-[0.6rem] font-medium rounded-full px-2.5 py-1"
            style={{ background: `rgba(${accentRgb(p.accent)},0.1)`, color: p.accent }}
          >
            {p.tag}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="text-[0.68rem] mb-2 tracking-[0.06em] uppercase" style={{ color: p.accent }}>
          {p.cat}
        </div>
        <h4
          className="font-serif font-normal text-ink mb-2"
          style={{ fontSize: '1.45rem', letterSpacing: '-0.6px', lineHeight: 1.2 }}
        >
          {p.title}
        </h4>
        <p className="text-[0.83rem] font-light text-mid leading-[1.75]">{p.desc}</p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const t = useTranslations('Portfolio')

  const projects = [
    {
      large: true,
      bg: 'linear-gradient(135deg,#d0faf7,#e8f7fd)',
      accent: '#3DC9F0',
      cat: 'iOS · Android',
      title: t('p1Title'),
      desc: t('p1Desc'),
      tag: t('p1Tag'),
    },
    {
      large: false,
      bg: 'linear-gradient(135deg,#dcfce7,#f0fdf4)',
      accent: '#16a34a',
      cat: 'Next.js · E-Commerce',
      title: t('p2Title'),
      desc: t('p2Desc'),
      tag: 'DE · EN · ES',
    },
    {
      large: false,
      bg: 'linear-gradient(135deg,#d0f0ff,#f0faff)',
      accent: '#3DC9F0',
      cat: 'iOS · Swift',
      title: t('p3Title'),
      desc: t('p3Desc'),
      tag: t('p3Tag'),
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-40 px-5 md:px-10 bg-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end mb-12 md:mb-16">
        <div>
          <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">{t('tag')}</span>
          <h2
            className="font-serif font-normal text-ink"
            style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
          >
            {t('h2Line1')}<br /><em className="text-mid">{t('h2Highlight')}</em>
          </h2>
        </div>
        <p className="text-[1rem] font-light text-mid max-w-[300px] md:text-right leading-[1.8]">
          {t('lead')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <TiltCard key={p.title} p={p} large={p.large} />
        ))}
      </div>
    </section>
  )
}
