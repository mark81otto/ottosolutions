'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { useStaggerReveal } from '@/hooks/useStaggerReveal'
import { useHeadlineReveal } from '@/hooks/useHeadlineReveal'

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

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startAnimation()
      return
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startAnimation()
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── VerveVoid Card ────────────────────────────────────────────────── */
function VerveVoidCard() {
  const t = useTranslations('Portfolio')
  return (
    <a
      href="https://apps.apple.com/es/app/verve-void/id6762288350"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card pf-verve pf-card-link"
    >
      <div className="pf-wide-layout">
        <div className="pf-vv-visual">
          <div className="pf-vv-icon-float">
            <div className="pf-vv-icon">V&amp;V</div>
          </div>
          <div className="pf-room-card">
            <div className="pf-room-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=220&fit=crop&q=80"
                alt="Luxury living room"
                loading="lazy"
              />
              <div className="pf-room-overlay">
                <div className="pf-ai-score-pill">
                  <span className="pf-ai-score-label">AI Score</span>
                  <span className="pf-ai-score-val"><CountUp target={82} /></span>
                </div>
              </div>
            </div>
            <div className="pf-palette">
              {['#8B6F47', '#C4956A', '#E8D5B7', '#D4A574', '#6B4C2A'].map(c => (
                <div key={c} className="pf-swatch" style={{ background: c }} />
              ))}
            </div>
          </div>
          <div className="pf-voice-chip">
            <span>🎙️</span>
            <span className="pf-voice-name">Charline AI</span>
            <div className="pf-voice-waves">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="pf-wave-bar" style={{ animationDelay: `${i * 0.12}s` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="pf-info">
          <div className="pf-badge"><span className="pf-dot" />iOS · Claude AI</div>
          <h3 className="pf-title">Verve &amp; Void</h3>
          <p className="pf-subtitle">{t('p1Title')}</p>
          <p className="pf-desc">{t('p1Desc')}</p>
          <div className="pf-metrics">
            <div className="pf-metric"><span className="pf-mval">App Store</span><span className="pf-mlbl">Live</span></div>
            <div className="pf-metric"><span className="pf-mval">Claude AI</span><span className="pf-mlbl">Powered</span></div>
          </div>
          <div className="pf-tags">
            {['SwiftUI', 'Claude AI', 'ARKit', 'Core ML'].map(c => <span key={c}>{c}</span>)}
          </div>
        </div>
      </div>
    </a>
  )
}

/* ─── Sensora Card ──────────────────────────────────────────────────── */
function SensoraCard() {
  const t = useTranslations('Portfolio')
  return (
    <a
      href="https://sensora.care"
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-card pf-sensora pf-card-link"
    >
      <div className="pf-browser">
        <div className="pf-browser-bar">
          <span className="pf-dot-red" /><span className="pf-dot-yellow" /><span className="pf-dot-green" />
          <span className="pf-url">sensora.care</span>
          <span className="pf-live-badge">● Live</span>
        </div>
        <div className="pf-sensora-dash">
          <div className="pf-patient-card">
            <div className="pf-patient-info">
              <div className="pf-patient-avatar">MS</div>
              <div>
                <div className="pf-patient-name">Maria Schneider</div>
                <div className="pf-patient-room">Zimmer 204</div>
              </div>
            </div>
            <div className="pf-kritisch-badge">Kritisch</div>
          </div>
          <div className="pf-vitals-grid">
            <div className="pf-vital pf-vital-danger">
              <div className="pf-vital-icon">💓</div>
              <div className="pf-vital-val">128</div>
              <div className="pf-vital-label">BPM</div>
            </div>
            <div className="pf-vital pf-vital-warning">
              <div className="pf-vital-icon">🫁</div>
              <div className="pf-vital-val">89%</div>
              <div className="pf-vital-label">SpO₂</div>
            </div>
            <div className="pf-vital pf-vital-ai">
              <div className="pf-vital-icon">🤖</div>
              <div className="pf-vital-val"><CountUp target={92} /></div>
              <div className="pf-vital-label">AI Score</div>
            </div>
          </div>
          <div className="pf-ai-alert">
            <span className="pf-ai-alert-icon">⚡</span>
            <span className="pf-ai-alert-text">Tachykardie erkannt — Arzt benachrichtigt</span>
          </div>
        </div>
      </div>
      <div className="pf-info">
        <div className="pf-badge pf-badge-health"><span className="pf-dot pf-dot-health" />Healthcare · AI</div>
        <h3 className="pf-title">Sensora</h3>
        <p className="pf-subtitle">{t('p2Title')}</p>
        <p className="pf-desc">{t('p2Desc')}</p>
        <div className="pf-metrics">
          <div className="pf-metric"><span className="pf-mval">Live</span><span className="pf-mlbl">Production</span></div>
          <div className="pf-metric"><span className="pf-mval">24/7</span><span className="pf-mlbl">Monitoring</span></div>
        </div>
        <div className="pf-tags">
          {['Next.js', 'AI/ML', 'HL7 FHIR', 'Real-time'].map(c => <span key={c}>{c}</span>)}
        </div>
      </div>
    </a>
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


/* ─── Main Component ─────────────────────────────────────────────────── */
export default function Portfolio() {
  const t = useTranslations('Portfolio')
  useStaggerReveal('.portfolio-card', { stagger: 0.15 })
  useHeadlineReveal('.pf-h2')

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
          <VerveVoidCard />
          <SensoraCard />
          <NovaChatCard />
        </div>
      </div>
    </section>
  )
}
