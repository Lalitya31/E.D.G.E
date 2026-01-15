import React from 'react'
import { motion, useTransform } from 'framer-motion'

function Recovery({ scrollProgress }) {
  const opacity = useTransform(scrollProgress, [0.55, 0.7], [0, 1])
  const y = useTransform(scrollProgress, [0.55, 0.7], [50, 0])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-section font-display text-gray-900 mb-4">
          Recovery
        </h2>
        <p className="text-lg font-body text-gray-800 mb-12 max-w-2xl">
          Restoration requires calibrated intervention, not arbitrary rest.
        </p>

        <div className="space-y-8">
          {/* Recovery metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-gray-500/40">
              <div className="font-mono text-3xl text-flame-dark mb-2">72%</div>
              <div className="text-sm text-gray-900">Recovery Rate</div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-gray-500/40">
              <div className="font-mono text-3xl text-flame-dark mb-2">5.2d</div>
              <div className="text-sm text-gray-900">Avg Recovery Time</div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-gray-500/40">
              <div className="font-mono text-3xl text-flame-dark mb-2">0.89</div>
              <div className="text-sm text-gray-900">Intervention Accuracy</div>
            </div>
          </div>

          {/* Recovery principles */}
          <div className="bg-white/30 backdrop-blur-sm p-8 rounded-lg border border-gray-500/40">
            <h3 className="text-2xl font-display text-gray-900 mb-6">
              Intelligent Recovery Calibration
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-flame-dark mr-3 font-mono">→</span>
                <p className="text-gray-800">
                  <strong className="text-gray-900">Adaptive Pacing:</strong> Adjusts workload based on real-time cognitive capacity
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-flame-dark mr-3 font-mono">→</span>
                <p className="text-gray-800">
                  <strong className="text-gray-900">Temporal Optimization:</strong> Identifies optimal intervention windows
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-flame-dark mr-3 font-mono">→</span>
                <p className="text-gray-800">
                  <strong className="text-gray-900">Progression Tracking:</strong> Validates recovery through behavioral markers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Recovery
