'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

type ConsentState = {
  essential: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

export default function CookieBanner() {
  const t = useTranslations('CookieBanner')
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (!stored) {
      setVisible(true)
    }
  }, [])

  const saveConsent = (consent: Omit<ConsentState, 'timestamp'>) => {
    const state: ConsentState = { ...consent, timestamp: Date.now() }
    localStorage.setItem('cookie-consent', JSON.stringify(state))
    setVisible(false)
  }

  const acceptAll = () => saveConsent({ essential: true, analytics: true, marketing: true })
  const rejectAll = () => saveConsent({ essential: true, analytics: false, marketing: false })
  const saveCustom = () => saveConsent({ essential: true, analytics, marketing })

  if (!visible) return null

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        {!showSettings ? (
          <>
            <div className="cookie-icon">🍪</div>
            <div className="cookie-content">
              <h3 className="cookie-title">{t('title')}</h3>
              <p className="cookie-desc">
                {t('desc')}{' '}
                <Link href="/legal/cookies" className="cookie-link">{t('learnMore')}</Link>
              </p>
            </div>
            <div className="cookie-actions">
              <button className="cookie-btn cookie-btn-secondary" onClick={() => setShowSettings(true)}>
                {t('customize')}
              </button>
              <button className="cookie-btn cookie-btn-ghost" onClick={rejectAll}>
                {t('rejectAll')}
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
                {t('acceptAll')}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-content">
              <h3 className="cookie-title">{t('settingsTitle')}</h3>
              <p className="cookie-desc">{t('settingsDesc')}</p>
            </div>
            <div className="cookie-toggles">
              <div className="cookie-toggle-row">
                <div className="cookie-toggle-info">
                  <span className="cookie-toggle-label">{t('essential')}</span>
                  <span className="cookie-toggle-desc">{t('essentialDesc')}</span>
                </div>
                <span className="cookie-always-on">{t('alwaysOn')}</span>
              </div>
              <div className="cookie-toggle-row">
                <div className="cookie-toggle-info">
                  <span className="cookie-toggle-label">{t('analytics')}</span>
                  <span className="cookie-toggle-desc">{t('analyticsDesc')}</span>
                </div>
                <button
                  className={`cookie-toggle ${analytics ? 'cookie-toggle-active' : ''}`}
                  onClick={() => setAnalytics(!analytics)}
                  aria-pressed={analytics}
                />
              </div>
              <div className="cookie-toggle-row">
                <div className="cookie-toggle-info">
                  <span className="cookie-toggle-label">{t('marketing')}</span>
                  <span className="cookie-toggle-desc">{t('marketingDesc')}</span>
                </div>
                <button
                  className={`cookie-toggle ${marketing ? 'cookie-toggle-active' : ''}`}
                  onClick={() => setMarketing(!marketing)}
                  aria-pressed={marketing}
                />
              </div>
            </div>
            <div className="cookie-actions">
              <button className="cookie-btn cookie-btn-secondary" onClick={() => setShowSettings(false)}>
                ← {t('back')}
              </button>
              <button className="cookie-btn cookie-btn-primary" onClick={saveCustom}>
                {t('savePreferences')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
