'use client';
import { heroData } from "@/data/hero";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {ArrowDown,Github,Linkedin,Mail,Instagram,} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent font-mono text-xs tracking-[0.25em] uppercase">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-7xl md:text-9xl lg:text-[10rem] leading-[0.9] tracking-tight mb-6"
          >
          <span className="block text-white">
            {heroData.name}
          </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-secondary text-xl md:text-2xl font-light max-w-xl mb-10 leading-relaxed"
          >
            {heroData.roles.join(". ")}.
            <br />
            <span className="text-white/50 text-lg">
            {heroData.tagline}
            </span>
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            variants={item}
            className="border-l-2 border-accent/40 pl-5 mb-12 max-w-md"
          >
            <p className="text-secondary text-sm italic leading-relaxed">
              "{heroData.quote}"
            </p>

            <cite className="text-white/30 text-xs mt-1 block not-italic font-mono">
              — Rajayogeshwar G
            </cite>
          </motion.blockquote>

          {/* Actions */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mb-20"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#journey")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-all duration-200 hover:scale-105"
            >
              Explore My World
              <ArrowDown size={14} />
            </button>

            <div className="flex items-center gap-4 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-secondary text-sm font-medium">
                Get In Touch
              </span>

              <div className="w-px h-4 bg-white/10" />

              {/* <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <Github size={16} />
              </a> */}

              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={heroData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>

              <a
                href={heroData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-white transition-colors"
              >
                <FaWhatsapp size={15} />
              </a>

              <a
                href={heroData.email}
                className="text-secondary hover:text-white transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          {/* Socials */}
          {/* <motion.div variants={item} className="flex items-center gap-4">
            <a href={heroData.github} target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all duration-200">
              <Github size={18} />
            </a>
            <a href={heroData.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all duration-200">
              <Linkedin size={18} />
            </a>
            <a href={heroData.email}
               className="p-2 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all duration-200">
              <Mail size={18} />
            </a>
          </motion.div> */}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-16 bg-gradient-to-b from-accent/50 to-transparent"
        />
        <span className="text-white/20 text-xs font-mono tracking-widest">SCROLL</span>
      </motion.div>

      {/* Life Timeline strip at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-white/30 text-xs font-mono shrink-0">Life Timeline</span>
            <div className="w-px h-4 bg-white/10 shrink-0" />
            {[
              { year: '2001', label: 'Born' },
              { year: '2017', label: 'High School' },
              { year: '2019', label: 'College' },
              { year: '2023', label: 'Research' },
              { year: '2024', label: 'Today', active: true },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <div className={`flex items-center gap-2 ${t.active ? 'text-accent' : 'text-white/30'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${t.active ? 'bg-accent shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'bg-white/20'}`} />
                  <span className="text-xs font-mono">{t.year}</span>
                  <span className="text-xs">{t.label}</span>
                </div>
                {i < 4 && <div className="w-8 h-px bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </div> */}

    </section>
  );
}