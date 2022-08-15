import { fontVars, spaceVars, themeVars } from "./vars.css";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    fontWeight: "700",
    textDecoration: "none",
    padding: spaceVars["2xs"],
    textAlign: "center",
    fontSize: fontVars.step._0,
    userSelect: "none",
    textRendering: "optimizeLegibility",
    selectors: {
      "&:focus-visible": {
        outlineOffset: "2px",
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: themeVars.colors.hit,
      },
    },
  },
  variants: {
    element: {
      block: { display: "block" },
      inline: { display: "inline" },
    },
    variant: {
      primary: {
        border: "none",
        color: themeVars.colors.textOnColor,
        backgroundColor: themeVars.colors.interactive,
        selectors: {
          "&:hover": {
            backgroundColor: themeVars.colors.interactiveHover,
          },
          "&:active": {
            backgroundColor: themeVars.colors.interactiveActive,
          },
        },
      },
      secondary: {
        border: "1px dashed",
        color: themeVars.colors.hit,
        borderColor: themeVars.colors.hit,
        backgroundColor: themeVars.colors.bg,
        selectors: {
          "&:hover": {
            color: themeVars.colors.interactiveHover,
            borderColor: themeVars.colors.interactiveHover,
            backgroundColor: themeVars.colors.bg,
          },
          "&:active": {
            color: themeVars.colors.interactiveActive,
            borderColor: themeVars.colors.interactiveActive,
            backgroundColor: themeVars.colors.bg,
          },
        },
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
      false: {
        cursor: "pointer",
      },
    },
  },

  defaultVariants: {
    element: "block",
    variant: "primary",
    disabled: false,
  },
});
