import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

const pickClass = style({
  backgroundColor: "#cdcdcd",
  width: "3.25rem",
  height: "3.25rem",
  padding: "0.75rem",
  border: "1px solid #ababab",
});

export const variant = styleVariants({
  default: [pickClass, { backgroundColor: "#cdcdcd" }],
  miss: [pickClass, { backgroundColor: "#333" }],
  hit: [pickClass, { backgroundColor: "green" }],
  "shape-hit": [pickClass, { backgroundColor: "yellow" }],
});
