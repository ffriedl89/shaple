import { style } from "@vanilla-extract/css";
import { spaceVars } from "../../styles/vars.css";

export const upsClass = style({
  display: "flex",
  flexDirection: "column",
  gap: spaceVars.pairs["m-l"],
});
