import TrafficLights from './TrafficLights'
import { navTabs } from '../data'
import { useActiveSection } from '../hooks/useActiveSection'

type Props = {
  onOpenPalette: () => void
}

export default function TitleBar({ onOpenPalette }: Props) {
  const active = useActiveSection(navTabs.map((t) => t.id))

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="sticky top-0 z-[100] bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1040px] mx-auto px-7 h-[52px] flex items-center gap-6">
        <TrafficLights />
        <nav className="flex gap-0.5 overflow-x-auto no-scrollbar flex-1">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`font-mono text-[13px] px-3.5 py-2 rounded-t-md whitespace-nowrap border-b-2 transition-colors ${
                active === tab.id
                  ? 'text-bright bg-panel border-violet'
                  : 'text-dim border-transparent hover:text-text'
              }`}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-50 mr-[7px] align-middle" />
              {tab.label}
            </button>
          ))}
        </nav>
        <button
          onClick={onOpenPalette}
          className="font-mono text-xs text-dim bg-panel border border-border rounded-md px-2.5 py-1.5 flex items-center gap-2 shrink-0 hover:border-violet hover:text-text transition-colors"
        >
          <span>&gt;_</span>
          <span className="hidden sm:inline">Jump to…</span>
          <kbd className="bg-elevated border border-border rounded px-1.5 py-px text-[11px]">⌘K</kbd>
        </button>
      </div>
    </div>
  )
}
