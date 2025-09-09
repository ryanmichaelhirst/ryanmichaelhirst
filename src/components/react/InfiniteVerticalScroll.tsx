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
    <div className="relative h-full overflow-hidden bg-transparent">
      {/* edge-only fades; center is 100% transparent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12"
        style={{
          background: `linear-gradient(to bottom, ${fadeColor} 0%, rgba(0,0,0,0) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12"
        style={{
          background: `linear-gradient(to top, ${fadeColor} 0%, rgba(0,0,0,0) 100%)`,
        }}
      />

      <motion.div
        className="flex transform-gpu flex-col antialiased will-change-transform"
        style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        animate={{ y: [-row, -row - text.length * row] }}
        transition={{
          duration: text.length * 2,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicated.map((t, i) => (
          <div key={i} className="flex h-8 items-center gap-2 leading-8">
            <CircleCheck className={cn('h-4 w-4', classes?.icon)} />
            <span>{t}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
