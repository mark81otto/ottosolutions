'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

/* ─── CountUp ──────────────────────────────────────────────────────── */
function CountUp({ target, duration = 1500, suffix = '' }: {
  target: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function startAnimation() {
      if (hasStarted.current) return
      hasStarted.current = true
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
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startAnimation()
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── FitTrack Card ─────────────────────────────────────────────────── */
function FitTrackCard() {
  const t = useTranslations('Portfolio')
  return (
    <div className="portfolio-card pf-fittrack">
      <div className="pf-wide-layout">
        <div className="pf-rings-hero">
          <svg viewBox="0 0 200 200" className="pf-rings-svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(239,68,68,0.12)" strokeWidth="14" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#ef4444" strokeWidth="14"
              strokeLinecap="round" strokeDasharray="502" strokeDashoffset="502"
              transform="rotate(-90 100 100)" className="pf-ring pf-ring-move" />
            <circle cx="100" cy="100" r="62" fill="none" stroke="rgba(34,197,94,0.12)" strokeWidth="14" />
            <circle cx="100" cy="100" r="62" fill="none" stroke="#22c55e" strokeWidth="14"
              strokeLinecap="round" strokeDasharray="389" strokeDashoffset="389"
              transform="rotate(-90 100 100)" className="pf-ring pf-ring-exercise" />
            <circle cx="100" cy="100" r="44" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="14" />
            <circle cx="100" cy="100" r="44" fill="none" stroke="#3b82f6" strokeWidth="14"
              strokeLinecap="round" strokeDasharray="276" strokeDashoffset="276"
              transform="rotate(-90 100 100)" className="pf-ring pf-ring-stand" />
          </svg>
          <div className="pf-float-stat pf-float-top">
            <span className="pf-float-icon">👟</span>
            <span className="pf-float-val"><CountUp target={8432} /></span>
            <span className="pf-float-lbl">Steps</span>
          </div>
          <div className="pf-float-stat pf-float-bot">
            <span className="pf-float-icon">🔥</span>
            <span className="pf-float-val"><CountUp target={412} /></span>
            <span className="pf-float-lbl">kcal</span>
          </div>
        </div>
        <div className="pf-info">
          <div className="pf-badge"><span className="pf-dot" />iOS · HealthKit · watchOS</div>
          <h3 className="pf-title">FitTrack</h3>
          <p className="pf-subtitle">{t('p1Title')}</p>
          <p className="pf-desc">{t('p1Desc')}</p>
          <div className="pf-metrics">
            <div className="pf-metric"><span className="pf-mval">50k+</span><span className="pf-mlbl">{t('p1Metric1')}</span></div>
            <div className="pf-metric"><span className="pf-mval">4.8 ★</span><span className="pf-mlbl">{t('p1Metric2')}</span></div>
            <div className="pf-metric"><span className="pf-mval">A+</span><span className="pf-mlbl">App Store</span></div>
          </div>
          <div className="pf-tags">
            {['Swift', 'HealthKit', 'watchOS', 'Core Data'].map(c => <span key={c}>{c}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── AuraCommerce Card ─────────────────────────────────────────────── */
function AuraCommerceCard() {
  const t = useTranslations('Portfolio')
  const [cartCount, setCartCount] = useState(2)

  useEffect(() => {
    const id = setInterval(() => setCartCount(n => (n % 11) + 1), 2500)
    return () => clearInterval(id)
  }, [])

  const products = [
    { name: 'Sneaker Pro', price: '€129', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&q=80' },
    { name: 'Watch X',    price: '€249', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80' },
    { name: 'Bag Luxe',   price: '€89',  img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop&q=80' },
    { name: 'Cap Y',      price: '€39',  img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop&q=80' },
    { name: 'Hoodie',     price: '€79',  img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop&q=80' },
    { name: 'Glasses',    price: '€159', img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=200&h=200&fit=crop&q=80' },
  ]

  return (
    <div className="portfolio-card pf-aura">
      <div className="pf-browser">
        <div className="pf-browser-bar">
          <span className="pf-dot-red" /><span className="pf-dot-yellow" /><span className="pf-dot-green" />
          <span className="pf-url">auracommerce.es</span>
          <span className="pf-cart">🛒 {cartCount}</span>
        </div>
        <div className="pf-shop-grid">
          {products.map(p => (
            <div key={p.name} className="pf-product">
              <div className="pf-product-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} loading="lazy" />
                <div className="pf-product-overlay">+ Cart</div>
              </div>
              <div className="pf-product-name">{p.name}</div>
              <div className="pf-product-price">{p.price}</div>
            </div>
          ))}
          <div className="pf-order-toast">✓ Order placed!</div>
        </div>
      </div>
      <div className="pf-info">
        <div className="pf-badge"><span className="pf-dot" />Next.js · E-Commerce</div>
        <h3 className="pf-title">AuraCommerce</h3>
        <p className="pf-subtitle">{t('p2Title')}</p>
        <p className="pf-desc">{t('p2Desc')}</p>
        <div className="pf-metrics">
          <div className="pf-metric"><span className="pf-mval">99</span><span className="pf-mlbl">Lighthouse</span></div>
          <div className="pf-metric"><span className="pf-mval">3</span><span className="pf-mlbl">{t('p2Metric2')}</span></div>
        </div>
        <div className="pf-tags">
          {['Next.js', 'Stripe', 'Sanity CMS'].map(c => <span key={c}>{c}</span>)}
        </div>
      </div>
    </div>
  )
}

/* ─── NovaChat Card ─────────────────────────────────────────────────── */
function NovaChatCard() {
  const t = useTranslations('Portfolio')
  return (
    <div className="portfolio-card pf-nova">
      <div className="pf-workflow">
        <p className="pf-workflow-title">AI Pipeline</p>
        <div className="pf-workflow-graph">
          {[
            { icon: '💬', label: 'User Input', cls: '' },
            { icon: '🧠', label: 'GPT-4',     cls: 'pf-node-gpt' },
            { icon: '🗄️', label: 'Vector DB', cls: '' },
            { icon: '✨', label: 'Response',  cls: '' },
          ].map((node, i) => (
            <div key={node.label} className="pf-node-group">
              <div className={`pf-node ${node.cls}`}>
                {node.cls === 'pf-node-gpt' && <div className="pf-node-pulse" />}
                <div className="pf-node-icon">{node.icon}</div>
                <div className="pf-node-label">{node.label}</div>
              </div>
              {i < 3 && (
                <div className="pf-conn">
                  <div className="pf-particle" style={{ animationDelay: `${i * 0.8}s` }} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pf-counters">
          <div className="pf-counter-row">
            <span>Conversations handled</span>
            <span className="pf-counter-val"><CountUp target={1247} /></span>
          </div>
          <div className="pf-counter-row">
            <span>Avg response time</span>
            <span className="pf-counter-val">0.8s</span>
          </div>
          <div className="pf-counter-row">
            <span>Languages</span>
            <span className="pf-counter-val">DE · EN · ES</span>
          </div>
        </div>
      </div>
      <div className="pf-info">
        <div className="pf-badge"><span className="pf-dot" />AI · Automation</div>
        <h3 className="pf-title">NovaChat</h3>
        <p className="pf-subtitle">{t('p3Title')}</p>
        <p className="pf-desc">{t('p3Desc')}</p>
        <div className="pf-metrics">
          <div className="pf-metric"><span className="pf-mval">−60%</span><span className="pf-mlbl">{t('p3Metric1')}</span></div>
          <div className="pf-metric"><span className="pf-mval">24/7</span><span className="pf-mlbl">{t('p3Metric2')}</span></div>
        </div>
        <div className="pf-tags">
          {['GPT-4', 'LangChain', 'Vector DB'].map(c => <span key={c}>{c}</span>)}
        </div>
      </div>
    </div>
  )
}

/* ─── LogiX Card ─────────────────────────────────────────────────────── */
function LogiXCard() {
  const t = useTranslations('Portfolio')
  return (
    <div className="portfolio-card pf-logix">
      <div className="pf-wide-layout">
        <div className="pf-info">
          <div className="pf-badge"><span className="pf-dot" />Web App · Cross-Platform</div>
          <h3 className="pf-title">LogiX</h3>
          <p className="pf-subtitle">{t('p4Title')}</p>
          <p className="pf-desc">{t('p4Desc')}</p>
          <div className="pf-live-stats">
            <div className="pf-live-stat"><div className="pf-ls-lbl">Active Routes</div><div className="pf-ls-val"><CountUp target={12} /></div></div>
            <div className="pf-live-stat"><div className="pf-ls-lbl">On-Time</div><div className="pf-ls-val">98<span className="pf-ls-suffix">%</span></div></div>
            <div className="pf-live-stat"><div className="pf-ls-lbl">Today</div><div className="pf-ls-val"><CountUp target={284} /></div></div>
          </div>
          <div className="pf-tags">
            {['React', 'Node.js', 'MapBox', 'PostgreSQL'].map(c => <span key={c}>{c}</span>)}
          </div>
        </div>
        <div className="pf-map-wrap">
          <svg viewBox="0 0 400 320" className="pf-eu-map">
            <defs>
              <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#bfdbfe" />
              </linearGradient>
              <linearGradient id="rg1"><stop offset="0%" stopColor="#3DEEDB"/><stop offset="100%" stopColor="#6E5DDD"/></linearGradient>
              <linearGradient id="rg2"><stop offset="0%" stopColor="#3DEEDB"/><stop offset="100%" stopColor="#3DC9F0"/></linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#seaGrad)" rx="8" />
            {/* Spain */}
            <path d="M 50 220 Q 65 200 90 195 Q 130 192 150 200 Q 165 210 165 230 Q 160 250 140 260 Q 110 268 80 262 Q 55 255 50 240 Z"
              fill="rgba(110,93,221,0.15)" stroke="rgba(110,93,221,0.4)" strokeWidth="1.5" />
            {/* France */}
            <path d="M 130 130 Q 160 120 200 125 Q 220 135 225 160 Q 220 185 200 195 Q 170 200 150 195 Q 130 185 125 160 Q 125 145 130 130 Z"
              fill="rgba(61,201,240,0.15)" stroke="rgba(61,201,240,0.4)" strokeWidth="1.5" />
            {/* Germany */}
            <path d="M 220 100 Q 250 90 280 95 Q 295 110 290 140 Q 280 160 260 165 Q 235 160 225 145 Q 218 125 220 100 Z"
              fill="rgba(61,238,219,0.15)" stroke="rgba(61,238,219,0.4)" strokeWidth="1.5" />
            {/* Italy */}
            <path d="M 240 170 Q 260 175 270 200 Q 275 230 265 255 Q 255 270 250 260 Q 240 235 235 200 Q 235 180 240 170 Z"
              fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" />
            {/* Routes */}
            <path d="M 100 235 Q 160 195 210 165 Q 245 145 260 120"
              stroke="url(#rg1)" strokeWidth="2.5" fill="none" strokeDasharray="5 5" className="pf-route" />
            <path d="M 100 235 Q 130 200 175 165 Q 195 155 200 140"
              stroke="url(#rg2)" strokeWidth="2" fill="none" strokeDasharray="5 5" className="pf-route pf-route-2" />
            {/* Trucks */}
            <g className="pf-truck pf-truck-1"><text x="130" y="217" textAnchor="middle" fontSize="14">🚚</text></g>
            <g className="pf-truck pf-truck-2"><text x="200" y="170" textAnchor="middle" fontSize="14">🚚</text></g>
            <g className="pf-truck pf-truck-3"><text x="245" y="135" textAnchor="middle" fontSize="14">🚚</text></g>
            {/* Pins */}
            <g>
              <circle cx="100" cy="235" r="10" fill="rgba(110,93,221,0.15)" className="pf-pin-pulse" />
              <circle cx="100" cy="235" r="4" fill="#6E5DDD" />
              <text x="100" y="254" textAnchor="middle" fontSize="8" fill="#0a0a0f" fontWeight="600">Valencia</text>
            </g>
            <g>
              <circle cx="260" cy="120" r="10" fill="rgba(61,238,219,0.15)" className="pf-pin-pulse" />
              <circle cx="260" cy="120" r="4" fill="#3DEEDB" />
              <text x="260" y="139" textAnchor="middle" fontSize="8" fill="#0a0a0f" fontWeight="600">Berlin</text>
            </g>
            <g>
              <circle cx="175" cy="160" r="10" fill="rgba(61,201,240,0.15)" className="pf-pin-pulse" />
              <circle cx="175" cy="160" r="4" fill="#3DC9F0" />
              <text x="175" y="179" textAnchor="middle" fontSize="8" fill="#0a0a0f" fontWeight="600">Paris</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const t = useTranslations('Portfolio')

  return (
    <section id="portfolio" className="pf-section">
      <div className="pf-inner">
        <div className="pf-header">
          <span className="pf-eyebrow"><span className="pf-eyebrow-dot" />{t('tag')}</span>
          <h2 className="pf-h2">
            {t('h2Line1')}<br />
            <em className="pf-gradient-text">{t('h2Highlight')}</em>
          </h2>
          <p className="pf-lead">{t('lead')}</p>
        </div>
        <div className="pf-bento">
          <FitTrackCard />
          <AuraCommerceCard />
          <NovaChatCard />
          <LogiXCard />
        </div>
      </div>
    </section>
  )
}
