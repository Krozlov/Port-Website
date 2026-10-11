import { useEffect, useRef, useState } from 'react'
import TrafficLights from './TrafficLights'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { EMAIL, GITHUB, LINKEDIN } from '../data'

type LineType = 'out' | 'ok' | 'link' | 'echo'
type Line = { type: LineType; text: string }

const COMMANDS: Record<string, () => Line[] | null> = {
  help: () => [
    { type: 'out', text: 'Available commands:' },
    { type: 'out', text: '  email      show contact email' },
    { type: 'out', text: '  github     open GitHub profile' },
    { type: 'out', text: '  linkedin   open LinkedIn profile' },
    { type: 'out', text: '  resume     download resume' },
    { type: 'out', text: '  clear      clear the terminal' },
  ],
  email: () => [{ type: 'ok', text: EMAIL }],
  github: () => [{ type: 'link', text: GITHUB }],
  linkedin: () => [{ type: 'link', text: LINKEDIN }],
  resume: () => [{ type: 'ok', text: 'Downloading resume.pdf' }],
  whoami: () => [{ type: 'out', text: 'stefan, software engineer, probably debugging something right now' }],
  clear: () => null,
  'sudo make me a sandwich': () => [{ type: 'out', text: 'Nice try. Permission denied.' }],
}

export default function Contact() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'out', text: 'Welcome. This terminal accepts a few real commands, try one.' },
  ])
  const [value, setValue] = useState('')
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail
      if (detail) run(detail)
    }
    window.addEventListener('contact-run-command', handler)
    return () => window.removeEventListener('contact-run-command', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    setLines((prev) => {
      const next: Line[] = [...prev, { type: 'echo', text: '$ ' + raw }]
      if (cmd === 'clear') return [{ type: 'out', text: 'Welcome. This terminal accepts a few real commands, try one.' }]
      const handler = COMMANDS[cmd]
      if (handler) {
        const out = handler()
        if (out) next.push(...out)
      } else {
        next.push({ type: 'out', text: `command not found: ${raw}, type "help"` })
      }
      return next
    })
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    })
  }

  const colorFor = (t: LineType) => {
    if (t === 'ok') return 'text-green'
    if (t === 'link') return 'text-blue'
    if (t === 'echo') return 'text-text'
    return 'text-dim'
  }

  return (
    <section id="contact" className="py-24 border-t border-border max-md:py-16">
      <SectionHead
        index="05 · contact"
        title="contact.sh"
        subtitle={'A working shell. Type "help" to see what it can do, or just click a command below.'}
      />
      <Reveal>
        <div className="bg-panel border border-border rounded-[10px] overflow-hidden">
          <div className="flex items-center gap-2.5 px-4 py-[11px] border-b border-border bg-elevated">
            <TrafficLights />
            <span className="font-mono text-xs text-dim ml-1.5">stefan@devbox: ~/contact</span>
          </div>
          <div ref={bodyRef} className="px-6 py-[22px] font-mono text-sm h-[280px] overflow-y-auto">
            {lines.map((l, i) => (
              <div key={i} className={`mb-1.5 break-words ${colorFor(l.type)}`}>
                {l.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center border-t border-border px-6 py-3">
            <span className="text-green font-mono text-sm">$</span>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  run(value)
                  setValue('')
                }
              }}
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="type a command…"
              aria-label="Terminal command input"
              className="flex-1 bg-transparent outline-none text-bright font-mono text-sm"
            />
          </div>
        </div>
        <div className="flex gap-2.5 flex-wrap mt-4">
          {['email', 'github', 'linkedin', 'resume', 'help'].map((c) => (
            <button
              key={c}
              onClick={() => run(c)}
              className="font-mono text-xs text-dim border border-border px-2.5 py-[5px] rounded-md hover:border-violet hover:text-text transition-colors"
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
