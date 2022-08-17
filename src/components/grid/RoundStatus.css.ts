import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "../../styles/vars.css";

export const roundStatusClass = style({
  display: "grid",
  gap: "0.25rem",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
});

export const roundStatusShapeClass = style({
  color: themeVars.colors.miss,
  transition: "color 200ms linear, filter 200ms linear",
});

export const roundStatusVariant = styleVariants({
  default: [roundStatusShapeClass],
  hit: [
    roundStatusShapeClass,
    {
      color: themeVars.colors.hit,
      filter: `drop-shadow(0 0 0.5em 0 ${themeVars.colors.hit})`,
    },
  ],
  "shape-hit": [
    roundStatusShapeClass,
    {
      color: themeVars.colors.shapeHit,
      filter: `drop-shadow(0 0 0.5em 0 ${themeVars.colors.shapeHit})`,
    },
  ],
});
