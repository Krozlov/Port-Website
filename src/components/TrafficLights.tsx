export default function TrafficLights() {
  return (
    <div className="flex gap-[7px] shrink-0">
      <span className="w-[11px] h-[11px] rounded-full bg-red" />
      <span className="w-[11px] h-[11px] rounded-full bg-amber" />
      <span className="w-[11px] h-[11px] rounded-full bg-green" />
    </div>
  )
}
