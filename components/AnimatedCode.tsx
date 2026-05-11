'use client'
import { useEffect, useState } from 'react'

type Block = {
  code: string
  filename: string
  style: React.CSSProperties
  fontSize: string
}

// All blocks stay in the TOP zone (< 30%) or BOTTOM zone (> 68%),
// leaving the vertical centre (30–68%) clear for the scrolling headline.
const BLOCKS: Block[] = [
  {
    filename: 'ContentView.swift',
    code: `struct ContentView: View {\n  @State var users = [User]()\n  var body: some View {\n    List(users) { user in\n      UserRow(user)\n    }\n  }\n}`,
    style: { top: '5%', left: '4%' },
    fontSize: '0.72rem',
  },
  {
    filename: 'api.ts',
    code: `export async function getData() {\n  const res = await fetch('/api/projects')\n  const data = await res.json()\n  return data.projects\n}`,
    style: { top: '6%', right: '5%' },
    fontSize: '0.76rem',
  },
  {
    filename: 'ProductCard.kt',
    code: `@Composable\nfun ProductCard(product: Product) {\n  Card(modifier = Modifier.padding(8.dp)) {\n    Text(product.name)\n    Text(product.price)\n  }\n}`,
    style: { bottom: '7%', left: '5%' },
    fontSize: '0.7rem',
  },
  {
    filename: 'Button.tsx',
    code: `export function Button({ label, onClick }) {\n  const [active, setActive] = useState(false)\n  return (\n    // render button element\n    // className="btn-primary"\n  )\n}`,
    style: { bottom: '6%', right: '4%' },
    fontSize: '0.74rem',
  },
]

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// Order matters: strings → comments → keywords → types.
// Later passes may touch span text, but for decorative code this is acceptable.
function highlightSyntax(raw: string) {
  const s = escapeHtml(raw)
  return s
    .replace(
      /(["'])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
      '<span style="color:#98c379">$1$2$3</span>',
    )
    .replace(
      /\/\/.*$/gm,
      '<span style="color:#5c6370;font-style:italic">$&</span>',
    )
    .replace(
      /\b(struct|func|export|const|let|var|return|if|else|async|await|fun|class|import|@State|@Composable|useState)\b/g,
      '<span style="color:#c678dd;font-weight:500">$1</span>',
    )
    .replace(
      /\b([A-Z][A-Za-z0-9]+)\b/g,
      '<span style="color:#56b6c2">$1</span>',
    )
    .replace(
      /\b(\d+(?:\.\d+)?)\b/g,
      '<span style="color:#d19a66">$1</span>',
    )
}

const DOT_COLORS = ['#ff5f57', '#ffbd2e', '#28ca42']

function TypewriterBlock({ code, filename, style, fontSize, delay }: Block & { delay: number }) {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    let interval: ReturnType<typeof setInterval>
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      interval = setInterval(() => {
        i++
        setText(code.substring(0, i))
        if (i >= code.length) {
          clearInterval(interval)
          timeout = setTimeout(() => { i = 0; setText(''); type() }, 3200)
        }
      }, 38)
    }

    timeout = setTimeout(type, delay)
    return () => { clearInterval(interval); clearTimeout(timeout) }
  }, [code, delay])

  return (
    <pre
      className="absolute font-mono pointer-events-none hidden md:block"
      style={{
        ...style,
        fontSize,
        maxWidth: 300,
        background: 'rgba(13, 17, 23, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(110, 93, 221, 0.22)',
        borderRadius: 10,
        padding: '10px 16px 12px',
        paddingTop: 34,
        color: '#abb2bf',
        whiteSpace: 'pre-wrap',
        boxShadow:
          '0 8px 32px rgba(110,93,221,0.15), 0 0 40px rgba(61,238,219,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)',
        lineHeight: 1.65,
        margin: 0,
        overflow: 'hidden',
      }}
    >
      {/* Traffic light dots */}
      <span
        style={{
          position: 'absolute',
          top: 10,
          left: 14,
          display: 'flex',
          gap: 6,
        }}
        aria-hidden
      >
        {DOT_COLORS.map((c) => (
          <span
            key={c}
            style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'inline-block' }}
          />
        ))}
      </span>
      {/* Filename */}
      <span
        style={{
          position: 'absolute',
          top: 11,
          right: 14,
          fontSize: '0.55rem',
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.04em',
        }}
      >
        {filename}
      </span>
      <code dangerouslySetInnerHTML={{ __html: highlightSyntax(text) }} />
      <span className="cursor-blink">▌</span>
    </pre>
  )
}

export default function AnimatedCode() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true)
    }
  }, [])

  if (!active) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {BLOCKS.map((block, i) => (
        <TypewriterBlock key={i} {...block} delay={i * 1800} />
      ))}
    </div>
  )
}
