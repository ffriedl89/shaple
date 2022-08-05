import { style } from "@vanilla-extract/css";

export const gameGridClass = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  margin: "0 4vw",
  gridArea: "content",
});
