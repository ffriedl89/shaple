import { fontVars } from "./vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const heading = recipe({
  variants: {
    level: {
      1: { fontSize: fontVars.step._4 },
      2: { fontSize: fontVars.step._3 },
      3: { fontSize: fontVars.step._2 },
    },
  },

  defaultVariants: {
    level: 2,
  },
});
