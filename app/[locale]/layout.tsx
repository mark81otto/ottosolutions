import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import CookieBanner from '@/components/CookieBanner'
import '../globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })
const inter    = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<string, string> = {
    de: 'Otto Solutions SL — Apps & Websites aus Valencia',
    en: 'Otto Solutions SL — Apps & Websites from Valencia',
    es: 'Otto Solutions SL — Apps y Webs desde Valencia',
  }
  const descs: Record<string, string> = {
    de: 'Wir entwickeln native iOS & Android Apps und performante Websites mit Next.js — aus Valencia, Spanien.',
    en: 'We build native iOS & Android apps and high-performance websites with Next.js — from Valencia, Spain.',
    es: 'Desarrollamos apps nativas iOS y Android y webs de alto rendimiento con Next.js — desde Valencia, España.',
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
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
