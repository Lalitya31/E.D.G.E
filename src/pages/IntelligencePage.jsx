import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function IntelligencePage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-charcoal to-fog pt-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto py-16">
        <h1 className="text-6xl font-display text-text-primary mb-6">
          Intelligence Models
        </h1>
        <p className="text-xl text-text-muted mb-12 max-w-3xl">
          EDGE employs sophisticated analytical frameworks to model cognitive exhaustion as a continuous, measurable process.
        </p>

        {/* Model Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-secondary/50 border border-fog/40 rounded-lg p-8"
          >
            <h3 className="text-2xl font-display text-flame mb-4">
              Temporal Bayesian Networks
            </h3>
            <p className="text-text-muted mb-4">
              Probabilistic models that capture temporal dependencies in behavioral patterns
            </p>
            <div className="font-mono text-sm text-text-muted bg-dark-primary/50 p-4 rounded">
              P(Burnout<sub>t</sub> | Load<sub>t-1</sub>, Recovery<sub>t-1</sub>)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-secondary/50 border border-fog/40 rounded-lg p-8"
          >
            <h3 className="text-2xl font-display text-flame mb-4">
              Cognitive Load Modeling
            </h3>
            <p className="text-text-muted mb-4">
              Quantifies accumulated strain from sustained effort over time
            </p>
            <div className="font-mono text-sm text-text-muted bg-dark-primary/50 p-4 rounded">
              CL(t) = ∫ effort(τ) · decay(t-τ) dτ
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-secondary/50 border border-fog/40 rounded-lg p-8"
          >
            <h3 className="text-2xl font-display text-flame mb-4">
              Risk Trajectory Prediction
            </h3>
            <p className="text-text-muted mb-4">
              Forecasts burnout likelihood across multiple time horizons
            </p>
            <div className="font-mono text-sm text-text-muted bg-dark-primary/50 p-4 rounded">
              Risk(t+Δ) = f(Load<sub>current</sub>, Trend, Context)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-secondary/50 border border-fog/40 rounded-lg p-8"
          >
            <h3 className="text-2xl font-display text-flame mb-4">
              Recovery Optimization
            </h3>
            <p className="text-text-muted mb-4">
              Determines optimal intervention timing and intensity
            </p>
            <div className="font-mono text-sm text-text-muted bg-dark-primary/50 p-4 rounded">
              Intervention* = argmax E[Recovery | Action, State]
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 flex gap-6"
        >
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-flame text-white rounded-lg font-body font-medium hover:bg-flame-dark transition-colors"
          >
            View Dashboard
          </Link>
          <Link
            to="/"
            className="px-8 py-3 border-2 border-flame text-flame rounded-lg font-body font-medium hover:bg-flame hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default IntelligencePage
