import { StoreState } from "../store/store-state";
import { GameState, PickStatus, Shape } from "../store/types";

type TResultEntry = { shape: Shape; status: PickStatus };
export type TRoundStatus = {
  summary: { hit: number; shapeHit: number };
  result: Array<TResultEntry>;
};

export function determineRoundStatus(round: Shape[], result: Shape[]) {
  const shapeCounts = new Map<Shape, number>();

  for (const resultShape of result) {
    shapeCounts.set(resultShape, (shapeCounts.get(resultShape) || 0) + 1);
  }

  return result
    .map<TResultEntry>((resultShape, index) => {
      const pickShape: Shape = round[index];

      let status: PickStatus = "miss";
      if (pickShape === resultShape) {
        status = "hit";
        shapeCounts.set(pickShape, (shapeCounts.get(pickShape) as number) - 1);
      }

      return { shape: pickShape, status };
    })
    .map<TResultEntry>((result) => {
      if (result.status === "hit") {
        return result;
      }
      const pickShape = result.shape;
      let status = result.status;
      if ((shapeCounts.get(pickShape) ?? 0) >= 1) {
        status = "shape-hit";
        shapeCounts.set(pickShape, (shapeCounts.get(pickShape) as number) - 1);
      }

      return { shape: pickShape, status };
    })
    .reduce<TRoundStatus>(
      (acc, entry) => {
        switch (entry.status) {
          case "hit":
            acc.summary.hit++;
            break;
          case "shape-hit":
            acc.summary.shapeHit++;
            break;
        }
        acc.result.push(entry);
        return acc;
      },
      {
        summary: { hit: 0, shapeHit: 0 },
        result: [],
      }
    );
}

export function determineGameState(state: StoreState): GameState {
  const roundIndex = state.currentRound > 0 ? state.currentRound - 1 : 0;
  const isGameFinished = state.result.every(
    (pick, index) => pick === state.rounds[roundIndex][index]
  );
  if (isGameFinished) {
    return "won";
  }
  if (
    state.currentRound === state.config.gameLength &&
    state.rounds[roundIndex].length === state.config.roundLength
  ) {
    return "lost";
  }
  if (state.currentRound > 0) {
    return "started";
  }
  console.log("currentRound", state.currentRound, state.config.gameLength);

  return "not-started";
}

type TRoundPicksParams = Pick<StoreState, "config" | "rounds" | "result"> & {
  roundNumber: number;
};

export const getRoundPicks = ({
  result,
  roundNumber,
  rounds,
  config,
}: TRoundPicksParams) => {
  const round = rounds[roundNumber];

  let picks: Array<{ shape: Shape; status: PickStatus }> = round.map(
    (pick) => ({ shape: pick, status: "default" })
  );
  let summary = { hit: 0, shapeHit: 0 };
  if (round.length === config.roundLength) {
    const roundStatus = determineRoundStatus(round, result);
    picks = roundStatus.result;
    summary = roundStatus.summary;
  }
  return { picks, summary };
};
