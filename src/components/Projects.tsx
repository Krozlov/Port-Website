import { projects } from '../data'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border max-md:py-16">
      <SectionHead
        index="04 · projects"
        title="~/projects"
        subtitle="A few systems I've built, from a personal project to client work. Each one taught me something I did not expect to learn."
      />
      <Reveal>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-panel border border-border rounded-[10px] p-[22px] flex flex-col gap-3 transition-all hover:border-violet hover:-translate-y-1"
            >
              <div className="flex justify-between items-start gap-2.5">
                <span className="font-mono text-[15px] text-blue font-semibold">{p.name}</span>
                <span
                  className={`font-mono text-[10.5px] px-2 py-0.5 rounded-full whitespace-nowrap border ${
                    p.status === 'production'
                      ? 'text-green bg-green/10 border-green/25'
                      : 'text-amber bg-amber/10 border-amber/25'
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-text flex-1">{p.desc}</p>
              <div className="flex gap-2 flex-wrap font-mono text-[11.5px]">
                {p.tags.map((t) => (
                  <span key={t} className="text-dim bg-elevated border border-border px-2 py-[3px] rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 font-mono text-[12.5px] mt-0.5">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-dim hover:text-violet transition-colors"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
