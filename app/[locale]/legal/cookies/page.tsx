'use client'

import { useTranslations } from 'next-intl'

export default function CookiesPage() {
  const t = useTranslations('CookiesPolicy')

  const openCookieSettings = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookie-consent')
      window.location.reload()
    }
  }

  return (
    <article>
      <h1>{t('title')}</h1>
      <p className="legal-updated">{t('updated')}: November 2025</p>

      <p>{t('intro')}</p>

      <h2>1. {t('section1Title')}</h2>
      <p>{t('section1Content')}</p>

      <h2>2. {t('section2Title')}</h2>
      <p>{t('section2Intro')}</p>

      <div className="legal-card">
        <h3>🔧 {t('typeEssentialTitle')}</h3>
        <p>{t('typeEssentialDesc')}</p>
        <p><strong>{t('examples')}:</strong> {t('typeEssentialExamples')}</p>
      </div>

      <div className="legal-card">
        <h3>📊 {t('typeAnalyticsTitle')}</h3>
        <p>{t('typeAnalyticsDesc')}</p>
        <p><strong>{t('examples')}:</strong> {t('typeAnalyticsExamples')}</p>
      </div>

      <div className="legal-card">
        <h3>🎯 {t('typeMarketingTitle')}</h3>
        <p>{t('typeMarketingDesc')}</p>
        <p><strong>{t('note')}:</strong> {t('typeMarketingNote')}</p>
      </div>

      <h2>3. {t('section3Title')}</h2>
      <table>
        <thead>
          <tr>
            <th>Cookie</th>
            <th>{t('purpose')}</th>
            <th>{t('duration')}</th>
            <th>{t('type')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cookie-consent</td>
            <td>{t('cookieConsentPurpose')}</td>
            <td>1 {t('year')}</td>
            <td>{t('essential')}</td>
          </tr>
          <tr>
            <td>NEXT_LOCALE</td>
            <td>{t('nextLocalePurpose')}</td>
            <td>1 {t('year')}</td>
            <td>{t('essential')}</td>
          </tr>
        </tbody>
      </table>

      <h2>4. {t('section4Title')}</h2>
      <p>{t('section4Content')}</p>

      <button
        onClick={openCookieSettings}
        style={{
          padding: '12px 28px',
          background: 'linear-gradient(135deg, #3DEEDB, #6E5DDD)',
          color: 'white',
          border: 'none',
          borderRadius: '999px',
          fontSize: '0.9rem',
          fontWeight: '500',
          cursor: 'pointer',
          marginTop: '1rem',
          fontFamily: 'inherit',
        }}
      >
        🍪 {t('manageCookies')}
      </button>

      <h2>5. {t('section5Title')}</h2>
      <p>{t('section5Content')}</p>
      <ul>
        <li>Chrome: chrome://settings/cookies</li>
        <li>Firefox: about:preferences#privacy</li>
        <li>Safari: Preferences → Privacy</li>
        <li>Edge: edge://settings/privacy</li>
      </ul>
    </article>
  )
}
