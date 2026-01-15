import React from 'react'
import { motion, useTransform } from 'framer-motion'

function Detection({ scrollProgress }) {
  const opacity = useTransform(scrollProgress, [0.35, 0.5], [0, 1])
  const y = useTransform(scrollProgress, [0.35, 0.5], [50, 0])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        style={{ opacity, y }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-section font-display text-text-primary mb-4">
          Detection
        </h2>
        <p className="text-lg font-body text-text-muted mb-12 max-w-2xl">
          Early warning signals emerge before collapse.
        </p>

        {/* Visual timeline/graph placeholder */}
        <div className="bg-charcoal/30 rounded-lg p-8 border border-fog/20">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display text-text-primary mb-2">
                Prediction Trajectories
              </h3>
              <p className="text-sm font-body text-text-muted mb-4">
                EDGE models cumulative strain and forecasts critical thresholds
              </p>
              
              {/* Simple graph representation */}
              <div className="relative h-48 bg-dark-secondary/50 rounded border border-fog/10 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 200">
                  <defs>
                    <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E69138" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#B45F06" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Risk curve */}
                  <path
                    d="M 50 150 Q 200 140, 300 120 T 550 60"
                    stroke="url(#riskGradient)"
                    strokeWidth="3"
                    fill="none"
                  />
                  
                  {/* Threshold line */}
                  <line
                    x1="50"
                    y1="80"
                    x2="550"
                    y2="80"
                    stroke="#F6B26B"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.4"
                  />
                  
                  {/* Axis labels */}
                  <text x="50" y="190" className="text-xs" fill="#9CA3AF">Day 0</text>
                  <text x="500" y="190" className="text-xs" fill="#9CA3AF">Day 14</text>
                  <text x="10" y="85" className="text-xs" fill="#F6B26B">Threshold</text>
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-dark-secondary/30 p-6 rounded border border-fog/10">
                <h4 className="font-display text-lg text-text-primary mb-2">
                  Recovery Intelligence
                </h4>
                <p className="text-sm text-text-muted">
                  Recommends intervention timing and intensity calibration
                </p>
              </div>
              
              <div className="bg-dark-secondary/30 p-6 rounded border border-fog/10">
                <h4 className="font-display text-lg text-text-primary mb-2">
                  Signal Extraction
                </h4>
                <p className="text-sm text-text-muted">
                  Isolates burnout indicators from noise in behavioral data
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Detection
