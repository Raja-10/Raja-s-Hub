import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-6', className)}>
      <div className="w-6 h-px bg-accent" />
      <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">{children}</span>
    </div>
  );
}