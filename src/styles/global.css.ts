import { globalFontFace } from "@vanilla-extract/css";

import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./vars.css";

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
  backgroundColor: themeVars.colors.bg,
  color: themeVars.colors.text,
  fontFamily: "Inter",
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
