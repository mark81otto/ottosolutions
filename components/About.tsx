'use client'
import { useTranslations } from 'next-intl'

const chips = ['Swift', 'Kotlin', 'Next.js', 'React Native', 'React', 'TypeScript', 'Tailwind', 'OpenAI', 'Anthropic', 'LangChain']

export default function About() {
  const t = useTranslations('About')

  const facts: [string, string][] = [
    [t('factForm'),  t('factFormVal')],
    [t('factLoc'),   t('factLocVal')],
    [t('factLang'),  t('factLangVal')],
    [t('factFocus'), t('factFocusVal')],
  ]

  return (
    <section id="about" className="py-20 md:py-40 px-5 md:px-10 bg-[#f9f8f6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
        <div>
          <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">{t('tag')}</span>
          <h2
            className="font-serif font-normal text-ink mb-8"
            style={{ fontSize: 'clamp(2rem, 7vw, 5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
          >
            {t('h2Line1')}<br />{t('h2Line2')}
          </h2>
          <p className="text-[0.95rem] font-light text-mid leading-[1.85] mb-4">{t('p1')}</p>
          <p className="text-[0.95rem] font-light text-mid leading-[1.85]">{t('p2')}</p>

          <div className="mt-12 border-t border-black/[0.07]">
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between py-[1.1rem] border-b border-black/[0.07] text-[0.875rem]">
                <span className="text-mid font-light">{k}</span>
                <span className="text-ink font-normal">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg,rgba(61,238,219,0.06) 0%,rgba(110,93,221,0.04) 100%)',
              border: '1px solid rgba(110,93,221,0.15)',
            }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                top: '-60px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(61,238,219,0.18),transparent 70%)',
              }}
            />

            <div className="w-[54px] h-[54px] rounded-full bg-ink flex items-center justify-center font-serif italic text-white mb-6">
              OS
            </div>

            <div className="font-serif text-[1.2rem] font-normal tracking-[-0.4px] text-ink mb-0.5">Otto Solutions SL</div>
            <div className="text-[0.75rem] text-mid mb-6">{t('cardRole')}</div>
            <p className="text-[0.875rem] font-light text-mid leading-[1.8] mb-8">{t('cardBio')}</p>
            <div className="flex flex-wrap gap-1.5">
              {chips.map((c) => (
                <span key={c} className="text-[0.68rem] text-ink bg-white border border-black/[0.07] rounded-full px-3.5 py-1.5">
                  {c}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-8 pt-8 border-t border-black/[0.07]">
              <div className="w-[7px] h-[7px] rounded-full bg-[#30d158] flex-shrink-0" />
              <span className="text-[0.78rem] text-mid">{t('available')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
