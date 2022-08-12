import { style } from "@vanilla-extract/css";
import { spaceVars, themeVars } from "../app.css";

export const pickPlaceholderClass = style({
  border: "1px solid",
  borderColor: themeVars.colors.miss,
  height: spaceVars.pairs["m-l"],
  width: spaceVars.pairs["m-l"],
  borderRadius: "4px",
});
