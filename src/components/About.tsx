import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border max-md:py-16">
      <SectionHead index="01 · about" title="Who's writing this code" />
      <Reveal>
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-start max-md:grid-cols-1 max-md:gap-8">
          <div className="font-mono text-[14.5px] text-text">
            <p>
              <span className="text-violet">const</span> engineer = <span className="text-violet">{'{'}</span>
            </p>
            <p className="pl-5">
              focus: <span className="text-green">"full stack engineering, backend systems"</span>,
            </p>
            <p className="pl-5">
              studying: <span className="text-green">"B.Sc. Computer Science, RMIT and Binus University double degree"</span>,
            </p>
            <p className="pl-5">
              graduating: <span className="text-green">"July 2028"</span>,
            </p>
            <p>
              <span className="text-violet">{'}'}</span>;
            </p>
            <p className="font-sans my-3.5 text-[15px]">
              I am a computer science student and software engineer who has spent the last few years building
              real systems for real companies. That has meant migrating a decade old production database,
              syncing inventory across TikTok, Tokopedia, and Shopee, and shipping full stack websites for
              startup clients from scratch.
            </p>
            <p className="font-sans my-3.5 text-[15px]">
              Coursework in algorithms, operating systems, scientific computing, and ethical hacking rounds out
              the practical side. I also like building tools for their own sake, including a custom programming
              language with its own interpreter and IDE.
            </p>
          </div>
          <div className="bg-panel border border-border rounded-[10px] px-6 py-[22px]">
            <FactRow k="Focus areas" v="Full stack, backend systems" />
            <FactRow k="Primary languages" v="Python, TypeScript, Java, C/C++" />
            <FactRow k="Databases" v="PostgreSQL, Firebase" />
            <FactRow k="Tooling" v="Git, Figma, Flutter" />
            <FactRow k="Education" v="RMIT & Binus University" />
            <FactRow k="Expected graduation" v="July 2028" last />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function FactRow({ k, v, last = false }: { k: string; v: string; last?: boolean }) {
  return (
    <div className={`flex justify-between py-[9px] font-mono text-[13px] ${last ? '' : 'border-b border-border'}`}>
      <span className="text-dim">{k}</span>
      <span className="text-bright text-right">{v}</span>
    </div>
  )
}
