import { style } from "@vanilla-extract/css";

export const layoutClass = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "100vh",
  alignContent: "center",
  justifyContent: "space-between",
});
