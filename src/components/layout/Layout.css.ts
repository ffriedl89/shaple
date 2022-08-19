import { style } from "@vanilla-extract/css";

export const layoutClass = style({
  display: "flex",
  flexDirection: "column",
  gap: "1vh",
  height: ["100vh", "100dvh"],
  alignContent: "center",
  justifyContent: "space-between",
  textAlign: "center",
});
