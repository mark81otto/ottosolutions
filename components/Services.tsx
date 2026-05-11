'use client'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Services')

  const services = [
    {
      num: '01', icon: '📱',
      title: t('s1Title'), desc: t('s1Desc'),
      chips: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    },
    {
      num: '02', icon: '🌐',
      title: t('s2Title'), desc: t('s2Desc'),
      chips: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Vercel'],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-40 px-5 md:px-10 bg-white">
      <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">{t('tag')}</span>
      <h2
        className="font-serif font-normal text-ink mb-6"
        style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
      >
        {t('h2Line1')}<br />{t('h2Line2')}
      </h2>
      <p className="text-[1rem] font-light text-mid max-w-[460px] leading-[1.8] mb-12 md:mb-20">{t('lead')}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-black/[0.07] rounded-[20px] overflow-hidden">
        {services.map((s, i) => (
          <div
            key={s.num}
            className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/[0.07] group hover:bg-[#f9f8f6] transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(135deg,rgba(110,93,221,0.05) 0%,rgba(61,201,240,0.04) 100%)' }} />
            <div className="relative z-10">
              <div className="text-[0.68rem] text-mid mb-8 font-light tracking-[0.05em]">{s.num} &mdash;</div>
              <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.07] flex items-center justify-center text-[1.35rem] mb-6 shadow-sm">
                {s.icon}
              </div>
              <h3 className="font-serif font-normal text-ink mb-4"
                style={{ fontSize: '1.6rem', letterSpacing: '-0.8px', lineHeight: 1.15 }}>
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
        <div className="p-8 md:p-12 bg-[#f9f8f6] flex flex-col">
          <div className="text-[0.68rem] text-mid mb-8 font-light tracking-[0.05em]">+ &mdash;</div>
          <div className="mt-auto">
            <p className="font-serif font-normal text-ink mb-6"
              style={{ fontSize: '1.4rem', letterSpacing: '-0.5px', lineHeight: 1.3 }}>
              {t('ctaTitle')}
            </p>
            <a
              href="#contact"
              className="inline-block text-[0.875rem] font-medium px-7 py-3.5 bg-ink text-white rounded-full no-underline hover:opacity-85 transition-opacity min-h-[44px] flex items-center"
            >
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
