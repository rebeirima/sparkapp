import React, { useState, useEffect, CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

// Extend CSSProperties to include custom properties
interface CustomCSSProperties extends CSSProperties {
  '--randX'?: string;
  '--randY'?: string;
}

const sparkleStyle = (randX: number, randY: number): CustomCSSProperties => ({
  position: 'absolute',
  width: '8px',
  height: '8px',
  background: 'white',
  borderRadius: '50%',
  animation: 'sparkleAnimation 2s infinite',
  left: `calc(-10px + ${randX * 20}px)`, // Randomized X position
  top: `calc(-10px + ${randY * 20}px)`, // Randomized Y position
  '--randX': randX.toString(), // CSS Custom Property
  '--randY': randY.toString(), // CSS Custom Property
});

const sparkleTrail = keyframes`
  from {
    transform: scale(0.5);
    opacity: 1;
  }
  to {
    transform: scale(1.0);
    opacity: 0;
  }
`;
const Sparkle = styled.div`
  position: absolute;
  width: 8px; // example width
  height: 8px; // example height
  background: white;
  border-radius: 50%;
  animation: ${sparkleTrail} 1.5s infinite ease-out;
  transform-origin: center;
`;


// Define keyframes for the sparkle animation
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



// Applying staggered animation delay
const getAnimationDelay = (index: number) => `${index * -0.2}s`;

const getRandomOffset = () => `${Math.random() * 10 - 5}px`; // Offset between -5px and 5px
const getRandomSize = () => `${4 + Math.random() * 4}px`; // Size between 4px and 8px

const trailLength = 15; // Length of the trail

interface Position {
  x: number;
  y: number;
}


const SparkleCursor: React.FC = () => {
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    const updateTrail = (e: MouseEvent) => {
      // Using pageX and pageY for position relative to the whole document
      const newTrail = [...trail, { x: e.pageX, y: e.pageY }];
      if (newTrail.length > trailLength) {
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
          left: `${pos.x - 4}px`,  // Center the sparkle on cursor
          top: `${pos.y - 4}px`,   // Center the sparkle on cursor
        }} />
      ))}
    </div>
  );
};

export default SparkleCursor;
