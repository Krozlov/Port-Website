import { useEffect, useState } from 'react'
import TrafficLights from './TrafficLights'
import { NAME } from '../data'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(NAME.slice(0, i))
      if (i >= NAME.length) clearInterval(id)
    }, 55)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="pt-[88px] pb-16 max-md:pt-12 max-md:pb-10">
      <p className="font-mono text-[12.5px] text-violet">
        <span className="text-dim">// </span>software engineer, full stack
      </p>

      <div className="mt-3.5 bg-panel border border-border rounded-[10px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2.5 px-4 py-[11px] border-b border-border bg-elevated">
          <TrafficLights />
          <span className="font-mono text-xs text-dim ml-1.5">stefan@devbox: ~</span>
        </div>
        <div className="px-7 pt-[26px] pb-[30px] font-mono text-[14.5px]">
          <div className="flex gap-2.5">
            <span className="text-green">$</span>
            <span className="text-bright">whoami</span>
          </div>
          <div className="text-[26px] my-1.5 min-h-[1.3em]">
            {typed}
            <span className="inline-block w-2 h-4 bg-green ml-0.5 animate-blink align-[-2px]" />
          </div>
          <div className="flex gap-2.5 mb-[18px]">
            <span className="text-green">$</span>
            <span className="text-bright">neofetch</span>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-x-9 items-start max-md:grid-cols-1">
            <pre className="font-mono text-[11px] leading-[1.35] text-violet opacity-90 max-md:hidden">{`   ┌──────────┐
   │ ▓▓▓▓▓▓▓▓ │
   │ ▓ ┌──┐ ▓ │
   │ ▓ │><│ ▓ │
   │ ▓ └──┘ ▓ │
   │ ▓▓▓▓▓▓▓▓ │
   └──────────┘
    STEFAN.SYS`}</pre>
            <div className="text-[13.5px]">
              <Row k="role" v="Software Engineer, Full Stack" />
              <Row k="stack" v="TypeScript · Next.js · Node.js · PostgreSQL · Python" />
              <Row k="education" v="RMIT & Binus University, B.Sc. Computer Science" />
              <Row k="location" v="Jakarta, Indonesia" />
              <Row k="status" v="open to opportunities" valueClass="text-green" />
              <div className="flex gap-1.5 mt-2.5">
                <span className="w-4 h-4 rounded-[3px] bg-violet" />
                <span className="w-4 h-4 rounded-[3px] bg-blue" />
                <span className="w-4 h-4 rounded-[3px] bg-green" />
                <span className="w-4 h-4 rounded-[3px] bg-amber" />
                <span className="w-4 h-4 rounded-[3px] bg-red" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6 flex-wrap">
        <a
          href="#projects"
          className="font-mono text-[13px] px-[18px] py-2.5 rounded-md bg-violet border border-violet text-bg font-bold inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(139,124,246,0.5)]"
        >
          ./view-projects
        </a>
        <a
          href="#contact"
          className="font-mono text-[13px] px-[18px] py-2.5 rounded-md border border-border text-text inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:border-dim"
        >
          open contact.sh
        </a>
        <a
          href="#"
          className="font-mono text-[13px] px-[18px] py-2.5 rounded-md border border-border text-text inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:border-dim"
        >
          ↓ resume.pdf
        </a>
      </div>
    </section>
  )
}

function Row({ k, v, valueClass = 'text-text' }: { k: string; v: string; valueClass?: string }) {
  return (
    <div className="flex gap-2.5 py-[2.5px]">
      <span className="text-amber min-w-[96px] shrink-0">{k}</span>
      <span className={valueClass}>{v}</span>
    </div>
  )
}
