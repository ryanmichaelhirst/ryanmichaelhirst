import { useState } from 'react';
import { ButtonFill } from './ButtonFill';
import { ContentSlide } from './ContentSlide';

type ButtonListCycleProps = {
  items: { label: string; content: string }[];
};

export function ButtonListCycle({ items }: ButtonListCycleProps) {
  const [activeLabel, setActiveLabel] = useState(items[0]?.label || '');

  const handleComplete = () => {
    const currentIndex = items.findIndex((item) => item.label === activeLabel);
    const nextIndex = (currentIndex + 1) % items.length;
    setActiveLabel(items[nextIndex].label);
  };

  const activeItem = items.find((item) => item.label === activeLabel)!;

  return (
    <div className="space-y-6">
      {/* Buttons */}
      <div className="flex gap-4">
        {items.map(({ label }) => (
          <ButtonFill
            key={label}
            label={label}
            isActive={activeLabel === label}
            playId={activeLabel}
            onClick={() => setActiveLabel(label)}
            onComplete={activeLabel === label ? handleComplete : undefined}
          />
        ))}
      </div>

      {/* Single content area: swaps/fades when active label changes */}
      <ContentSlide contentKey={activeItem.label} className="min-h-[1.5rem]">
        <p className="text-sm text-gray-300">{activeItem.content}</p>
      </ContentSlide>
    </div>
  );
}
