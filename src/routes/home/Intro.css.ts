import { style } from "@vanilla-extract/css";

export const introClass = style({
  display: "flex",
  flexDirection: "column",
  gap: "1vh",
  alignItems: "stetch",
  textAlign: "left",
});

export const descriptionListClass = style({
  display: "grid",
  gridTemplateColumns: "1rem 1fr",
  gap: "1rem",
  paddingTop: "1rem",
});
