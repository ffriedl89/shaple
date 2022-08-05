import { PlayState } from "../play-state";
import { PickStatus, Shape } from "../types";
import { useSelector } from "./use-selector";

export const selectCurrentRound = (state: PlayState) => state.currentRound;
export const selectRounds = (state: PlayState) => state.rounds;
export const selectPlayState = (state: PlayState) => state;

function determineRoundStatus(
  round: Shape[],
  result: Shape[]
): Array<{ shape: Shape; status: PickStatus }> {
  const shapeCounts = new Map<Shape, number>();

  for (const resultShape of result) {
    shapeCounts.set(resultShape, (shapeCounts.get(resultShape) || 0) + 1);
  }

  return result.map((resultShape, index) => {
    const pickShape = round[index];

    let status: PickStatus = "miss";
    if (pickShape === resultShape) {
      status = "hit";
      shapeCounts.set(pickShape, (shapeCounts.get(pickShape) || 1) - 1);
    } else if (shapeCounts.get(pickShape) === 1) {
      status = "shape-hit";
      shapeCounts.set(pickShape, (shapeCounts.get(pickShape) || 1) - 1);
    }

    return { shape: pickShape, status };
  });
}

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
