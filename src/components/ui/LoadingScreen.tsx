import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from '../../lib/gsap'

const words = ["Luxury", "Elegance", "Fashion", "Sobhanachala"]

export const LoadingScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 1500)

    let start = 0
    const end = 100
    const duration = 4000 // 4 seconds loading

    const updateProgress = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const currentProgress = Math.min((elapsed / duration) * end, end)
      setProgress(Math.floor(currentProgress))

      if (currentProgress < end) {
        requestAnimationFrame(updateProgress)
      } else {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: onFinished,
        })
      }
    }

    requestAnimationFrame(updateProgress)

    return () => clearInterval(interval)
  }, [onFinished])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-primary"
    >
      <div className="relative h-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={words[index]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.12, 0, 0.39, 0] }}
            className="font-serif italic text-6xl md:text-8xl"
          >
            {words[index]}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 right-10 md:right-20">
        <span className="text-4xl md:text-6xl font-light font-mono">
          {progress.toString().padStart(3, '0')}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-stroke">
        <motion.div
          className="h-full accent-gradient shadow-[0_0_15px_rgba(214,179,106,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
