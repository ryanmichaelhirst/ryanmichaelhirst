'use client';

import { interpolate } from 'flubber';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useCallback } from 'react';

// Vertical line paths - long for plus, short for arrow
const VERTICAL_PATH_LONG = 'M12 5v14'; // Long vertical line for plus
const VERTICAL_PATH_SHORT = 'M12 8v8'; // Short vertical line for arrow

// Horizontal line path (morphs to arrow head)
const HORIZONTAL_PATH = 'M5 12h14';
const ARROW_HEAD_PATH = 'M19 12L13 8L13 16L19 12';

export function WrongWay() {
  const progress = useMotionValue(0);

  // Vertical line rotates 90 degrees AND shrinks
  const verticalRotate = useTransform(progress, [0, 1], [0, 90]);
  const verticalPath = useTransform(
    progress,
    [0, 1],
    [VERTICAL_PATH_LONG, VERTICAL_PATH_SHORT],
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    },
  );

  // Horizontal line morphs to arrow head using flubber
  const horizontalPath = useTransform(
    progress,
    [0, 1],
    [HORIZONTAL_PATH, ARROW_HEAD_PATH],
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    },
  );

  const goTo = useCallback(
    (v: number) =>
      animate(progress, v, {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint-ish
      }),
    [progress],
  );

  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      width={40}
      height={40}
      onHoverStart={() => goTo(1)}
      onHoverEnd={() => goTo(0)}
    >
      {/* Vertical line that rotates and shrinks */}
      <motion.path
        d={verticalPath}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ rotate: verticalRotate }}
        className="text-white"
      />

      {/* Horizontal line that morphs to arrow head */}
      <motion.path
        d={horizontalPath}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="text-white"
      />
    </motion.svg>
  );
}
