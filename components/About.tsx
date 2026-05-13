'use client'
import { useTranslations } from 'next-intl'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal'

export default function About() {
  const t = useTranslations('About')

  const timelineItems = [
    { emoji: '📅', yearKey: 'timeline1Year', labelKey: 'timeline1Label', detailKey: 'timeline1Detail', future: false },
    { emoji: '🚀', yearKey: 'timeline2Year', labelKey: 'timeline2Label', detailKey: 'timeline2Detail', future: false },
    { emoji: '🤖', yearKey: 'timeline3Year', labelKey: 'timeline3Label', detailKey: 'timeline3Detail', future: false },
    { emoji: '🌍', yearKey: 'timeline4Year', labelKey: 'timeline4Label', detailKey: 'timeline4Detail', future: false },
    { emoji: '✨', yearKey: 'timeline5Year', labelKey: 'timeline5Label', detailKey: 'timeline5Detail', future: true },
  ] as const

  const values = [
    {
      cls: 'about-2', iconCls: 'value-icon-cyan',
      svg: (
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          strokeLinecap="round" strokeLinejoin="round" />
      ),
      titleKey: 'value1Title' as const, descKey: 'value1Desc' as const,
    },
    {
      cls: 'about-3', iconCls: 'value-icon-orange',
      svg: (
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
          strokeLinecap="round" strokeLinejoin="round" />
      ),
      titleKey: 'value2Title' as const, descKey: 'value2Desc' as const,
    },
    {
      cls: 'about-4', iconCls: 'value-icon-green',
      svg: (
        <path d="M13 2L3 14L12 14L11 22L21 10L12 10L13 2Z"
          strokeLinecap="round" strokeLinejoin="round" />
      ),
      titleKey: 'value3Title' as const, descKey: 'value3Desc' as const,
    },
    {
      cls: 'about-5', iconCls: 'value-icon-blue',
      svg: (
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          strokeLinecap="round" strokeLinejoin="round" />
      ),
      titleKey: 'value4Title' as const, descKey: 'value4Desc' as const,
    },
  ]

  useStaggerReveal('.about-card', { stagger: 0.12 })
  useHeadlineReveal('.about-h2')

  return (
    <section id="about" className="about-section">
      <style>{`
        .about-section {
          background: #ffffff;
          padding: 7rem 2rem;
        }
        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Section Header ── */
        .about-header {
          margin-bottom: 4rem;
        }
        .about-tag {
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
        .about-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
        }
        .about-h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(2.2rem, 5vw, 4rem);
          letter-spacing: -2px;
          line-height: 1.05;
          color: #0a0a0f;
          margin-bottom: 1.25rem;
        }
        .about-h2 .gradient-text {
          background: linear-gradient(135deg, #3DEEDB 0%, #3DC9F0 50%, #6E5DDD 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-lead {
          font-size: 1.05rem;
          color: #888896;
          font-weight: 300;
          max-width: 520px;
          line-height: 1.6;
        }

        /* ── Bento Grid ── */
        .about-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .about-bento {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-bento .about-1 {
            grid-column: span 2;
          }
        }
        @media (min-width: 1024px) {
          .about-bento {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr 1fr auto;
          }
          .about-bento .about-1 { grid-column: 1 / 3; grid-row: 1 / 3; }
          .about-bento .about-2 { grid-column: 3; grid-row: 1; }
          .about-bento .about-3 { grid-column: 4; grid-row: 1; }
          .about-bento .about-4 { grid-column: 3; grid-row: 2; }
          .about-bento .about-5 { grid-column: 4; grid-row: 2; }
          .about-bento .about-6 { grid-column: 1 / 5; }
        }

        /* ── Base Card ── */
        .about-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%);
          border: 1px solid rgba(110, 93, 221, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .about-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 93, 221, 0.25);
          box-shadow:
            0 20px 60px rgba(110, 93, 221, 0.12),
            0 0 80px rgba(61, 238, 219, 0.08);
        }
        .about-card > * { position: relative; z-index: 1; }

        /* Aurora blobs */
        .about-card::before {
          content: '';
          position: absolute;
          width: 200px; height: 200px;
          filter: blur(50px);
          pointer-events: none;
          z-index: 0;
        }
        .about-1::before {
          top: -50px; right: -50px;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(110,93,221,0.15) 0%, transparent 70%);
        }
        .about-2::before {
          top: -30px; left: 50%;
          background: radial-gradient(circle, rgba(61,238,219,0.12) 0%, transparent 70%);
        }
        .about-3::before {
          bottom: -30px; right: -30px;
          background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%);
        }
        .about-4::before {
          bottom: -30px; left: -30px;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
        }
        .about-5::before {
          top: -30px; left: -30px;
          background: radial-gradient(circle, rgba(61,201,240,0.12) 0%, transparent 70%);
        }
        .about-6::before {
          top: 50%; right: 20%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(110,93,221,0.08) 0%, transparent 70%);
        }

        /* ── Card 1: Founder ── */
        .about-1 {
          display: flex;
          flex-direction: column;
          min-height: 480px;
        }
        .founder-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(110, 93, 221, 0.08);
          border: 1px solid rgba(110, 93, 221, 0.25);
          font-size: 0.7rem;
          font-weight: 500;
          color: #6E5DDD;
          letter-spacing: 0.05em;
          align-self: flex-start;
          margin-bottom: 2rem;
        }
        .founder-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #6E5DDD;
        }
        .founder-photo-wrapper {
          position: relative;
          width: 120px; height: 120px;
          margin-bottom: 1.5rem;
        }
        .founder-photo {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 22px;
          overflow: hidden;
          border: 3px solid white;
          box-shadow:
            0 10px 30px rgba(110, 93, 221, 0.2),
            0 0 0 1px rgba(110, 93, 221, 0.1);
          z-index: 2;
        }
        .founder-photo img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .founder-fallback {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2.5rem;
          font-weight: 500;
          color: white;
          letter-spacing: -2px;
        }
        .founder-photo-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          border-radius: 28px;
          filter: blur(18px);
          opacity: 0.3;
          z-index: 1;
          animation: glowPulse 4s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.05); }
        }
        .founder-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 2.5vw, 2.25rem);
          font-weight: 500;
          letter-spacing: -1px;
          line-height: 1;
          color: #0a0a0f;
          margin-bottom: 0.25rem;
        }
        .founder-role {
          font-size: 0.9rem;
          color: #6E5DDD;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        .founder-bio {
          font-size: 0.92rem;
          font-weight: 300;
          color: #888896;
          line-height: 1.75;
          margin-bottom: 1.75rem;
          max-width: 460px;
        }
        .founder-bio em {
          font-style: italic;
          color: #6E5DDD;
          font-weight: 400;
        }
        .founder-stats {
          display: flex;
          gap: 2rem;
          padding: 1.25rem 0;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          margin-bottom: 1.5rem;
        }
        .founder-stat { display: flex; flex-direction: column; gap: 2px; }
        .founder-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }
        .founder-stat-label {
          font-size: 0.68rem;
          color: #888896;
        }
        .founder-available {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          font-size: 0.83rem;
          color: #16a34a;
          font-weight: 500;
        }
        .status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: statusPulse 2s ease-in-out infinite;
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }

        /* ── Cards 2–5: Values ── */
        .about-2,
        .about-3,
        .about-4,
        .about-5 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
          padding: 2rem;
        }
        .value-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          border: 1px solid;
          transition: transform 0.3s, box-shadow 0.3s;
          flex-shrink: 0;
        }
        .value-icon svg { width: 22px; height: 22px; }
        .about-card:hover .value-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .value-icon-cyan {
          background: rgba(61, 238, 219, 0.08);
          border-color: rgba(61, 238, 219, 0.25);
          color: #3DC9F0;
        }
        .about-2:hover .value-icon { box-shadow: 0 8px 20px rgba(61, 238, 219, 0.3); }
        .value-icon-orange {
          background: rgba(245, 158, 11, 0.08);
          border-color: rgba(245, 158, 11, 0.25);
          color: #f59e0b;
        }
        .about-3:hover .value-icon { box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3); }
        .value-icon-green {
          background: rgba(34, 197, 94, 0.08);
          border-color: rgba(34, 197, 94, 0.25);
          color: #22c55e;
        }
        .about-4:hover .value-icon { box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3); }
        .value-icon-blue {
          background: rgba(61, 201, 240, 0.08);
          border-color: rgba(61, 201, 240, 0.25);
          color: #3DC9F0;
        }
        .about-5:hover .value-icon { box-shadow: 0 8px 20px rgba(61, 201, 240, 0.3); }
        .value-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: -0.5px;
          color: #0a0a0f;
          margin-bottom: 0.4rem;
          line-height: 1.1;
        }
        .value-desc {
          font-size: 0.83rem;
          font-weight: 300;
          color: #888896;
          line-height: 1.65;
        }

        /* ── Card 6: Timeline ── */
        .about-6 {
          padding: 3rem;
        }
        .timeline-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .timeline-header {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: end;
          }
        }
        .timeline-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(61, 238, 219, 0.08);
          border: 1px solid rgba(61, 238, 219, 0.2);
          font-size: 0.7rem;
          font-weight: 500;
          color: #3DC9F0;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        .timeline-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #3DEEDB;
        }
        .timeline-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          font-weight: 500;
          letter-spacing: -1px;
          line-height: 1.1;
          color: #0a0a0f;
        }
        .timeline-title-gradient {
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }
        .timeline-lead {
          font-size: 0.92rem;
          color: #888896;
          line-height: 1.7;
          font-weight: 300;
        }

        /* Timeline Track */
        .timeline-track {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.75rem;
          position: relative;
        }
        .timeline-track::before {
          content: '';
          position: absolute;
          top: 28px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(90deg,
            #3DEEDB 0%,
            #6E5DDD 80%,
            rgba(110, 93, 221, 0.2) 100%
          );
          z-index: 0;
        }
        .timeline-item {
          position: relative;
          text-align: center;
          padding-top: 64px;
          z-index: 1;
        }
        .timeline-marker {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 54px; height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .timeline-item.active .timeline-marker {
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          border: 2px solid transparent;
          box-shadow: 0 8px 24px rgba(110, 93, 221, 0.3);
        }
        .timeline-item.future .timeline-marker {
          background: white;
          border: 2px dashed rgba(110, 93, 221, 0.3);
          opacity: 0.7;
        }
        .timeline-item:hover .timeline-marker {
          transform: translateX(-50%) scale(1.15);
        }
        .timeline-year {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #0a0a0f;
          margin-bottom: 0.2rem;
          letter-spacing: -0.5px;
        }
        .timeline-item.future .timeline-year { color: #888896; }
        .timeline-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: #0a0a0f;
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }
        .timeline-detail {
          font-size: 0.65rem;
          color: #888896;
          font-weight: 300;
        }

        /* Mobile timeline */
        @media (max-width: 767px) {
          .timeline-track {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .timeline-track::before { display: none; }
          .timeline-item {
            text-align: left;
            padding-top: 0;
            padding-left: 70px;
          }
          .timeline-marker {
            left: 0;
            transform: none;
            top: 0;
          }
          .timeline-item:hover .timeline-marker {
            transform: scale(1.1);
          }
        }
      `}</style>

      <div className="about-inner">
        {/* Header */}
        <div className="about-header">
          <div className="about-tag">
            <span className="about-tag-dot" />
            {t('tag')}
          </div>
          <h2 className="about-h2">
            {t('h2Line1')}<br />
            <span className="gradient-text">{t('h2Highlight')}</span>
          </h2>
          <p className="about-lead">{t('lead')}</p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento">

          {/* CARD 1 — Founder */}
          <div className="about-card about-1">
            <div className="founder-badge">
              <span className="founder-badge-dot" />
              {t('founderBadge')}
            </div>

            <div className="founder-photo-wrapper">
              <div className="founder-photo">
                <img
                  src="/founder.jpg"
                  alt="Mark Otto, Founder Otto Solutions SL"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    const fallback = img.nextElementSibling as HTMLElement | null
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="founder-fallback" style={{ display: 'none' }}>MO</div>
              </div>
              <div className="founder-photo-glow" />
            </div>

            <h3 className="founder-name">{t('founderName')}</h3>
            <p className="founder-role">{t('founderTitle')}</p>
            <p className="founder-bio">{t('founderBio')}</p>

            <div className="founder-stats">
              <div className="founder-stat">
                <span className="founder-stat-value">{t('founderStat1Value')}</span>
                <span className="founder-stat-label">{t('founderStat1Label')}</span>
              </div>
              <div className="founder-stat">
                <span className="founder-stat-value">{t('founderStat2Value')}</span>
                <span className="founder-stat-label">{t('founderStat2Label')}</span>
              </div>
              <div className="founder-stat">
                <span className="founder-stat-value">{t('founderStat3Value')}</span>
                <span className="founder-stat-label">{t('founderStat3Label')}</span>
              </div>
            </div>

            <div className="founder-available">
              <div className="status-dot" />
              <span>{t('founderAvailable')}</span>
            </div>
          </div>

          {/* CARDS 2–5 — Values */}
          {values.map((v) => (
            <div className={`about-card ${v.cls}`} key={v.cls}>
              <div className={`value-icon ${v.iconCls}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {v.svg}
                </svg>
              </div>
              <div>
                <h4 className="value-title">{t(v.titleKey)}</h4>
                <p className="value-desc">{t(v.descKey)}</p>
              </div>
            </div>
          ))}

          {/* CARD 6 — Timeline */}
          <div className="about-card about-6">
            <div className="timeline-header">
              <div>
                <div className="timeline-eyebrow">
                  <span className="timeline-eyebrow-dot" />
                  {t('timelineEyebrow')}
                </div>
                <h3 className="timeline-title">
                  {t('timelineTitle1')}<br />
                  <span className="timeline-title-gradient">{t('timelineTitle2')}</span>
                </h3>
              </div>
              <p className="timeline-lead">{t('timelineLead')}</p>
            </div>

            <div className="timeline-track">
              {timelineItems.map((item) => (
                <div className={`timeline-item ${item.future ? 'future' : 'active'}`} key={item.labelKey}>
                  <div className="timeline-marker">{item.emoji}</div>
                  <div className="timeline-year">{t(item.yearKey)}</div>
                  <div className="timeline-label">{t(item.labelKey)}</div>
                  <div className="timeline-detail">{t(item.detailKey)}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
