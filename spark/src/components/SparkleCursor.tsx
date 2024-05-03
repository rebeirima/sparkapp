import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const sparkleAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const Sparkle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: ${sparkleAnimation} 1.5s infinite ease-out;
  transform-origin: center;
`;

const SparkleCursor: React.FC = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; }[]>([]);

  useEffect(() => {
    const updateTrail = (e: MouseEvent) => {
      const newTrail = [...trail, { x: e.pageX, y: e.pageY }];
      if (newTrail.length > 15) { // Adjusted to use a constant for trail length
        newTrail.shift();
      }
      setTrail(newTrail);
    };

    window.addEventListener('mousemove', updateTrail);
    return () => window.removeEventListener('mousemove', updateTrail);
  }, [trail]);

  return (
    <div style={{ position: 'fixed', pointerEvents: 'none', top: 0, left: 0 }}>
      {trail.map((pos, index) => (
        <Sparkle key={index} style={{
          left: `${pos.x - 4}px`,  // Adjusted to center the sparkle on cursor
          top: `${pos.y - 4}px`,   // Adjusted to center the sparkle on cursor
        }} />
      ))}
    </div>
  );
};

export default SparkleCursor;

