import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl shadow-xl hidden md:block max-w-[280px]">
              <p className="text-sm font-medium leading-relaxed italic text-gray-700">
                "Our mission is to deliver creative, scalable, and affordable digital solutions for startups and growing brands."
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-8 h-px bg-primary-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Viha Leadership</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">
                About Viha
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Modern Solutions for Your <span className="text-primary-500">Digital Presence</span>
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Viha is a modern digital solutions company focused on helping businesses establish a strong online presence. We specialize in website development and digital marketing strategies that convert visitors into customers.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                'Creative and scalable digital architectures',
                'Affordable solutions for startups and small businesses',
                'Conversion-focused marketing strategies',
                'Dedicated long-term growth partnership'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary-500 shrink-0" />
                  <span className="text-base font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
