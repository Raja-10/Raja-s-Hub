"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

import Section from "@/components/ui/Section";

export default function ThankYou() {
  return (
    <Section id="contact" className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Title */}

          <h2 className="font-display text-6xl md:text-8xl text-white mb-8">
            Thank You
          </h2>

          {/* Message */}

          <p className="text-2xl md:text-3xl text-white/90 leading-relaxed mb-6">
            For taking the time
            <br />
            to explore my world.
          </p>

          <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            If something resonated with you,
            I'd love to connect.
          </p>

          {/* Divider */}

          <div className="w-24 h-px bg-accent/40 mx-auto mb-12" />

          {/* Social Links */}

          <div className="flex flex-wrap justify-center gap-4 mb-16">

            <a
              href="mailto:rajayg23@iitk.ac.in"
              className="
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-secondary
                hover:text-white
                hover:border-accent/30
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <Mail size={18} />
              Email
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-secondary
                hover:text-white
                hover:border-accent/30
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-secondary
                hover:text-white
                hover:border-accent/30
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-secondary
                hover:text-white
                hover:border-accent/30
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <Instagram size={18} />
              Instagram
            </a>

          </div>

          {/* Closing Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
          >

            <p className="text-white/60 text-lg italic mb-8">
              Still collecting experiences.
            </p>

            <div className="w-16 h-px bg-white/10 mx-auto mb-8" />

            <p className="text-secondary text-sm">
              © 2026 Rajayogeshwar G
            </p>

          </motion.div>

        </motion.div>

      </div>

    </Section>
  );
}