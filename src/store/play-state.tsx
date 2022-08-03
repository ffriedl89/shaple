import { Shape } from "./types";

export type PlayState = {
  currentRound: number;
  rounds: Array<Array<Shape>>;
  config: {
    roundLength: number;
    gameLength: number;
  };
};
