import { style } from "@vanilla-extract/css";
import { themeVars } from "../../styles/vars.css";

export const keyboardClass = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",
  gridArea: "footer",
  padding: "1rem",
  selectors: {
    "&:focus-within": {
      outlineOffset: "2px",
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: themeVars.colors.hit,
    },
  },
});
