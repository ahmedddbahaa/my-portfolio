import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal'

const services = [
  {
    number: '01',
    title: 'Short-Form & Reels',
    description:
      'Fast-paced, scroll-stopping edits engineered for Instagram Reels, TikTok, and YouTube Shorts. Every second earns its place.',
    tags: ['Instagram Reels', 'TikTok', 'YT Shorts'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="20" rx="2" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M11 10l7 4-7 4V10z" fill="#c9a96e"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'YouTube & Podcasts',
    description:
      'Long-form edits that maintain attention throughout — smart cuts, dynamic graphics, and polished sound design.',
    tags: ['YouTube', 'Podcasts', 'Documentaries'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#c9a96e" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" fill="#c9a96e" opacity="0.6"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Brand & Commercial',
    description:
      'High-impact brand videos, product showcases, and ad creatives that build authority and drive measurable results.',
    tags: ['Brand Films', 'Ads', 'Product Videos'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L14 6l10 14H4z" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="14" cy="12" r="2" fill="#c9a96e"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Documentary & Storytelling',
    description:
      'Deep narrative editing for documentary series, educational content, and long-form stories that create genuine emotional impact.',
    tags: ['Documentary', 'Education', 'Narrative'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20M4 10h16M4 14h20M4 18h12" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="20" r="4" fill="#c9a96e" opacity="0.2" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M20.5 20l1 1 2-2" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Color Grading',
    description:
      'Cinematic color work that establishes mood, enhances brand identity, and makes every frame look intentionally crafted.',
    tags: ['Color Grading', 'LUTs', 'Cinematics'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="14" r="6" stroke="#c9a96e" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="18" cy="14" r="6" stroke="#c9a96e" strokeWidth="1.5" opacity="0.7"/>
        <path d="M14 10a6 6 0 010 8" fill="#c9a96e" opacity="0.3"/>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Motion Graphics',
    description:
      'Custom animated titles, lower thirds, transitions, and visual elements that give your content a professional edge.',
    tags: ['Motion Design', 'Animations', 'Titles'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="8" height="8" rx="1" stroke="#c9a96e" strokeWidth="1.5"/>
        <rect x="17" y="12" width="8" height="8" rx="1" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M11 12l6 2" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="services" className="py-32 bg-noir relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#c9a96e 1px, transparent 1px), linear-gradient(90deg, #c9a96e 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-6">
            <div className="divider" />
            <span className="section-label">What I Do</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="heading-lg text-cream max-w-2xl">
            Services Built for
            <br />
            <em className="text-gold not-italic">Real Results</em>
          </motion.h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon/40">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-noir p-8 hover:bg-noir-mid transition-colors duration-500 cursor-default overflow-hidden"
    >
      {/* Hover border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-all duration-500" />

      {/* Background glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/30 to-transparent transition-all duration-500" />

      <div className="relative z-10">
        {/* Number */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-carbon-light group-hover:border-gold/30 transition-colors duration-300">
            {service.icon}
          </div>
          <span className="font-mono text-xs text-carbon-light group-hover:text-gold/30 transition-colors duration-300">
            {service.number}
          </span>
        </div>

        <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>

        <p className="font-body text-sm text-ash leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, j) => (
            <span
              key={j}
              className="font-mono text-[10px] text-ash/60 tracking-wide border border-carbon px-3 py-1 group-hover:border-gold/20 group-hover:text-gold/60 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
