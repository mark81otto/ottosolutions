import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import Marquee    from '@/components/Marquee'
import StickyText from '@/components/StickyText'
import Services   from '@/components/Services'
import GlassStats from '@/components/GlassStats'
import Interlude  from '@/components/Interlude'
import Portfolio  from '@/components/Portfolio'
import About      from '@/components/About'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <StickyText />
        <Services />
        <GlassStats />
        <Interlude />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
