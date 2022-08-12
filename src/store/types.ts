export const Shapes = [
  "square",
  "circle",
  "heart",
  "hectagon",
  "rhombus",
  "triangle",
] as const;

export type Shape = typeof Shapes[number];

export type PickStatus = "default" | "hit" | "miss" | "shape-hit";
