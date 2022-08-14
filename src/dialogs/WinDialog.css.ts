import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { tada } from "../animate.css";
import { fontVars, spaceVars, themeVars } from "../app.css";

const borderWidthVar = createVar();
const edgeSizeVar = createVar();

export const buttonClass = style({
  fontWeight: "700",
  backgroundColor: themeVars.colors.interactive,
  color: themeVars.colors.textOnColor,
  textDecoration: "none",
  border: "none",
  padding: spaceVars["xs"],
  textAlign: "center",
  cursor: "pointer",
  fontSize: fontVars.step._0,
  userSelect: "none",
  textRendering: "optimizeLegibility",
  selectors: {
    "&:hover": {
      backgroundColor: themeVars.colors.interactiveHover,
    },
    "&:active": {
      backgroundColor: themeVars.colors.interactiveActive,
    },
    "&:focus-visible": {
      outlineOffset: "-4px",
      outlineColor: themeVars.colors.bg,
      outline: "2px solid",
    },
  },
});

export const buttonVariant = styleVariants({
  secondary: [
    buttonClass,
    {
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
  ],
  primary: [buttonClass],
});

export const winDialogFormClass = style({
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
});

export const winDialogContentClass = style({
  position: "relative",
  backgroundColor: themeVars.colors.bg,
  border: 0,
  padding: "2rem",
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

export const winDialogClass = style({
  padding: 0,
  background: themeVars.colors.bg,
  border: "none",
  color: themeVars.colors.text,
  display: "flex",
  top: 0,
  bottom: 0,
  margin: "auto",
  transition: "opacity 1s ease-in-out",
  opacity: 0,
  maxWidth: "min-content",
});

export const winDialogVariant = styleVariants({
  closed: [winDialogClass, {}],
  open: [
    winDialogClass,
    {
      opacity: 1,
      animationDelay: "2s",
      animationName: tada,
      animationDuration: "1500ms",
      animationTimingFunction: "ease-in-out",
    },
  ],
});
