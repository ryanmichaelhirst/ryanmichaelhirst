import { useState } from 'react';
import { IconToPlus } from '../../components/react/IconToPlus';

export function IconToPlusDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-24 w-24 rounded-full bg-fuchsia-500 text-white"
    >
      <IconToPlus isHovered={isHovered} />
    </div>
  );
}
