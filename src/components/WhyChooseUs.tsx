import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Cpu, DollarSign, LifeBuoy } from 'lucide-react'

const reasons = [
  {
    title: 'Custom Solutions',
    description: 'Tailored strategies and designs specifically for your unique business needs.',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-100'
  },
  {
    title: 'Focus on ROI',
    description: "We don't just build websites; we drive measurable business growth and ROI.",
    icon: ShieldCheck,
    color: 'text-green-500',
    bg: 'bg-green-100'
  },
  {
    title: 'Modern Tech Stack',
    description: 'Using the latest technologies to ensure speed, security, and scalability.',
    icon: Cpu,
    color: 'text-blue-500',
    bg: 'bg-blue-100'
  },
  {
    title: 'Transparent Pricing',
    description: 'Honest, upfront pricing with no hidden costs. Quality within your budget.',
    icon: DollarSign,
    color: 'text-primary-500',
    bg: 'bg-primary-100'
  },
  {
    title: 'Dedicated Support',
    description: 'Our team is here for you throughout the process and long after launch.',
    icon: LifeBuoy,
    color: 'text-purple-500',
    bg: 'bg-purple-100'
  }
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Why Choose Viha
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            The Viha <span className="text-blue-400">Advantage</span>
          </h3>
          <p className="text-lg text-slate-400">
            What sets us apart is our commitment to excellence and our passion for seeing your business succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass bg-white/5 border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-2xl ${reason.bg} ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold mb-3">{reason.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary-500 to-blue-600 flex flex-col justify-center items-center text-center space-y-4"
          >
            <h4 className="text-2xl font-bold text-white">Ready to start?</h4>
            <p className="text-white/80">Join 100+ businesses growing with Viha today.</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary-500 font-bold rounded-full shadow-lg"
            >
              Get Free Quote
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
