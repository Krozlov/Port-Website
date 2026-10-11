import Reveal from './Reveal'

type Props = {
  index: string
  title: string
  subtitle?: string
}

export default function SectionHead({ index, title, subtitle }: Props) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-[12.5px] text-violet">
        <span className="text-dim">// </span>
        {index}
      </p>
      <h2 className="font-mono text-bright font-bold text-[26px] mt-2">{title}</h2>
      {subtitle && <p className="text-dim mt-2.5 max-w-[560px] text-[14.5px]">{subtitle}</p>}
    </Reveal>
  )
}
