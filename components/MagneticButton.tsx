'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  strength?: number
  style?: React.CSSProperties
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  strength = 0.4,
  style,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return

    const isMobile = window.matchMedia('(hover: none)').matches
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(inner, { x: x * strength, y: y * strength, duration: 0.5, ease: 'power3.out' })
    }

    const handleMouseLeave = () => {
      gsap.to(inner, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    }

    wrap.addEventListener('mousemove', handleMouseMove)
    wrap.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      wrap.removeEventListener('mousemove', handleMouseMove)
      wrap.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return (
    <div ref={wrapRef} style={{ display: 'inline-block' }}>
      {href ? (
        <a
          ref={innerRef as React.Ref<HTMLAnchorElement>}
          href={href}
          className={className}
          onClick={onClick}
          style={{ display: 'inline-flex', ...style }}
        >
          {children}
        </a>
      ) : (
        <button
          ref={innerRef as React.Ref<HTMLButtonElement>}
          className={className}
          onClick={onClick}
          style={{ display: 'inline-flex', ...style }}
        >
          {children}
        </button>
      )}
    </div>
  )
}
