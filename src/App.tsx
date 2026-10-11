import { useState } from 'react'
import InteractiveBackground from './components/InteractiveBackground'
import TitleBar from './components/TitleBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  return (
    <>
      <InteractiveBackground />
      <div className="relative z-[1]">
        <TitleBar onOpenPalette={() => setPaletteOpen(true)} />
        <main className="max-w-[1040px] mx-auto px-7 relative">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
