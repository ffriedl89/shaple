import { style } from "@vanilla-extract/css";

export const layoutClass = style({
  display: "grid",
  gridTemplateAreas: `"margin"
  "header"
  "content"
  "footer"
  "marginbottom"`,
  gridTemplateColumns: "1fr",
  gridTemplateRows: "2vh auto 1fr auto 2vh",
  gridGap: "10px",
  height: "100vh",
});
