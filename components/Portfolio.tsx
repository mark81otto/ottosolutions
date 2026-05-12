'use client'
import { useTranslations } from 'next-intl'

// ── FitTrack iPhone Mockup ────────────────────────────────────
function FitTrackPhone() {
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
            <div className="status-bar">
              <span className="sb-time">9:41</span>
              <div className="sb-icons"><span>●●●</span><span>▲</span><span>100%</span></div>
            </div>
            <div className="dynamic-island" />
            <div className="ft-app">
              <div className="ft-header">
                <div className="ft-greeting">Guten Morgen, Mark</div>
                <div className="ft-title">Heute</div>
              </div>
              <div className="ft-rings">
                <svg viewBox="0 0 100 100" width="110" height="110">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(239,68,68,0.15)" strokeWidth="7" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="7"
                    strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(34,197,94,0.15)" strokeWidth="7" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#22c55e" strokeWidth="7"
                    strokeDasharray="188" strokeDashoffset="30" strokeLinecap="round" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="7" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#3b82f6" strokeWidth="7"
                    strokeDasharray="125" strokeDashoffset="20" strokeLinecap="round" transform="rotate(-90 50 50)" />
                </svg>
              </div>
              <div className="ft-stats">
                <div className="ft-stat">
                  <span className="ft-stat-label">Schritte</span>
                  <span className="ft-stat-value">8,432</span>
                </div>
                <div className="ft-stat">
                  <span className="ft-stat-label">Kalorien</span>
                  <span className="ft-stat-value">412 kcal</span>
                </div>
              </div>
              <div className="ft-workout">
                <div className="ft-workout-icon">🏃</div>
                <div>
                  <div className="ft-workout-title">5km Lauf</div>
                  <div className="ft-workout-sub">Empfehlung · 30 min</div>
                </div>
              </div>
            </div>
            <div className="home-indicator" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── AuraCommerce Browser Mockup ───────────────────────────────
function AuraBrowser() {
  const products = [
    { name: 'Sneaker Pro', price: '€129', bg: 'linear-gradient(135deg,#fde68a,#fca5a5)', delay: '0s' },
    { name: 'Watch X',     price: '€249', bg: 'linear-gradient(135deg,#c7d2fe,#a5b4fc)', delay: '0.5s' },
    { name: 'Bag Luxe',    price: '€89',  bg: 'linear-gradient(135deg,#fbcfe8,#f9a8d4)', delay: '1s' },
    { name: 'Cap Y',       price: '€39',  bg: 'linear-gradient(135deg,#a7f3d0,#6ee7b7)', delay: '1.5s' },
  ]
  return (
    <div className="ac-browser">
      <div className="ac-bar">
        <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
        <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
        <div className="ac-url">auracommerce.es</div>
      </div>
      <div className="ac-content">
        <div className="ac-grid">
          {products.map((p) => (
            <div key={p.name} className="ac-product">
              <div className="ac-product-img" style={{ background: p.bg, animationDelay: p.delay }} />
              <div className="ac-product-name">{p.name}</div>
              <div className="ac-product-price">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── NovaChat Mockup ───────────────────────────────────────────
function NovaChatMockup() {
  const msgs = [
    { role: 'user', text: 'Wann ist meine Lieferung da?' },
    { role: 'ai',   text: 'Hi! Bestellung #4521 ist unterwegs 📦 Ankunft: morgen, 14–16 Uhr.' },
    { role: 'user', text: 'Perfekt, danke!' },
  ]
  return (
    <div className="nc-wrapper">
      {msgs.map((m, i) => (
        <div key={i} className={`nc-row ${m.role === 'user' ? 'nc-user' : 'nc-ai'}`}
          style={{ animation: `fadeInUp 0.4s ${i * 0.18}s ease both` }}>
          <div className={`nc-bubble ${m.role === 'user' ? 'nc-bubble-user' : 'nc-bubble-ai'}`}>
            {m.text}
          </div>
        </div>
      ))}
      <div className="nc-row nc-ai" style={{ animation: 'fadeInUp 0.4s 0.6s ease both' }}>
        <div className="nc-bubble nc-bubble-ai">
          <span className="flex gap-1 items-center">
            <span className="thinking-dot-dark" style={{ animationDelay: '0ms' }} />
            <span className="thinking-dot-dark" style={{ animationDelay: '180ms' }} />
            <span className="thinking-dot-dark" style={{ animationDelay: '360ms' }} />
          </span>
        </div>
      </div>
    </div>
  )
}

// ── LogiX iPad Dashboard ──────────────────────────────────────
function LogiXDashboard() {
  return (
    <div className="lx-ipad">
      <div className="lx-frame">
        <div className="lx-screen">
          <div className="lx-dashboard">
            <div className="lx-sidebar">
              <div className="lx-logo">LogiX</div>
              <div className="lx-nav">
                {[['📍','Map',true],['📦','Orders',false],['🚚','Drivers',false],['📊','Reports',false]].map(([icon, label, active]) => (
                  <div key={label as string} className={`lx-nav-item ${active ? 'lx-active' : ''}`}>
                    {icon} {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="lx-main">
              <div className="lx-header">
                <div>
                  <div className="lx-title">Live Tracking</div>
                  <div className="lx-sub">12 aktive Routen</div>
                </div>
                <div className="lx-kpis">
                  <div className="lx-kpi"><div className="lx-kpi-l">Heute</div><div className="lx-kpi-v">284</div></div>
                  <div className="lx-kpi"><div className="lx-kpi-l">Pünktlich</div><div className="lx-kpi-v" style={{ color: '#22c55e' }}>98%</div></div>
                </div>
              </div>
              <div className="lx-map">
                <div className="lx-pin" style={{ top: '30%', left: '18%' }}>🚚</div>
                <div className="lx-pin" style={{ top: '54%', left: '58%', animationDelay: '0.5s' }}>🚚</div>
                <div className="lx-pin" style={{ top: '68%', left: '36%', animationDelay: '1s' }}>🚚</div>
                <div className="lx-pin lx-pin-pulse" style={{ top: '36%', left: '74%' }}>📍</div>
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 400 220">
                  <path d="M72 66 Q200 110 232 118" stroke="#3DEEDB" strokeWidth="1.5" fill="none" strokeDasharray="4 4"
                    style={{ animation: 'routeDash 2s linear infinite' }} />
                  <path d="M232 118 Q152 170 144 150" stroke="#6E5DDD" strokeWidth="1.5" fill="none" strokeDasharray="4 4"
                    style={{ animation: 'routeDash 2s linear infinite', animationDelay: '0.5s' }} />
                  <path d="M232 118 Q296 90 296 80" stroke="#3DC9F0" strokeWidth="1.5" fill="none" strokeDasharray="4 4"
                    style={{ animation: 'routeDash 2s linear infinite', animationDelay: '1s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Portfolio Section ─────────────────────────────────────────
export default function Portfolio() {
  const t = useTranslations('Portfolio')

  return (
    <section id="portfolio" className="py-20 md:py-40 px-5 md:px-10 bg-white">

      {/* Section header */}
      <div className="mb-12 md:mb-16">
        <span className="flex items-center gap-2 text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--cyan)' }} />
          {t('tag')}
        </span>
        <h2 className="font-serif font-normal text-ink mb-5"
          style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}>
          {t('h2Line1')}<br />
          <em style={{ background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic' }}>
            {t('h2Highlight')}
          </em>
        </h2>
        <p className="text-[1rem] font-light text-mid max-w-[460px] leading-[1.8]">{t('lead')}</p>
      </div>

      {/* Bento Grid */}
      <div className="portfolio-bento">

        {/* Card 1 — FitTrack (large, 2×2) */}
        <div className="portfolio-card proj-1" style={{ background: 'linear-gradient(135deg,#ffffff,#f9f8f6)', border: '1px solid rgba(110,93,221,0.08)' }}>
          <div className="pcard-glow" style={{ top: 0, right: 0, background: 'radial-gradient(circle,rgba(61,238,219,0.1) 0%,transparent 70%)' }} />
          <div className="proj-1-layout relative z-10 p-8 md:p-10 h-full">
            <div className="flex items-center justify-center">
              <FitTrackPhone />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="proj-badge"><span className="proj-dot" />{t('p1Cat')}</div>
              <h3 className="font-serif font-normal text-ink" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.8px', lineHeight: 1.1 }}>
                {t('p1Name')}
              </h3>
              <p className="text-[0.88rem] font-light" style={{ color: 'var(--purple)' }}>{t('p1Title')}</p>
              <p className="text-[0.82rem] font-light text-mid leading-[1.75]">{t('p1Desc')}</p>
              <div className="proj-metrics">
                <div className="proj-metric"><span className="pm-val">{t('p1m1')}</span><span className="pm-lbl">{t('p1m1l')}</span></div>
                <div className="proj-metric"><span className="pm-val">{t('p1m2')}</span><span className="pm-lbl">{t('p1m2l')}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Swift', 'HealthKit', 'watchOS', 'Core Data'].map((c) => (
                  <span key={c} className="proj-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — AuraCommerce (top right) */}
        <div className="portfolio-card proj-2" style={{ background: 'linear-gradient(135deg,#ffffff,#f9f8f6)', border: '1px solid rgba(110,93,221,0.08)' }}>
          <div className="pcard-glow" style={{ bottom: 0, left: 0, background: 'radial-gradient(circle,rgba(110,93,221,0.08) 0%,transparent 70%)' }} />
          <div className="relative z-10 flex flex-col h-full p-8">
            <div className="proj-badge mb-4"><span className="proj-dot" />{t('p2Cat')}</div>
            <div className="flex-1 flex items-center justify-center py-2">
              <AuraBrowser />
            </div>
            <div className="mt-4">
              <h3 className="font-serif font-normal text-ink mb-1" style={{ fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', letterSpacing: '-0.6px' }}>
                {t('p2Name')}
              </h3>
              <p className="text-[0.78rem] font-light mb-2" style={{ color: 'var(--purple)' }}>{t('p2Title')}</p>
              <p className="text-[0.76rem] font-light text-mid leading-[1.7] mb-3">{t('p2Desc')}</p>
              <div className="proj-metrics-sm">
                <div className="proj-metric"><span className="pm-val-sm">{t('p2m1')}</span><span className="pm-lbl">{t('p2m1l')}</span></div>
                <div className="proj-metric"><span className="pm-val-sm">{t('p2m2')}</span><span className="pm-lbl">{t('p2m2l')}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['Next.js', 'Stripe', 'Sanity CMS'].map((c) => <span key={c} className="proj-tag">{c}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — NovaChat (bottom right) */}
        <div className="portfolio-card proj-3" style={{ background: 'linear-gradient(135deg,#ffffff,#f9f8f6)', border: '1px solid rgba(110,93,221,0.08)' }}>
          <div className="pcard-glow" style={{ top: 0, left: 0, background: 'radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 70%)' }} />
          <div className="relative z-10 flex flex-col h-full p-8">
            <div className="proj-badge mb-4"><span className="proj-dot" />{t('p3Cat')}</div>
            <div className="flex-1 flex items-center justify-center py-2">
              <NovaChatMockup />
            </div>
            <div className="mt-4">
              <h3 className="font-serif font-normal text-ink mb-1" style={{ fontSize: 'clamp(1.2rem,2.5vw,1.7rem)', letterSpacing: '-0.6px' }}>
                {t('p3Name')}
              </h3>
              <p className="text-[0.78rem] font-light mb-2" style={{ color: 'var(--purple)' }}>{t('p3Title')}</p>
              <p className="text-[0.76rem] font-light text-mid leading-[1.7] mb-3">{t('p3Desc')}</p>
              <div className="proj-metrics-sm">
                <div className="proj-metric"><span className="pm-val-sm">{t('p3m1')}</span><span className="pm-lbl">{t('p3m1l')}</span></div>
                <div className="proj-metric"><span className="pm-val-sm">{t('p3m2')}</span><span className="pm-lbl">{t('p3m2l')}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['GPT-4', 'LangChain', 'Vector DB'].map((c) => <span key={c} className="proj-tag">{c}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 — LogiX (full width) */}
        <div className="portfolio-card proj-4" style={{ background: 'linear-gradient(135deg,#ffffff,#f9f8f6)', border: '1px solid rgba(110,93,221,0.08)' }}>
          <div className="pcard-glow" style={{ top: 0, right: '20%', width: 400, height: 320, background: 'radial-gradient(circle,rgba(61,201,240,0.08) 0%,transparent 70%)' }} />
          <div className="lx-card-layout relative z-10 p-8 md:p-10 h-full">
            <div className="flex flex-col justify-center gap-4">
              <div className="proj-badge"><span className="proj-dot" />{t('p4Cat')}</div>
              <h3 className="font-serif font-normal text-ink" style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', letterSpacing: '-0.8px', lineHeight: 1.1 }}>
                {t('p4Name')}
              </h3>
              <p className="text-[0.88rem] font-light" style={{ color: 'var(--purple)' }}>{t('p4Title')}</p>
              <p className="text-[0.82rem] font-light text-mid leading-[1.75]">{t('p4Desc')}</p>
              <div className="proj-metrics">
                <div className="proj-metric"><span className="pm-val">{t('p4m1')}</span><span className="pm-lbl">{t('p4m1l')}</span></div>
                <div className="proj-metric"><span className="pm-val">{t('p4m2')}</span><span className="pm-lbl">{t('p4m2l')}</span></div>
                <div className="proj-metric"><span className="pm-val">{t('p4m3')}</span><span className="pm-lbl">{t('p4m3l')}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Node.js', 'MapBox', 'PostgreSQL'].map((c) => <span key={c} className="proj-tag">{c}</span>)}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LogiXDashboard />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .portfolio-card {
          position: relative; overflow: hidden; border-radius: 24px; cursor: default;
          transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .portfolio-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110,93,221,0.22) !important;
          box-shadow: 0 20px 60px rgba(110,93,221,0.1), 0 0 80px rgba(61,238,219,0.07);
        }
        .pcard-glow {
          position: absolute; width: 260px; height: 260px; border-radius: 50%;
          filter: blur(55px); pointer-events: none; z-index: 0;
        }
        /* Badge */
        .proj-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; background: rgba(61,238,219,0.08); border: 1px solid rgba(61,238,219,0.2); font-size: 0.68rem; font-weight: 500; color: #3DC9F0; letter-spacing: 0.04em; }
        .proj-dot { width: 6px; height: 6px; border-radius: 50%; background: #3DEEDB; flex-shrink: 0; }
        /* Metrics */
        .proj-metrics { display: flex; gap: 1.5rem; padding: 0.75rem 0; border-top: 1px solid rgba(0,0,0,0.05); border-bottom: 1px solid rgba(0,0,0,0.05); }
        .proj-metrics-sm { display: flex; gap: 1.5rem; padding: 0.5rem 0; border-top: 1px solid rgba(0,0,0,0.05); }
        .proj-metric { display: flex; flex-direction: column; gap: 2px; }
        .pm-val { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 600; background: linear-gradient(135deg,#3DEEDB,#6E5DDD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pm-val-sm { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 600; background: linear-gradient(135deg,#3DEEDB,#6E5DDD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pm-lbl { font-size: 0.62rem; color: #888896; }
        .proj-tag { font-size: 0.6rem; padding: 4px 10px; border-radius: 999px; background: rgba(110,93,221,0.06); border: 1px solid rgba(110,93,221,0.15); color: #6E5DDD; }
        /* Card 1 layout (phone left, text right) */
        .proj-1-layout { display: grid; grid-template-columns: 230px 1fr; gap: 2rem; align-items: center; }
        @media (max-width: 768px) { .proj-1-layout { grid-template-columns: 1fr; } }
        /* Card 4 layout (text left, iPad right) */
        .lx-card-layout { display: grid; grid-template-columns: 1fr minmax(0, 520px); gap: 2rem; align-items: center; }
        @media (max-width: 768px) { .lx-card-layout { grid-template-columns: 1fr; } }
        /* AuraCommerce */
        .ac-browser { background: white; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.06); width: 100%; max-width: 340px; }
        .ac-bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; border-bottom: 1px solid rgba(0,0,0,0.06); }
        .ac-url { flex: 1; margin-left: 8px; background: rgba(0,0,0,0.04); border-radius: 6px; padding: 3px 10px; font-size: 0.55rem; color: #888; font-family: -apple-system, sans-serif; }
        .ac-content { padding: 12px; }
        .ac-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .ac-product { background: rgba(0,0,0,0.02); border-radius: 10px; overflow: hidden; padding: 4px; }
        .ac-product-img { width: 100%; aspect-ratio: 1; border-radius: 8px; margin-bottom: 6px; animation: subtleFloat 4s ease-in-out infinite; }
        .ac-product-name { font-size: 0.65rem; font-weight: 600; padding: 0 4px; font-family: -apple-system, sans-serif; color: #0a0a0f; }
        .ac-product-price { font-size: 0.62rem; color: #6E5DDD; font-weight: 700; padding: 0 4px 4px; font-family: -apple-system, sans-serif; }
        /* NovaChat */
        .nc-wrapper { display: flex; flex-direction: column; gap: 7px; max-width: 260px; width: 100%; }
        .nc-row { display: flex; }
        .nc-user { justify-content: flex-end; }
        .nc-ai { justify-content: flex-start; }
        .nc-bubble { font-size: 0.67rem; line-height: 1.55; padding: 9px 13px; border-radius: 14px; max-width: 82%; font-family: -apple-system, sans-serif; }
        .nc-bubble-user { background: var(--purple); color: white; border-radius: 14px 14px 4px 14px; }
        .nc-bubble-ai { background: rgba(0,0,0,0.06); color: #0a0a0f; border-radius: 14px 14px 14px 4px; display: flex; gap: 4px; align-items: center; min-height: 36px; }
        /* FitTrack */
        .ft-app { padding-top: 48px; height: 100%; display: flex; flex-direction: column; font-family: -apple-system, sans-serif; }
        .ft-header { padding: 0 16px 6px; }
        .ft-greeting { font-size: 0.58rem; color: #888; }
        .ft-title { font-size: 1.25rem; font-weight: 700; letter-spacing: -0.5px; }
        .ft-rings { display: flex; justify-content: center; margin: 4px 0; }
        .ft-stats { display: flex; gap: 8px; padding: 6px 16px; margin-bottom: 6px; }
        .ft-stat { flex: 1; background: rgba(0,0,0,0.04); padding: 7px 9px; border-radius: 10px; display: flex; flex-direction: column; }
        .ft-stat-label { font-size: 0.5rem; color: #888; }
        .ft-stat-value { font-size: 0.8rem; font-weight: 700; }
        .ft-workout { margin: 0 16px; padding: 9px; background: linear-gradient(135deg,rgba(239,68,68,0.07),rgba(245,158,11,0.07)); border-radius: 12px; display: flex; align-items: center; gap: 9px; }
        .ft-workout-icon { width: 32px; height: 32px; background: white; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 0.95rem; }
        .ft-workout-title { font-size: 0.66rem; font-weight: 600; }
        .ft-workout-sub { font-size: 0.5rem; color: #888; }
        /* LogiX iPad */
        .lx-ipad { display: flex; justify-content: center; width: 100%; }
        .lx-frame { width: 100%; max-width: 520px; background: linear-gradient(135deg,#4a4a4a,#1d1d1f); border-radius: 16px; padding: 10px; box-shadow: 0 24px 50px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.05); }
        .lx-screen { background: #f5f5f7; border-radius: 8px; overflow: hidden; aspect-ratio: 4/3; }
        .lx-dashboard { display: grid; grid-template-columns: 90px 1fr; height: 100%; }
        .lx-sidebar { background: #1d1d1f; padding: 14px 10px; display: flex; flex-direction: column; gap: 10px; }
        .lx-logo { color: #3DEEDB; font-weight: 700; font-size: 0.8rem; font-family: -apple-system, sans-serif; letter-spacing: -0.3px; }
        .lx-nav { display: flex; flex-direction: column; gap: 3px; }
        .lx-nav-item { padding: 5px 7px; font-size: 0.55rem; color: rgba(255,255,255,0.4); border-radius: 6px; font-family: -apple-system, sans-serif; }
        .lx-active { background: rgba(61,238,219,0.14); color: #3DEEDB; }
        .lx-main { padding: 14px; background: white; display: flex; flex-direction: column; }
        .lx-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
        .lx-title { font-size: 0.85rem; font-weight: 700; letter-spacing: -0.3px; }
        .lx-sub { font-size: 0.5rem; color: #888; }
        .lx-kpis { display: flex; gap: 10px; }
        .lx-kpi { text-align: right; }
        .lx-kpi-l { font-size: 0.46rem; color: #888; }
        .lx-kpi-v { font-size: 0.82rem; font-weight: 700; font-family: -apple-system, sans-serif; }
        .lx-map { flex: 1; position: relative; background: linear-gradient(135deg,#f0f9ff,#e0f2fe); border-radius: 8px; overflow: hidden; min-height: 60px; }
        .lx-map::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px); background-size: 18px 18px; }
        .lx-pin { position: absolute; font-size: 0.85rem; filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2)); animation: pinFloat 3s ease-in-out infinite; z-index: 1; }
        .lx-pin-pulse { animation: pinPulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
