import { GameState, PlayState } from "../play-state";
import { Shape } from "../types";
import { determineGameState, getRoundPicks } from "./game-logic";
import { useSetState } from "./set-state";
import { useSelector } from "./use-selector";

export const selectCurrentRound = (state: PlayState) => state.currentRound;
export const selectRounds = (state: PlayState) => state.rounds;
export const selectPlayState = (state: PlayState) => state;

export const useRoundPick = (roundNumber: number) =>
  useSelector((state) =>
    getRoundPicks({
      result: state.result,
      config: state.config,
      rounds: state.rounds,
      roundNumber,
    })
  );

export const useConfig = () => useSelector((state) => state.config);

export function useGameState(): GameState {
  return useSelector(determineGameState);
}

export const useMakePick = () => {
  const setState = useSetState();
  return (shape: Shape) =>
    setState((prev) => {
      const nextState = structuredClone(prev) as PlayState;
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
