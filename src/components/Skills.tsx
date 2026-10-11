import { skills } from '../data'
import { useReveal } from '../hooks/useReveal'
import SectionHead from './SectionHead'

export default function Skills() {
  const { ref, inView } = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 border-t border-border max-md:py-16">
      <SectionHead
        index="02 · skills"
        title="top -o %MASTERY"
        subtitle="Self rated proficiency, sorted by how often each one shows up in production code I've shipped."
      />
      <div ref={ref} className={`reveal ${inView ? 'in' : ''} bg-panel border border-border rounded-[10px] overflow-hidden font-mono`}>
        <div className="hidden md:grid grid-cols-[2.2fr_1fr_90px] px-5 py-2.5 bg-elevated text-[11.5px] text-dim uppercase tracking-wide">
          <span>Process</span>
          <span>Usage</span>
          <span />
        </div>
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_90px] items-center gap-2 md:gap-0 px-5 py-3.5 border-t border-border text-[13.5px]"
          >
            <div className="text-bright">
              {s.name}
              <span className="text-dim text-[11.5px] block mt-0.5">{s.tag}</span>
            </div>
            <div className="h-[7px] bg-elevated rounded border border-border overflow-hidden">
              <div
                className="bar-fill h-full rounded bg-gradient-to-r from-blue to-violet"
                style={{ width: inView ? `${s.pct}%` : '0%', transitionDelay: `${i * 60}ms` }}
              />
            </div>
            <div className="text-left md:text-right text-green text-[13px]">{s.pct}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
