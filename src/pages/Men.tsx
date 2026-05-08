import { motion } from 'framer-motion'
import { ProductCard } from '../components/ui/ProductCard'

const products = [
  { id: 1, name: "Ivory Wedding Sherwani", price: "₹65,000", category: "Men", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80" },
  { id: 2, name: "Navy Silk Kurta", price: "₹12,500", category: "Men", image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80" },
  { id: 3, name: "Black Velvet Bandhgala", price: "₹38,000", category: "Men", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80" },
]

export const Men = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-8 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Masculine Elegance</span>
          <h1 className="text-4xl md:text-6xl font-serif italic">Men's Collection</h1>
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
