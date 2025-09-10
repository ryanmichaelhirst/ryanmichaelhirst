import { useState } from 'react';
import { ContentSlide } from './ContentSlide';

export function ContentSlideDemo() {
  const slides = ['Hello World 👋', 'Smooth slide-in ✨', 'Goodbye 👇'];
  const [slide, setSlide] = useState(slides[0]);

  return (
    <ContentSlide
      contentKey={slide}
      className="p-4 text-center text-xl font-semibold"
      duration={2}
      ease={[0.4, 0, 0.2, 1]}
      onAnimationComplete={() => {
        const currentIndex = slides.indexOf(slide);
        const nextIndex = (currentIndex + 1) % slides.length;
        setSlide(slides[nextIndex]);
      }}
    >
      {slide}
    </ContentSlide>
  );
}
