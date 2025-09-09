import { motion } from 'motion/react';

const plusParts = [
  'M12 7 L12 17', // vertical
  'M7 12 L17 12', // horizontal
  'M12 12 L12 12', // dummy
];

const arrowParts = [
  'M7 12 L17 12', // shaft
  'M13 8 L17 12', // head up
  'M13 16 L17 12', // head down
];

export function IconToPlus(props: { isHovered: boolean }) {
  const targets = props.isHovered ? arrowParts : plusParts;

  return (
    <motion.svg
      viewBox="0 0 24 24"
      width="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer"
    >
      {targets.map((target, i) => (
        <motion.path
          key={i}
          initial={false} // 🚀 prevents the first-mount animation
          animate={{ d: target }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: i * 0.05,
          }}
          d={target} // just render the current target immediately
        />
      ))}
    </motion.svg>
  );
}
