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

export const logoTriangleClass = style({
  fontSize: fontVars.step._1,
  color: themeVars.colors.hit,
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor",
});

export const logoTextClass = style({
  gridArea: "logo",
  textAlign: "center",
  textDecoration: "none",
  color: themeVars.colors.text,
  textDecorationSkipInk: "none",
  selectors: {
    "&:focus-visible": {
      outline: "2px solid",
      outlineOffset: "2px",
      outlineColor: themeVars.colors.hit,
    },
  },
});
