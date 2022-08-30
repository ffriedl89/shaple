import { recipe } from "@vanilla-extract/recipes";

export const tabpanel = recipe({
  variants: {
    selected: {
      true: {
        display: "inherit",
      },
      false: {
        display: "none",
      },
    },
  },
});
