import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/Loading/LoadingScreen'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { CaseStudies } from './components/CaseStudies/CaseStudies'
import { Services } from './components/Services/Services'
import { ResumeCTA } from './components/ResumeCTA/ResumeCTA'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { EasterEgg } from './components/EasterEgg/EasterEgg'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { useKonamiCode } from './hooks/useKonami'
import { SITE } from './lib/site'

function shouldShowIntro(): boolean {
  try {
    return (
      !window.localStorage.getItem(SITE.introFlagKey) &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  } catch {
    return true
  }
}

function App() {
  const [loading, setLoading] = useState(shouldShowIntro)
  const [eggOpen, setEggOpen] = useState(false)

  const finishLoading = useCallback(() => {
    try {
      window.localStorage.setItem(SITE.introFlagKey, '1')
    } catch {
      /* localStorage unavailable */
    }
    setLoading(false)
  }, [])

  useKonamiCode(() => setEggOpen(true))

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <AnimatePresence>
        {loading ? <LoadingScreen onComplete={finishLoading} /> : null}
      </AnimatePresence>

      {!loading ? <ScrollProgress /> : null}

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <CaseStudies />
        <Services />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />

      <EasterEgg open={eggOpen} onClose={() => setEggOpen(false)} />
    </>
  )
}

export default App
