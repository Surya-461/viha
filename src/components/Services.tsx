import { motion } from 'framer-motion'
import { 
  Monitor, 
  TrendingUp, 
  Search, 
  Share2, 
  Smartphone, 
  ShoppingCart, 
  Target, 
  BarChart3,
  Globe,
  Layout
} from 'lucide-react'

const services = [
  {
    title: 'Website Development',
    description: 'We build modern, responsive, and SEO-friendly websites that represent your brand and convert visitors.',
    icon: Monitor,
    color: 'bg-blue-500',
    features: [
      { name: 'Business & Corporate Sites', icon: Globe },
      { name: 'E-commerce Solutions', icon: ShoppingCart },
      { name: 'Portfolio Websites', icon: Layout },
      { name: 'Landing Pages', icon: Smartphone },
      { name: 'Responsive Design', icon: Monitor }
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Result-driven marketing strategies to increase your visibility and drive measurable growth.',
    icon: TrendingUp,
    color: 'bg-primary-500',
    features: [
      { name: 'SEO Optimization', icon: Search },
      { name: 'Social Media Marketing', icon: Share2 },
      { name: 'Google & Meta Ads', icon: Target },
      { name: 'Content Strategy', icon: BarChart3 },
      { name: 'Brand Consulting', icon: Globe }
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Comprehensive Digital <span className="text-primary-500">Solutions</span>
          </h3>
          <p className="text-lg text-gray-600">
            We offer a full suite of services to help your business thrive in the digital age, from building your foundation to scaling your reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden border border-gray-100"
            >
              <div className={`h-2 w-full ${service.color}`} />
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color.replace('bg-', 'text-')}`} />
                </div>
                <h4 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <feature.icon className="h-4 w-4 text-primary-500" />
                      <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
