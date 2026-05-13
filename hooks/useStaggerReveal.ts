'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useStaggerReveal(
  selector: string,
  options?: { stagger?: number; duration?: number; y?: number },
) {
  useEffect(() => {
    const { stagger = 0.1, duration = 0.9, y = 50 } = options ?? {}
    const cards = gsap.utils.toArray<HTMLElement>(selector)
    if (!cards.length) return

    const triggers: ReturnType<typeof ScrollTrigger.create>[] = []

    cards.forEach((card, i) => {
      gsap.set(card, { opacity: 0, y })
      const t = ScrollTrigger.create({
        trigger: card,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration,
            delay: i * stagger,
            ease: 'power3.out',
          })
        },
      })
      triggers.push(t)
    })

    return () => triggers.forEach((t) => t.kill())
  }, [selector]) // eslint-disable-line react-hooks/exhaustive-deps
}
