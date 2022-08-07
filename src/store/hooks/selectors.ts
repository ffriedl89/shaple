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
    let summary = { hit: 0, shapeHit: 0 };
    if (round.length === state.config.roundLength) {
      const roundStatus = determineRoundStatus(round, result);
      picks = roundStatus.result;
      summary = roundStatus.summary;
    }
    return { picks, summary };
  });

export const useConfig = () => useSelector((state) => state.config);
