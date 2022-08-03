import { style } from "@vanilla-extract/css";

export const roundStatusClass = style({
  display: "grid",
  gap: "0.25rem",
  gridTemplateColumns: "minmax(1.5rem,1fr) minmax(1.5rem,1fr)",
  gridTemplateRows: "minmax(1.5rem,1fr) minmax(1.5rem,1fr)",
});

export const roundStatusItemClass = style({
  backgroundColor: "red",
});
