import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

const animationDuration = 0.6;

interface CardWithTongueProps {
  children: React.ReactNode;
  isHovered?: boolean;
  className?: string;
}

export function CardTongue({
  isHovered,
  children,
  className,
}: CardWithTongueProps) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
            scale: 0.95,
            transformOrigin: 'top center',
          }}
          animate={{
            opacity: 1,
            y: -6,
            scale: 1,
            transformOrigin: 'top center',
          }}
          exit={{
            opacity: 0,
            y: -100,
            scale: 0.95,
            transformOrigin: 'top center',
          }}
          transition={{
            duration: animationDuration,
            ease: [0.4, 0, 0.2, 1], // Custom easing for smooth animation
            opacity: { duration: animationDuration * 0.8 },
            scale: { duration: animationDuration * 1.2 },
          }}
          className={cn(
            'absolute top-full right-0 left-0 -z-10 -mt-2',
            'border-primary rounded-b-lg border px-4 pt-6 pb-5 shadow-lg',
            'transform-gpu will-change-transform',
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
