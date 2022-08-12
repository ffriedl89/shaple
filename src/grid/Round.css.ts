import { createVar, style } from "@vanilla-extract/css";
import { sizeVars, spaceVars, themeVars } from "../app.css";

export const roundLength = createVar();

export const picksClass = style({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: `${sizeVars.step._3} repeat(${roundLength}, ${sizeVars.step._3})`,
  vars: {
    [roundLength]: "4",
  },
  gap: sizeVars.step._1,
  justifyItems: "center",
  height: spaceVars.pairs["m-l"],
});
