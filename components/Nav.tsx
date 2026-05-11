'use client'
import { useState } from 'react'

const langs = ['DE', 'EN', 'ES']

export default function Nav() {
  const [lang, setLang] = useState('DE')

  return (
    <nav className="fixed inset-x-0 top-0 z-[900] h-[58px] flex items-center justify-between px-10 glass border-b border-black/[0.07]">
      {/* Logo */}
      <a href="#" className="font-serif italic text-[1.05rem] tracking-[-0.2px] text-ink no-underline">
        Otto Solutions
      </a>

      {/* Links */}
      <div className="flex">
        {['Services', 'Portfolio', 'Über uns', 'Kontakt'].map((l, i) => {
          const hrefs = ['#services', '#portfolio', '#about', '#contact']
          return (
            <a
              key={l}
              href={hrefs[i]}
              className="text-[0.78rem] font-light text-mid no-underline px-[1.1rem] leading-[58px] hover:text-ink transition-colors"
            >
              {l}
            </a>
          )
        })}
      </div>

      {/* Right: lang + Cta */}
      <div className="flex items-center gap-2.5">
        <div className="flex gap-0.5">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`text-[0.7rem] font-sans px-[9px] py-1 rounded transition-all border-none cursor-pointer ${
                lang === l ? 'text-ink font-medium' : 'text-mid bg-transparent'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <a
          href="#contact"
          className="text-[0.78rem] font-medium px-[18px] py-2 bg-ink text-white rounded-full no-underline hover:opacity-80 transition-opacity"
        >
          Anfragen
        </a>
      </div>
    </nav>
  )
}
