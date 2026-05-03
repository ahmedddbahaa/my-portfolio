import React from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal'

const skillGroups = [
  {
    category: 'Editing Software',
    skills: [
      { name: 'Adobe Premiere Pro', level: 98 },
      { name: 'Adobe After Effects', level: 90 },
      { name: 'DaVinci Resolve', level: 85 },
      { name: 'Final Cut Pro', level: 78 },
    ],
  },
  {
    category: 'Creative Skills',
    skills: [
      { name: 'Color Grading', level: 92 },
      { name: 'Motion Graphics', level: 88 },
      { name: 'Sound Design', level: 85 },
      { name: 'Storytelling & Pacing', level: 97 },
    ],
  },
  {
    category: 'Platforms & Formats',
    skills: [
      { name: 'YouTube / Long-form', level: 96 },
      { name: 'Instagram Reels', level: 95 },
      { name: 'TikTok', level: 90 },
      { name: 'Documentary', level: 88 },
    ],
  },
]

const tools = [
  'Adobe Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Final Cut Pro',
  'Photoshop',
  'Illustrator',
  'Audition',
  'Capcut',
]

export default function Skills() {
  const { ref, controls } = useScrollReveal()

  return (
    <section id="skills" className="py-32 bg-noir relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-gold/3 to-transparent rounded-full" />

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
            <span className="section-label">Expertise</span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="heading-lg text-cream">
            The Tools Behind
            <br />
            <em className="text-gold not-italic">The Vision</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Skill bars */}
          <div className="flex flex-col gap-14">
            {skillGroups.map((group, gi) => (
              <SkillGroup key={gi} group={group} groupIndex={gi} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-14">
            {/* Tools cloud */}
            <ToolsCloud />

            {/* Process steps */}
            <ProcessSteps />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, groupIndex }) {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <motion.h3 variants={staggerItem} className="font-mono text-xs text-gold tracking-ultra uppercase mb-6">
        {group.category}
      </motion.h3>
      <div className="flex flex-col gap-5">
        {group.skills.map((skill, i) => (
          <motion.div key={i} variants={staggerItem}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm text-silver">{skill.name}</span>
              <span className="font-mono text-xs text-gold/60">{skill.level}%</span>
            </div>
            <div className="h-px bg-carbon relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 1.2, delay: i * 0.1 + groupIndex * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/60 to-gold"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ToolsCloud() {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <motion.h3 variants={staggerItem} className="font-mono text-xs text-gold tracking-ultra uppercase mb-6">
        Tools & Software
      </motion.h3>
      <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
        {tools.map((tool, i) => (
          <motion.span
            key={i}
            variants={staggerItem}
            className="font-mono text-xs text-ash border border-carbon px-4 py-2 hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
          >
            {tool}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

function ProcessSteps() {
  const { ref, controls } = useScrollReveal()
  const steps = [
    { num: '01', title: 'Brief & Vision', desc: 'Understanding your goals, audience, and desired outcomes.' },
    { num: '02', title: 'Edit & Craft', desc: 'Turning raw footage into a compelling, well-paced story.' },
    { num: '03', title: 'Refine & Deliver', desc: 'Revisions, color grading, and clean final delivery.' },
  ]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
    >
      <motion.h3 variants={staggerItem} className="font-mono text-xs text-gold tracking-ultra uppercase mb-6">
        My Process
      </motion.h3>
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="flex gap-6 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center border border-carbon group-hover:border-gold/40 transition-colors duration-300 flex-shrink-0">
                <span className="font-mono text-[10px] text-gold/60">{step.num}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 my-2 bg-gradient-to-b from-carbon to-transparent" />
              )}
            </div>
            <div className={`pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
              <h4 className="font-display text-base text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h4>
              <p className="font-body text-xs text-ash leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
