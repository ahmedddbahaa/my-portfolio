import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem, fadeUpVariants } from '../hooks/useScrollReveal'

const highlights = [
  'Short-form content that stops the scroll',
  'Long-form storytelling for YouTube & podcasts',
  'Documentary-style editing with cinematic depth',
  'Brand videos that build trust and convert',
]

export default function About() {
  const { ref, controls } = useScrollReveal()
  const { ref: ref2, controls: controls2 } = useScrollReveal()

  return (
    <section id="about" className="py-32 bg-noir-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gold/3 to-transparent rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — visual */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUpVariants}
            className="relative"
          >
            {/* Main portrait frame */}
            <div className="relative aspect-[3/4] max-w-md">
              {/* Corner frames */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold" />

              {/* Background fill */}
              <div className="absolute inset-3 bg-carbon overflow-hidden">
                {/* Cinematic visual placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-noir-mid via-carbon to-noir-mid" />
                {/* Film strip decoration */}
                <div className="absolute inset-0 opacity-20 film-line" />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M6 8h20v16H6V8zm7 5l7 4-7 4V13z" fill="#c9a96e" opacity="0.8"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute -inset-4 rounded-full border border-gold/10" />
                  </div>
                  <div className="text-center">
                    <div className="font-display text-2xl text-cream mb-1">7+ Years</div>
                    <div className="font-mono text-xs text-gold/60 tracking-wide">In The Craft</div>
                  </div>
                </div>

                {/* Scan lines effect */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 bottom-16 bg-noir border border-gold/30 px-5 py-3 glow-gold"
              >
                <div className="font-mono text-xs text-gold tracking-wide">Available for work</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-ash">Open to projects</span>
                </div>
              </motion.div>
            </div>

            {/* Years label */}
            <div className="absolute -left-6 top-1/3 hidden lg:flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/40" />
              <span className="font-mono text-[10px] text-gold/40 tracking-ultra rotate-90 whitespace-nowrap">
                Since 2017
              </span>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="divider" />
              <span className="section-label">About Me</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="heading-lg text-cream">
              Turning Raw Footage
              <br />
              Into <em className="text-gold not-italic">Lasting Impact</em>
            </motion.h2>

            <motion.p variants={staggerItem} className="body-text">
              I am a Cairo-based video editor specializing in crafting content that performs —
              not just content that looks good. Over 7+ years, I have helped creators, educators,
              and brands build audiences that genuinely care about what they put out.
            </motion.p>

            <motion.p variants={staggerItem} className="body-text">
              My work spans viral short-form reels, full documentary series, branded campaigns,
              and everything in between. I understand pacing, emotion, and the invisible architecture
              that keeps viewers locked in until the final frame.
            </motion.p>

            {/* Highlights */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3 mt-2">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-2 w-4 h-px bg-gold group-hover:w-8 transition-all duration-300" />
                  <span className="font-body text-silver text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={staggerItem}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline mt-4"
              >
                <span>Let's Work Together</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
