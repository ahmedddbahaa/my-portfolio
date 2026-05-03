import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal'

const reasons = [
  {
    title: 'Performance-Driven Thinking',
    description:
      'Every edit decision is made with retention and engagement in mind. I do not just make videos look good — I make them perform.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 9-9" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 7h6v6" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Deep Platform Knowledge',
    description:
      'I understand the algorithms, attention patterns, and content formats of YouTube, Instagram, TikTok, and Facebook — and edit accordingly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M12 3a9 9 0 010 18M3 12h18" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M12 3c-2 4-2 12 0 18M12 3c2 4 2 12 0 18" stroke="#c9a96e" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Consistent, Reliable Delivery',
    description:
      'Deadlines are kept. Communication is clear. I operate as a professional partner, not just a freelancer.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M8 2v4M16 2v4M3 9h18" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14l2.5 2.5 5-5" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Storytelling at the Core',
    description:
      'I believe great editing is invisible — the audience should feel the story, not notice the cut. Pacing, emotion, and flow are never an afterthought.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 22V12M4 7l8 5 8-5" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Cinematic Quality Standards',
    description:
      'Whether it is a 30-second Reel or a 30-minute documentary, every project receives the same level of craft and attention to visual quality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 10l5-3v10l-5-3V10zM3 7h12v10H3V7z" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="8" cy="4" r="1.5" fill="#c9a96e" opacity="0.6"/>
        <circle cx="12" cy="4" r="1.5" fill="#c9a96e" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    description:
      'Working with high-performing creators and brands whose content reaches millions of combined views. Results speak for themselves.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" stroke="#c9a96e" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const socialProofItems = [
  'Millions of combined views across platforms',
  'Worked with high-performing creators and brands',
  'Content reaching large engaged audiences',
]

export default function WhyChooseMe() {
  const { ref, controls } = useScrollReveal()

  return (
    <section className="py-32 bg-noir-light relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Social proof banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 p-8 border border-gold/20 bg-gold/3 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {socialProofItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 ${i < socialProofItems.length - 1 ? 'md:pr-8 md:border-r md:border-carbon' : ''} ${i > 0 ? 'md:pl-8' : ''}`}
              >
                <div className="flex-shrink-0 mt-1 w-4 h-px bg-gold mt-3" />
                <span className="font-body text-sm text-silver leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-6">
            <div className="divider" />
            <span className="section-label">Why Work With Me</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="heading-lg text-cream max-w-2xl">
            Not Just an Editor —
            <br />
            <em className="text-gold not-italic">A Creative Partner</em>
          </motion.h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason, index }) {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col gap-5 p-6 border border-transparent hover:border-gold/15 transition-all duration-500 hover:bg-noir"
    >
      <div className="w-12 h-12 flex items-center justify-center border border-carbon group-hover:border-gold/30 transition-colors duration-300">
        {reason.icon}
      </div>
      <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors duration-300">
        {reason.title}
      </h3>
      <p className="font-body text-sm text-ash leading-relaxed">
        {reason.description}
      </p>
    </motion.div>
  )
}
