import { setRequestLocale } from 'next-intl/server'
import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import Marquee    from '@/components/Marquee'
import StickyText from '@/components/StickyText'
import Services   from '@/components/Services'
import Stats from '@/components/Stats'
import Interlude  from '@/components/Interlude'
import Portfolio  from '@/components/Portfolio'
import About      from '@/components/About'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default async function Home({
  params,
}: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <StickyText />
        <Services />
        <Stats />
        <Interlude />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
