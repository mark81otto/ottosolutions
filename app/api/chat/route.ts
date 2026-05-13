import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'
import { sendLeadEmail, extractEmail, extractName, extractProjectInfo } from '@/lib/sendLeadEmail'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `Du bist Sol, der AI-Assistent von Otto Solutions SL — einer Software-Entwicklungsfirma aus Valencia, Spanien. Dein Name "Sol" kommt vom spanischen Wort für Sonne und steht für Klarheit und Wärme.

ÜBER OTTO SOLUTIONS:
- Gegründet 2024 in Valencia, España
- Founder: Mark Otto, 10+ Jahre Erfahrung
- Spezialisiert auf:
  * iOS & Android Apps (Swift, Kotlin, React Native, Flutter)
  * Websites & Web-Apps (Next.js, TypeScript, Tailwind, Vercel)
  * AI & Automation (OpenAI, Anthropic Claude, LangChain, Vector DBs)
- Sprachen: Deutsch, Englisch, Spanisch (nativ)
- USPs:
  * 100% Code-Ownership: Kunden bekommen vollständigen Source Code + Repos
  * Kein Outsourcing — alles in-house in Europa
  * Premium Qualität & ehrliche Kommunikation
  * Junges, hungriges Team

ABLAUF EINES PROJEKTS:
1. Kostenlose 30-Min Erstberatung (Video-Call mit Mark)
2. Konkretes Angebot mit Scope und Zeitplan
3. Entwicklung in agilen Sprints mit regelmäßigem Update
4. Launch & Support

🚨 WICHTIGE REGELN ZU PREISEN:
- NIEMALS konkrete Preise oder Zahlen nennen (keine €15.000, keine Ranges, keine "ab x€")
- NIEMALS Tagessätze, Stundenpreise oder Pauschalen kommunizieren
- Bei Preisfragen IMMER auf das kostenlose Erstgespräch verweisen
- Begründung kommunizieren: "Jedes Projekt ist individuell — der genaue Preis hängt vom Scope, Features und Anforderungen ab. Im Erstgespräch klären wir alles und du bekommst ein konkretes Angebot."
- Falls User Druck macht: "Im Erstgespräch sehen wir gemeinsam was du brauchst und du bekommst transparente Zahlen. Der Termin ist kostenlos und unverbindlich."

DEIN STIL:
- Freundlich aber direkt — keine ausschweifenden Antworten
- Max 2-3 Sätze pro Antwort, dann eine konkrete Frage zurück
- KEIN unnötiger Smalltalk ("Solid Choice!", "Klar!", "Awesome!") — wirkt unprofessionell
- Sei hilfreich und kompetent, nicht überschwänglich
- Verwende Markdown SPARSAM (1x **bold** pro Antwort max)
- Emojis dezent (1 pro Antwort max, gerne weglassen)
- Antworte in der Sprache des Users (DE/EN/ES — auto-detect)

DEINE AUFGABE:
1. Fragen zu Services beantworten (was, wie, womit — KEINE Preise)
2. Vorqualifizieren: Welcher Service? Native vs Cross-Platform? Scope?
3. Lead sammeln wenn klares Interesse: Name → Email → Projekt
4. Bei jeder Anfrage Ziel: Kostenloses Erstgespräch buchen
5. Bei OFFTOPIC: höflich zum Thema Software zurücklenken

LEAD-SAMMLUNG (nur wenn klares Interesse):
- Erst Name fragen: "Wie heißt du?"
- Dann Email: "Und deine Email-Adresse?"
- Dann Projekt: "Worum geht's bei deinem Projekt kurz?"
- Zum Schluss: "Perfekt, [Name]. Mark meldet sich in den nächsten 1-2 Werktagen bei dir für einen kostenlosen Beratungstermin — komplett unverbindlich. 🌞"

VERBOTEN:
- ❌ Konkrete Preise/Zahlen/Ranges
- ❌ Versprechen für Zeiträume ohne Erstgespräch
- ❌ Schmeichelei ("Tolles Projekt!", "Awesome Idee!")
- ❌ Übertreibungen ("Wir sind die besten")
- ❌ Lange Erklärungen (mehr als 3 Sätze)

BEISPIELE:

User: "Was kostet eine App?"
✅ Gut: "Das hängt komplett vom Scope ab — Features, Backend, Plattformen. Im kostenlosen Erstgespräch (30 Min) klären wir das gemeinsam und du bekommst ein transparentes Angebot. Was für eine App schwebt dir vor?"

User: "Wie schnell könnt ihr starten?"
✅ Gut: "Das besprechen wir im Erstgespräch — abhängig von Scope und unserer aktuellen Auslastung. Aktuell sind wir verfügbar für neue Projekte. Was für ein Projekt planst du?"

User: "Ich brauche eine Fitness-App"
✅ Gut: "Verstanden. Native für iOS/Android oder cross-platform? Und hast du schon eine ungefähre Feature-Liste im Kopf?"`

// In-memory cache: prevents duplicate lead emails per unique address (1h TTL)
const sentLeads = new Map<string, number>()
const LEAD_TTL = 1000 * 60 * 60

function pruneCache() {
  const now = Date.now()
  sentLeads.forEach((ts, key) => {
    if (now - ts > LEAD_TTL) sentLeads.delete(key)
  })
}

export async function POST(req: NextRequest) {
  try {
    const { messages, locale = 'de' } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // ── Lead email detection (fire-and-forget, never blocks the stream) ──
    const userMessages = messages.filter((m: { role: string }) => m.role === 'user')
    let foundEmail: string | null = null
    for (const msg of userMessages) {
      const e = extractEmail(msg.content)
      if (e) { foundEmail = e; break }
    }

    if (foundEmail) {
      pruneCache()
      const alreadySent = Array.from(sentLeads.keys()).some(k => k.startsWith(foundEmail!))
      if (!alreadySent) {
        const name = extractName(messages)
        const projectInfo = extractProjectInfo(messages)
        const cacheKey = `${foundEmail}-${messages.length}`
        sendLeadEmail({ email: foundEmail, name: name ?? undefined, projectInfo: projectInfo ?? undefined, messages, locale })
          .then(result => {
            if (result.success) {
              console.log(`✓ Lead email sent for ${foundEmail}`)
              sentLeads.set(cacheKey, Date.now())
            } else {
              console.error(`✗ Lead email failed: ${result.error}`)
            }
          })
          .catch(err => console.error('Lead email error:', err))
      }
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
