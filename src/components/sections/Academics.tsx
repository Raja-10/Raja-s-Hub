'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionLabel from '@/components/ui/SectionLabel';
import BentoCard from '@/components/ui/BentoCard';
import { GraduationCap, BookOpen, Star, TrendingUp } from 'lucide-react';

const courses = [
  'Machine Learning', 'Robotics', 'Control Systems', 'Linear Algebra',
  'Probability & Statistics', 'Computer Vision', 'Deep Learning', 'Algorithms',
  'Signal Processing', 'Embedded Systems',
];

const semesters = [
  { sem: 'Sem 1', gpa: 8.2 },
  { sem: 'Sem 2', gpa: 8.5 },
  { sem: 'Sem 3', gpa: 8.6 },
  { sem: 'Sem 4', gpa: 8.8 },
  { sem: 'Sem 5', gpa: 9.0 },
  { sem: 'Sem 6', gpa: 8.9 },
];

export default function Academics() {
  const maxGpa = 10;

  return (
    <Section id="academics" className="bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Academics</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CGPA Hero Card */}
          <BentoCard className="lg:col-span-1 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-accent" />
                <span className="text-sm text-secondary font-mono">Overall CGPA</span>
              </div>
              <div className="font-display text-8xl text-white leading-none mb-2">8.71</div>
              <div className="text-secondary text-sm">out of 10.00</div>
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <Star size={14} className="text-yellow-400 fill-yellow-400/40" />
              <span className="text-secondary text-xs ml-2">Top 5% of batch</span>
            </div>
          </BentoCard>

          {/* Semester chart */}
          <BentoCard className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={18} className="text-accent" />
              <span className="text-sm text-secondary font-mono">Semester Progress</span>
            </div>
            <div className="flex items-end gap-3 h-32">
              {semesters.map((s, i) => (
                <motion.div
                  key={s.sem}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(s.gpa / maxGpa) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col justify-end items-center gap-1.5"
                >
                  <span className="text-xs text-white/50 font-mono">{s.gpa}</span>
                  <div
                    className="w-full rounded-t-lg"
                    style={{
                      background: `linear-gradient(to top, rgba(99,102,241,0.3), rgba(99,102,241,${0.4 + i * 0.1}))`,
                      height: `${(s.gpa / maxGpa) * 100}%`,
                    }}
                  />
                  <span className="text-xs text-secondary">{s.sem}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Courses */}
          <BentoCard className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen size={18} className="text-accent" />
              <span className="text-sm text-secondary font-mono">Key Courses</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-xs text-secondary hover:text-white hover:border-accent/30 transition-colors cursor-default"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </BentoCard>

          {/* Institution card */}
          <BentoCard className="lg:col-span-1">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <h3 className="text-white font-medium mb-1">B.Tech — ECE</h3>
                <p className="text-secondary text-sm mb-3">2019 — 2023</p>
                <p className="text-secondary text-sm leading-relaxed">
                  Specialization in Robotics & AI Systems. Dean&apos;s List every semester.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 mt-4">
                <span className="text-accent text-xs font-mono">National Institute of Technology</span>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </Section>
  );
}