import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Search, Heart, ShoppingBag, User } from 'lucide-react'
import { cn } from '../../lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collections' },
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Traditional', href: '/traditional' },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setIsScrolled(latest > 50)
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl px-8 py-4 transition-all duration-500 rounded-full glass",
        isScrolled ? "py-3 bg-surface/80 shadow-2xl" : "bg-transparent border-transparent"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-serif italic tracking-tight">
            Sobhanachala
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8 flex-[2] justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-[10px] font-light hover:text-gold transition-colors duration-300 uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 flex-1 justify-end">
          <button className="hover:text-gold transition-colors duration-300">
            <Search size={18} />
          </button>
          <button className="hover:text-gold transition-colors duration-300 relative">
            <Heart size={18} />
          </button>
          <button className="hover:text-gold transition-colors duration-300 relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-background text-[10px] flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
          <button className="hover:text-gold transition-colors duration-300">
            <User size={18} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
