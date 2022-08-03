import { PlayState } from "../play-state";
import { Shape } from "../types";
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

export const useRemovePick = () => {};
