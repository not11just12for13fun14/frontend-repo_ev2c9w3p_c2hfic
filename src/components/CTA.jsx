import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-10 sm:p-14 ring-1 ring-white/10">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Bring your product to life
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-4 text-gray-300"
          >
            Tell us about your vision and we’ll craft a refined, high-performance experience that feels effortless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Request a proposal
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
