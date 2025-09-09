import { IconToPlus } from '@/components/react/IconToPlus';
import { InfiniteVerticalScroll } from '@/components/react/InfiniteVerticalScroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CardContainer } from '@/components/ui/card/CardContainer';
import { CardTongue } from '@/components/ui/card/CardTongue';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type PixelArtCardProps = {
  classes?: {
    cardContainer?: string;
  };
};

export function PixelArtCard(props: PixelArtCardProps) {
  return (
    <CardContainer
      className={cn(
        'h-full w-full cursor-pointer md:w-92',
        props.classes?.cardContainer,
      )}
    >
      {({ isHovered }) => (
        <>
          <Card className="h-full border border-neutral-500 bg-fuchsia-200">
            <CardHeader className="flex-row justify-between">
              <CardTitle>Pixel Art</CardTitle>
              <div className="h-6 w-6 rounded-full bg-fuchsia-300 text-white">
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
            className="flex items-center justify-center space-x-2 bg-fuchsia-400 font-medium"
          >
            <span className="text-fuchsia-900">Take a tour</span>
            <ArrowRight className="h-5 w-5 text-fuchsia-300" />
          </CardTongue>
        </>
      )}
    </CardContainer>
  );
}
