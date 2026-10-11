import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}
