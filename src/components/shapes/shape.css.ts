import { style } from "@vanilla-extract/css";
import { fontVars } from "../../styles/vars.css";

export const shapeClass = style({
  minWidth: [fontVars.step._0],
  maxHeight: "100%",
});
