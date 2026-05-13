'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeadlineReveal(selector: string) {
  useEffect(() => {
    const headlines = gsap.utils.toArray<HTMLElement>(selector)
    if (!headlines.length) return

    const triggers: ReturnType<typeof ScrollTrigger.create>[] = []

    headlines.forEach((headline) => {
      gsap.set(headline, { opacity: 0, y: 40 })
      const t = ScrollTrigger.create({
        trigger: headline,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          gsap.to(headline, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
          })
        },
      })
      triggers.push(t)
    })

    return () => triggers.forEach((t) => t.kill())
  }, [selector]) // eslint-disable-line react-hooks/exhaustive-deps
}
