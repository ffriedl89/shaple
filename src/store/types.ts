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

export type GamePath = Array<{
  picks: {
    shape: "square" | "circle" | "heart" | "hectagon" | "rhombus" | "triangle";
    status: PickStatus;
  }[];
  summary: {
    hit: number;
    shapeHit: number;
  };
}>;

export type GameState = "not-started" | "started" | "won" | "lost";

export type Profile = {
  currentStreak: number;
  fastestGame?: number;
  longestStreak?: number;
  wonGameLengths: number[];
};
