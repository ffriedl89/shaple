import { StoreState } from "../store-state";
import { useSetState } from "./useSetState";

export const useRemovePick = () => {
  const setState = useSetState();
  return () =>
    setState((prev) => {
      const nextState = structuredClone(prev) as StoreState;
      if (
        nextState.config.roundLength !==
        nextState.rounds[nextState.currentRound].length
      ) {
        nextState.rounds[nextState.currentRound].pop();
      }
      return nextState;
    });
};
