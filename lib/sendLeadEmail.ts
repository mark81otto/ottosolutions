import { MailtrapClient } from 'mailtrap'

const LEAD_EMAIL  = process.env.LEAD_EMAIL      || 'markotto1509@gmail.com'
const FROM_EMAIL  = process.env.LEAD_FROM_EMAIL  || 'sol@otto-solutions.com'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface LeadData {
  email: string
  name?: string
  projectInfo?: string
  messages: Message[]
  locale?: string
}

export async function sendLeadEmail(data: LeadData): Promise<{
  success: boolean
  error?: string
}> {
  const TOKEN = process.env.MAILTRAP_TOKEN
  if (!TOKEN) {
    console.error('MAILTRAP_TOKEN not set in environment')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const { email, name, projectInfo, messages, locale = 'de' } = data

    const client = new MailtrapClient({ token: TOKEN })

    const conversationHTML = messages.map((msg) => {
      const isUser = msg.role === 'user'
      return `
        <div style="margin-bottom: 12px; padding: 12px 16px; border-radius: 12px; ${
          isUser
            ? 'background: linear-gradient(135deg, #3DEEDB, #6E5DDD); color: white; margin-left: 40px;'
            : 'background: #f5f5f7; color: #0a0a0f; margin-right: 40px;'
        }">
          <div style="font-size: 11px; font-weight: 600; opacity: 0.7; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em;">
            ${isUser ? '👤 User' : '🌞 Sol'}
          </div>
          <div style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(msg.content)}</div>
        </div>
      `
    }).join('')

    const timestamp = new Date().toLocaleString('de-DE', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Europe/Madrid',
    })

    const html = buildEmailHTML({
      name: name || 'Anonymer Lead',
      email,
      projectInfo,
      locale,
      timestamp,
      conversationHTML,
    })

    const text = buildPlainText({ name, email, projectInfo, messages, timestamp })

    const response = await client.send({
      from:    { email: FROM_EMAIL, name: 'Sol AI · Otto Solutions' },
      to:      [{ email: LEAD_EMAIL }],
      subject: `🌞 Neuer Lead: ${name || 'Anonym'} — ${email}`,
      html,
      text,
      category: 'Lead Notification',
      custom_variables: {
        lead_email: email,
        lead_name:  name || 'unknown',
        locale,
      },
      headers: {
        'Reply-To': email,
      },
    })

    console.log('✓ Lead email sent via Mailtrap:', response)
    return { success: true }

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('sendLeadEmail error:', message)
    return { success: false, error: message }
  }
}

// ─── HTML builder ────────────────────────────────────────────────────────────

function buildEmailHTML({ name, email, projectInfo, locale, timestamp, conversationHTML }: {
  name: string
  email: string
  projectInfo?: string
  locale: string
  timestamp: string
  conversationHTML: string
}): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neuer Lead von Sol</title>
</head>
<body style="margin: 0; padding: 0; background: #f9f8f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 640px; margin: 40px auto; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #3DEEDB 0%, #3DC9F0 50%, #6E5DDD 100%); padding: 40px 32px; text-align: center;">
      <div style="font-size: 36px; margin-bottom: 8px;">🌞</div>
      <h1 style="margin: 0; color: white; font-family: Georgia, serif; font-size: 28px; font-weight: 500; letter-spacing: -0.5px;">
        Neuer Lead von Sol
      </h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">${timestamp}</p>
    </div>

    <!-- Lead data -->
    <div style="padding: 32px;">
      <div style="background: linear-gradient(135deg, rgba(61,238,219,0.05), rgba(110,93,221,0.05)); border: 1px solid rgba(110,93,221,0.15); border-radius: 16px; padding: 24px; margin-bottom: 32px;">
        <h2 style="margin: 0 0 16px; font-family: Georgia, serif; font-size: 20px; font-weight: 500; color: #0a0a0f; letter-spacing: -0.3px;">
          📋 Lead-Daten
        </h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #888896; font-size: 13px; width: 110px; vertical-align: top;">Name:</td>
            <td style="padding: 8px 0; color: #0a0a0f; font-weight: 600; font-size: 15px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888896; font-size: 13px; vertical-align: top;">Email:</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${escapeHtml(email)}" style="color: #6E5DDD; font-weight: 600; font-size: 15px; text-decoration: none;">${escapeHtml(email)}</a>
            </td>
          </tr>
          ${projectInfo ? `
          <tr>
            <td style="padding: 8px 0; color: #888896; font-size: 13px; vertical-align: top;">Projekt:</td>
            <td style="padding: 8px 0; color: #0a0a0f; font-size: 15px; line-height: 1.6;">${escapeHtml(projectInfo)}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #888896; font-size: 13px; vertical-align: top;">Sprache:</td>
            <td style="padding: 8px 0; color: #0a0a0f; font-size: 15px;">${locale.toUpperCase()}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06);">
          <a href="mailto:${escapeHtml(email)}?subject=Re%3A%20Anfrage%20%C3%BCber%20Otto%20Solutions"
             style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #3DEEDB, #6E5DDD); color: white; text-decoration: none; border-radius: 999px; font-size: 14px; font-weight: 500;">
            📧 Lead antworten
          </a>
        </div>
      </div>

      <!-- Conversation -->
      <h2 style="margin: 0 0 16px; font-family: Georgia, serif; font-size: 20px; font-weight: 500; color: #0a0a0f; letter-spacing: -0.3px;">
        💬 Konversation
      </h2>
      <div style="background: #fafafa; border-radius: 16px; padding: 20px;">
        ${conversationHTML}
      </div>

      <!-- Footer -->
      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.06); text-align: center;">
        <p style="margin: 0; color: #888896; font-size: 12px; line-height: 1.6;">
          Diese Email wurde automatisch von Sol (AI Assistant) generiert.<br>
          Otto Solutions SL · Valencia, España<br>
          <a href="https://otto-solutions.com" style="color: #6E5DDD; text-decoration: none;">otto-solutions.com</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>`
}

// ─── Plain-text fallback ──────────────────────────────────────────────────────

function buildPlainText({ name, email, projectInfo, messages, timestamp }: {
  name?: string
  email: string
  projectInfo?: string
  messages: Message[]
  timestamp: string
}): string {
  let text = `🌞 NEUER LEAD VON SOL\n${timestamp}\n\n`
  text += `━━━━━━━━━━━━━━━━━━━━━━\nLEAD-DATEN\n━━━━━━━━━━━━━━━━━━━━━━\n\n`
  if (name) text += `Name: ${name}\n`
  text += `Email: ${email}\n`
  if (projectInfo) text += `Projekt: ${projectInfo}\n`
  text += `\n━━━━━━━━━━━━━━━━━━━━━━\nKONVERSATION\n━━━━━━━━━━━━━━━━━━━━━━\n\n`
  messages.forEach((msg) => {
    text += `${msg.role === 'user' ? '👤 User' : '🌞 Sol'}:\n${msg.content}\n\n`
  })
  text += `━━━━━━━━━━━━━━━━━━━━━━\nOtto Solutions SL · Valencia, España\nhttps://otto-solutions.com\n`
  return text
}

// ─── Utility ─────────────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ─── Extraction helpers (used by chat API) ────────────────────────────────────

export function extractEmail(text: string): string | null {
  const match = text.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)
  return match ? match[0] : null
}

export function extractName(messages: Message[]): string | null {
  const userMessages = messages
    .filter(m => m.role === 'user')
    .slice(-5)
    .map(m => m.content)

  for (const msg of userMessages) {
    const patterns = [
      /(?:mein name ist|ich hei[ßs]e|ich bin)\s+([A-ZÄÖÜ][a-zäöüß]+(?:\s+[A-ZÄÖÜ][a-zäöüß]+)?)/i,
      /(?:my name is|i'm|i am)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
      /(?:me llamo|soy)\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)/i,
    ]
    for (const pattern of patterns) {
      const match = msg.match(pattern)
      if (match) return match[1].trim()
    }
    const trimmed = msg.trim()
    if (
      trimmed.length < 30 &&
      /^[A-ZÄÖÜÁÉÍÓÚÑ][a-zäöüßáéíóúñ]+(\s+[A-ZÄÖÜÁÉÍÓÚÑ][a-zäöüßáéíóúñ]+)?$/.test(trimmed)
    ) {
      return trimmed
    }
  }
  return null
}

export function extractProjectInfo(messages: Message[]): string | null {
  const keywords = /(?:app|website|web|chatbot|ai|projekt|brauche|m[öo]chte|will|need|want|necesito|quiero)/i
  const relevant = messages
    .filter(m => m.role === 'user' && keywords.test(m.content))
    .map(m => m.content)
  if (relevant.length === 0) return null
  return relevant.join(' · ').slice(0, 300)
}
