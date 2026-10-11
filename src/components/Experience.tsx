import { experience } from '../data'
import { useReveal } from '../hooks/useReveal'
import SectionHead from './SectionHead'

export default function Experience() {
  const { ref, inView } = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="py-24 border-t border-border max-md:py-16">
      <SectionHead index="03 · experience" title="git log --graph --oneline" />
      <div ref={ref} className={`reveal ${inView ? 'in' : ''} relative pl-7`}>
        <div className={`gitlog-line absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-border ${inView ? 'in' : ''}`} />
        {experience.map((item, i) => (
          <div key={item.hash} className={`relative ${i === experience.length - 1 ? '' : 'pb-10'}`}>
            <div className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-bg border-2 border-violet shadow-[0_0_0_4px_#0a0c10]" />
            <div className="flex gap-2.5 items-baseline font-mono text-xs text-dim flex-wrap">
              <span className="text-amber">{item.hash}</span>
              <span>{item.date}</span>
              <span
                className={`px-2 py-px rounded-full text-[11px] border ${
                  item.branch === 'activity'
                    ? 'text-blue bg-blue/10 border-blue/25'
                    : 'text-green bg-green/10 border-green/25'
                }`}
              >
                {item.branch}
              </span>
            </div>
            <h3 className="font-mono text-bright font-bold text-[17px] mt-2">{item.role}</h3>
            <div className="font-mono text-dim text-xs mt-[3px]">{item.org}</div>
            <ul className="mt-3 pl-[18px] text-text text-sm list-disc marker:text-violet">
              {item.bullets.map((b) => (
                <li key={b} className="mb-1.5">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
