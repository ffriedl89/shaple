import {
  addDays,
  addHours,
  addMinutes,
  isBefore,
  startOfToday,
  subDays,
} from "date-fns";
import { createRandomWithSeed } from "../util/create-random-with-seed";
import { GameState, Profile, Shape, Shapes, Theme } from "./types";

export type StoreState = {
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
  profile: Profile;
  theme: Theme;
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

const defaultState: StoreState = {
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
  profile: {
    currentStreak: 0,
    wonGameLengths: [],
  },
  theme: "barbie",
};

let state: StoreState = window.localStorage.getItem("playState")
  ? JSON.parse(window.localStorage.getItem("playState")!)
  : defaultState;

if (state && state.resultSeed !== resultSeed) {
  // reset state;
  state.currentRound = 0;
  state.gameState = "not-started";
  state.try = {
    start: null,
    end: null,
  };
  state.rounds = generateInitialRounds();
}

if (state.profile === undefined) {
  state.profile = defaultState.profile;
}

if (state.theme === undefined) {
  state.theme = "barbie";
}

document.body.dataset.theme = state.theme;

export const initialState: StoreState = {
  ...state,
  ...getStartEndDate(),
};
