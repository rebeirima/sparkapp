import { style } from "@vanilla-extract/css";

import { primaryAccent, primaryAccentMuted } from "./globals.css";

export const appStyles = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center",
  fontWeight: 800,
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  maxWidth: 1080,
  margin: "0 auto",
  height: "100%",
});


//Login CSS
// Define a styles object with TypeScript
export const loginPageStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundImage: "url('../src/assets/login.png')", // Add your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

export const loginButtonStyles = {
  padding: '13px 40px',
  fontSize: '20px',
  color: '#cfcfe8',
  backgroundColor: '#4e4e94', // Google blue
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  marginTop: '250px',
  fontFamily: 'Georgia',

  // Hover state isn't directly supported in inline styles,
  // you might need to use pseudo-classes via CSS modules or add a class via JavaScript
  '&:hover': {
    backgroundColor: '#357AE8'
  }
};


export const titleStyles = style({
  display: 'block', // Ensures the SVG is treated as a block-level element
  margin: '0 auto', // Centers the SVG horizontally
  width: '420px', // Specify width; adjust as necessary
  height: 'auto', // Keeps the aspect ratio of the SVG
  marginTop: '3vh',
  //marginBottom: '0.5vh',
});


//sparkle




export const levelsStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  width: "17rem",
});

export const levelButtonStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 15,
  borderRadius: 15,
  border: `solid 2px ${primaryAccent}`,
  backgroundColor: "white",
  height: 88,
  width: 231,
  textTransform: "uppercase",
  color: primaryAccent,
  fontSize: 18,
  fontWeight: 800,
  fontFamily: "inherit",
  cursor: "pointer",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },
  selectors: {
    "&:focus, &:active": {
      outline: "none",
    },
  },
});

export const selectedLevelStyles = style({
  backgroundColor: primaryAccent,
  color: "#fff",
  outline: "none",
});

export const nextCardButtonStlyes = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 25,
  borderRadius: 15,
  backgroundColor: ["#fff", primaryAccent],
  height: 48,
  width: 170,
  textTransform: "uppercase",
  color: "#fff",
  outline: "none",
  fontSize: 18,
  fontWeight: 800,
  fontFamily: '"Biryani", sans-serif',
  border: "none",

  ":hover": {
    backgroundColor: primaryAccentMuted,
    color: "rgb(240, 240, 240)",
  },
});

export const questionStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "26rem",
  textTransform: "uppercase",
  alignItems: "center",
});
