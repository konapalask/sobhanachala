import { Mail, Phone, MapPin, Globe } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative bg-surface text-primary pt-24 pb-12 overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-silk-fabric-waving-in-the-wind-41444-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 px-8 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-serif italic mb-4">Sobhanachala</h3>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Redefining modern elegance through traditional craftsmanship and contemporary luxury fashion.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-2 rounded-full border border-stroke hover:border-gold transition-colors text-muted hover:text-gold">
              <Mail size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-stroke hover:border-gold transition-colors text-muted hover:text-gold">
              <Phone size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-stroke hover:border-gold transition-colors text-muted hover:text-gold">
              <MapPin size={20} />
            </a>
            <a href="#" className="p-2 rounded-full border border-stroke hover:border-gold transition-colors text-muted hover:text-gold">
              <Globe size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Shop</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-muted">
            <li><a href="#" className="hover:text-primary transition-colors">All Collections</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sarees</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Designer Dresses</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Limited Edition</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Company</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-muted">
            <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Craftsmanship</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Stores</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Support</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-muted">
            <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-stroke pt-12 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-muted">Available Worldwide</span>
        </div>
        
        {/* Animated Marquee */}
        <div className="w-full overflow-hidden whitespace-nowrap mb-12 py-4 border-y border-stroke bg-surface-light/50">
          <div className="inline-block animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl font-serif italic mx-12 text-stroke">
                SOBHANACHALA • LUXURY • FASHION • ELEGANCE •
              </span>
            ))}
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
          © 2026 SOBHANACHALA SHOP. ALL RIGHTS RESERVED.
        </p>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  )
}
