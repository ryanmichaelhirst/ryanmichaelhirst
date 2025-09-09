import { IconToPlus } from '@/components/react/IconToPlus';
import { VerticalTextCycle } from '@/components/react/VerticalTextCycle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CardContainer } from '@/components/ui/card/CardContainer';
import { CardTongue } from '@/components/ui/card/CardTongue';
import { ArrowRight } from 'lucide-react';

export function GameDevCard() {
  return (
    <CardContainer className="cursor-pointer w-92 h-full">
      {({ isHovered }) => (
        <>
          <Card className="bg-blue-200 border-neutral-500 border h-full">
            <CardHeader className="flex-row justify-between">
              <CardTitle>Game dev</CardTitle>
              <div className="w-6 h-6 text-white rounded-full bg-blue-300">
                <IconToPlus isHovered={isHovered} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-40 overflow-hidden">
                <VerticalTextCycle
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
            className="bg-blue-400 font-medium flex items-center justify-center space-x-2"
          >
            <span className="text-blue-900">Take a tour</span>
            <ArrowRight className="text-blue-300 h-5 w-5" />
          </CardTongue>
        </>
      )}
    </CardContainer>
  );
}
