import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [elevated, setElevated] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setElevated(latest > 10)
  })

  useEffect(() => {
    setElevated(window.scrollY > 10)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
   >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-300 ${
          elevated ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl backdrop-blur-md transition-all duration-300 ${
            elevated
              ? 'bg-white/70 shadow-lg ring-1 ring-black/5'
              : 'bg-white/20 shadow-sm ring-1 ring-white/20'
          }`}
        >
          <div className="px-4 py-2.5 font-semibold tracking-tight text-gray-900">
            Nova
          </div>
          <nav className="hidden md:flex items-center gap-6 px-4 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a
              href="#get-started"
              className="ml-2 inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-black transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
