'use client'
import { useEffect, useRef } from 'react'

export default function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMouse = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      container.style.setProperty('--mx', `${x}%`)
      container.style.setProperty('--my', `${y}%`)
    }

    container.addEventListener('mousemove', handleMouse)
    return () => container.removeEventListener('mousemove', handleMouse)
  }, [])

  const cols = 28
  const rows = 14
  const tiles = Array.from({ length: cols * rows })

  return (
    <div
      ref={containerRef}
      className="tile-grid-container absolute inset-0 overflow-hidden pointer-events-auto z-0"
      style={{
        perspective: '1200px',
        maskImage: 'linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.4) 72%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.4) 72%, transparent 100%)',
      }}
    >
      <div
        className="grid gap-[2px] w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          transform: 'rotateX(5deg)',
          transformOrigin: 'top center',
        }}
      >
        {tiles.map((_, i) => {
          const col = i % cols
          const row = Math.floor(i / cols)
          const delay = ((col + row) * 0.09) % 5
          return (
            <div
              key={i}
              className="tile"
              style={{ animationDelay: `${delay}s` }}
            />
          )
        })}
      </div>
    </div>
  )
}
