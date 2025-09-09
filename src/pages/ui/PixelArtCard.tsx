import { IconToPlus } from '@/components/react/IconToPlus';
import { InfiniteVerticalScroll } from '@/components/react/InfiniteVerticalScroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CardContainer } from '@/components/ui/card/CardContainer';
import { CardTongue } from '@/components/ui/card/CardTongue';
import { ArrowRight } from 'lucide-react';

export function PixelArtCard() {
  return (
    <CardContainer className="cursor-pointer w-92 h-full">
      {({ isHovered }) => (
        <>
          <Card className="bg-fuchsia-200 border-neutral-500 border h-full">
            <CardHeader className="flex-row justify-between">
              <CardTitle>Pixel Art</CardTitle>
              <div className="w-6 h-6 text-white rounded-full bg-fuchsia-300">
                <IconToPlus isHovered={isHovered} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-40 overflow-hidden">
                <InfiniteVerticalScroll
                  text={[
                    'Animated Sprites',
                    'Custom Character Design',
                    'Portraits & Avatars',
                    'Environments & Backgrounds',
                    'Logo & Branding',
                    'Game Assets',
                    'Tile Sets',
                  ]}
                  classes={{
                    icon: 'text-fuchsia-600',
                  }}
                />
              </div>

              <p className="text-gray-600">
                Accelerate assets, animate faster, and unleash artistry with
                Pixel Art AI.
              </p>
            </CardContent>
          </Card>
          <CardTongue
            isHovered={isHovered}
            className="bg-fuchsia-400 font-medium flex items-center justify-center space-x-2"
          >
            <span className="text-fuchsia-900">Take a tour</span>
            <ArrowRight className="text-fuchsia-300 h-5 w-5" />
          </CardTongue>
        </>
      )}
    </CardContainer>
  );
}
