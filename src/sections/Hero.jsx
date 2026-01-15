import React from 'react'
import { motion, useTransform } from 'framer-motion'
import Candle from '../components/Candle/Candle'

function Hero({ scrollProgress }) {
  // Candle intensity and glow increase slightly as user starts scrolling
  const candleIntensity = useTransform(scrollProgress, [0, 0.1], [0.8, 1.0])
  const glowRadius = useTransform(scrollProgress, [0, 0.15], [80, 120])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Candle centerpiece - centered and layered behind text, positioned lower */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1, paddingTop: '8rem' }}>
        <motion.div
          style={{ 
            scale: useTransform(scrollProgress, [0, 0.1], [1, 0.95])
          }}
        >
          <Candle 
            intensity={candleIntensity.get()} 
            glowRadius={glowRadius.get()}
          />
        </motion.div>
      </div>

      {/* Project name - in front of candle */}
      <motion.h1
        className="text-[120px] md:text-[160px] font-display text-text-primary text-center tracking-wider relative"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        E.D.G.E
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-6 text-2xl md:text-3xl font-display text-text-muted text-center max-w-3xl relative"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        Early Detection of Gradual Exhaustion
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-sm font-body text-text-muted mb-2">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-text-muted rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
