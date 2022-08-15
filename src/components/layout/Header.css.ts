import { style } from "@vanilla-extract/css";
import { fontVars, themeVars } from "../../styles/vars.css";

export const logoTriangleClass = style({
  fontSize: fontVars.step._1,
  color: themeVars.colors.hit,
  textShadow: "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor",
});

export const logoTextClass = style({
  fontSize: fontVars.step._2,
  textAlign: "center",
  gridArea: "header",
});
