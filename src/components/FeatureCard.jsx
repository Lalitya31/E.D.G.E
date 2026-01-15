import React from 'react'
import { motion } from 'framer-motion'

function FeatureCard({ title, description, metric, metricLabel, delay = 0, scrollProgress }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="bg-charcoal/40 backdrop-blur-sm p-6 rounded-lg border border-fog/20 hover:border-flame/30 transition-colors"
    >
      {/* Metric */}
      <div className="mb-4">
        <div className="font-mono text-3xl text-flame-light mb-1">
          {metric}
        </div>
        <div className="text-xs text-text-muted uppercase tracking-wider">
          {metricLabel}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg text-text-primary mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default FeatureCard
