import { useState } from 'react';
import { IconToPlus } from '../../components/react/IconToPlus';

export function IconToPlusDemo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-24 h-24 text-white rounded-full bg-fuchsia-500"
    >
      <IconToPlus isHovered={isHovered} />
    </div>
  );
}
