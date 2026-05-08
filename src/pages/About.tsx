import { motion } from 'framer-motion'

export const About = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-8 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Heritage</span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">The Sobhanachala Story</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Founded on the principles of timeless elegance and masterful craftsmanship, Sobhanachala represents the pinnacle of modern Indian luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif italic">Artisan Craftsmanship</h2>
            <p className="text-muted leading-relaxed">
              Every garment at Sobhanachala is a testament to the skill of our master artisans. We blend centuries-old techniques with contemporary design sensibilities to create pieces that are not just clothes, but wearable art.
            </p>
            <p className="text-muted leading-relaxed">
              From the delicate hand-embroidery to the selection of the finest natural silks, every detail is meticulously considered to ensure an unparalleled experience of luxury.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 space-y-8"
          >
            <h2 className="text-4xl font-serif italic">Sustainable Luxury</h2>
            <p className="text-muted leading-relaxed">
              We believe that true luxury is sustainable. Our commitment to ethical production and high-quality materials ensures that every Sobhanachala piece is built to last, honoring both the creator and the wearer.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-background transition-all duration-500">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80" 
              alt="Sustainable Fashion" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
