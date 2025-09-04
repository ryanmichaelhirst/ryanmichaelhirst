import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

type CardProps = {
  title: string;
  description: string;
  href: string;
  className?: string;
};

export function Card({ title, description, href, className }: CardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 0, scale: 1 }}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 340, damping: 22, mass: 0.6 }}
      className={cn(
        // Layout & base look
        'group block relative rounded-2xl p-5 md:p-6',
        // Dark-mode glass card with border
        'border border-zinc-900 backdrop-blur',
        // Smooth color & shadow transitions
        'transition-[box-shadow,background-color,border-color] duration-300',
        'text-white',
        // Hover visual changes
        'hover:bg-zinc-900/20 hover:border-zinc-700 hover:shadow-2xl',
        // GPU-accelerated transforms to avoid text flicker on hover
        'transform-gpu will-change-transform [backface-visibility:hidden]',
        // Focus ring for accessibility
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h3 className="text-base md:text-lg tracking-tight text-gray-300">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-[15px] text-gray-400">
            {description}
          </p>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="mt-1 size-5 md:size-6 opacity-70 transition-transform group-hover:translate-x-0.5"
        >
          <path
            d="M13.5 6l6 6-6 6M3 12h16.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  );
}
