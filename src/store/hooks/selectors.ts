import { PlayState } from "../play-state";
import { PickStatus, Shape } from "../types";
import { determineRoundStatus } from "./game-logic";
import { useSelector } from "./use-selector";

export const selectCurrentRound = (state: PlayState) => state.currentRound;
export const selectRounds = (state: PlayState) => state.rounds;
export const selectPlayState = (state: PlayState) => state;

export const useRoundPick = (roundNumber: number) =>
  useSelector((state: PlayState) => {
    const result = state.result;
    const round = state.rounds[roundNumber];

    let picks: Array<{ shape: Shape; status: PickStatus }> = round.map(
      (pick) => ({ shape: pick, status: "default" })
    );
    if (round.length === state.config.roundLength) {
      picks = determineRoundStatus(round, result);
    }
    return picks;
  });

export const useConfig = () => useSelector((state) => state.config);
