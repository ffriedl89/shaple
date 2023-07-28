import { style } from "@vanilla-extract/css";
import { spaceVars } from "../../styles/vars.css";

export const headerClass = style({
  display: "grid",
  gridTemplateRows: "auto auto",
  gridTemplateColumns: "1fr auto 1fr",
  gridTemplateAreas: "'theme theme theme' 'toggle logo nav'",
  rowGap: spaceVars.pairs["2xs-xs"],
  alignItems: "center",
  padding: spaceVars.pairs["2xs-xs"],
  paddingTop: 0,
});

export const navClass = style({
  justifyContent: "flex-end",
  display: "flex",
  gap: spaceVars.pairs["xs-s"],
  gridArea: "nav",
});

export const themeSwitcherToggleButtonClass = style({
  justifySelf: "flex-start",
  gridArea: "toggle",
});
