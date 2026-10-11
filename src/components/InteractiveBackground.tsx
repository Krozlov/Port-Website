import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

type Ripple = {
  x: number
  y: number
  radius: number
  alpha: number
}

const LINK_DISTANCE = 130
const CURSOR_RADIUS = 160
const PARTICLE_COLOR = '139, 124, 246' // violet
const LINE_COLOR = '111, 179, 242' // blue

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let ripples: Ripple[] = []
    let frameId = 0
    const mouse = { x: -9999, y: -9999, active: false }

    function sizeCanvas() {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = width + 'px'
      canvas!.style.height = height + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function makeParticles() {
      const area = width * height
      const count = Math.min(90, Math.max(32, Math.round(area / 16000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    function onMouseLeave() {
      mouse.active = false
    }
    function onClick(e: MouseEvent) {
      ripples.push({ x: e.clientX, y: e.clientY, radius: 2, alpha: 0.55 })
      if (ripples.length > 6) ripples.shift()
    }

    function step() {
      ctx!.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < CURSOR_RADIUS && dist > 0.01) {
            const pull = (1 - dist / CURSOR_RADIUS) * 0.02
            p.x += dx * pull
            p.y += dy * pull
          }
        }

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.18
            ctx!.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      if (mouse.active) {
        for (const p of particles) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < CURSOR_RADIUS) {
            const alpha = (1 - dist / CURSOR_RADIUS) * 0.35
            ctx!.strokeStyle = `rgba(${PARTICLE_COLOR}, ${alpha})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(mouse.x, mouse.y)
            ctx!.lineTo(p.x, p.y)
            ctx!.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx!.fillStyle = `rgba(${PARTICLE_COLOR}, 0.55)`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      ripples = ripples.filter((r) => r.alpha > 0.01)
      for (const r of ripples) {
        ctx!.strokeStyle = `rgba(${PARTICLE_COLOR}, ${r.alpha})`
        ctx!.lineWidth = 1.5
        ctx!.beginPath()
        ctx!.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx!.stroke()
        r.radius += 2.4
        r.alpha *= 0.95
      }

      frameId = requestAnimationFrame(step)
    }

    sizeCanvas()
    makeParticles()

    if (reduceMotion) {
      // Draw a single static frame and skip motion and cursor interaction entirely.
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.4)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    } else {
      step()
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      window.addEventListener('mouseleave', onMouseLeave)
      window.addEventListener('click', onClick)
    }

    const onResize = () => {
      sizeCanvas()
      makeParticles()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
