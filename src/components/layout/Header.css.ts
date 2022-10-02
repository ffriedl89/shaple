import { style } from "@vanilla-extract/css";
import { fontVars, spaceVars, themeVars } from "../../styles/vars.css";

export const headerClass = style({
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  gridTemplateAreas: "'spacer logo nav'",
  alignItems: "center",
  padding: spaceVars.pairs["2xs-xs"],
});

export const navClass = style({
  justifyContent: "flex-end",
  display: "flex",
  gap: spaceVars.pairs["xs-s"],
  gridArea: "nav",
});
