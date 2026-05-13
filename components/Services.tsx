'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const t = useTranslations('Services')
  const sectionRef = useRef<HTMLElement>(null)
  const [currentStage, setCurrentStage] = useState(0)
  const [count, setCount] = useState(0)
  const counterStarted = useRef(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress
          const newStage = Math.min(Math.floor(progress * 4), 3)
          setCurrentStage(newStage)

          if (newStage === 3 && !counterStarted.current) {
            counterStarted.current = true
            const start = Date.now()
            const duration = 1500
            const tick = () => {
              const elapsed = Date.now() - start
              const p = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setCount(Math.floor(100 * eased))
              if (p < 1) requestAnimationFrame(tick)
              else setCount(100)
            }
            requestAnimationFrame(tick)
          }
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="sticky-section">
      <div className="sticky-wrapper">
        <div className="sticky-content">

          {/* LEFT: TEXT */}
          <div className="sticky-text">

            {/* Stage 0 — iOS & Android */}
            <div className={`sticky-stage${currentStage === 0 ? ' active' : ''}`}>
              <div className="stage-number">
                <span className="stage-dot" />
                01 — {t('s1Badge')}
              </div>
              <h2 className="stage-title">
                {t('s1TitleLine1')}<br />
                <em>{t('s1TitleLine2')}</em>
              </h2>
              <p className="stage-desc">{t('s1Desc')}</p>
              <div className="stage-tags">
                {['Swift', 'Kotlin', 'React Native', 'SwiftUI'].map(c => <span key={c}>{c}</span>)}
              </div>
            </div>

            {/* Stage 1 — Websites */}
            <div className={`sticky-stage${currentStage === 1 ? ' active' : ''}`}>
              <div className="stage-number">
                <span className="stage-dot" />
                02 — {t('s2Badge')}
              </div>
              <h2 className="stage-title">
                {t('s2TitleLine1')}<br />
                <em>{t('s2TitleLine2')}</em>
              </h2>
              <p className="stage-desc">{t('s2Desc')}</p>
              <div className="stage-tags">
                {['Next.js', 'TypeScript', 'Tailwind', 'Vercel'].map(c => <span key={c}>{c}</span>)}
              </div>
            </div>

            {/* Stage 2 — AI */}
            <div className={`sticky-stage${currentStage === 2 ? ' active' : ''}`}>
              <div className="stage-number">
                <span className="stage-dot" />
                03 — {t('s3Badge')}
              </div>
              <h2 className="stage-title">
                {t('s3TitleLine1')}<br />
                <em>{t('s3TitleLine2')}</em>
              </h2>
              <p className="stage-desc">{t('s3Desc')}</p>
              <div className="stage-tags">
                {['Claude AI', 'GPT-4', 'LangChain', 'Vector DBs'].map(c => <span key={c}>{c}</span>)}
              </div>
            </div>

            {/* Stage 3 — Ownership */}
            <div className={`sticky-stage${currentStage === 3 ? ' active' : ''}`}>
              <div className="stage-number">
                <span className="stage-dot" />
                04 — {t('s4Badge')}
              </div>
              <h2 className="stage-title">
                {t('s4TitleLine1')}<br />
                <em>{t('s4TitleLine2')}</em>
              </h2>
              <p className="stage-desc">{t('s4Desc')}</p>
              <div className="stage-tags">
                {(['s4Tag1', 's4Tag2', 's4Tag3', 's4Tag4'] as const).map(k => (
                  <span key={k}>{t(k)}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: VISUALS */}
          <div className="sticky-visual">

            {/* Visual 0 — Swift code editor */}
            <div className={`visual-card visual-code${currentStage === 0 ? ' active' : ''}`}>
              <div className="vc-header">
                <div className="vc-dots">
                  <span className="vc-dot vc-red" />
                  <span className="vc-dot vc-yellow" />
                  <span className="vc-dot vc-green" />
                </div>
                <div className="vc-filename">DashboardView.swift</div>
              </div>
              <div className="vc-body">
                <div><span className="ln">1</span><span className="c-cmt">// FitTrack Dashboard</span></div>
                <div><span className="ln">2</span><span className="c-kw">import</span> SwiftUI</div>
                <div><span className="ln">3</span><span className="c-kw">import</span> HealthKit</div>
                <div><span className="ln">4</span></div>
                <div><span className="ln">5</span><span className="c-kw">struct</span> <span className="c-fn">DashboardView</span>: View {'{'}</div>
                <div><span className="ln">6</span>{'  '}<span className="c-kw">@State</span> <span className="c-kw">var</span> steps = <span className="c-str">0</span></div>
                <div><span className="ln">7</span>{'  '}<span className="c-kw">@State</span> <span className="c-kw">var</span> calories = <span className="c-str">0</span></div>
                <div><span className="ln">8</span></div>
                <div><span className="ln">9</span>{'  '}<span className="c-kw">var</span> body: <span className="c-fn">some</span> View {'{'}</div>
                <div><span className="ln">10</span>{'    '}<span className="c-fn">VStack</span> {'{'}</div>
                <div><span className="ln">11</span>{'      '}<span className="c-fn">ActivityRings</span>()</div>
                <div><span className="ln">12</span>{'      '}<span className="c-fn">StatsGrid</span>()</div>
                <div><span className="ln">13</span>{'    '}{'}'}</div>
                <div><span className="ln">14</span>{'  '}{'}'}</div>
                <div><span className="ln">15</span>{'}'}</div>
              </div>
            </div>

            {/* Visual 1 — Browser / Lighthouse */}
            <div className={`visual-card visual-browser${currentStage === 1 ? ' active' : ''}`}>
              <div className="vc-header vc-header-light">
                <div className="vc-dots">
                  <span className="vc-dot vc-red" />
                  <span className="vc-dot vc-yellow" />
                  <span className="vc-dot vc-green" />
                </div>
                <div className="vc-url">
                  <span>🔒</span> otto-solutions.com
                </div>
              </div>
              <div className="vc-browser-body">
                <div className="lh-hero">
                  <div className="lh-tag">Lighthouse Audit</div>
                  <div className="lh-title">Next.js & Performance</div>
                  <div className="lh-sub">Perfect Scores</div>
                </div>
                <div className="lh-bars">
                  {[
                    { label: 'Performance',     score: 99,  w: '99%',  delay: '0s'   },
                    { label: 'Accessibility',   score: 100, w: '100%', delay: '0.15s' },
                    { label: 'SEO',             score: 95,  w: '95%',  delay: '0.3s'  },
                    { label: 'Best Practices',  score: 100, w: '100%', delay: '0.45s' },
                  ].map(m => (
                    <div
                      key={m.label}
                      className="lh-bar"
                      style={{ '--bar-w': m.w, '--bar-delay': m.delay } as React.CSSProperties}
                    >
                      <span className="lh-bar-label">{m.label}</span>
                      <span className="lh-bar-score">{m.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual 2 — AI Workflow */}
            <div className={`visual-card visual-ai${currentStage === 2 ? ' active' : ''}`}>
              <div className="ai-vis-header">
                <div className="ai-pill">
                  <span className="ai-pulse-dot" />
                  AI Pipeline · Live
                </div>
              </div>
              <div className="ai-nodes">
                <div className="ai-node">
                  <div className="ai-node-icon">💬</div>
                  <div className="ai-node-label">Input</div>
                </div>
                <div className="ai-conn">
                  <div className="ai-particle" />
                  <div className="ai-particle ai-p1" />
                  <div className="ai-particle ai-p2" />
                </div>
                <div className="ai-node ai-node-main">
                  <div className="ai-node-icon">🧠</div>
                  <div className="ai-node-label">Claude AI</div>
                  <div className="ai-node-pulse" />
                </div>
                <div className="ai-conn">
                  <div className="ai-particle" />
                  <div className="ai-particle ai-p1" />
                  <div className="ai-particle ai-p2" />
                </div>
                <div className="ai-node">
                  <div className="ai-node-icon">✨</div>
                  <div className="ai-node-label">Output</div>
                </div>
              </div>
              <div className="ai-stats-row">
                {[
                  { val: '1,247', lbl: 'Conversations' },
                  { val: '0.8s',  lbl: 'Avg Response' },
                  { val: '3',     lbl: 'Languages' },
                ].map(s => (
                  <div key={s.lbl} className="ai-stat-cell">
                    <div className="ai-stat-val">{s.val}</div>
                    <div className="ai-stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual 3 — 100% Ownership */}
            <div className={`visual-card visual-ownership${currentStage === 3 ? ' active' : ''}`}>
              <div className="own-tag">{t('s4VisualBadge')}</div>
              <div className="own-number">
                {count}<span className="own-pct">%</span>
              </div>
              <div className="own-label">Code-Ownership</div>
              <div className="own-list">
                {(['s4Check1', 's4Check2', 's4Check3', 's4Check4'] as const).map(k => (
                  <div key={k} className="own-item">
                    <span className="own-check">✓</span>
                    {t(k)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="sticky-progress">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className={`sticky-dot${currentStage === i ? ' active' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
