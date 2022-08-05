import { createVar, style } from "@vanilla-extract/css";
import { sizeVars } from "../app.css";

export const roundLength = createVar();

export const picksClass = style({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: `repeat(${roundLength}, 1fr)`,
  vars: {
    [roundLength]: "4",
  },
  gap: sizeVars.step._1,
  alignItems: "space-around",
  justifyItems: "center",
});
