'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

function TypingDots() {
  return (
    <span className="typing-dots">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </span>
  )
}

export default function AIChatbot() {
  const t = useTranslations('Chatbot')

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: t('welcome') },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || isLoading) return

    setInput('')
    setIsLoading(true)

    const newMessages: Message[] = [...messages, { role: 'user', content }]
    setMessages([...newMessages, { role: 'assistant', content: '' }])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok || !response.body) throw new Error('API error')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: accumulated }
          return updated
        })
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = { role: 'assistant', content: t('errorMessage') }
        return updated
      })
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage()
  }

  const suggestions = [t('suggest1'), t('suggest2'), t('suggest3')]

  return (
    <div className="ai-chatbot">
      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-avatar">
          <div className="avatar-glow" />
          <div className="avatar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a8 8 0 018 8c0 6-8 12-8 12s-8-6-8-12a8 8 0 018-8z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
        </div>
        <div className="chatbot-info">
          <div className="chatbot-name">
            Otto
            <span className="chatbot-status">
              <span className="status-dot" />
              {t('online')}
            </span>
          </div>
          <div className="chatbot-role">{t('role')}</div>
        </div>
      </div>

      {/* Messages */}
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message message-${msg.role}`}>
            {msg.role === 'assistant' && (
              <div className="message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a8 8 0 018 8c0 6-8 12-8 12s-8-6-8-12a8 8 0 018-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
            <div className="message-bubble">
              {msg.content
                ? msg.content
                : isLoading && i === messages.length - 1
                ? <TypingDots />
                : null}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="chatbot-suggestions">
          {suggestions.map((s, i) => (
            <button
              key={i}
              className="suggestion-chip"
              onClick={() => sendMessage(s)}
              disabled={isLoading}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="chatbot-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('placeholder')}
          disabled={isLoading}
          className="chatbot-input"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="chatbot-send"
          aria-label="Send"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12L19 12M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>

      {/* Footer */}
      <div className="chatbot-footer">
        <span className="powered-by">
          <span className="dot" />
          {t('poweredBy')}
        </span>
      </div>
    </div>
  )
}
