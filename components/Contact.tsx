'use client'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('Contact')

  return (
    <section id="contact" className="py-40 px-10 bg-white">
      <div className="grid grid-cols-2 gap-32 items-start">
        <div>
          <span className="block text-[0.72rem] font-medium text-mid tracking-[0.08em] uppercase mb-5">{t('tag')}</span>
          <h2
            className="font-serif font-normal text-ink mb-6"
            style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', letterSpacing: '-2.5px', lineHeight: 1.02 }}
          >
            {t('h2Line1')}<br /><em className="text-mid">{t('h2Highlight')}</em>
          </h2>
          <p className="text-[0.95rem] font-light text-mid leading-[1.8] mb-12">{t('lead')}</p>

          <div className="flex flex-col gap-5">
            {[
              { ico: '📍', label: t('locLabel'),   val: t('locVal') },
              { ico: '✉️', label: t('mailLabel'),  val: 'hallo@ottosolutions.es' },
              { ico: '📞', label: t('phoneLabel'), val: '+34 000 000 000' },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-4">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#f9f8f6] border border-black/[0.07] flex items-center justify-center text-[0.95rem] flex-shrink-0">
                  {r.ico}
                </div>
                <div className="text-[0.85rem] text-mid">
                  <strong className="text-ink font-medium block text-[0.78rem] mb-0.5">{r.label}</strong>
                  {r.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text" placeholder={t('firstName')}
              className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(110,93,221,0.3)] focus:shadow-[0_0_0_4px_rgba(110,93,221,0.06)] focus:bg-white transition-all placeholder:text-mid"
            />
            <input
              type="text" placeholder={t('lastName')}
              className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(110,93,221,0.3)] focus:shadow-[0_0_0_4px_rgba(110,93,221,0.06)] focus:bg-white transition-all placeholder:text-mid"
            />
          </div>
          <input
            type="email" placeholder={t('email')}
            className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(110,93,221,0.3)] focus:shadow-[0_0_0_4px_rgba(110,93,221,0.06)] focus:bg-white transition-all placeholder:text-mid"
          />
          <select
            defaultValue=""
            className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-mid border border-transparent focus:border-[rgba(110,93,221,0.3)] focus:bg-white transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>{t('servicePlaceholder')}</option>
            <option value="ios">{t('service1')}</option>
            <option value="web">{t('service2')}</option>
            <option value="all">{t('service3')}</option>
            <option value="other">{t('service4')}</option>
          </select>
          <textarea
            placeholder={t('message')}
            rows={5}
            className="w-full font-sans font-light text-[0.875rem] px-4 py-3.5 rounded-xl outline-none bg-[#f9f8f6] text-ink border border-transparent focus:border-[rgba(110,93,221,0.3)] focus:shadow-[0_0_0_4px_rgba(110,93,221,0.06)] focus:bg-white transition-all placeholder:text-mid resize-none"
          />
          <button
            type="submit"
            className="font-sans font-medium text-[0.9rem] py-4 bg-ink text-white rounded-xl flex items-center justify-center gap-2 hover:opacity-88 hover:-translate-y-0.5 transition-all group"
          >
            {t('submit')}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}
