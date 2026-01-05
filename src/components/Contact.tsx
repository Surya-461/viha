import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Phone, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: FormData) {
    console.log(values)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-500">
                Contact Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Let's Build Your <span className="text-primary-500">Digital Future</span> Together
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to grow your business online? Let Viha build your digital presence. Reach out for a free consultation or a custom quote.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-500 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Email Us</div>
                  <div className="text-sm text-gray-500">	tarunsaahomac@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Call Us</div>
                  <div className="text-sm text-gray-500">+91 96188 99968</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="https://wa.me/919392404394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-2xl border-2 border-green-200 hover:bg-green-50 transition-colors"
              >
                <MessageCircle className="mr-3 h-6 w-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-green-700">WhatsApp Now</div>
                  <div className="text-xs text-green-600/70">Immediate response available</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-700 font-medium">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="Tarun Kumar"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    {...register('email')}
                    placeholder="tarunsaahomac@gmail.com"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  {...register('phone')}
                  placeholder="+1 (555) 000-0000"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea
                  {...register('message')}
                  placeholder="Tell us about your project or goals..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-primary-500 text-white font-bold text-base hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
