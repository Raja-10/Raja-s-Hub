'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionLabel from '@/components/ui/SectionLabel';
import BentoCard from '@/components/ui/BentoCard';
import { BookOpen, Code2, Lightbulb, Target } from 'lucide-react';

const coreValues = [
  { icon: BookOpen, label: 'Learn Continuously', desc: 'Growth never stops.', color: 'text-blue-400' },
  { icon: Code2, label: 'Build Meaningful Things', desc: 'Impact over everything.', color: 'text-accent' },
  { icon: Lightbulb, label: 'Stay Curious', desc: 'Questions lead to discovery.', color: 'text-yellow-400' },
  { icon: Target, label: 'Discipline & Consistency', desc: 'Small steps, big results.', color: 'text-green-400' },
];

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>About Me</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-6xl leading-tight mb-8"
            >
              I build things
              <br />
              <span className="gradient-text">at the edge of</span>
              <br />
              what&apos;s possible.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-4 text-secondary leading-relaxed"
            >
              <p>
                I&apos;m Raja Yogeshwar — a researcher and builder passionate about robotics,
                machine learning, and the beautiful intersection of technology and human experience.
              </p>
              <p>
                When I&apos;m not deep in research papers or writing code, you&apos;ll find me
                cutting through water in the pool, chasing sunsets on mountain trails, or
                obsessively collecting stories from corners of the world.
              </p>
              <p>
                I believe in building things that matter — tools that amplify human potential
                and experiences that leave lasting impressions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mt-10"
            >
              {[
                { num: '8.71', label: 'CGPA' },
                { num: '12+', label: 'Projects' },
                { num: '25+', label: 'Countries' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl text-accent mb-1">{stat.num}</div>
                  <div className="text-xs text-secondary uppercase tracking-widest font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: core values */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xs text-secondary font-mono uppercase tracking-widest mb-6"
            >
              Core Values
            </motion.div>
            {coreValues.map((v, i) => (
              <BentoCard key={v.label} delay={i * 0.1} className="flex items-start gap-4 py-5">
                <div className={`p-2.5 rounded-xl bg-white/5 ${v.color} shrink-0`}>
                  <v.icon size={18} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-0.5">{v.label}</div>
                  <div className="text-secondary text-sm">{v.desc}</div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}