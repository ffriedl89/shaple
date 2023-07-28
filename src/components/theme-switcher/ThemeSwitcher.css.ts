import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
  themeBarbie,
  themeHalloween,
  themeOriginal,
} from "../../styles/vars.css";
import { themeSwitcherToggleButtonClass } from "../layout/Header.css";

export const themeSwitcherCss = style({
  overflowY: "hidden",
  maxHeight: "6rem",
  transition: "max-height 1s",
  gridArea: "theme",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "1rem",
  selectors: {
    [`${themeSwitcherToggleButtonClass}[aria-checked="false"] + &`]: {
      maxHeight: 0,
    },
  },
});

export const themeButton = recipe({
  base: {
    all: "unset",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    height: "6rem",
    aspectRatio: "1 / 1",
    cursor: "pointer",
  },
  variants: {
    theme: {
      barbie: {
        backgroundColor: themeBarbie.colors.bg,
        color: themeBarbie.colors.hit,
        fontFamily: themeBarbie.font,
      },
      original: {
        backgroundColor: themeOriginal.colors.bg,
        color: themeOriginal.colors.hit,
        fontFamily: themeOriginal.font,
      },
      halloween: {
        backgroundColor: themeHalloween.colors.bg,
        color: themeHalloween.colors.shapeHit,
        fontFamily: themeHalloween.font,
      },
    },
  },
});
