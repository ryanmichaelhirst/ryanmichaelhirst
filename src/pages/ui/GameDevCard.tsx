import { IconToPlus } from '@/components/react/IconToPlus';
import { InfiniteVerticalScroll } from '@/components/react/InfiniteVerticalScroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CardContainer } from '@/components/ui/card/CardContainer';
import { CardTongue } from '@/components/ui/card/CardTongue';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type GameDevCardProps = {
  classes?: {
    cardContainer?: string;
  };
};

export function GameDevCard(props: GameDevCardProps) {
  return (
    <CardContainer
      className={cn(
        'h-full w-full cursor-pointer md:w-92',
        props.classes?.cardContainer,
      )}
    >
      {({ isHovered }) => (
        <>
          <Card className="h-full border border-neutral-500 bg-blue-200">
            <CardHeader className="flex-row justify-between">
              <CardTitle>Game dev</CardTitle>
              <div className="h-6 w-6 rounded-full bg-blue-300 text-white">
                <IconToPlus isHovered={isHovered} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-40 overflow-hidden">
                <InfiniteVerticalScroll
                  text={[
                    'Game Mechanics',
                    'Level Design',
                    'Character Systems',
                    'UI/UX Design',
                    'Game Balancing',
                    'Performance Optimization',
                    'Multiplayer Features',
                  ]}
                  classes={{
                    icon: 'text-blue-600',
                  }}
                />
              </div>

              <p className="text-gray-600">
                Bring your game ideas to life through immersive experencies and
                polished gameplay.
              </p>
            </CardContent>
          </Card>
          <CardTongue
            isHovered={isHovered}
            className="flex items-center justify-center space-x-2 bg-blue-400 font-medium"
          >
            <span className="text-blue-900">Take a tour</span>
            <ArrowRight className="h-5 w-5 text-blue-300" />
          </CardTongue>
        </>
      )}
    </CardContainer>
  );
}
