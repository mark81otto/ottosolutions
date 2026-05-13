'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal'
import MagneticButton from './MagneticButton'

// ── App Card (inside Phone) ───────────────────────────────────
function AppCard({ icon, name, tags, gradient, stats }: {
  icon: string; name: string; tags: string; gradient: string; stats: string
}) {
  return (
    <div className="app-card-realistic">
      <div className="app-card-icon" style={{ background: gradient }}>{icon}</div>
      <div className="app-card-info">
        <div className="app-card-name">{name}</div>
        <div className="app-card-tags">{tags}</div>
      </div>
      <div className="app-card-stats">{stats}</div>
    </div>
  )
}

const APP_CARDS = [
  { icon: '📱', name: 'iOS App',         tags: 'Swift · UIKit',      gradient: 'linear-gradient(135deg,#3DEEDB,#3DC9F0)', stats: '4.8 ★' },
  { icon: '🤖', name: 'Android App',     tags: 'Kotlin · Jetpack',   gradient: 'linear-gradient(135deg,#6E5DDD,#3DC9F0)', stats: '4.9 ★' },
  { icon: '⚛️', name: 'React Native',    tags: 'Cross-platform',     gradient: 'linear-gradient(135deg,#3DEEDB,#6E5DDD)', stats: '4.7 ★' },
  { icon: '🛍️', name: 'E-Commerce',     tags: 'iOS · Android',      gradient: 'linear-gradient(135deg,#3DC9F0,#6E5DDD)', stats: '4.8 ★' },
  { icon: '💪', name: 'Fitness Tracker', tags: 'HealthKit · Watch',  gradient: 'linear-gradient(135deg,#3DEEDB,#3DC9F0)', stats: '4.9 ★' },
  { icon: '🏦', name: 'FinTech App',     tags: 'iOS · Android',      gradient: 'linear-gradient(135deg,#6E5DDD,#3DEEDB)', stats: '4.8 ★' },
]

// ── iPhone 15 Pro Mockup ──────────────────────────────────────
function PhoneMockup() {
  const doubled = [...APP_CARDS, ...APP_CARDS]

  return (
    <div className="iphone-scale-wrapper">
      <div className="iphone-wrapper">
        <div className="iphone-shadow" />
        <div className="iphone-frame">
          <div className="iphone-button button-action" />
          <div className="iphone-button button-volume-up" />
          <div className="iphone-button button-volume-down" />
          <div className="iphone-button button-power" />

          <div className="iphone-screen">
            {/* Status bar */}
            <div className="status-bar">
              <span className="sb-time">9:41</span>
              <div className="sb-icons">
                <span>●●●</span>
                <span>▲</span>
                <span>100%</span>
              </div>
            </div>

            {/* Dynamic Island */}
            <div className="dynamic-island" />

            {/* App list */}
            <div className="app-content">
              <div className="app-header">
                <div className="app-greeting">Good morning, Mark</div>
                <div className="app-title">Your Apps</div>
              </div>
              <div className="app-search">
                <span>🔍</span>
                <span>Search…</span>
              </div>
              <div className="app-grid-scroll">
                {doubled.map((card, i) => (
                  <AppCard key={i} {...card} />
                ))}
              </div>
            </div>

            {/* Home indicator */}
            <div className="home-indicator" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Chat Mockup (Card 2 — AI) ─────────────────────────────────
function ChatMockup() {
  const [aiVisible, setAiVisible] = useState(false)
  const [aiReply, setAiReply] = useState(false)
  const [userReply, setUserReply] = useState(false)

  useEffect(() => {
    let mounted = true
    const cycle = () => {
      if (!mounted) return
      setAiVisible(false); setAiReply(false); setUserReply(false)
      setTimeout(() => { if (mounted) setAiVisible(true) }, 700)
      setTimeout(() => { if (mounted) setAiReply(true) }, 2600)
      setTimeout(() => { if (mounted) setUserReply(true) }, 4200)
      setTimeout(cycle, 7200)
    }
    cycle()
    return () => { mounted = false }
  }, [])

  return (
    <div className="w-full max-w-[240px] mx-auto flex flex-col gap-2">
      <div className="flex justify-end">
        <div
          className="text-white text-[0.68rem] leading-[1.55] px-3 py-2 rounded-[14px] rounded-br-[4px] max-w-[80%]"
          style={{ background: 'var(--purple)' }}
        >
          Kannst du mir eine Support-Antwort schreiben?
        </div>
      </div>

      {aiVisible && (
        <div className="flex justify-start" style={{ animation: 'fadeInUp 0.3s ease both' }}>
          <div
            className="text-[0.68rem] leading-[1.55] px-3 py-2.5 rounded-[14px] rounded-bl-[4px] max-w-[80%]"
            style={{ background: 'rgba(0,0,0,0.06)', color: '#0a0a0f' }}
          >
            {!aiReply ? (
              <span className="flex gap-1 items-center h-[18px]">
                <span className="thinking-dot-dark" style={{ animationDelay: '0ms' }} />
                <span className="thinking-dot-dark" style={{ animationDelay: '180ms' }} />
                <span className="thinking-dot-dark" style={{ animationDelay: '360ms' }} />
              </span>
            ) : (
              <span style={{ animation: 'fadeInUp 0.35s ease both' }}>
                Natürlich! Hier ist eine freundliche Antwort für deinen Kunden…
              </span>
            )}
          </div>
        </div>
      )}

      {userReply && (
        <div className="flex justify-end" style={{ animation: 'fadeInUp 0.3s ease both' }}>
          <div
            className="text-white text-[0.68rem] leading-[1.55] px-3 py-2 rounded-[14px] rounded-br-[4px]"
            style={{ background: 'var(--purple)', opacity: 0.85 }}
          >
            Perfekt, genau das brauchte ich! 🎉
          </div>
        </div>
      )}
    </div>
  )
}

// ── Browser Mockup (Card 3 — Web) ─────────────────────────────
function BrowserMockup({ visible }: { visible: boolean }) {
  const bars = [
    { pct: 64, color: 'var(--cyan)' },
    { pct: 88, color: 'var(--blue-brand)' },
    { pct: 46, color: 'var(--purple)' },
    { pct: 94, color: 'var(--cyan)' },
    { pct: 70, color: 'var(--blue-brand)' },
    { pct: 56, color: 'var(--purple)' },
  ]

  return (
    <div
      className="w-full max-w-[220px] mx-auto rounded-xl overflow-hidden"
      style={{ background: '#0d1020', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.07]">
        <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-2 bg-white/[0.07] rounded h-[14px] flex items-center px-2">
          <span className="text-[0.45rem] text-white/25">ottosolutions.es/analytics</span>
        </div>
      </div>
      <div className="p-3">
        <div className="text-[0.55rem] text-white/35 mb-2 font-light">Weekly Conversions</div>
        <div className="flex items-end gap-1 h-16">
          {bars.map((b, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                background: b.color,
                opacity: 0.75,
                height: visible ? `${b.pct}%` : '3%',
                transition: `height 0.75s ${i * 0.09}s cubic-bezier(.22,1,.36,1)`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'].map((d) => (
            <span key={d} className="text-[0.45rem] text-white/25">{d}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Tech chip ─────────────────────────────────────────────────
function Chip({ label }: { label: string }) {
  return (
    <span
      className="text-[0.6rem] rounded-full px-2.5 py-0.5 font-light"
      style={{ background: 'rgba(110,93,221,0.06)', border: '1px solid rgba(110,93,221,0.15)', color: '#6E5DDD' }}
    >
      {label}
    </span>
  )
}

// ── Services Section ──────────────────────────────────────────
export default function Services() {
  const t = useTranslations('Services')
  const { ref: card3Ref, visible: card3Visible } = useReveal(0.25)
  useStaggerReveal('.bento-card', { stagger: 0.12 })
  useHeadlineReveal('.services-headline')

  return (
    <section id="services" className="py-20 md:py-40 px-5 md:px-10 bg-white">

      {/* Section header */}
      <div className="mb-12 md:mb-16">
        <span className="flex items-center gap-2 text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--cyan)' }} />
          {t('tag')}
        </span>
        <h2
          className="font-serif font-normal text-ink mb-5 services-headline"
          style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
        >
          {t('h2Line1')}<br />
          <em style={{
            background: 'var(--gradient-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
          }}>{t('h2Line2')}</em>
        </h2>
        <p className="text-[1rem] font-light text-mid max-w-[460px] leading-[1.8]">{t('lead')}</p>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 xl:min-h-[480px]">

        {/* Card 1 — Apps (left, 2×2) — side-by-side layout */}
        <div
          className="bento-card bento-card-apps relative rounded-2xl overflow-hidden md:col-span-2 xl:col-span-2 xl:row-span-2"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%)',
            border: '1px solid rgba(110,93,221,0.08)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle at 70% 25%, rgba(110,93,221,0.07) 0%, transparent 65%)', filter: 'blur(40px)' }}
          />
          <div className="bento-card-large relative z-10 p-8 md:p-10 h-full">
            {/* Left: text */}
            <div className="flex flex-col gap-5 justify-center">
              <span className="text-[0.6rem] text-mid font-light tracking-[0.08em]">01 — Mobile</span>
              <h3
                className="font-serif font-normal text-ink"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.8px', lineHeight: 1.15 }}
              >
                {t('s1Title')}
              </h3>
              <p className="text-[0.83rem] font-light text-mid leading-[1.75]">
                {t('s1Desc')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Swift', 'Kotlin', 'React Native', 'Flutter'].map((c) => <Chip key={c} label={c} />)}
              </div>
            </div>

            {/* Right: iPhone */}
            <div className="flex items-center justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Card 2 — AI (top right) */}
        <div
          className="bento-card bento-card-ai relative rounded-2xl overflow-hidden xl:col-span-2"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%)',
            border: '1px solid rgba(110,93,221,0.08)',
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle at 30% 80%, rgba(61,238,219,0.1) 0%, transparent 65%)', filter: 'blur(40px)' }}
          />
          <div className="relative z-10 flex flex-col h-full p-8">
            <span className="text-[0.6rem] text-mid font-light tracking-[0.08em]">02 —</span>
            <div className="flex-1 flex items-center justify-center py-6">
              <ChatMockup />
            </div>
            <div>
              <h3
                className="font-serif font-normal text-ink mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', letterSpacing: '-0.6px', lineHeight: 1.2 }}
              >
                {t('s3Title')}
              </h3>
              <p className="text-[0.8rem] font-light text-mid leading-[1.75]">
                {t('s3Desc')}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['OpenAI', 'Claude', 'LangChain'].map((c) => <Chip key={c} label={c} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — Web (bottom right) */}
        <div
          ref={card3Ref}
          className="bento-card bento-card-web relative rounded-2xl overflow-hidden xl:col-span-2"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%)',
            border: '1px solid rgba(110,93,221,0.08)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle at 75% 20%, rgba(61,201,240,0.1) 0%, transparent 65%)', filter: 'blur(40px)' }}
          />
          <div className="relative z-10 flex flex-col h-full p-8">
            <span className="text-[0.6rem] text-mid font-light tracking-[0.08em]">03 —</span>
            <div className="flex-1 flex items-center justify-center py-6">
              <BrowserMockup visible={card3Visible} />
            </div>
            <div>
              <h3
                className="font-serif font-normal text-ink mb-2"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', letterSpacing: '-0.6px', lineHeight: 1.2 }}
              >
                {t('s2Title')}
              </h3>
              <p className="text-[0.8rem] font-light text-mid leading-[1.75]">
                {t('s2Desc')}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['Next.js', 'TypeScript', 'Tailwind'].map((c) => <Chip key={c} label={c} />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div
        className="relative mt-3 rounded-2xl overflow-hidden px-8 py-14 md:px-16 md:py-16 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(61,238,219,0.05) 0%, #ffffff 50%, rgba(110,93,221,0.05) 100%)',
          border: '1px solid rgba(110,93,221,0.12)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 70% at 50% 50%, rgba(61,238,219,0.07) 0%, transparent 65%)' }}
        />
        <div className="relative z-10">
          <p
            className="font-serif font-normal text-ink mb-3"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', letterSpacing: '-1.5px', lineHeight: 1.1 }}
          >
            {t('ctaTitle')}
          </p>
          <p className="text-[0.9rem] font-light text-mid mb-8">
            {t('ctaSub')}
          </p>
          <MagneticButton
            href="#contact"
            className="inline-flex items-center gap-2 text-[0.875rem] font-medium px-8 py-3.5 rounded-full no-underline min-h-[44px] transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--gradient-brand)',
              color: '#0a0a0f',
              boxShadow: '0 8px 24px rgba(110,93,221,0.22)',
            }}
          >
            {t('ctaButton')} →
          </MagneticButton>
        </div>
      </div>

      <style>{`
        .bento-card {
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .bento-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110,93,221,0.22) !important;
        }
        .bento-card-apps:hover { box-shadow: 0 20px 60px rgba(110,93,221,0.12), 0 0 80px rgba(61,238,219,0.07); }
        .bento-card-ai:hover   { box-shadow: 0 20px 60px rgba(61,238,219,0.12), 0 0 80px rgba(110,93,221,0.07); }
        .bento-card-web:hover  { box-shadow: 0 20px 60px rgba(61,201,240,0.12), 0 0 80px rgba(61,238,219,0.07); }
      `}</style>
    </section>
  )
}
