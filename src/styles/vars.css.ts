import { createGlobalTheme } from "@vanilla-extract/css";

export const fontVars = createGlobalTheme(":root", {
  step: {
    _negative2: "clamp(0.63rem, calc(0.72rem + -0.11vw), 0.69rem)",
    _negative1: "clamp(0.83rem, calc(0.82rem + 0.08vw), 0.88rem)",
    _0: `clamp(1.00rem, calc(0.92rem + 0.39vw), 1.25rem)`,
    _1: `clamp(1.20rem, calc(1.02rem + 0.88vw), 1.77rem)`,
    _2: `clamp(1.44rem, calc(1.11rem + 1.65vw), 2.50rem)`,
    _3: `clamp(1.73rem, calc(1.17rem + 2.80vw), 3.53rem)`,
    _4: `clamp(2.07rem, calc(1.17rem + 4.54vw), 5.00rem)`,
    _5: `clamp(2.49rem, calc(1.07rem + 7.11vw), 7.07rem)`,
  },
});

export const spaceVars = createGlobalTheme(":root", {
  "3xs": "clamp(0.31rem, calc(0.29rem + 0.12vw), 0.38rem)",
  "2xs": "clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem)",
  xs: "clamp(1.00rem, calc(0.95rem + 0.24vw), 1.13rem)",
  s: "clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)",
  m: "clamp(2.00rem, calc(1.90rem + 0.49vw), 2.25rem)",
  l: "clamp(2.63rem, calc(2.48rem + 0.73vw), 3.00rem)",
  xl: "clamp(3.94rem, calc(3.72rem + 1.10vw), 4.50rem)",
  "2xl": "clamp(5.25rem, calc(4.96rem + 1.46vw), 6.00rem)",
  "3xl": "clamp(7.88rem, calc(7.44rem + 2.20vw), 9.00rem)",
  pairs: {
    "3xs-2xs": "clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)",
    "2xs-xs": "clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)",
    "xs-s": "clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)",
    "s-m": "clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)",
    "m-l": "clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)",
    "l-xl": "clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)",
    "xl-2xl": "clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)",
    "2xl-3xl": "clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)",
  },
});

export const sizeVars = createGlobalTheme(":root", {
  step: {
    _1: "clamp(1.1875rem, 1.01rem + 0.87vw, 1.75rem)",
    _2: "clamp(1.4375, 1.11rem + 1.65vw, 2.5rem)",
    _3: "clamp(1.75rem, 1.19rem + 2.82vw, 3.5625rem)",
  },
});

export const theme = {
  colors: {
    bg: "white",
    bgInset: "rgb(210,80,153)",
    interactive: "hsl(320, 95%, 58%)",
    interactiveHover: "rgb(210,80,153)",
    interactiveActive: "hsl(320, 95%, 58%)",
    miss: "hsl(0, 0%, 75%)",
    hit: "hsl(320, 95%, 58%)",
    shapeHit: "#41254D",
    text: "#41254D",
    textOnColor: "white",
  },
};

export const themeVars = createGlobalTheme(":root", theme);
