import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { tada } from "../../styles/animate.css";
import { themeVars } from "../../styles/vars.css";

const borderWidthVar = createVar();
const edgeSizeVar = createVar();

export const dialogContentClass = style({
  position: "relative",
  backgroundColor: themeVars.colors.bg,
  border: 0,
  padding: "1rem",
  isolation: "isolate",
  clipPath: `polygon(${edgeSizeVar} 0%, 100% 0, 100% calc(100% - ${edgeSizeVar}), calc(100% - ${edgeSizeVar}) 100%, 0 100%, 0 ${edgeSizeVar})`,
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: themeVars.colors.hit,
      zIndex: -2,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      // @ts-ignore
      clipPath: `polygon(${borderWidthVar} calc(${edgeSizeVar} + ${borderWidthVar} * 0.5), calc(${edgeSizeVar} + ${borderWidthVar} * 0.5) ${borderWidthVar}, calc(100% - ${borderWidthVar}) ${borderWidthVar},  calc(100% - ${borderWidthVar})      calc(100% - calc(${edgeSizeVar} + ${borderWidthVar} * 0.5)), calc(100% - calc(${edgeSizeVar} + ${borderWidthVar} * 0.5))      calc(100% - ${borderWidthVar}), calc(${borderWidthVar}) calc(100% - ${borderWidthVar})  )`,
      zIndex: -1,
      inset: 0,
      background: themeVars.colors.bg,
      vars: {
        [borderWidthVar]: "0.25em",
        [edgeSizeVar]: "1.5em",
      },
    },
  },
  vars: {
    [borderWidthVar]: "0.25em",
    [edgeSizeVar]: "1.5em",
  },
});

export const dialog = recipe({
  base: {
    padding: 0,
    background: themeVars.colors.bg,
    border: "none",
    color: themeVars.colors.text,
    display: "flex",
    top: "10vh",
    margin: "auto",
    transition: "opacity 1s ease-in-out",
    maxWidth: "fit-content",
  },
  variants: {
    open: {
      false: {
        opacity: 0,
        pointerEvents: "none",
      },
      true: {
        opacity: 1,
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});
