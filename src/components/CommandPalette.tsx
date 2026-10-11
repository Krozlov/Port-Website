import { useEffect, useMemo, useState } from 'react'

type Item = { group: 'nav' | 'cmd'; label: string; action: () => void }

type Props = {
  open: boolean
  onClose: () => void
}

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
const runContactCommand = (cmd: string) => window.dispatchEvent(new CustomEvent('contact-run-command', { detail: cmd }))

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)

  const items: Item[] = useMemo(
    () => [
      { group: 'nav', label: 'Jump to About', action: () => scrollToId('about') },
      { group: 'nav', label: 'Jump to Skills', action: () => scrollToId('skills') },
      { group: 'nav', label: 'Jump to Experience', action: () => scrollToId('experience') },
      { group: 'nav', label: 'Jump to Projects', action: () => scrollToId('projects') },
      { group: 'nav', label: 'Jump to Contact', action: () => scrollToId('contact') },
      {
        group: 'cmd',
        label: 'Copy email address',
        action: () => {
          runContactCommand('email')
          scrollToId('contact')
        },
      },
      {
        group: 'cmd',
        label: 'Open GitHub profile',
        action: () => {
          runContactCommand('github')
          scrollToId('contact')
        },
      },
      {
        group: 'cmd',
        label: 'Open LinkedIn profile',
        action: () => {
          runContactCommand('linkedin')
          scrollToId('contact')
        },
      },
      {
        group: 'cmd',
        label: 'Download resume',
        action: () => {
          runContactCommand('resume')
          scrollToId('contact')
        },
      },
    ],
    [],
  )

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase().trim()))

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
    }
  }, [open])

  useEffect(() => {
    setSelected(0)
  }, [query])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((s) => Math.min(s + 1, filtered.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((s) => Math.max(s - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const item = filtered[selected]
        if (item) {
          onClose()
          item.action()
        }
      } else if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, selected, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[12vh] z-[1000]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-[560px] bg-panel border border-border rounded-[10px] shadow-2xl overflow-hidden mx-4">
        <div className="flex items-center gap-2.5 px-[18px] py-3.5 border-b border-border font-mono">
          <span className="text-dim">&gt;</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a section, or run a command…"
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent outline-none text-bright font-mono text-[14.5px]"
          />
        </div>
        <div className="max-h-[340px] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <div className="p-6 text-center text-dim font-mono text-[13px]">
              No matches. Try "about", "email", or "projects".
            </div>
          )}
          {filtered.map((item, idx) => (
            <div
              key={item.label}
              onMouseEnter={() => setSelected(idx)}
              onClick={() => {
                onClose()
                item.action()
              }}
              className={`flex justify-between items-center px-3 py-2.5 rounded-md font-mono text-[13.5px] cursor-pointer ${
                idx === selected ? 'bg-elevated text-bright' : 'text-text'
              }`}
            >
              <span>
                <span className="text-dim text-[11px] mr-2">{item.group}</span>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
