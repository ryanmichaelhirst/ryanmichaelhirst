import { CardTongue } from '@/components/ui/card/CardTongue';
import { useState } from 'react';

export function CardTongueDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-40 cursor-pointer rounded bg-fuchsia-500 p-4 text-white transition-colors hover:text-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover me!
      <CardTongue isHovered={isHovered}>
        <div className="text-white">Don't mind if I slide in</div>
      </CardTongue>
    </div>
  );
}
