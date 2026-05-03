import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-noir border-t border-carbon py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 border border-gold/60 rotate-45" />
              <div className="absolute inset-[4px] bg-gold/60 rotate-45" />
            </div>
            <span className="font-mono text-xs tracking-ultra text-ash uppercase">Frame &amp; Flow</span>
          </div>

          {/* Center */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/201122604563"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ash/60 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              WhatsApp
            </a>
            <span className="w-px h-3 bg-carbon" />
            <a
              href="tel:+201122604563"
              className="font-mono text-xs text-ash/60 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              +20 112 260 4563
            </a>
            <span className="w-px h-3 bg-carbon" />
            <span className="font-mono text-xs text-ash/60 tracking-wide">Cairo, Egypt</span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-ash/30 tracking-wide">
            &copy; {year} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
