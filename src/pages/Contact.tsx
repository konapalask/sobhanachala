import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-8 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Contact Us</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our collections or need assistance with an order, our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-surface-light/30 border border-stroke rounded-sm">
                <Mail className="text-gold mb-6" size={24} />
                <h3 className="text-lg font-serif italic mb-2">Email Us</h3>
                <p className="text-muted text-sm">concierge@sobhanachala.com</p>
                <p className="text-muted text-sm">support@sobhanachala.com</p>
              </div>
              <div className="p-8 bg-surface-light/30 border border-stroke rounded-sm">
                <Phone className="text-gold mb-6" size={24} />
                <h3 className="text-lg font-serif italic mb-2">Call Us</h3>
                <p className="text-muted text-sm">+91 (800) 123-4567</p>
                <p className="text-muted text-sm">Mon - Sat: 10am - 7pm</p>
              </div>
              <div className="p-8 bg-surface-light/30 border border-stroke rounded-sm">
                <MapPin className="text-gold mb-6" size={24} />
                <h3 className="text-lg font-serif italic mb-2">Visit Us</h3>
                <p className="text-muted text-sm">Jubilee Hills, Road No. 36</p>
                <p className="text-muted text-sm">Hyderabad, TS 500033</p>
              </div>
              <div className="p-8 bg-surface-light/30 border border-stroke rounded-sm">
                <MessageSquare className="text-gold mb-6" size={24} />
                <h3 className="text-lg font-serif italic mb-2">Inquiries</h3>
                <p className="text-muted text-sm">For bridal consultations and</p>
                <p className="text-muted text-sm">custom commissions.</p>
              </div>
            </div>

            <div className="aspect-video w-full bg-surface-light overflow-hidden rounded-sm border border-stroke">
              {/* Placeholder for Map */}
              <div className="w-full h-full flex items-center justify-center text-muted italic">
                Interactive Map Placeholder
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-10 md:p-16 border border-stroke rounded-sm"
          >
            <h2 className="text-3xl font-serif italic mb-10">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-bold">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-stroke py-2 focus:border-gold outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-bold">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-stroke py-2 focus:border-gold outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted font-bold">Subject</label>
                <select className="w-full bg-transparent border-b border-stroke py-2 focus:border-gold outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Bridal Consultation</option>
                  <option>Press & PR</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted font-bold">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-stroke py-2 focus:border-gold outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full py-5 bg-gold text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
