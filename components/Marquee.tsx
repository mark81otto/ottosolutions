'use client'

export default function Marquee() {
  const items = [
    { text: 'Swift', italic: false },
    { text: 'SwiftUI', italic: true },
    { text: 'Kotlin', italic: false },
    { text: 'Next.js', italic: true },
    { text: 'TypeScript', italic: false },
    { text: 'Tailwind', italic: true },
    { text: 'Claude AI', italic: false },
    { text: 'GPT-4', italic: true },
    { text: 'LangChain', italic: false },
    { text: 'Vercel', italic: true },
  ]
  const doubled = [...items, ...items]

  return (
    <section className="marquee-section">
      <div className="marquee-track-wrap">
        <div className="marquee-content">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item-group">
              {item.italic ? <em>{item.text}</em> : item.text}
              <span className="marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
