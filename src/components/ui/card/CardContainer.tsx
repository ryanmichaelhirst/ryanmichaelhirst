import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface CardContainerProps {
  className?: string;
  children: (args: { isHovered: boolean }) => React.ReactNode;
}

export function CardContainer({ className, children }: CardContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children({ isHovered })}
    </div>
  );
}
