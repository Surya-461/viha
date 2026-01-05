import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Ready to grow your business online?
            <br />
            <span className="text-primary-500">Let Viha build your digital presence.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need a new website or a result-driven marketing strategy, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary-500 text-white font-semibold text-lg shadow-xl shadow-primary-500/20 hover:bg-primary-600 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-gray-300 text-gray-900 font-semibold text-lg hover:border-primary-500 hover:text-primary-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
