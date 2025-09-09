'use client';

import { CardTongue } from '@/components/ui/card/CardTongue';
import { useState } from 'react';

export function CardTongueDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-40 bg-fuchsia-500 p-4 rounded">
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-white cursor-pointer hover:text-gray-300 transition-colors"
      >
        Hover me!
      </p>

      <CardTongue isHovered={isHovered}>
        <div className="text-white">Don't mind if I slide in</div>
      </CardTongue>
    </div>
  );
}
