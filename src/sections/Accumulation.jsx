import React from 'react'
import { motion, useTransform } from 'framer-motion'
import FeatureCard from '../components/FeatureCard'

function Accumulation({ scrollProgress }) {
  // Fade in as user scrolls into this section
  const opacity = useTransform(scrollProgress, [0.1, 0.25], [0, 1])
  const y = useTransform(scrollProgress, [0.1, 0.25], [50, 0])

  const features = [
    {
      title: 'Cognitive Load Accumulation',
      description: 'Tracks invisible strain from sustained effort over time',
      metric: '0.73',
      metricLabel: 'Load Index'
    },
    {
      title: 'Temporal Risk Modeling',
      description: 'Predicts burnout trajectories before critical thresholds',
      metric: '14d',
      metricLabel: 'Horizon'
    },
    {
      title: 'Non-Binary Detection',
      description: 'Burnout is not binary—EDGE measures gradual exhaustion',
      metric: '±0.12',
      metricLabel: 'Precision'
    }
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-section font-display text-text-primary mb-4">
          The Edge
        </h2>
        <p className="text-lg font-body text-text-muted mb-6 max-w-2xl">
          Sustained effort doesn't fail loudly.
          <br />
          It fades.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              delay={index * 0.2}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Accumulation
