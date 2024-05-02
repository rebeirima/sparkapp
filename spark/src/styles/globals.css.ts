import { createVar, globalStyle } from "@vanilla-extract/css";

export const primaryAccent = createVar();
export const primaryAccentMuted = createVar();

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body, #root", {
  height: "100%",
  background: "url('../src/assets/spark_background3.png')",
  backgroundSize: "cover" // Ensure the background covers the entire viewport
});

globalStyle("body", {
  fontFamily: '"Georgia", sans-serif',
  vars: {
    [primaryAccent]: "#4c00b0",
    [primaryAccentMuted]: "#CBC3E3",
  },
});

globalStyle("a, a:visited, a:hover", {
  margin: 0,
});

// Scrollbar stuff
globalStyle("::-webkit-scrollbar", {
  width: 10,
});

globalStyle("::-webkit-scrollbar-track", {
  background: `url('../assets/spark_background.png') no-repeat center center fixed`,
});

globalStyle("::-webkit-scrollbar-thumb", {
  background: primaryAccent,
  borderRadius: 50,
});

//sparkle scroll

