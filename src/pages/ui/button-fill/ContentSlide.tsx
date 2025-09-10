import { AnimatePresence, motion } from 'motion/react';

type ContentSlideProps = {
  contentKey: string;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  ease?: [number, number, number, number];
  onAnimationComplete?: () => void; // when enter animation completes
};

export function ContentSlide({
  contentKey,
  children,
  className = '',
  duration = 0.7,
  ease = [0.4, 0, 0.2, 1],
  onAnimationComplete,
}: ContentSlideProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        key={contentKey}
        initial={{ opacity: 0, x: -10 }} // enter start
        animate={{ opacity: 1, x: 0 }} // enter end
        exit={{ opacity: 0, x: 10, transition: { duration, ease } }} // exit to
        transition={{ opacity: { duration, ease }, x: { duration, ease } }} // animation timing
        onAnimationComplete={onAnimationComplete}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
