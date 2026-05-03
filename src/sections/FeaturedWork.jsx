import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal'

const categories = ['All', 'Short-Form', 'YouTube & Podcast', 'Documentary', 'Brand', 'Educational']

const projects = [
  // Short-form
  {
    id: 1,
    client: 'Akwa Tips',
    handle: '@akwatips',
    category: 'Short-Form',
    platform: 'Instagram / TikTok',
    description: 'High-retention Reels and short-form content with fast-cut edits, dynamic text overlays, and trend-driven pacing that consistently grow engagement.',
    color: '#1a1205',
    accentColor: '#c9a96e',
    link: 'https://www.instagram.com/akwatips',
    icon: 'SF',
  },
  {
    id: 2,
    client: 'Ahmed Talaat',
    handle: '@ahmedtalaat_bta3ektsad',
    category: 'Short-Form',
    platform: 'Instagram / TikTok',
    description: 'Economics and finance content transformed into engaging, bite-sized Reels. Clean editing with motion graphics that make complex ideas accessible.',
    color: '#0d1a0d',
    accentColor: '#6ea96e',
    link: 'https://www.instagram.com/ahmedtalaat_bta3ektsad',
    icon: 'AT',
  },
  {
    id: 3,
    client: 'Dr. Sherif Arafa',
    handle: '@dr.sherif_arafa',
    category: 'Short-Form',
    platform: 'Instagram',
    description: 'Professional content for a thought leader — polished editing with branded intros, captions, and a consistent visual identity across all Reels.',
    color: '#0d0d1a',
    accentColor: '#6e8ac9',
    link: 'https://www.instagram.com/dr.sherif_arafa',
    icon: 'SA',
  },
  {
    id: 4,
    client: 'Ahmed El-Dokhmesy',
    handle: '@ahmedeldokhmesyoffical',
    category: 'Short-Form',
    platform: 'Instagram / TikTok',
    description: 'Viral short-form edits with signature transitions, sound design, and pacing engineered to maximize watch time and shares.',
    color: '#1a0d0d',
    accentColor: '#c96e6e',
    link: 'https://www.instagram.com/ahmedeldokhmesyoffical',
    icon: 'AE',
  },

  // YouTube & Podcasts
  {
    id: 5,
    client: 'Afedona',
    handle: 'Afedona',
    category: 'YouTube & Podcast',
    platform: 'YouTube',
    description: 'Long-form YouTube content with strategic editing that keeps viewers watching. Chapter-driven flow, strong B-roll, and sound design that elevates the story.',
    color: '#150808',
    accentColor: '#c96e6e',
    link: 'https://www.youtube.com/@afedona',
    icon: 'AF',
  },
  {
    id: 6,
    client: "Bta3 Ektsad",
    handle: 'Bta3 Ektsad',
    category: 'YouTube & Podcast',
    platform: 'YouTube',
    description: 'Economics education channel — structured podcast-style edits with motion graphics, data visualizations, and a professional broadcast aesthetic.',
    color: '#0d1507',
    accentColor: '#7ec96e',
    link: 'https://www.youtube.com/@bta3ektsad',
    icon: 'BE',
  },
  {
    id: 7,
    client: 'Akwa Tips (YT)',
    handle: 'Akwa Tips YouTube',
    category: 'YouTube & Podcast',
    platform: 'YouTube',
    description: 'Full-length YouTube productions with branded packaging, custom intros, and editing that builds a loyal, returning subscriber base.',
    color: '#1a1205',
    accentColor: '#c9a96e',
    link: 'https://www.youtube.com/@akwatips',
    icon: 'AK',
  },
  {
    id: 8,
    client: 'Shaaban Network',
    handle: 'shaaban-networkmarketing',
    category: 'YouTube & Podcast',
    platform: 'YouTube',
    description: 'Network marketing educational content — dynamic editing with testimonials, data graphics, and calls to action woven naturally into the narrative.',
    color: '#0a0a15',
    accentColor: '#8e6ec9',
    link: 'https://www.youtube.com/@shaaban-networkmarketing',
    icon: 'SN',
  },
  {
    id: 9,
    client: 'Hamza Zidan',
    handle: 'hamza-zidan',
    category: 'YouTube & Podcast',
    platform: 'YouTube',
    description: 'Podcast production with multi-cam switching, clean sound design, and engaging visual inserts that transform audio conversations into watchable video.',
    color: '#0d1515',
    accentColor: '#6ec9c9',
    link: 'https://www.youtube.com/@hamza-zidan',
    icon: 'HZ',
  },

  // Documentary
  {
    id: 10,
    client: 'Mata33 Aklak',
    handle: 'mata33a2lak',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Documentary-style storytelling with cinematic color grading, immersive soundscapes, and narrative pacing that keeps viewers captivated for the full duration.',
    color: '#0f0c04',
    accentColor: '#c9b46e',
    link: 'https://www.youtube.com/@mata33a2lak',
    icon: 'MA',
  },
  {
    id: 11,
    client: 'Facts & Secret',
    handle: 'factsandsecret',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Investigative documentary content with dramatic pacing, archive footage integration, and visual storytelling that builds tension and intrigue.',
    color: '#0a0a12',
    accentColor: '#9e6ec9',
    link: 'https://www.youtube.com/@factsandsecret',
    icon: 'FS',
  },
  {
    id: 12,
    client: 'Hayah Book',
    handle: 'hayahbook',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Book summaries and educational documentaries — rich visual metaphors, illustrated animations, and narration editing that makes ideas come alive.',
    color: '#0d1209',
    accentColor: '#86c96e',
    link: 'https://www.youtube.com/@hayahbook',
    icon: 'HB',
  },
  {
    id: 13,
    client: 'Mlaf Sha2eka',
    handle: 'mlfatsha2eka',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Real estate and property documentary series — location footage, interviews, and infographics combined into polished investigative content.',
    color: '#121009',
    accentColor: '#c9bc6e',
    link: 'https://www.youtube.com/@mlfatsha2eka',
    icon: 'MS',
  },
  {
    id: 14,
    client: 'Dark Docs',
    handle: 'darkdocs01',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Dark documentary channel with atmospheric editing, cinematic color grading in deep moodscapes, and a signature visual style built for high retention.',
    color: '#080810',
    accentColor: '#6e80c9',
    link: 'https://www.youtube.com/@darkdocs01',
    icon: 'DD',
  },
  {
    id: 15,
    client: 'Wealth School',
    handle: 'wealthschool2',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Financial education documentaries combining expert interviews, data visualization, and compelling narrative structure to build financial literacy.',
    color: '#0d100a',
    accentColor: '#8dc96e',
    link: 'https://www.youtube.com/@wealthschool2',
    icon: 'WS',
  },
  {
    id: 16,
    client: 'Khattab Story',
    handle: 'khattabstory',
    category: 'Documentary',
    platform: 'YouTube',
    description: 'Historical storytelling channel — archival research visuals, dramatic narration editing, and a cinematic approach to bringing history to life.',
    color: '#120c05',
    accentColor: '#c9956e',
    link: 'https://www.youtube.com/@khattabstory',
    icon: 'KS',
  },

  // Brand
  {
    id: 17,
    client: 'Abu Daif',
    handle: 'abu-daif.com',
    category: 'Brand',
    platform: 'Brand Video',
    description: 'E-commerce brand video production — product showcases, testimonials, and ad creatives with premium visuals that drive conversion and build brand authority.',
    color: '#100a0a',
    accentColor: '#c96e6e',
    link: 'http://abu-daif.com',
    icon: 'AD',
  },
  {
    id: 18,
    client: 'Woolen Silk',
    handle: 'woolensilk.com',
    category: 'Brand',
    platform: 'Brand Video',
    description: 'Fashion and textile brand content with luxurious visual treatment — cinematic product shots, elegant transitions, and a brand aesthetic that signals premium quality.',
    color: '#0a0a10',
    accentColor: '#c9a96e',
    link: 'http://woolensilk.com',
    icon: 'WL',
  },

  // Educational
  {
    id: 19,
    client: 'Educational Page',
    handle: 'Facebook Education',
    category: 'Educational',
    platform: 'Facebook',
    description: 'Educational Facebook content — structured video lessons with animated callouts, clean text overlays, and editing designed for maximum audience retention and sharing.',
    color: '#081015',
    accentColor: '#6e9ec9',
    link: '#',
    icon: 'EP',
  },
]

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, controls } = useScrollReveal()

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="work" className="py-32 bg-noir-light relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mb-14"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-4 mb-6">
            <div className="divider" />
            <span className="section-label">Portfolio</span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 variants={staggerItem} className="heading-lg text-cream">
              Featured Work
            </motion.h2>
            <motion.p variants={staggerItem} className="body-text max-w-sm text-sm">
              A selection of projects across creators, brands, and platforms.
            </motion.p>
          </div>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-wide px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-carbon text-ash hover:border-gold/40 hover:text-silver'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative overflow-hidden cursor-pointer"
      style={{ backgroundColor: project.color }}
    >
      {/* Thumbnail area */}
      <div className="relative h-52 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${project.accentColor}22 0%, ${project.color} 60%)`,
          }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)',
          }}
        />

        {/* Client monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={hovered ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div
              className="w-20 h-20 flex items-center justify-center border"
              style={{ borderColor: project.accentColor + '40' }}
            >
              <span
                className="font-display text-3xl font-light"
                style={{ color: project.accentColor }}
              >
                {project.icon}
              </span>
            </div>
            <span
              className="font-mono text-xs tracking-ultra"
              style={{ color: project.accentColor + '80' }}
            >
              {project.platform}
            </span>
          </motion.div>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: project.color + 'ee' }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border font-mono text-xs tracking-wide uppercase transition-all duration-300"
            style={{ borderColor: project.accentColor + '60', color: project.accentColor }}
            onClick={(e) => e.stopPropagation()}
          >
            View Profile
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Category badge */}
        <div
          className="absolute top-4 left-4 font-mono text-[10px] tracking-wide px-3 py-1"
          style={{ backgroundColor: project.accentColor + '20', color: project.accentColor }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 border-t" style={{ borderColor: project.accentColor + '20' }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors duration-300">
              {project.client}
            </h3>
            <span className="font-mono text-xs text-ash/60">{project.handle}</span>
          </div>
          <motion.div
            animate={hovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H7M13 3v6" stroke={project.accentColor} strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>

        <p className="font-body text-xs text-ash leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.article>
  )
}
