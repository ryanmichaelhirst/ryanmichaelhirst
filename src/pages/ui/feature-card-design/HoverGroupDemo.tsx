import { IconToPlus } from '@/components/react/IconToPlus';
import { CardContainer } from '@/components/ui/card/CardContainer';
import { CardTongue } from '@/components/ui/card/CardTongue';

export function HoverGroupDemo() {
  return (
    <CardContainer className="h-40 w-60 cursor-pointer">
      {({ isHovered }) => (
        <>
          <div className="flex h-full flex-col justify-between rounded-lg border border-gray-700 bg-gray-800 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">
                Putting it All Together
              </h3>
              <div className="h-6 w-6 rounded-full bg-fuchsia-500 text-white">
                <IconToPlus isHovered={isHovered} />
              </div>
            </div>
            <p className="text-xs text-gray-300">
              Hover to see the icon and tongue transition together
            </p>
          </div>

          <CardTongue isHovered={isHovered}>
            <div className="text-sm text-white">Synchronized animation!</div>
          </CardTongue>
        </>
      )}
    </CardContainer>
  );
}
