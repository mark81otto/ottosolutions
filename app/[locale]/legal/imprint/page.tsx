import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Imprint')

  return (
    <article>
      <h1>{t('title')}</h1>
      <p className="legal-updated">{t('updated')}: November 2025</p>

      <div className="legal-card">
        <h3>{t('companyTitle')}</h3>
        <p>
          <strong>Otto Solutions SL</strong><br />
          C/ San Vicente Mártir 71 10<br />
          46002 València<br />
          España
        </p>
        <p>
          <strong>CIF/NIF:</strong> B19731256<br />
          <strong>EUID:</strong> ES46030.000921221<br />
          <strong>{t('registered')}:</strong> Registro Mercantil de Valencia
        </p>
      </div>

      <h2>{t('representativesTitle')}</h2>
      <p>
        <strong>{t('administrator')}:</strong><br />
        Mark Otto<br />
        Renne Otto Charline
      </p>

      <h2>{t('contactTitle')}</h2>
      <p>
        <strong>{t('email')}:</strong>{' '}
        <a href="mailto:mark@otto-solutions.com">mark@otto-solutions.com</a><br />
        <strong>{t('website')}:</strong>{' '}
        <a href="https://otto-solutions.com">otto-solutions.com</a>
      </p>

      <h2>{t('activityTitle')}</h2>
      <p>{t('activityDesc')}</p>
      <p>
        <strong>{t('cnae')}:</strong> 62.01 – {t('cnaeDesc')}
      </p>

      <h2>{t('disclaimerTitle')}</h2>
      <p>{t('disclaimerContent')}</p>

      <h2>{t('copyrightTitle')}</h2>
      <p>{t('copyrightContent')}</p>

      <h2>{t('disputeTitle')}</h2>
      <p>
        {t('disputeContent')}<br />
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
    </article>
  )
}
