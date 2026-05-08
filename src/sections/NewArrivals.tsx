import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Heart, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Midnight Silk Saree',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80',
    tag: 'NEW',
  },
  {
    id: 2,
    name: 'Gold Embellished Lehenga',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80',
    tag: 'LIMITED',
  },
  {
    id: 3,
    name: 'Velvet Evening Gown',
    price: '$750',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80',
    tag: 'NEW',
  },
  {
    id: 4,
    name: 'Ivory Tradition Dress',
    price: '$640',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    tag: 'NEW',
  },
]

export const NewArrivals = () => {
  return (
    <section className="py-24 bg-surface/30">
      <div className="px-8 md:px-20 max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-gold tracking-[0.3em] uppercase text-xs mb-4 block">Freshly Tailored</span>
          <h2 className="text-5xl md:text-6xl">New Arrivals</h2>
        </div>
        <button className="text-gold border-b border-gold/30 hover:border-gold transition-colors duration-300 pb-1 text-sm tracking-widest uppercase">
          View All
        </button>
      </div>

      <div className="px-8 md:px-20 max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="product-swiper pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-surface rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-background text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(214,179,106,0.5)]">
                      {product.tag}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-gold hover:text-background transition-all duration-300">
                    <Heart size={18} />
                  </button>
                  
                  {/* Quick Actions */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <button className="w-full accent-gradient text-background font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      <ShoppingBag size={18} />
                      QUICK ADD
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2 group-hover:text-gold transition-colors">{product.name}</h4>
                  <p className="text-muted text-lg">{product.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
