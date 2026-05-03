import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-noir/90 backdrop-blur-xl border-b border-carbon/60' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border border-gold rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
              <div className="absolute inset-[5px] bg-gold rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
            </div>
            <span className="font-mono text-xs tracking-ultra text-silver uppercase">
              Frame&nbsp;&amp;&nbsp;Flow
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="font-body text-sm text-ash hover:text-gold tracking-wide transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/201122604563"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-gold/40 text-gold text-xs font-mono tracking-wide uppercase hover:bg-gold hover:text-noir transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-ring" />
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-end"
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-silver transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`} />
            <span className={`block h-px bg-silver transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-px bg-silver transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-5'}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-noir flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-display text-4xl font-light text-cream hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <a
                  href="https://wa.me/201122604563"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 btn-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
