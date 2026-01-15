import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function TeamPage() {
  const team = [
    {
      name: 'Your Name',
      role: 'Research Lead',
      focus: 'Burnout modeling & system design'
    },
    {
      name: 'Team Member',
      role: 'ML Engineer',
      focus: 'Temporal prediction algorithms'
    },
    {
      name: 'Team Member',
      role: 'Frontend Developer',
      focus: 'Interface design & visualization'
    }
  ]

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-clarity to-white pt-24 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto py-16">
        <h1 className="text-6xl font-display text-gray-900 mb-6">
          Team
        </h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl">
          EDGE is built by researchers and engineers committed to evidence-based burnout prevention.
        </p>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white/70 border border-gray-300 rounded-lg p-6 text-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-display text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-flame font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-700">
                {member.focus}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 border border-gray-300 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-display text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            Interested in collaboration, research partnerships, or have questions about EDGE?
          </p>
          <a
            href="mailto:team@edge-project.com"
            className="px-8 py-3 bg-flame text-white rounded-lg font-body font-medium hover:bg-flame-dark transition-colors inline-block"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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

export default TeamPage
