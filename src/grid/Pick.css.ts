import { createVar, style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";
import { headshake, swing, tada } from "../animate.css";
import { spaceVars, themeVars } from "../app.css";

export const pickColorVar = createVar();
export const pickTextColorVar = createVar();
export const animationOrder = createVar("1");

const pickClass = style({
  height: spaceVars.pairs["m-l"],
  width: spaceVars.pairs["m-l"],
  padding: spaceVars["3xs"],
  textAlign: "center",
  background: "transparent",
  borderWidth: "0.33em",
  borderStyle: "solid",
  borderRadius: "0.25em",
  transition:
    "color 200ms linear, backgroundColor 200ms linear, boxShadow 200ms linear, textShadow 200ms linear",
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor",
  boxShadow: `inset 0 0 0.5em 0 ${pickColorVar}, 0 0 0.5em 0 ${pickColorVar}`,
  borderColor: pickColorVar,
  color: pickColorVar,
  position: "relative",
  animationDelay: `calc(${animationOrder} * 750ms)`,
  selectors: {
    "&:before": {
      pointerEvents: "none",
      content: '""',
      position: "absolute",
      backgroundColor: pickColorVar,
      top: "120%",
      left: 0,
      width: "100%",
      height: "100%",
      transform: "perspective(1em) rotateX(20deg) scale(0.7, 0.35)",
      filter: "blur(1em)",
      opacity: 0.7,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      boxShadow: `0 0 2em 0.5em ${pickColorVar}`,
      opacity: 0,
      backgroundColor: pickColorVar,
      zIndex: -1,
      transition: "opacity 100ms linear",
    },
  },
});

export const variant = styleVariants({
  default: [
    pickClass,
    {
      vars: {
        [pickColorVar]: themeVars.colors.interactive,
      },
    },
  ],
  miss: [
    pickClass,
    {
      animationName: headshake,
      animationDuration: "700ms",
      animationTimingFunction: "ease-in-out",
      vars: {
        [pickColorVar]: themeVars.colors.miss,
      },
    },
  ],
  hit: [
    pickClass,
    {
      animationName: tada,
      animationDuration: "700ms",
      animationTimingFunction: "ease-in-out",
      vars: {
        [pickColorVar]: themeVars.colors.hit,
      },
    },
  ],
  "shape-hit": [
    pickClass,
    {
      animationName: swing,
      animationDuration: "700ms",
      animationTimingFunction: "ease-in-out",
      vars: {
        [pickColorVar]: themeVars.colors.shapeHit,
      },
    },
  ],
});
