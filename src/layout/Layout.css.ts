import { style } from "@vanilla-extract/css";

export const layoutClass = style({
  display: "grid",
  gridTemplateAreas: `"margin"
  "header"
  "content"
  "footer"
  "marginbottom"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1vh auto 1fr auto 1vh",
  gridGap: "10px",
  height: "100vh",
});
