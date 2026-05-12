import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="legal-layout">
        <div className="legal-container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
