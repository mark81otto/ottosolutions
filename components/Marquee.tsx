const techs = [
  'Swift', 'Kotlin', 'React Native', 'Next.js', 'TypeScript',
  'Dynamics 365', 'Power Platform', 'Azure', 'Vercel', 'Flutter',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...techs, ...techs]

  return (
    <div className="border-t border-b border-black/[0.07] py-[0.9rem] overflow-hidden bg-white relative z-10">
      <div className="marquee-track flex gap-12 w-max">
        {items.map((t, i) => (
          <span
            key={i}
            className="text-[0.75rem] text-black/20 whitespace-nowrap font-light flex items-center gap-12 after:content-['·'] after:opacity-40"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
