import { Shape } from "./types";

export type PlayState = {
  result: Array<Shape>;
  currentRound: number;
  rounds: Array<Array<Shape>>;
  config: {
    roundLength: number;
    gameLength: number;
  };
};

const initialGameLength = 10;

export const initialState: PlayState = {
  result: ["triangle", "circle", "hectagon", "triangle", "square"],
  currentRound: 0,
  rounds: Array.from(Array(initialGameLength)).map(() => []),
  config: {
    gameLength: initialGameLength,
    roundLength: 5,
  },
};
