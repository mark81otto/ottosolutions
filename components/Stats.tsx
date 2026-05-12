'use client'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

/* ─── CountUp ──────────────────────────────────────────────────────── */
function CountUp({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return
      started.current = true
      const start = Date.now()
      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(target * eased))
        if (progress < 1) requestAnimationFrame(tick)
        else setCount(target)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

/* ─── Main Component ───────────────────────────────────────────────── */
export default function Stats() {
  const t = useTranslations('Stats')

  return (
    <section className="stats-section">
      <style>{`
        .stats-section {
          background: #ffffff;
          padding: 7rem 2rem;
        }
        .stats-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Section Header ── */
        .stats-header {
          margin-bottom: 4rem;
        }
        .stats-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6E5DDD;
          margin-bottom: 1.5rem;
        }
        .stats-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
        }
        .stats-h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(2.2rem, 5vw, 4rem);
          letter-spacing: -2px;
          line-height: 1.05;
          color: #0a0a0f;
          margin-bottom: 1.25rem;
        }
        .stats-h2 .gradient-text {
          background: linear-gradient(135deg, #3DEEDB 0%, #3DC9F0 50%, #6E5DDD 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stats-lead {
          font-size: 1.05rem;
          color: #888896;
          font-weight: 300;
          max-width: 480px;
          line-height: 1.6;
        }

        /* ── Bento Grid ── */
        .stats-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .stats-bento {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-bento .stat-3 {
            grid-column: span 2;
          }
        }
        @media (min-width: 1024px) {
          .stats-bento {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr 1fr;
          }
          .stats-bento .stat-1 { grid-column: 1; grid-row: 1; }
          .stats-bento .stat-2 { grid-column: 2; grid-row: 1; }
          .stats-bento .stat-3 { grid-column: 3 / 5; grid-row: 1 / 3; }
          .stats-bento .stat-4 { grid-column: 1; grid-row: 2; }
          .stats-bento .stat-5 { grid-column: 2; grid-row: 2; }
        }

        /* ── Base Card ── */
        .stat-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%);
          border: 1px solid rgba(110, 93, 221, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 93, 221, 0.25);
          box-shadow:
            0 20px 60px rgba(110, 93, 221, 0.12),
            0 0 80px rgba(61, 238, 219, 0.08);
        }
        .stat-card > * { position: relative; z-index: 1; }

        /* Aurora blobs */
        .stat-card::before {
          content: '';
          position: absolute;
          width: 200px; height: 200px;
          filter: blur(50px);
          pointer-events: none;
          z-index: 0;
        }
        .stat-1::before {
          top: -50px; right: -50px;
          background: radial-gradient(circle, rgba(61,238,219,0.15) 0%, transparent 70%);
        }
        .stat-2::before {
          bottom: -50px; left: -50px;
          background: radial-gradient(circle, rgba(110,93,221,0.12) 0%, transparent 70%);
        }
        .stat-3::before {
          top: 50%; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(61,201,240,0.15) 0%, transparent 70%);
        }
        .stat-4::before {
          top: -30px; left: 50%;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
        }
        .stat-5::before {
          bottom: -30px; right: 30%;
          background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%);
        }

        /* ── Typography ── */
        .stat-eyebrow {
          font-size: 0.72rem;
          font-weight: 500;
          color: #6E5DDD;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4vw, 3.75rem);
          font-weight: 500;
          letter-spacing: -2px;
          line-height: 1;
          background: linear-gradient(135deg, #3DEEDB 0%, #6E5DDD 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-size: 1rem;
          font-weight: 500;
          color: #0a0a0f;
          margin-bottom: 0.25rem;
        }
        .stat-sub {
          font-size: 0.8rem;
          color: #888896;
          font-weight: 300;
        }

        /* ── Card 1: Timeline ── */
        .stat-visual-timeline {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 1.25rem;
          font-size: 0.65rem;
          color: #888896;
        }
        .timeline-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          box-shadow: 0 0 12px rgba(61, 238, 219, 0.4);
        }
        .timeline-line {
          flex: 1;
          height: 2px;
          background: rgba(0,0,0,0.05);
          border-radius: 1px;
          position: relative;
          overflow: hidden;
        }
        .timeline-progress {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #3DEEDB, #6E5DDD);
          transform: scaleX(0);
          transform-origin: left;
          animation: timelineGrow 2s 0.5s ease-out forwards;
        }
        .timeline-now {
          font-weight: 600;
          color: #6E5DDD;
          font-size: 0.65rem;
          flex-shrink: 0;
        }
        @keyframes timelineGrow {
          to { transform: scaleX(1); }
        }

        /* ── Card 2: Language Pills ── */
        .stat-langs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 1.25rem;
        }
        .lang-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(110, 93, 221, 0.06);
          border: 1px solid rgba(110, 93, 221, 0.15);
          font-size: 0.7rem;
          font-weight: 500;
          color: #0a0a0f;
          transition: all 0.2s;
          cursor: default;
        }
        .lang-pill:hover {
          background: rgba(110, 93, 221, 0.12);
          transform: translateY(-1px);
        }

        /* ── Card 3: Featured ── */
        .stat-3 {
          min-height: 400px;
        }
        .stat-3 .stat-number {
          font-size: clamp(4rem, 7vw, 6rem);
        }
        .stat-label-big {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 500;
          letter-spacing: -0.6px;
          line-height: 1.1;
          color: #0a0a0f;
          margin-bottom: 1rem;
        }
        .stat-3-description {
          font-size: 0.95rem;
          color: #888896;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 420px;
        }
        .stat-3-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.75rem;
        }
        .stat-3-check {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #0a0a0f;
        }
        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .mini-repo-card {
          background: #0d1117;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px 16px;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .repo-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 0.83rem;
          color: white;
        }
        .repo-name {
          font-weight: 600;
          color: #3DEEDB;
        }
        .repo-visibility {
          margin-left: auto;
          font-size: 0.62rem;
          padding: 2px 8px;
          border-radius: 999px;
          background: rgba(110, 93, 221, 0.2);
          color: #a89fe8;
          border: 1px solid rgba(110, 93, 221, 0.3);
        }
        .repo-stats {
          display: flex;
          gap: 12px;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.45);
        }

        /* ── Card 4: Lighthouse Gauge ── */
        .lighthouse-gauge {
          position: relative;
          margin-top: 1rem;
          width: 100%;
          max-width: 160px;
        }
        .lighthouse-gauge svg { overflow: visible; }
        .gauge-grade {
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #22c55e;
        }
        @keyframes gaugeFill {
          from { stroke-dashoffset: 125.6; }
          to   { stroke-dashoffset: 1.3; }
        }

        /* ── Card 5: EU Map ── */
        .stat-eu-map {
          margin-top: 1.25rem;
        }
        .map-pin-label {
          font-size: 0.7rem;
          color: #6E5DDD;
          text-align: center;
          margin-top: 4px;
          font-weight: 500;
        }
      `}</style>

      <div className="stats-inner">
        {/* Header */}
        <div className="stats-header">
          <div className="stats-tag">
            <span className="stats-tag-dot" />
            {t('tag')}
          </div>
          <h2 className="stats-h2">
            {t('h2Line1')}<br />
            <span className="gradient-text">{t('h2Highlight')}</span>
          </h2>
          <p className="stats-lead">{t('lead')}</p>
        </div>

        {/* Bento Grid */}
        <div className="stats-bento">

          {/* CARD 1 — Founded 2024 */}
          <div className="stat-card stat-1">
            <div>
              <div className="stat-eyebrow">{t('stat1Eyebrow')}</div>
              <div className="stat-number">{t('stat1Number')}</div>
              <div className="stat-label">{t('stat1Label')}</div>
              <div className="stat-sub">{t('stat1Sub')}</div>
            </div>
            <div className="stat-visual-timeline">
              <div className="timeline-dot" />
              <div className="timeline-line">
                <div className="timeline-progress" />
              </div>
              <div className="timeline-now">NOW</div>
            </div>
          </div>

          {/* CARD 2 — Languages */}
          <div className="stat-card stat-2">
            <div>
              <div className="stat-eyebrow">{t('stat2Eyebrow')}</div>
              <div className="stat-number" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-1px' }}>
                DE · EN · ES
              </div>
              <div className="stat-label">{t('stat2Label')}</div>
              <div className="stat-sub">{t('stat2Sub')}</div>
            </div>
            <div className="stat-langs">
              <span className="lang-pill">🇩🇪 Deutsch</span>
              <span className="lang-pill">🇬🇧 English</span>
              <span className="lang-pill">🇪🇸 Español</span>
            </div>
          </div>

          {/* CARD 3 — Code Ownership (FEATURED) */}
          <div className="stat-card stat-3">
            <div className="stat-eyebrow">{t('stat3Eyebrow')}</div>
            <div className="stat-number">100%</div>
            <div className="stat-label-big">{t('stat3LabelBig')}</div>
            <p className="stat-3-description">{t('stat3Desc')}</p>
            <div className="stat-3-checklist">
              {(['stat3Check1', 'stat3Check2', 'stat3Check3', 'stat3Check4'] as const).map((key) => (
                <div className="stat-3-check" key={key}>
                  <span className="check-icon">✓</span>
                  {t(key)}
                </div>
              ))}
            </div>
            <div className="mini-repo-card">
              <div className="repo-header">
                <span>📦</span>
                <span className="repo-name">your-project</span>
                <span className="repo-visibility">Private</span>
              </div>
              <div className="repo-stats">
                <span>⚡ main</span>
                <span>📝 1,247 commits</span>
                <span>🌱 100% yours</span>
              </div>
            </div>
          </div>

          {/* CARD 4 — Lighthouse 99 */}
          <div className="stat-card stat-4">
            <div>
              <div className="stat-eyebrow">{t('stat4Eyebrow')}</div>
              <div className="stat-number">
                <CountUp target={99} />
              </div>
              <div className="stat-label">{t('stat4Label')}</div>
              <div className="stat-sub">{t('stat4Sub')}</div>
            </div>
            <div className="lighthouse-gauge">
              <svg viewBox="0 0 100 60" width="100%" height="60">
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3DEEDB" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="125.6"
                  strokeDashoffset="125.6"
                  style={{ animation: 'gaugeFill 1.5s 0.4s ease-out forwards' }}
                />
              </svg>
              <div className="gauge-grade">A+</div>
            </div>
          </div>

          {/* CARD 5 — 0 Outsourcing */}
          <div className="stat-card stat-5">
            <div>
              <div className="stat-eyebrow">{t('stat5Eyebrow')}</div>
              <div className="stat-number">0</div>
              <div className="stat-label">{t('stat5Label')}</div>
              <div className="stat-sub">{t('stat5Sub')}</div>
            </div>
            <div className="stat-eu-map">
              <svg viewBox="0 0 120 70" width="100%" height="56">
                {/* Simplified EU landmass */}
                <path
                  d="M 15 35 Q 20 22 32 20 Q 42 18 50 22 Q 60 26 68 22 Q 76 18 82 20 Q 90 22 95 28 Q 100 34 98 42 Q 95 50 88 54 Q 78 58 65 56 Q 52 58 42 54 Q 30 50 22 44 Q 14 40 15 35 Z"
                  fill="rgba(110, 93, 221, 0.08)"
                  stroke="rgba(110, 93, 221, 0.2)"
                  strokeWidth="1"
                />
                {/* Scandinavia stub */}
                <path
                  d="M 48 20 Q 52 10 56 8 Q 60 6 62 10 Q 64 14 62 20"
                  fill="rgba(110, 93, 221, 0.06)"
                  stroke="rgba(110, 93, 221, 0.15)"
                  strokeWidth="1"
                />
                {/* Valencia pin pulse ring */}
                <circle cx="42" cy="46" r="7" fill="rgba(110,93,221,0.12)">
                  <animate attributeName="r" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                </circle>
                {/* Pin dot */}
                <circle cx="42" cy="46" r="4" fill="#6E5DDD" />
                <circle cx="42" cy="46" r="2" fill="white" />
              </svg>
              <div className="map-pin-label">📍 Valencia, España</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
