import { style } from "@vanilla-extract/css";
import { fontVars, spaceVars, themeVars } from "../../styles/vars.css";

export const keyClass = style({
  backgroundColor: themeVars.colors.interactive,
  border: "none",
  minWidth: "44px",
  minHeight: "44px",
  width: spaceVars.pairs["xl-2xl"],
  height: spaceVars.pairs["xl-2xl"],
  padding: spaceVars["xs"],
  textAlign: "center",
  cursor: "pointer",
  fontSize: fontVars.step._2,
  userSelect: "none",
  selectors: {
    "&[aria-disabled=true]": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&[aria-disabled=false]:hover": {
      backgroundColor: themeVars.colors.interactiveHover,
    },
    "&[aria-disabled=true]:active": {
      backgroundColor: themeVars.colors.interactiveActive,
    },
    "&:focus-visible": {
      outlineOffset: "-4px",
      outlineColor: themeVars.colors.bg,
      outline: "2px solid",
    },
  },
});
