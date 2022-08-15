import { style } from "@vanilla-extract/css";
import { spaceVars } from "../../styles/vars.css";

export const winDialogFormClass = style({
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
  textAlign: "center",
});

export const sharingContainerClass = style({
  display: "grid",
  gap: spaceVars.pairs["s-m"],
  gridTemplateColumns: "1fr 1fr",
});
