import { useEffect, useState } from 'react'
import { NAME } from '../data'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setTime(`local ${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="relative z-[1] bg-elevated border-t border-border font-mono text-[11.5px] text-dim py-2.5">
      <div className="max-w-[1040px] mx-auto px-7 flex justify-between flex-wrap gap-2.5">
        <span className="text-green">⎇ main</span>
        <span>{time}</span>
        <span>UTF-8</span>
        <span>© 2026 {NAME}. Built with care, and too much free time.</span>
      </div>
    </footer>
  )
}
