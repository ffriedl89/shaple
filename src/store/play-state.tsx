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

export const initialState: PlayState = {
  result: ["square", "circle", "rhombus", "triangle", "hectagon"],
  currentRound: 0,
  rounds: [[], [], [], [], [], []],
  config: {
    gameLength: 10,
    roundLength: 5,
  },
};
