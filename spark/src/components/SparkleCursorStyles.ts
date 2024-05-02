const cursorStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 9999, // Notice zIndex should be a number, not a string
  width: '20px',
  height: '20px',
  marginLeft: '-10px', // Correctly center the cursor
  marginTop: '-10px', // Correctly center the cursor
  mixBlendMode: 'difference' as 'difference' // Ensure mixBlendMode matches the CSSProperties type
};
export const sparkleStyles = {
  position: 'absolute',
  width: '8px',
  height: '8px',
  background: 'white',
  borderRadius: '50%',
  animation: 'sparkleAnimation 1.5s infinite',
  transformOrigin: 'center',
};

// Additionally, you can define keyframes if you're using CSS-in-JS that supports it
// Example for styled-components or emotion
import { keyframes } from 'styled-components'; // or 'emotion'

export const sparkleAnimation = keyframes`
0% { transform: scale(0); opacity: 1; }
100% { transform: scale(1.5); opacity: 0; }
`;
