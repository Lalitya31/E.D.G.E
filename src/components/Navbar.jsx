import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

function Navbar() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const isHomePage = location.pathname === '/'

  // Only apply scroll-based styles on home page
  const navBackground = isHomePage
    ? useTransform(
        scrollYProgress,
        [0, 0.1, 0.5, 0.8],
        [
          'rgba(14, 15, 19, 0)',
          'rgba(14, 15, 19, 0.8)',
          'rgba(62, 65, 72, 0.9)',
          'rgba(244, 241, 236, 0.95)'
        ]
      )
    : 'rgba(14, 15, 19, 0.95)'

  const textColor = isHomePage
    ? useTransform(
        scrollYProgress,
        [0, 0.7, 0.8],
        ['#F4F1EC', '#F4F1EC', '#16181D']
      )
    : '#F4F1EC'

  const borderColor = isHomePage
    ? useTransform(
        scrollYProgress,
        [0, 0.1, 0.8],
        ['rgba(244, 241, 236, 0)', 'rgba(244, 241, 236, 0.1)', 'rgba(22, 24, 29, 0.1)']
      )
    : 'rgba(244, 241, 236, 0.1)'

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Architecture', href: '/architecture' },
    { label: 'Intelligence', href: '/intelligence' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Team', href: '/team' }
  ]

  return (
    <motion.nav
      style={{ 
        backgroundColor: navBackground,
        borderBottomColor: borderColor
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              style={{ color: textColor }}
              className="font-display text-xl tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
            >
              EDGE
            </motion.div>
          </Link>

          {/* Navigation items */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li key={index}>
                <Link to={item.href}>
                  <motion.div
                    style={{ color: textColor }}
                    className={`font-body text-sm hover:opacity-70 transition-opacity ${
                      location.pathname === item.href ? 'opacity-100 font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button (simplified) */}
          <motion.button
            style={{ color: textColor }}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
