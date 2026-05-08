import { motion } from 'framer-motion'
import { ProductCard } from '../components/ui/ProductCard'
import { Filter, ChevronDown } from 'lucide-react'

const products = [
  { id: 1, name: "Silk Zari Saree", price: "₹24,500", category: "Traditional", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80" },
  { id: 2, name: "Embroidered Lehenga", price: "₹85,000", category: "Wedding", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80" },
  { id: 3, name: "Modern Anarkali", price: "₹18,200", category: "Modern", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80" },
  { id: 4, name: "Velvet Sherwani", price: "₹42,000", category: "Men", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80" },
  { id: 5, name: "Georgette Suit", price: "₹12,500", category: "Casual", image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80" },
  { id: 6, name: "Designer Kurta", price: "₹8,900", category: "Men", image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&q=80" },
]

export const Collections = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-8 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Premium Catalog</span>
            <h1 className="text-4xl md:text-6xl font-serif italic">All Collections</h1>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-stroke pb-1 hover:border-gold transition-colors">
              <Filter size={14} /> Filter
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-stroke pb-1 hover:border-gold transition-colors">
                Sort By <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}
