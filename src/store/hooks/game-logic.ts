import { GameState, PlayState } from "../play-state";
import { PickStatus, Shape } from "../types";
import { useSetState } from "./set-state";
import { useSelector } from "./use-selector";

export const useMakePick = () => {
  const setState = useSetState();
  return (shape: Shape) =>
    setState((prev) => {
      const nextState = structuredClone(prev) as PlayState;
      let currentRound = prev.currentRound;

      const gameState = determineGameState(nextState);
      nextState.gameState = gameState;
      if (gameState !== "finished") {
        nextState.rounds[currentRound].push(shape);

        if (nextState.rounds[currentRound].length === prev.config.roundLength) {
          currentRound++;
        }
        nextState.currentRound = currentRound;
      }

      return nextState;
    });
};

export const useRemovePick = () => {
  const setState = useSetState();
  return () =>
    setState((prev) => {
      const nextState = structuredClone(prev) as PlayState;
      if (
        nextState.config.roundLength !==
        nextState.rounds[nextState.currentRound].length
      ) {
        nextState.rounds[nextState.currentRound].pop();
      }
      return nextState;
    });
};

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
      const pickShape = round[index];

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

function determineGameState(state: PlayState) {
  const roundIndex = state.currentRound > 0 ? state.currentRound - 1 : 0;
  const isGameFinished = state.result.every(
    (pick, index) => pick === state.rounds[roundIndex][index]
  );
  if (isGameFinished) {
    return "finished";
  }
  if (state.currentRound > 0) {
    return "started";
  }
  return "not-started";
}

export function useGameState(): GameState {
  return useSelector(determineGameState);
}
