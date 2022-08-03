import { PlayState } from "../play-state";
import { useSelector } from "./use-selector";

export const selectCurrentRound = (state: PlayState) => state.currentRound;
export const selectRounds = (state: PlayState) => state.rounds;
export const selectPlayState = (state: PlayState) => state;

export const useRoundPick = (round: number) =>
  useSelector((state: PlayState) => {
    console.log("useRoundPickSelector", state.rounds[round], round);
    return state.rounds[round];
  });

export const useConfig = () => useSelector((state) => state.config);
