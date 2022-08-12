import { addDays, addHours, startOfToday } from "date-fns";
import { de } from "date-fns/locale";
import { createRandomWithSeed } from "../util/create-random-with-seed";
import { Shape, Shapes } from "./types";

export type GameState = "not-started" | "started" | "finished";

export type PlayState = {
  result: Array<Shape>;
  resultSeed: number;
  currentRound: number;
  rounds: Array<Array<Shape>>;
  config: {
    roundLength: number;
    gameLength: number;
  };
  gameState: GameState;
};

const initialGameLength = 10;
const initialRoundLength = 4;

function getStartDate() {
  console.log(startOfToday());
  return startOfToday();
}

export function generateResult() {
  const result: Array<Shape> = [];
  const seedDate = getStartDate();
  const seed = seedDate.getTime();

  for (let i = 0; i < initialRoundLength; i++) {
    const shapeIndex = Math.floor(
      createRandomWithSeed(seed + i) * Shapes.length
    );
    const shape = Shapes[shapeIndex];
    result.push(shape);
  }
  return { result, resultSeed: seed };
}

const { result, resultSeed } = generateResult();

export function generateInitialRounds() {
  return Array.from(Array(initialGameLength)).map(() => []);
}

const startDate = getStartDate();
const endDate = addDays(startDate, 1);

const defaultState = {
  result,
  resultSeed,
  currentRound: 0,
  rounds: generateInitialRounds(),
  config: {
    gameLength: initialGameLength,
    roundLength: initialRoundLength,
  },
  gameState: "not-started",
  startDate,
  endDate,
};

const storedState = window.localStorage.getItem("playState")
  ? JSON.parse(window.localStorage.getItem("playState")!)
  : defaultState;

export const initialState: PlayState = {
  ...storedState,
  startDate,
  endDate,
};
