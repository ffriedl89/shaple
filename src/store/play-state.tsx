import {
  addDays,
  addHours,
  addMinutes,
  isBefore,
  startOfToday,
  subDays,
} from "date-fns";
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
  try: {
    start: string | null;
    end: string | null;
  };
  startDate: Date;
  endDate: Date;
};

const initialGameLength = 10;
const initialRoundLength = 4;

function getStartDate() {
  const currentDate = new Date(Date.now());
  const midDay = addMinutes(addHours(startOfToday(), 13), 37);
  const startDate = isBefore(currentDate, midDay) ? subDays(midDay, 1) : midDay;
  return startDate;
}

export function getStartEndDate() {
  const startDate = getStartDate();
  return { startDate, endDate: addDays(startDate, 1) };
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

const defaultState: PlayState = {
  result,
  resultSeed,
  currentRound: 0,
  rounds: generateInitialRounds(),
  config: {
    gameLength: initialGameLength,
    roundLength: initialRoundLength,
  },
  try: {
    start: null,
    end: null,
  },
  gameState: "not-started",
  ...getStartEndDate(),
};

const storedState = window.localStorage.getItem("playState")
  ? JSON.parse(window.localStorage.getItem("playState")!)
  : defaultState;

export const initialState: PlayState = {
  ...storedState,
  ...getStartEndDate(),
};
