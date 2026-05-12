'use client'
import { useTranslations } from 'next-intl'
import AIChatbot from './AIChatbot'

export default function Contact() {
  const t = useTranslations('Contact')

  return (
    <section id="contact" className="contact-section">
      <style>{`
        .contact-section {
          background: #ffffff;
          padding: 7rem 2rem;
        }
        .contact-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .contact-header { margin-bottom: 4rem; }
        .contact-tag {
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
        .contact-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
        }
        .contact-h2 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(2.2rem, 5vw, 4rem);
          letter-spacing: -2px;
          line-height: 1.05;
          color: #0a0a0f;
          margin-bottom: 1.25rem;
        }
        .contact-h2 .gradient-text {
          background: linear-gradient(135deg, #3DEEDB 0%, #3DC9F0 50%, #6E5DDD 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-lead {
          font-size: 1.05rem;
          color: #888896;
          font-weight: 300;
          max-width: 520px;
          line-height: 1.6;
        }

        /* ── Bento Grid ── */
        .contact-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 1024px) {
          .contact-bento {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto auto;
          }
          .contact-chatbot  { grid-column: 1 / 3; grid-row: 1 / 3; }
          .contact-info     { grid-column: 3 / 5; grid-row: 1; }
          .contact-trust    { grid-column: 3; grid-row: 2; }
          .contact-cta-card { grid-column: 4; grid-row: 2; }
        }

        /* ── Base Card ── */
        .contact-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .contact-info {
          background: linear-gradient(135deg, #ffffff 0%, #f9f8f6 100%);
          border: 1px solid rgba(110, 93, 221, 0.08);
          padding: 2.5rem;
        }
        .contact-trust {
          background: linear-gradient(135deg, rgba(61,238,219,0.05) 0%, #ffffff 100%);
          border: 1px solid rgba(61, 238, 219, 0.2);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 200px;
        }
        .contact-cta-card {
          background: linear-gradient(135deg, rgba(110,93,221,0.08) 0%, rgba(61,238,219,0.05) 100%);
          border: 1px solid rgba(110, 93, 221, 0.15);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 200px;
        }
        .contact-info:hover,
        .contact-trust:hover,
        .contact-cta-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110, 93, 221, 0.25);
          box-shadow: 0 20px 60px rgba(110, 93, 221, 0.1);
        }

        /* ── Info Card ── */
        .cinfo-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(110, 93, 221, 0.08);
          border: 1px solid rgba(110, 93, 221, 0.2);
          font-size: 0.7rem;
          font-weight: 500;
          color: #6E5DDD;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        .cinfo-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #6E5DDD; }
        .cinfo-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: -0.5px;
          line-height: 1.1;
          color: #0a0a0f;
          margin-bottom: 2rem;
        }
        .cinfo-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .cinfo-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255,255,255,0.5);
          border: 1px solid transparent;
          transition: all 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .cinfo-item:hover {
          background: white;
          border-color: rgba(110, 93, 221, 0.15);
          transform: translateX(4px);
        }
        .cinfo-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(110, 93, 221, 0.08);
          border: 1px solid rgba(110, 93, 221, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6E5DDD;
          flex-shrink: 0;
        }
        .cinfo-icon svg { width: 17px; height: 17px; }
        .cinfo-label { font-size: 0.7rem; font-weight: 500; color: #888896; margin-bottom: 2px; }
        .cinfo-value { font-size: 0.875rem; font-weight: 500; color: #0a0a0f; }

        /* ── Trust Card ── */
        .trust-icon {
          width: 52px; height: 52px;
          border-radius: 16px;
          background: rgba(61, 238, 219, 0.1);
          border: 1px solid rgba(61, 238, 219, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3DC9F0;
          margin-bottom: 1rem;
        }
        .trust-icon svg { width: 26px; height: 26px; }
        .trust-label { font-size: 0.78rem; color: #888896; margin-bottom: 0.25rem; }
        .trust-value {
          font-family: 'Playfair Display', serif;
          font-size: 2.25rem;
          font-weight: 500;
          background: linear-gradient(135deg, #3DEEDB, #6E5DDD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .trust-sub { font-size: 0.78rem; color: #888896; font-weight: 300; }

        /* ── CTA Card ── */
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.25);
          font-size: 0.7rem;
          font-weight: 500;
          color: #16a34a;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          align-self: flex-start;
        }
        .cta-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: ctaDotPulse 2s ease-in-out infinite;
        }
        @keyframes ctaDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.5px;
          line-height: 1.2;
          color: #0a0a0f;
          margin-bottom: 0.75rem;
        }
        .cta-desc { font-size: 0.83rem; color: #888896; font-weight: 300; line-height: 1.65; }
      `}</style>

      <div className="contact-inner">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-tag">
            <span className="contact-tag-dot" />
            {t('tag')}
          </div>
          <h2 className="contact-h2">
            {t('h2Line1')}<br />
            <span className="gradient-text">{t('h2Highlight')}</span>
          </h2>
          <p className="contact-lead">{t('lead')}</p>
        </div>

        {/* Bento */}
        <div className="contact-bento">

          {/* Chatbot — featured left 2×2 */}
          <div className="contact-card contact-chatbot">
            <AIChatbot />
          </div>

          {/* Direct contact */}
          <div className="contact-card contact-info">
            <div className="cinfo-eyebrow">
              <span className="cinfo-eyebrow-dot" />
              {t('directContact')}
            </div>
            <h3 className="cinfo-title">{t('directTitle')}</h3>
            <div className="cinfo-list">
              <a href="mailto:hallo@ottosolutions.es" className="cinfo-item">
                <div className="cinfo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="cinfo-label">{t('mailLabel')}</div>
                  <div className="cinfo-value">hallo@ottosolutions.es</div>
                </div>
              </a>
              <div className="cinfo-item">
                <div className="cinfo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="cinfo-label">{t('locLabel')}</div>
                  <div className="cinfo-value">{t('locVal')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Response time */}
          <div className="contact-card contact-trust">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="trust-label">{t('responseTitle')}</div>
            <div className="trust-value">&lt; 24h</div>
            <div className="trust-sub">{t('responseSub')}</div>
          </div>

          {/* Free consultation */}
          <div className="contact-card contact-cta-card">
            <div className="cta-badge">
              <span className="cta-badge-dot" />
              {t('freeBadge')}
            </div>
            <h4 className="cta-title">{t('freeTitle')}</h4>
            <p className="cta-desc">{t('freeDesc')}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
