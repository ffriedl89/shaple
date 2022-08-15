import { determineGameState } from "../../logic/game-logic";
import { StoreState } from "../store-state";
import { Shape } from "../types";
import { useSetState } from "./useSetState";

export const useMakePick = () => {
  const setState = useSetState();
  return (shape: Shape) =>
    setState((prev) => {
      const nextState = structuredClone(prev) as StoreState;
      let currentRound = prev.currentRound;

      if (prev.gameState !== "finished") {
        nextState.rounds[currentRound].push(shape);

        if (nextState.rounds[currentRound].length === prev.config.roundLength) {
          currentRound++;
        }
        nextState.currentRound = currentRound;
        const gameState = determineGameState(nextState);
        nextState.gameState = gameState;
      }

      if (nextState.gameState === "started" && nextState.try.start === null) {
        nextState.try.start = new Date().toISOString();
      }

      if (nextState.gameState === "finished" && nextState.try.end === null) {
        nextState.try.end = new Date().toISOString();
      }

      return nextState;
    });
};
