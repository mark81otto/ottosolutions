import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Terms')

  return (
    <article>
      <h1>{t('title')}</h1>
      <p className="legal-updated">{t('updated')}: November 2025</p>

      <p>{t('intro')}</p>

      <h2>1. {t('section1Title')}</h2>
      <p>{t('section1Content')}</p>

      <h2>2. {t('section2Title')}</h2>
      <p>{t('section2Content')}</p>

      <h2>3. {t('section3Title')}</h2>
      <p>{t('section3Content')}</p>

      <h2>4. {t('section4Title')}</h2>
      <p>{t('section4Content')}</p>

      <h2>5. {t('section5Title')}</h2>
      <p>
        Otto Solutions SL<br />
        C/ San Vicente Mártir 71 10<br />
        46002 València, España<br />
        <a href="mailto:mark@otto-solutions.com">mark@otto-solutions.com</a>
      </p>
    </article>
  )
}
