import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../sections/Hero'
import Accumulation from '../sections/Accumulation'
import Detection from '../sections/Detection'
import Recovery from '../sections/Recovery'
import Clarity from '../sections/Clarity'

function HomePage() {
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to background brightness
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#0E0F13', '#16181D', '#2A2D34', '#3E4148', '#F4F1EC', '#FAF8F4']
  )

  return (
    <motion.div 
      style={{ backgroundColor }}
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <Hero scrollProgress={scrollYProgress} />
        <Accumulation scrollProgress={scrollYProgress} />
        <Detection scrollProgress={scrollYProgress} />
        <Recovery scrollProgress={scrollYProgress} />
        <Clarity scrollProgress={scrollYProgress} />
      </main>
    </motion.div>
  )
}

export default HomePage
