import { Hero } from '../sections/Hero'
import { FeaturedCategories } from '../sections/FeaturedCategories'
import { NewArrivals } from '../sections/NewArrivals'
import { VideoLookbook } from '../sections/VideoLookbook'

export const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <VideoLookbook />
      
      {/* Campaign Banner Mockup */}
      <section className="h-[80vh] bg-surface relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-40">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" alt="Campaign" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-8">
          <h2 className="text-7xl md:text-9xl mb-8 italic">The Lookbook '26</h2>
          <button className="accent-gradient text-background px-12 py-4 rounded-full font-bold tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-500">
            Discover the Collection
          </button>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 px-8 text-center bg-background">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl mb-8">Stay in Style</h2>
          <p className="text-muted mb-12">Subscribe to receive updates on new collections, exclusive events, and fashion inspiration.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-surface border border-stroke rounded-full px-8 py-4 focus:outline-none focus:border-gold transition-colors text-sm tracking-widest"
            />
            <button className="accent-gradient text-background px-12 py-4 rounded-full font-bold uppercase tracking-widest">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
