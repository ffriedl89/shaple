import { style } from "@vanilla-extract/css";
import { spaceVars, themeVars } from "../../styles/vars.css";

export const keyClass = style({
  backgroundColor: themeVars.colors.interactive,
  border: "none",
  width: spaceVars.pairs["l-xl"],
  height: spaceVars.pairs["l-xl"],
  padding: spaceVars.pairs["2xs-xs"],
  objectFit: "contain",
  textAlign: "center",
  cursor: "pointer",
  userSelect: "none",
  fontWeight: "900",
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
      outlineOffset: "2px",
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: themeVars.colors.hit,
    },
  },
});
