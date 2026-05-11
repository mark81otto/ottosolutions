'use client'
import { useReveal } from '@/hooks/useReveal'

const services = [
  {
    num: '01',
    icon: '📱',
    title: 'iOS & Android Apps',
    desc: 'Native und cross-platform Mobile-Apps von der Idee bis zum Launch. UX/UI, Development und App Store Rollout aus einer Hand.',
    chips: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
  },
  {
    num: '02',
    icon: '🌐',
    title: 'Website-Entwicklung',
    desc: 'Performante Websites und Web-Apps mit Next.js — optimiert für Speed, SEO und Konversion. Mit Effekten die begeistern.',
    chips: ['Next.js', 'TypeScript', 'Vercel'],
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Microsoft Dynamics 365',
    desc: 'Implementierung, Customizing und tiefgehende Integration von Dynamics 365 — CRM, ERP und Power Platform.',
    chips: ['D365 CRM', 'Power Apps', 'Azure'],
  },
]

export default function Services() {
  const { ref, visible } = useReveal()

  return (
    <section id="services" className="py-40 px-10 bg-white">
      <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">Leistungen</span>
      <h2
        className="font-serif font-normal text-ink mb-6"
        style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
      >
        Was wir<br />für dich bauen.
      </h2>
      <p className="text-[1rem] font-light text-mid max-w-[460px] leading-[1.8] mb-20">
        Drei Kernkompetenzen. Ein Team. Kein Outsourcing.
      </p>

      {/* Grid */}
      <div
        ref={ref}
        className={`grid grid-cols-2 border border-black/[0.07] rounded-[20px] overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}
      >
        {services.map((s, i) => (
          <div
            key={s.num}
            className="p-12 border-r border-b border-black/[0.07] group hover:bg-[#f9f8f6] transition-colors relative overflow-hidden"
            style={{
              borderRight: i % 2 === 1 ? 'none' : undefined,
              borderBottom: i >= 2 ? 'none' : undefined,
            }}
          >
            {/* Blue hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,87,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-[0.68rem] text-mid mb-8 font-light tracking-[0.05em]">{s.num} &mdash;</div>
              <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.07] flex items-center justify-center text-[1.35rem] mb-6 shadow-sm">
                {s.icon}
              </div>
              <h3 className="font-serif font-normal text-ink mb-4" style={{ fontSize: '1.6rem', letterSpacing: '-0.8px', lineHeight: 1.15 }}>
                {s.title}
              </h3>
              <p className="text-[0.86rem] font-light text-mid leading-[1.8]">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-6">
                {s.chips.map((c) => (
                  <span key={c} className="text-[0.65rem] text-mid border border-black/[0.07] rounded-full px-3 py-1 font-light">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* CTA card */}
        <div className="p-12 bg-[#f9f8f6] flex flex-col">
          <div className="text-[0.68rem] text-mid mb-8 font-light tracking-[0.05em]">+ &mdash;</div>
          <div className="mt-auto">
            <p className="font-serif font-normal text-ink mb-6" style={{ fontSize: '1.4rem', letterSpacing: '-0.5px', lineHeight: 1.3 }}>
              Bereit für dein Projekt?
            </p>
            <a
              href="#contact"
              className="inline-block text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:opacity-85 transition-opacity"
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
