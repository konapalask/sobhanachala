import { motion } from 'framer-motion'
import { Heart, ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  id: number
  name: string
  price: string
  category: string
  image: string
}

export const ProductCard = ({ name, price, category, image }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-light mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-background py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2">
              <ShoppingBag size={14} /> Add to Cart
            </button>
            <button className="w-12 bg-white text-background py-3 flex items-center justify-center hover:bg-gold transition-colors duration-300">
              <Heart size={14} />
            </button>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-gold px-3 py-1 rounded-full">
          <span className="text-[8px] uppercase tracking-widest text-background font-bold">Luxury</span>
        </div>
      </div>

      <div className="space-y-1 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">{category}</p>
        <h3 className="text-lg font-serif italic">{name}</h3>
        <p className="text-gold font-light tracking-widest">{price}</p>
      </div>
    </motion.div>
  )
}
