import { useState } from 'react';
import { ButtonFill } from './ButtonFill';

export function ButtonFillDemo() {
  const [playId, setPlayId] = useState(0);

  const incrementPlayId = () => {
    setPlayId((prev) => prev + 1);
  };

  return (
    <ButtonFill
      label="Pixel Art"
      isActive={true}
      playId={playId.toString()}
      onClick={incrementPlayId}
      onComplete={incrementPlayId}
    />
  );
}
