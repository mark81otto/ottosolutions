import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Otto Solutions SL — Apps · Websites · Dynamics 365',
  description:
    'Wir entwickeln iOS & Android Apps, performante Websites und Microsoft Dynamics 365 Lösungen — aus Valencia, Spanien.',
  keywords: ['iOS App Entwicklung', 'Android App', 'Next.js Website', 'Dynamics 365', 'Valencia', 'Spanien'],
  openGraph: {
    title: 'Otto Solutions SL',
    description: 'Digitale Produkte die wirklich funktionieren.',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
