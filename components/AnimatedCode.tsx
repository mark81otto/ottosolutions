'use client'
import { useEffect, useState } from 'react'

type Block = {
  code: string
  style: React.CSSProperties
  fontSize: string
}

const BLOCKS: Block[] = [
  {
    code: `struct ContentView: View {\n  @State var users = [User]()\n  var body: some View {\n    List(users) { user in\n      UserRow(user)\n    }\n  }\n}`,
    style: { top: '8%', left: '4%' },
    fontSize: '0.72rem',
  },
  {
    code: `export async function getData() {\n  const res = await fetch('/api/projects')\n  const data = await res.json()\n  return data.projects\n}`,
    style: { top: '12%', right: '6%' },
    fontSize: '0.78rem',
  },
  {
    code: `@Composable\nfun ProductCard(product: Product) {\n  Card(modifier = Modifier.padding(8.dp)) {\n    Text(product.name, fontSize = 18.sp)\n    Text(product.price, fontSize = 14.sp)\n  }\n}`,
    style: { top: '52%', left: '3%' },
    fontSize: '0.7rem',
  },
  {
    code: `export function Button({ children, onClick }) {\n  return (\n    btn onClick={onClick}\n      className="bg-cyan-500\n        hover:scale-105"\n    {children}\n    /btn\n  )\n}`,
    style: { top: '45%', right: '4%' },
    fontSize: '0.75rem',
  },
  {
    code: `.hero {\n  background: linear-gradient(\n    135deg,\n    #3DEEDB,\n    #6E5DDD\n  );\n  min-height: 100vh;\n}`,
    style: { bottom: '14%', left: '28%' },
    fontSize: '0.73rem',
  },
]

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlightSyntax(raw: string) {
  const s = escapeHtml(raw)
  return s
    .replace(
      /\b(struct|func|export|const|let|var|return|if|else|async|await|fun|class|import|@State|@Composable)\b/g,
      '<span style="color:#6E5DDD;font-weight:500">$1</span>',
    )
    .replace(
      /(["'])((?:(?!\1)[^\\]|\\.)*)(\1)/g,
      '<span style="color:#3DC9F0">$1$2$3</span>',
    )
    .replace(/\/\/.*$/gm, '<span style="color:rgba(0,0,0,0.28)">$&</span>')
}

function TypewriterBlock({ code, style, fontSize, delay }: Block & { delay: number }) {
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
          timeout = setTimeout(() => {
            i = 0
            setText('')
            type()
          }, 3200)
        }
      }, 38)
    }

    timeout = setTimeout(type, delay)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [code, delay])

  return (
    <pre
      className="absolute font-mono pointer-events-none hidden md:block"
      style={{
        ...style,
        fontSize,
        maxWidth: 290,
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(110,93,221,0.1)',
        borderRadius: 8,
        padding: '10px 14px',
        color: 'rgba(0,0,0,0.58)',
        whiteSpace: 'pre-wrap',
        boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
        lineHeight: 1.6,
        margin: 0,
      }}
    >
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
        <TypewriterBlock key={i} {...block} delay={i * 1600} />
      ))}
    </div>
  )
}
