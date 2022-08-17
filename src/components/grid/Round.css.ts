import { createVar, style } from "@vanilla-extract/css";
import { sizeVars, spaceVars } from "../../styles/vars.css";

export const roundLength = createVar();

export const picksClass = style({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: `${sizeVars.step._3} repeat(${roundLength}, ${sizeVars.step._3})`,
  vars: {
    [roundLength]: "4",
  },
  gap: spaceVars.pairs["2xs-xs"],
  justifyItems: "center",
  height: spaceVars.pairs["m-l"],
});
