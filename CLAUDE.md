# Otto Solutions SL — Next.js Website

## Projekt-Übersicht
Corporate Website für Otto Solutions SL, eine spanische App- und Web-Entwicklungsfirma aus Valencia.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts**: Playfair Display (serif headlines) + Inter (body)

## Schnellstart
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build
```

## Deploy auf Vercel
```bash
npm i -g vercel
vercel             # folge den Schritten, wähle das Projekt-Root
```

## Struktur
```
otto-solutions/
├── app/
│   ├── layout.tsx        # Root layout, Fonts, Metadata
│   ├── page.tsx          # Haupt-Page, assembliert alle Sections
│   └── globals.css       # Custom Properties, Animationen, Tailwind
├── components/
│   ├── Nav.tsx           # Fixed Glassmorphism Navigation
│   ├── Hero.tsx          # Fullscreen Hero mit Blob + Scroll-Indicator
│   ├── Marquee.tsx       # Laufband mit Technologien
│   ├── StickyText.tsx    # Sticky scroll-parallax Text-Section
│   ├── Services.tsx      # 2x2 Service-Card Grid
│   ├── GlassStats.tsx    # Dunkle Section mit Glassmorphism Stats + Countern
│   ├── Interlude.tsx     # Fullscreen Gradient Break-Section
│   ├── Portfolio.tsx     # Portfolio Cards mit 3D Mouse-Tilt
│   ├── About.tsx         # Über uns + Glas-Profil-Card
│   ├── Contact.tsx       # Kontakt + Formular
│   └── Footer.tsx        # Footer
├── hooks/
│   └── useReveal.ts      # IntersectionObserver Hook für Scroll-Reveals
└── CLAUDE.md             # Diese Datei
```

## Häufige Aufgaben für Claude Code

### Farben / Branding anpassen
→ `tailwind.config.ts`: Farben `blue`, `ink`, `mid`, `cream`
→ `app/globals.css`: CSS Custom Properties

### Echte Projekte im Portfolio eintragen
→ `components/Portfolio.tsx`: Array `projects` bearbeiten

### Kontaktformular anschließen
→ `components/Contact.tsx` → form action
→ Neue Datei `app/api/contact/route.ts` erstellen:
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'otto@ottosolutions.es',
    to: 'hallo@ottosolutions.es',
    subject: `Neue Anfrage: ${body.service}`,
    text: JSON.stringify(body, null, 2),
  })
  return Response.json({ ok: true })
}
```

### Mehrsprachigkeit (i18n)
→ `next.config.js` → `i18n` config hinzufügen
→ Ordner `messages/de.json`, `messages/en.json`, `messages/es.json`
→ Package: `next-intl`

### Team-Fotos / echte Bilder
→ Bilder in `/public/` ablegen
→ `next/image` Component verwenden

### SEO
→ `app/layout.tsx` → `metadata` Objekt anpassen
→ Für dynamische Seiten: `generateMetadata()` verwenden

## Design-System
- **Headline-Font**: Playfair Display, `font-serif`, italic für Akzente
- **Body-Font**: Inter, `font-sans`, font-weight 300 (light) für Text
- **Primärfarbe**: `#0057ff` (Blau)
- **Text**: `#0a0a0f` (Ink)
- **Muted**: `#888896`
- **Hintergrund**: Weiß + `#f9f8f6` (Off-white) im Wechsel
- **Dunkle Sektion**: `#0a0a0f` / `#111122` mit Blur-Blobs

## Animationen
Alle Animationen sind in `app/globals.css` als `@keyframes` definiert.
IntersectionObserver-Reveals laufen über den `useReveal` Hook.
Scroll-Parallax im `StickyText` Component läuft über nativen `scroll` Event.
3D Card-Tilt im `Portfolio` Component läuft über `mousemove` Events.
