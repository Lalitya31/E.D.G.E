import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ArchitecturePage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-dark-primary to-charcoal pt-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl font-display text-text-primary mb-6">
            System Architecture
          </h1>
          <p className="text-xl text-text-muted mb-12 max-w-3xl">
            EDGE is built on a modular, intelligence-driven architecture designed for precision, scalability, and clinical validity.
          </p>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-12">
          {/* Layer 1: Data Ingestion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-charcoal/50 border border-fog/30 rounded-lg p-8"
          >
            <h2 className="text-3xl font-display text-flame mb-4">
              01. Data Ingestion Layer
            </h2>
            <p className="text-text-muted mb-4">
              Multi-source behavioral data streams collected through non-invasive integration
            </p>
            <ul className="space-y-2 text-text-muted">
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Activity tracking APIs (calendar, communication, task management)
              </li>
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Temporal pattern extraction and normalization
              </li>
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Privacy-preserving data aggregation
              </li>
            </ul>
          </motion.div>

          {/* Layer 2: Intelligence Engine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-charcoal/50 border border-fog/30 rounded-lg p-8"
          >
            <h2 className="text-3xl font-display text-flame mb-4">
              02. Intelligence Engine
            </h2>
            <p className="text-text-muted mb-4">
              Core analytical models for burnout detection and prediction
            </p>
            <ul className="space-y-2 text-text-muted">
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Temporal Bayesian Networks for trajectory modeling
              </li>
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Cognitive load accumulation algorithms
              </li>
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Risk threshold calibration and uncertainty quantification
              </li>
            </ul>
          </motion.div>

          {/* Layer 3: Intervention System */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-charcoal/50 border border-fog/30 rounded-lg p-8"
          >
            <h2 className="text-3xl font-display text-flame mb-4">
              03. Intervention System
            </h2>
            <p className="text-text-muted mb-4">
              Adaptive recommendations for recovery and workload adjustment
            </p>
            <ul className="space-y-2 text-text-muted">
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Personalized intervention timing optimization
              </li>
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Recovery protocol generation based on severity
              </li>
              <li className="flex items-start">
                <span className="text-flame mr-3">→</span>
                Outcome tracking and model refinement
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex gap-6"
        >
          <Link
            to="/intelligence"
            className="px-8 py-3 bg-flame text-white rounded-lg font-body font-medium hover:bg-flame-dark transition-colors"
          >
            View Intelligence Models
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

export default ArchitecturePage
