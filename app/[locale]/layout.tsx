import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })
const inter    = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    de: 'Otto Solutions SL — Apps · Websites · Dynamics 365',
    en: 'Otto Solutions SL — Apps · Websites · Dynamics 365',
    es: 'Otto Solutions SL — Apps · Webs · Dynamics 365',
  }
  const descs: Record<string, string> = {
    de: 'Wir entwickeln iOS & Android Apps, performante Websites und Microsoft Dynamics 365 Lösungen — aus Valencia, Spanien.',
    en: 'We build iOS & Android apps, high-performance websites and Microsoft Dynamics 365 solutions — from Valencia, Spain.',
    es: 'Desarrollamos apps iOS y Android, webs de alto rendimiento y soluciones Microsoft Dynamics 365 — desde Valencia, España.',
  }

  return {
    title: titles[locale] ?? titles.de,
    description: descs[locale] ?? descs.de,
    alternates: {
      canonical: `https://otto-solutions.com${locale === 'de' ? '' : `/${locale}`}`,
      languages: {
        de: 'https://otto-solutions.com',
        en: 'https://otto-solutions.com/en',
        es: 'https://otto-solutions.com/es',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as any)) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
