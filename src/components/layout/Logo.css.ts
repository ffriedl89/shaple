import { style } from "@vanilla-extract/css";
import { themeVars, fontVars } from "../../styles/vars.css";

export const logoTextClass = style({
  gridArea: "logo",
  textAlign: "center",
  textDecoration: "none",
  color: themeVars.colors.text,
  textDecorationSkipInk: "none",
  transition: "transform 150ms",
  selectors: {
    "&:focus-visible": {
      outline: "2px solid",
      outlineOffset: "2px",
      outlineColor: themeVars.colors.hit,
    },
  },
});

export const logoBarbieClass = style({
  transform: "rotate(-15deg)",
});

export const logoHalloweenClass = style({
  width: "1em",
  height: "1em",
  color: themeVars.colors.hit,
  transform: "translateY(0.25em)",
});

export const logoTriangleClass = style({
  fontSize: fontVars.step._2,
  color: themeVars.colors.hit,
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor",
});
