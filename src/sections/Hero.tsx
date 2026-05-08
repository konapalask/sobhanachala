import { useEffect, useRef } from 'react'
import gsap from '../lib/gsap'

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
        delay: 0.5,
      })

      gsap.to(".parallax-card", {
        y: (i) => (i + 1) * -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center px-8 md:px-20">
      {/* Background Video - Replaced with more stable source */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494451551.hd.mp4?s=f52345e691238670a5626017ec058728b7880946&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="hero-content flex flex-col gap-6">
          <span className="text-gold tracking-[0.4em] uppercase text-sm font-medium">
            LUXURY FASHION HOUSE
          </span>
          <h1 className="text-6xl md:text-8xl leading-tight font-serif italic">
            Redefining <br />
            <span className="text-white">Modern Elegance</span>
          </h1>
          <p className="text-muted text-lg max-w-md leading-relaxed">
            Discover timeless garments crafted for modern sophistication, 
            blending tradition with contemporary luxury.
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            <button className="group relative px-8 py-4 overflow-hidden rounded-full border border-gold text-gold hover:text-background transition-colors duration-500">
              <span className="relative z-10 font-medium tracking-widest uppercase text-sm">Shop Collection</span>
              <div className="absolute inset-0 accent-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 hover:border-white transition-colors duration-500 uppercase tracking-widest text-sm font-medium">
              Explore Lookbook
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-end gap-6 relative h-[600px]">
          <div className="parallax-card w-64 h-96 bg-surface-light rounded-2xl overflow-hidden shadow-2xl mt-20 relative z-20">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80" alt="Fashion" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div className="parallax-card w-64 h-96 bg-surface-light rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80" alt="Fashion" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
