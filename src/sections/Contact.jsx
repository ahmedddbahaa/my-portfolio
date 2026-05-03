import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal, staggerContainer, staggerItem } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, controls } = useScrollReveal()
  const [formState, setFormState] = useState({ name: '', email: '', project: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hello! I'm ${formState.name}.\n\nProject: ${formState.project}\n\n${formState.message}\n\nEmail: ${formState.email}`
    )
    window.open(`https://wa.me/201122604563?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 bg-noir relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#c9a96e 1px, transparent 1px), linear-gradient(90deg, #c9a96e 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/4 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div variants={staggerItem} className="flex items-center gap-4">
              <div className="divider" />
              <span className="section-label">Contact</span>
            </motion.div>

            <motion.h2 variants={staggerItem} className="heading-lg text-cream">
              Ready to Create
              <br />
              <em className="text-gold not-italic">Something Great?</em>
            </motion.h2>

            <motion.p variants={staggerItem} className="body-text max-w-md">
              Whether you have a clear brief or just an idea — let's talk.
              I work with creators, brands, and agencies across all formats.
            </motion.p>

            {/* Contact info */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-6 mt-4">
              {/* WhatsApp — primary */}
              <motion.a
                variants={staggerItem}
                href="https://wa.me/201122604563"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a96e">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-gold/60 tracking-wide uppercase mb-1">WhatsApp (Preferred)</div>
                  <div className="font-body text-silver group-hover:text-gold transition-colors duration-300">
                    +20 112 260 4563
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                variants={staggerItem}
                href="tel:+201122604563"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-carbon group-hover:border-gold/30 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-ash/40 tracking-wide uppercase mb-1">Phone</div>
                  <div className="font-body text-ash group-hover:text-silver transition-colors duration-300">
                    +20 112 260 4563
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div variants={staggerItem} className="flex items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center border border-carbon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-ash/40 tracking-wide uppercase mb-1">Based In</div>
                  <div className="font-body text-ash">Cairo, Egypt — Remote Worldwide</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick CTA */}
            <motion.div variants={staggerItem} className="mt-6">
              <a
                href="https://wa.me/201122604563"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Start on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <ContactForm
            formState={formState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitted={submitted}
          />
        </div>
      </div>
    </section>
  )
}

function ContactForm({ formState, handleChange, handleSubmit, submitted }) {
  const { ref, controls } = useScrollReveal()

  const inputClass = "w-full bg-transparent border-b border-carbon focus:border-gold outline-none py-3 font-body text-silver placeholder-ash/40 text-sm transition-colors duration-300"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={controls}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Form card */}
      <div className="border-gradient p-8 md:p-10">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-6 py-16 text-center"
          >
            <div className="w-16 h-16 border border-gold/40 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l5 5 11-10" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-2xl text-cream">Message Sent</h3>
            <p className="font-body text-sm text-ash">
              Opening WhatsApp now. I'll get back to you shortly.
            </p>
          </motion.div>
        ) : (
          <>
            <h3 className="font-display text-2xl text-cream mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="font-mono text-[10px] text-gold/60 tracking-wide uppercase block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-gold/60 tracking-wide uppercase block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-gold/60 tracking-wide uppercase block mb-2">Project Type</label>
                <select
                  name="project"
                  required
                  value={formState.project}
                  onChange={handleChange}
                  className={`${inputClass} bg-noir appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Select project type</option>
                  <option value="Short-form / Reels">Short-form / Reels</option>
                  <option value="YouTube / Long-form">YouTube / Long-form</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Brand Video">Brand Video</option>
                  <option value="Podcast Editing">Podcast Editing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] text-gold/60 tracking-wide uppercase block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                Send via WhatsApp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </form>
          </>
        )}
      </div>
    </motion.div>
  )
}
