import { motion } from 'framer-motion'
import { Rocket, Sparkles, Layout, Palette } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Performance-first',
    desc: 'Optimized, snappy interfaces that load fast and feel fluid across devices.'
  },
  {
    icon: Sparkles,
    title: 'Micro-animations',
    desc: 'Thoughtful motion enhances clarity and delight without distraction.'
  },
  {
    icon: Layout,
    title: 'Responsive grids',
    desc: 'Modern, flexible layouts that adapt seamlessly to any screen size.'
  },
  {
    icon: Palette,
    title: 'Timeless aesthetics',
    desc: 'Elegant, minimalist design language that elevates your brand.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
          >
            Built for premium experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-4 text-gray-600"
          >
            A curated set of patterns that blend clarity, speed, and subtle motion for a truly modern feel.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
