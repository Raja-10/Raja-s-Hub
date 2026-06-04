'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  glowOnHover?: boolean;
  delay?: number;
}

export default function BentoCard({ className, children, glowOnHover = true, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={glowOnHover ? { scale: 1.01, borderColor: 'rgba(99,102,241,0.3)' } : {}}
      className={cn(
        'glass-card rounded-2xl p-6 transition-all duration-300 cursor-default overflow-hidden relative',
        glowOnHover && 'hover:glow-accent',
        className
      )}
    >
      {children}
    </motion.div>
  );
}