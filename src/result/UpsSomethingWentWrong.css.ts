import { style } from "@vanilla-extract/css";
import { spaceVars } from "../app.css";

export const upsClass = style({
  display: "flex",
  flexDirection: "column",
  gap: spaceVars.pairs["m-l"],
});
