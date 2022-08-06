import { PlayState } from "../play-state";
import { PickStatus, Shape } from "../types";
import { useSetState } from "./set-state";

export const useMakePick = () => {
  const setState = useSetState();
  return (shape: Shape) =>
    setState((prev) => {
      const nextState = structuredClone(prev) as PlayState;
      let currentRound = prev.currentRound;
      if (nextState.rounds[currentRound].length === prev.config.roundLength) {
        currentRound++;
      }
      nextState.rounds[currentRound].push(shape);
      nextState.currentRound = currentRound;
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

export function determineRoundStatus(
  round: Shape[],
  result: Shape[]
): Array<{ shape: Shape; status: PickStatus }> {
  const shapeCounts = new Map<Shape, number>();

  for (const resultShape of result) {
    shapeCounts.set(resultShape, (shapeCounts.get(resultShape) || 0) + 1);
  }

  return result
    .map<{ shape: Shape; status: PickStatus }>((resultShape, index) => {
      const pickShape = round[index];

      let status: PickStatus = "miss";
      if (pickShape === resultShape) {
        status = "hit";
        shapeCounts.set(pickShape, (shapeCounts.get(pickShape) as number) - 1);
      }

      return { shape: pickShape, status };
    })
    .map((result) => {
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
    });
}
