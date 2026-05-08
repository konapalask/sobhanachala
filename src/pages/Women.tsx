import { motion } from 'framer-motion'
import { ProductCard } from '../components/ui/ProductCard'

const products = [
  { id: 1, name: "Crimson Bridal Lehenga", price: "₹1,25,000", category: "Women", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80" },
  { id: 2, name: "Emerald Silk Saree", price: "₹45,000", category: "Women", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80" },
  { id: 3, name: "Pastel Designer Suit", price: "₹28,000", category: "Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80" },
]

export const Women = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-8 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Goddess Within</span>
          <h1 className="text-4xl md:text-6xl font-serif italic">Women's Collection</h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}
