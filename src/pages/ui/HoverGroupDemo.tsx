'use client';

import { IconToPlus } from '@/components/react/IconToPlus';
import { CardContainer } from '@/components/ui/card/CardContainer';
import { CardTongue } from '@/components/ui/card/CardTongue';

export function HoverGroupDemo() {
  return (
    <CardContainer className="cursor-pointer w-40">
      {({ isHovered }) => (
        <>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 h-full flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-sm font-medium">Demo</h3>
              <div className="w-6 h-6 text-white rounded-full bg-fuchsia-500">
                <IconToPlus isHovered={isHovered} />
              </div>
            </div>
            <p className="text-gray-300 text-xs">
              Hover to see icon and tongue transition together
            </p>
          </div>

          <CardTongue isHovered={isHovered}>
            <div className="text-white text-sm">Synchronized animation!</div>
          </CardTongue>
        </>
      )}
    </CardContainer>
  );
}
