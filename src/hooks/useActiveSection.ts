import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.4, rootMargin: '-52px 0px -40% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}
