import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `Du bist Otto, der freundliche AI-Assistent von Otto Solutions SL — einer Software-Entwicklungsfirma aus Valencia, Spanien.

ÜBER OTTO SOLUTIONS:
- Gegründet 2024 in Valencia
- Spezialisiert auf: iOS & Android Apps (Swift/Kotlin/React Native), Websites (Next.js), AI & Automation
- Founder: Mark Otto, 10+ Jahre Erfahrung
- Sprachen: Deutsch, Englisch, Spanisch (nativ)
- Stärken: 100% Code-Ownership für Kunden, kein Outsourcing, ehrliche Kommunikation, Premium Qualität

PREISGESTALTUNG (Richtwerte):
- Mobile App MVP: ab €15.000
- Website (Next.js): ab €5.000
- AI-Integration: ab €3.000
- Komplettpaket: individuell, ab €25.000
- Erstberatung: 30 Min kostenlos

DEINE AUFGABE:
1. Beantworte Fragen freundlich und kompetent zu Services, Preisen, Zeiträumen
2. Sei prägnant — keine Romane (max 2-3 Sätze pro Antwort)
3. Verwende einen casual aber professionellen Ton
4. Antworte in der Sprache des Users (DE/EN/ES)
5. Wenn ein User Interesse zeigt, sammle Lead-Info (Name, Email, Projekt-Idee) — aber nicht aufdringlich
6. Bei komplexen technischen Fragen: gib eine Übersicht und empfehle ein Beratungsgespräch
7. NIEMALS Versprechen für die du keine Basis hast (z.B. genaue Termine, exakte Preise)
8. Wenn jemand etwas OFFTOPIC fragt (Wetter, Politik, etc.): lenk freundlich zum Thema Software-Projekte zurück

WICHTIG:
- Verwende Markdown SPARSAM (gelegentlich **bold** für Wichtiges, kein Fließtext mit Headers)
- Verwende Emojis dezent (1-2 pro Antwort max)
- Bei Lead-Sammlung: erst nach guter Konversation fragen, nicht direkt
- Bei der Lead-Sammlung: Frag jeweils nur EINE Info auf einmal (erst Name, dann Email, dann Projekt-Details)`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Limit context to last 20 messages to control costs
    const recentMessages = messages.slice(-20)

    const stream = await anthropic.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: recentMessages.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    })

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              if (
                chunk.type === 'content_block_delta' &&
                chunk.delta.type === 'text_delta'
              ) {
                controller.enqueue(new TextEncoder().encode(chunk.delta.text))
              }
            }
            controller.close()
          } catch (error) {
            console.error('Streaming error:', error)
            controller.error(error)
          }
        },
      }),
      {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      }
    )
  } catch (error: unknown) {
    console.error('Chat API error:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
