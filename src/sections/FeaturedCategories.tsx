import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const categories = [
  {
    title: 'Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80',
    className: 'md:col-span-2 md:row-span-2 h-[600px]',
  },
  {
    title: 'Designer Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    className: 'md:col-span-1 md:row-span-1 h-[300px]',
  },
  {
    title: 'Premium Collections',
    image: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80',
    className: 'md:col-span-1 md:row-span-1 h-[300px]',
  },
  {
    title: 'Kurtis',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80',
    className: 'md:col-span-1 md:row-span-2 h-[600px]',
  },
  {
    title: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    className: 'md:col-span-1 md:row-span-1 h-[300px]',
  },
]

export const FeaturedCategories = () => {
  return (
    <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4">The Collection</span>
        <h2 className="text-5xl md:text-6xl mb-6">Curated Aesthetics</h2>
        <p className="text-muted max-w-xl">
          Explore our exclusive range of garments, where each piece tells a story of craftsmanship and luxury.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "group relative overflow-hidden rounded-2xl cursor-pointer bg-surface",
              cat.className
            )}
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            {/* Hover Glow Border */}
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/50 transition-all duration-500 rounded-2xl" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl md:text-4xl text-white mb-4 drop-shadow-lg italic">
                {cat.title}
              </h3>
              <div className="h-[2px] w-0 group-hover:w-16 accent-gradient transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
