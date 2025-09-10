import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type ButtonFillProps = {
  label: React.ReactNode;
  isActive: boolean;
  playId: string; // change to restart active animation
  duration?: number;
  onClick?: () => void; // set to active or restart
  onComplete?: () => void; // called when fill reaches 100%
  className?: string;
};

export function ButtonFill({
  label,
  isActive,
  playId,
  duration = 3,
  onClick,
  onComplete,
  className = '',
}: ButtonFillProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative cursor-pointer overflow-visible rounded-md',
        'text-muted px-6 py-3.5 font-medium',
        'bg-neutral-800',
        className,
      )}
    >
      {/* Fill background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
        <motion.span
          key={isActive ? playId : 'idle'}
          className="absolute top-0 left-0 h-full bg-[#2a3ffc99]"
          initial={{ width: 0 }}
          animate={{ width: isActive ? '100%' : 0 }}
          transition={{ duration: isActive ? duration : 0, ease: 'linear' }}
          onAnimationComplete={() => {
            if (isActive) onComplete?.();
          }}
        />
      </div>

      <span className="relative z-10">{label}</span>

      {/* Oval cutout */}
      <div className="absolute -bottom-3 left-1/2 z-20 h-6 w-8 -translate-x-1/2 rounded-full border-8 border-gray-950 bg-[#7f8cfd]" />
    </motion.button>
  );
}
