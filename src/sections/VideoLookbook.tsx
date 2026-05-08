import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { motion } from 'framer-motion'

export const VideoLookbook = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' // Placeholder HLS stream

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoSrc)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover grayscale brightness-50"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.12, 0, 0.39, 0] }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="text-gold tracking-[0.5em] uppercase text-sm mb-8 block">Cinematic Experience</span>
          <h2 className="text-6xl md:text-9xl mb-8 leading-none italic font-serif">
            Crafted for <br /> timeless elegance.
          </h2>
          <div className="flex justify-center gap-12 mt-12">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-light mb-2 italic">100%</span>
              <span className="text-[10px] tracking-widest uppercase text-muted">Pure Silk</span>
            </div>
            <div className="w-[1px] h-12 bg-gold/30" />
            <div className="flex flex-col items-center">
              <span className="text-4xl font-light mb-2 italic">Hand</span>
              <span className="text-[10px] tracking-widest uppercase text-muted">Crafted</span>
            </div>
            <div className="w-[1px] h-12 bg-gold/30" />
            <div className="flex flex-col items-center">
              <span className="text-4xl font-light mb-2 italic">Unique</span>
              <span className="text-[10px] tracking-widest uppercase text-muted">Designs</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
