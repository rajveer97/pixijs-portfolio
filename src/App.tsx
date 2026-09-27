import { Suspense, lazy, useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/Loading/LoadingScreen'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { FromGraphicsToSystems } from './components/Evolution/FromGraphicsToSystems'
import { Footer } from './components/Footer/Footer'
import { EasterEgg } from './components/EasterEgg/EasterEgg'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { useKonamiCode } from './hooks/useKonami'
import { SITE } from './lib/site'

const EngineeringDomains = lazy(() =>
  import('./components/Domains/EngineeringDomains').then((module) => ({
    default: module.EngineeringDomains,
  })),
)
const Projects = lazy(() =>
  import('./components/Projects/Projects').then((module) => ({ default: module.Projects })),
)
const EngineeringStack = lazy(() =>
  import('./components/Stack/EngineeringStack').then((module) => ({
    default: module.EngineeringStack,
  })),
)
const CaseStudies = lazy(() =>
  import('./components/CaseStudies/CaseStudies').then((module) => ({
    default: module.CaseStudies,
  })),
)
const AIEngineering = lazy(() =>
  import('./components/AIEngineering/AIEngineering').then((module) => ({
    default: module.AIEngineering,
  })),
)
const CareerEvolution = lazy(() =>
  import('./components/CareerEvolution/CareerEvolution').then((module) => ({
    default: module.CareerEvolution,
  })),
)
const Experience = lazy(() =>
  import('./components/Experience/Experience').then((module) => ({ default: module.Experience })),
)
const Principles = lazy(() =>
  import('./components/Principles/Principles').then((module) => ({
    default: module.Principles,
  })),
)
const ResumeCTA = lazy(() =>
  import('./components/ResumeCTA/ResumeCTA').then((module) => ({ default: module.ResumeCTA })),
)
const Contact = lazy(() =>
  import('./components/Contact/Contact').then((module) => ({ default: module.Contact })),
)

function SectionFallback({ id }: { id: string }) {
  return <div id={id} className="min-h-[70vh] w-full scroll-mt-24" aria-hidden="true" />
}

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
        <FromGraphicsToSystems />
        <Suspense fallback={<SectionFallback id="domains" />}>
          <EngineeringDomains />
        </Suspense>
        <Suspense fallback={<SectionFallback id="work" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback id="stack" />}>
          <EngineeringStack />
        </Suspense>
        <Suspense fallback={<SectionFallback id="engineering" />}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<SectionFallback id="ai" />}>
          <AIEngineering />
        </Suspense>
        <Suspense fallback={<SectionFallback id="career" />}>
          <CareerEvolution />
        </Suspense>
        <Suspense fallback={<SectionFallback id="experience" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback id="principles" />}>
          <Principles />
        </Suspense>
        <Suspense fallback={<SectionFallback id="resume" />}>
          <ResumeCTA />
        </Suspense>
        <Suspense fallback={<SectionFallback id="contact" />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />

      <EasterEgg open={eggOpen} onClose={() => setEggOpen(false)} />
    </>
  )
}

export default App
