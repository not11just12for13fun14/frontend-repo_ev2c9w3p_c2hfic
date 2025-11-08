import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900"
          >
            Minimalist experiences that feel alive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-lg text-gray-700"
          >
            We design premium, fluid interfaces with motion that elevates your brand. Clean, modern, and dynamic by default.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#get-started" className="rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm hover:bg-black transition-colors">Start a project</a>
            <a href="#features" className="rounded-xl bg-white/70 backdrop-blur px-5 py-3 text-gray-900 ring-1 ring-black/5 hover:bg-white transition-colors">Explore features</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
