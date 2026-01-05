


import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SplashScene } from './components/SplashScene'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <main className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="splash"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50"
          >
            <SplashScene onEnter={() => setHasEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Process />
            <CTA />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
