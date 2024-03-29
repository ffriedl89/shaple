import { globalFontFace } from "@vanilla-extract/css";

import { globalStyle } from "@vanilla-extract/css";
import { fontVars, themeVars } from "./vars.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  fontVariantNumeric: "tabular-nums",
});

globalStyle("body, h1, h2, h3, h4,p, figure, blockquote, dl, dd", {
  margin: 0,
});

globalStyle("p", {
  maxWidth: "90ch",
});

globalStyle("ul[role='list'], ol[role='list']", {
  listStyle: "none",
  marginBlock: 0,
  paddingInline: 0,
});

globalStyle("html", {
  textSizeAdjust: "none",
  WebkitTextSizeAdjust: "none",
});

globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

globalStyle("body", {
  minHeight: ["100vh", "100dvh"],
  textRendering: "optimizeSpeed",
  fontSize: fontVars.step._1,
  lineHeight: 1.5,
  backgroundColor: themeVars.colors.bg,
  transition: "color, background-color 150ms",
  color: themeVars.colors.text,
  fontFamily: themeVars.font,
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
  fontDisplay: "swap",
});

globalFontFace("OoohBaby", {
  src: 'url("/public/OoohBaby-Regular.ttf") format("woff")',
  fontDisplay: "swap",
});
