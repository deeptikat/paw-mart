import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { stackImages } from '@/data/products'

export type StackSpreadProps = {
  bgColor?: string
  clusterRotation?: number
  stackScale?: number
  cardRadius?: number
  textColor?: string
  textFadeStart?: number
  showScrollHint?: boolean
}

export default function StackSpread({
  bgColor = '#edf4ff',
  clusterRotation = 7,
  stackScale = 1,
  cardRadius = 34,
  textColor = '#0f172a',
  textFadeStart = 0.25,
  showScrollHint = true,
}: StackSpreadProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const raw = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      setScrollProgress(Math.min(Math.max(raw, 0), 1))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const spreadAmount = prefersReducedMotion ? 1 : Math.min(scrollProgress * 1.8, 1)
  const revealOpacity = prefersReducedMotion ? 1 : Math.min(Math.max((scrollProgress - 0.2) / 0.18, 0), 1)
  const textOpacity = prefersReducedMotion ? 1 : Math.min(Math.max(1 - scrollProgress * 4, 0), 1)

  const cards = stackImages.map((image, index) => ({
    image,
    rotate: index % 2 === 0 ? -clusterRotation + index * 1.2 : clusterRotation - index * 1.2,
    scale: 1 - index * 0.055,
    y: index * 12,
  }))

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-[36px] border border-[#d5e7ff] bg-[#edf4ff] px-4 py-8 shadow-[0_25px_60px_rgba(17,80,160,0.08)] sm:px-8 lg:px-12"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            style={{ opacity: textOpacity }}
          >
            <div className="max-w-xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#1f6fe5]">
                PawMart picks
              </p>
              <h2
                className="text-4xl font-black leading-none tracking-[-0.07em] text-[#0f172a] sm:text-5xl lg:text-7xl"
                style={{ color: textColor }}
              >
                Made For
                <span className="mt-2 block">Happy Paws.</span>
              </h2>
              <p className="mt-4 text-base text-[#334155] sm:text-lg">
                Thoughtfully chosen essentials for every kind of pet.
              </p>
              {showScrollHint && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white px-3 py-2 text-xs font-medium text-[#0f172a]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#ff8a3d]" />
                  Scroll to explore
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
            style={{
              opacity: 1,
              clipPath: `inset(0 ${(1 - revealOpacity) * 100}% 0 0)`,
              y: 24 - revealOpacity * 24,
            }}
          >
            <div className="text-center">
              <div className="text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-none tracking-[-0.12em] text-[#ff8a3d]">
                PawMart
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative z-20 mx-auto h-[420px] w-full max-w-[760px]"
            initial={false}
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={`${card.image}-${index}`}
                className="absolute inset-0"
                custom={index}
                animate={
                  prefersReducedMotion
                    ? {
                        x: Math.cos(-Math.PI / 2 + (index * Math.PI * 2) / cards.length) * 620,
                        y: card.y + Math.sin(-Math.PI / 2 + (index * Math.PI * 2) / cards.length) * 470,
                        rotate: card.rotate + (index % 2 === 0 ? 18 : -18),
                        scale: stackScale * (1 - index * 0.06),
                      }
                    : {
                        x: Math.cos(-Math.PI / 2 + (index * Math.PI * 2) / cards.length) * spreadAmount * 620,
                        y: card.y + Math.sin(-Math.PI / 2 + (index * Math.PI * 2) / cards.length) * spreadAmount * 470,
                        rotate: card.rotate + spreadAmount * (index % 2 === 0 ? 18 : -18),
                        scale: stackScale * (1 - index * 0.06) + spreadAmount * 0.18,
                      }
                }
                transition={{ type: 'spring', stiffness: 110, damping: 18 }}
                whileHover={{ scale: stackScale * (1 - index * 0.06) + spreadAmount * 0.22 + 0.05 }}
              >
                <div
                  className="absolute left-1/2 top-1/2 h-[290px] w-[230px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white/80 shadow-[0_25px_80px_rgba(22,77,146,0.18)]"
                  style={{
                    borderRadius: `${cardRadius}px`,
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-[#0f172a]/10" />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-3 text-white">
                    <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
                      {['Dog Toys', 'Cat Accessory', 'Pet Food', 'Grooming', 'Dog Beds', 'Cat Beds', 'Collars', 'Treats'][index]}
                    </span>
                    <span className="rounded-full bg-[#ff8a3d] p-1.5 text-[#0f172a]">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          background: `linear-gradient(to top, ${bgColor}, transparent)`,
          opacity: textFadeStart,
        }}
      />
    </section>
  )
}
