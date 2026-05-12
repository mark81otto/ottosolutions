import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Privacy')

  return (
    <article>
      <h1>{t('title')}</h1>
      <p className="legal-updated">{t('updated')}: November 2025</p>

      <p>{t('intro')}</p>

      <h2>1. {t('section1Title')}</h2>
      <div className="legal-card">
        <p>
          <strong>Otto Solutions SL</strong><br />
          C/ San Vicente Mártir 71 10<br />
          46002 València, España<br />
          CIF: B19731256<br />
          {t('email')}:{' '}
          <a href="mailto:mark@otto-solutions.com">mark@otto-solutions.com</a>
        </p>
      </div>

      <h2>2. {t('section2Title')}</h2>
      <p>{t('section2Intro')}</p>

      <h3>{t('section2a')}</h3>
      <ul>
        <li>{t('section2aItem1')}</li>
        <li>{t('section2aItem2')}</li>
        <li>{t('section2aItem3')}</li>
      </ul>

      <h3>{t('section2b')}</h3>
      <ul>
        <li>{t('section2bItem1')}</li>
        <li>{t('section2bItem2')}</li>
        <li>{t('section2bItem3')}</li>
        <li>{t('section2bItem4')}</li>
      </ul>

      <h2>3. {t('section3Title')}</h2>
      <p>{t('section3Intro')}</p>

      <h3>{t('section3a')}</h3>
      <p>{t('section3aDesc')}</p>

      <h3>{t('section3b')}</h3>
      <p>{t('section3bDesc')}</p>

      <h3>{t('section3c')}</h3>
      <p>{t('section3cDesc')}</p>

      <h2>4. {t('section4Title')}</h2>
      <p>{t('section4Intro')}</p>
      <table>
        <thead>
          <tr>
            <th>{t('processor')}</th>
            <th>{t('purpose')}</th>
            <th>{t('location')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vercel Inc.</td>
            <td>Website Hosting</td>
            <td>USA (DPF certified)</td>
          </tr>
          <tr>
            <td>Anthropic PBC</td>
            <td>AI Chatbot (Claude)</td>
            <td>USA (DPF certified)</td>
          </tr>
          <tr>
            <td>Google LLC</td>
            <td>Google Fonts</td>
            <td>USA</td>
          </tr>
        </tbody>
      </table>

      <h2>5. {t('section5Title')}</h2>
      <p>{t('section5Intro')}</p>
      <ul>
        <li><strong>{t('right1')}:</strong> {t('right1Desc')}</li>
        <li><strong>{t('right2')}:</strong> {t('right2Desc')}</li>
        <li><strong>{t('right3')}:</strong> {t('right3Desc')}</li>
        <li><strong>{t('right4')}:</strong> {t('right4Desc')}</li>
        <li><strong>{t('right5')}:</strong> {t('right5Desc')}</li>
        <li><strong>{t('right6')}:</strong> {t('right6Desc')}</li>
      </ul>
      <p>
        {t('rightsContact')}{' '}
        <a href="mailto:mark@otto-solutions.com">mark@otto-solutions.com</a>
      </p>

      <h2>6. {t('section6Title')}</h2>
      <p>{t('section6Intro')}</p>
      <ul>
        <li>{t('storage1')}</li>
        <li>{t('storage2')}</li>
        <li>{t('storage3')}</li>
      </ul>

      <h2>7. {t('section7Title')}</h2>
      <p>{t('section7Intro')}</p>
      <p>
        {t('section7Cookies')}{' '}
        <a href="/legal/cookies">{t('cookiePolicy')}</a>
      </p>

      <h2>8. {t('section8Title')}</h2>
      <p>{t('section8Content')}</p>
      <p>
        <strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
        C/ Jorge Juan, 6 · 28001 Madrid<br />
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
      </p>

      <h2>9. {t('section9Title')}</h2>
      <p>{t('section9Content')}</p>
    </article>
  )
}
