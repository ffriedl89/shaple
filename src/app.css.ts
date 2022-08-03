import { createGlobalTheme, globalFontFace } from "@vanilla-extract/css";

import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body, h1, h2, h3, h4,p, figure, blockquote, dl, dd", {
  margin: 0,
});

globalStyle("ul[role='list'], ol[role='list']", {
  listStyle: "none",
});

globalStyle("html", {
  textSizeAdjust: "none",
  WebkitTextSizeAdjust: "none",
});

globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: 1.5,
});

globalStyle("a:not([class])", {
  textDecorationSkipInk: "auto",
});

globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalFontFace("Inter", {
  src: 'url("/public/Inter-Thin.ttf") format("woff")',
});

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
