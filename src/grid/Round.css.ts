import { createVar, style } from "@vanilla-extract/css";

export const roundLength = createVar();

export const picksClass = style({
  display: "grid",
  gridTemplateColumns: `repeat(${roundLength}, 1fr)`,
  vars: {
    [roundLength]: "4",
  },
  alignItems: "stretch",
  justifyContent: "stretch",
});
