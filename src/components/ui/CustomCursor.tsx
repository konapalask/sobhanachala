import { useEffect, useRef } from 'react'
import gsap from '../../lib/gsap'

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const glow = glowRef.current

    if (!cursor || !glow) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', moveCursor)

    const handleHover = () => {
      gsap.to(cursor, { scale: 3, duration: 0.3 })
    }

    const handleUnhover = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
    }

    const interactiveElements = document.querySelectorAll('button, a, .interactive')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleUnhover)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleUnhover)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={glowRef} className="custom-cursor-glow hidden md:block" />
    </>
  )
}
