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
  padding: "10%",
  textAlign: "center",
  background: "transparent",
  transition:
    "color 200ms linear, backgroundColor 200ms linear, boxShadow 200ms linear, textShadow 200ms linear",
  color: pickColorVar,
  position: "relative",
  animationDelay: `calc(${animationOrder} * 750ms)`,
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

export const pickShapeClass = style({
  // filter: `drop-shadow(inset 0 0 0.5em 0 ${pickColorVar}, 0 0 0.5em 0 ${pickColorVar})`,
  filter: `drop-shadow(0 0 10px ${pickColorVar})`,
});
