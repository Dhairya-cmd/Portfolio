import { useCallback, useEffect, useState } from 'react'

import { About } from '@/components/About'
import { CommandPalette } from '@/components/CommandPalette'
import { Contact, SiteFooter } from '@/components/Contact'
import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { PointerGlow, ScrollProgress } from '@/components/InteractiveChrome'
import { Projects } from '@/components/Projects'
import { SiteHeader } from '@/components/SiteHeader'
import { Skills } from '@/components/Skills'
import { StatusDock, Toast } from '@/components/StatusDock'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const showToast = useCallback((message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(null), 1800)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((v) => !v)
      }
    }
    const onCustom = () => setPaletteOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onCustom)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onCustom)
    }
  }, [])

  return (
    <>
      <div className="site-atmosphere" aria-hidden />
      <PointerGlow />
      <ScrollProgress />
      <SiteHeader />
      <main className="pb-20">
        <Hero onOpenPalette={() => setPaletteOpen(true)} />
        <div className="hairline" aria-hidden />
        <About />
        <div className="hairline" aria-hidden />
        <Experience />
        <div className="hairline" aria-hidden />
        <Projects />
        <div className="hairline" aria-hidden />
        <Skills />
        <div className="hairline" aria-hidden />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
      <StatusDock onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        onToast={showToast}
      />
      <Toast message={toast} />
    </>
  )
}
