import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket, BarChart } from 'lucide-react'

const steps = [
  {
    title: 'Discovery',
    description: 'Understanding your business goals, target audience, and unique requirements.',
    icon: Search,
    color: 'bg-blue-500'
  },
  {
    title: 'Strategy',
    description: 'Planning and architecting the perfect solution for your digital growth.',
    icon: Lightbulb,
    color: 'bg-amber-500'
  },
  {
    title: 'Development',
    description: 'Bringing the strategy to life with modern code and creative designs.',
    icon: Code,
    color: 'bg-primary-500'
  },
  {
    title: 'Launch',
    description: 'Going live with a polished product and initial marketing push.',
    icon: Rocket,
    color: 'bg-green-500'
  },
  {
    title: 'Optimization',
    description: 'Continuous monitoring and scaling to ensure long-term success.',
    icon: BarChart,
    color: 'bg-purple-500'
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">
            Our Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            How We <span className="text-primary-500">Deliver Success</span>
          </h3>
          <p className="text-lg text-gray-600">
            A systematic approach to building and growing your digital presence, ensuring every detail is perfect.
          </p>
        </div>

        <div className="relative">
          {/* <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative`}>
                  <step.icon className="h-8 w-8" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-primary-500 rounded-full flex items-center justify-center text-xs font-bold border border-gray-200 shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
