import { style } from "@vanilla-extract/css";
import { sizeVars } from "../app.css";
import { roundLength } from "../grid/Round.css";

export const resultGridClass = style({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: `repeat(${roundLength}, ${sizeVars.step._3})`,
  vars: {
    [roundLength]: "4",
  },
  gap: sizeVars.step._1,
  justifyItems: "center",
});
