import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function DashboardPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-fog to-clarity pt-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-6xl font-display text-gray-900 mb-6">
          Dashboard
        </h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          Real-time monitoring and personalized insights for burnout prevention.
        </p>

        {/* Dashboard Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 border border-gray-300 rounded-lg p-6"
          >
            <div className="text-sm text-gray-600 mb-2">Current Risk Level</div>
            <div className="font-mono text-4xl text-flame mb-2">0.42</div>
            <div className="text-xs text-gray-600">Moderate — Monitor closely</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/70 border border-gray-300 rounded-lg p-6"
          >
            <div className="text-sm text-gray-600 mb-2">Cognitive Load Index</div>
            <div className="font-mono text-4xl text-flame mb-2">0.68</div>
            <div className="text-xs text-gray-600">Elevated — Consider break</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/70 border border-gray-300 rounded-lg p-6"
          >
            <div className="text-sm text-gray-600 mb-2">Recovery Time Est.</div>
            <div className="font-mono text-4xl text-flame mb-2">4.2d</div>
            <div className="text-xs text-gray-600">With current intervention</div>
          </motion.div>
        </div>

        {/* Prediction Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 border border-gray-300 rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-display text-gray-900 mb-6">
            14-Day Risk Trajectory
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-600">Interactive chart visualization</p>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/70 border border-gray-300 rounded-lg p-8"
        >
          <h2 className="text-2xl font-display text-gray-900 mb-6">
            Personalized Recommendations
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-flame font-mono mr-3">→</span>
              <div>
                <strong className="text-gray-900">Schedule Recovery Block</strong>
                <p className="text-sm text-gray-700">Thursday 2-4 PM optimal for low-intensity activities</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-flame font-mono mr-3">→</span>
              <div>
                <strong className="text-gray-900">Reduce Meeting Load</strong>
                <p className="text-sm text-gray-700">Current pace unsustainable — aim for 20% reduction</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-flame font-mono mr-3">→</span>
              <div>
                <strong className="text-gray-900">Monitor Sleep Patterns</strong>
                <p className="text-sm text-gray-700">Correlation detected with increased cognitive load</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <Link
            to="/"
            className="px-8 py-3 border-2 border-flame text-flame rounded-lg font-body font-medium hover:bg-flame hover:text-white transition-colors inline-block"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DashboardPage
