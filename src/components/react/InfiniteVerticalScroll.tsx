'use client';

import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { motion } from 'motion/react';

type InfiniteVerticalScrollProps = {
  text: string[];
  /** Pass the exact bg color of the card */
  fadeColor?: string;
  classes?: {
    icon?: string;
  };
};

export function InfiniteVerticalScroll({
  classes,
  text,
  fadeColor = 'transparent',
}: InfiniteVerticalScrollProps) {
  const row = 32;
  const duplicated = [...text, ...text];

  return (
    <div className="relative overflow-hidden h-full bg-transparent">
      {/* edge-only fades; center is 100% transparent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-12 z-10"
        style={{
          background: `linear-gradient(to bottom, ${fadeColor} 0%, rgba(0,0,0,0) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 z-10"
        style={{
          background: `linear-gradient(to top, ${fadeColor} 0%, rgba(0,0,0,0) 100%)`,
        }}
      />

      <motion.div
        className="flex flex-col antialiased will-change-transform transform-gpu"
        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        animate={{ y: [-row, -row - text.length * row] }}
        transition={{
          duration: text.length * 2,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicated.map((t, i) => (
          <div key={i} className="h-8 leading-8 flex items-center gap-2">
            <CircleCheck className={cn('h-4 w-4', classes?.icon)} />
            <span>{t}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
